import API_Client from "./client"

const responseHandler = async (response: Response) => {

    const responseText = await response.text()

    let responseJson: any | object = {}

    // Request Succeeded Without Content
    if (response.status === 204) return responseJson


    try {

        // Try to parse response as JSON
        responseJson = JSON.parse(responseText)


    } catch (error) {

        // Logs response text for debugging
        console.log(responseText)

        // Throw Unique Error Message on JSON Parse Failed
        throw Error("Unexpected Error Occured")
    }

    if (response.ok) {

        // Request Succeeded
        return responseJson

    } else {

        // Request Failed For Some Reason
        let { message, errors } = responseJson

        const hasErrors = (typeof errors != 'undefined')


        if (hasErrors) {

            // Checking Response Error Types
            const hasShallowErrors = Array.isArray(Object.values(errors))
            const hasSubErrors = Array.isArray(errors.errors)
            const hasChildrenErrors = typeof errors.children != 'undefined'
            const childErrorHasErrors = (er: any) => typeof er.errors != 'undefined'

            // Include errors as description
            message += "\n\n"

            // Formating Throwable & Readable Error Message

            if (hasShallowErrors) { message += Object.values(errors).join("\n") }
            if (hasSubErrors) { message += errors.errors.join("\n") }

            if (hasChildrenErrors) {
                Object.values(errors.children).forEach((er: any) => {
                    if (childErrorHasErrors(er)) { message += er.errors.join("\n") }
                });
            }

        }


        /**
         * Call onResponseStatus handler
         * to invoke your custom functions in certain response status codes
         */
        API_Client.onResponseStatus(response.status)

        // Throw error message
        throw Error(message)
    }

}
export default responseHandler