import { Client } from './client'
import { responseHandler } from './response'

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

    return await responseHandler(response)

}