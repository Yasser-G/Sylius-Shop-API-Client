import { Client } from './client'

/**
    * New Request Call
    * @param {string} resourceURL 
    * @param {string} method default to GET
    * @param {object} requestBody 
    * @param {object} requestHeaders 
    * @throws {string} Error Message
    * @returns {Promise} JSON Response
*/
export const request = async (
    resourceURL: string,
    method = 'GET',
    requestBody: object = null,
    requestHeaders: object = {}
): Promise<object> => {

    // Full URL: Base URL + Resource URL
    const requestURL = Client.baseURL + resourceURL

    const headers = new Headers({
        // Default Headers
        ...Client.defaultHeaders,
        // Additional Headers 
        ...requestHeaders
    })

    // Fetch RequestDetails
    const requestDetails = { method, headers, body: null }

    // Add request Body (If Any)
    if (requestBody) { requestDetails.body = JSON.stringify(requestBody) }

    // Main Step, Wait for fetch response.
    const response = await fetch(requestURL, requestDetails)

    if (response.ok) {

        // Request Succeeded
        return await response.json()

    } else {

        // Request Failed For Some Reason
        const { message } = await response.json()

        switch (response.status) {

            case 403:
                Client.onUnauthorized()

            // Custom Reasons actions will be implemented here

            default:
                break;
        }


        // throw error message
        throw Error(message)
    }

}