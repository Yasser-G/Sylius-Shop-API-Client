import API_Client from "./client"

const responseHandler = async (response: Response) => {

    const responseText = await response.text()
    const successWithoutContent = response.status === 204

    let responseJson

    try {

        responseJson =

            // Set Empty object as responseJson
            successWithoutContent ? {} :

                // Try to parse response as JSON
                JSON.parse(responseText)


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
        let { message: errorMessage, errors } = responseJson

        // Formating Throwable Error Message
        if (typeof errors != 'undefined') {

            // Include errors as description
            errorMessage += "\n\n" + Object.values(errors).join("\n")
        }


        /**
         * Call onResponseStatus handler
         * to invoke your custom functions in certain response status codes
         */
        API_Client.onResponseStatus(response.status)

        // Throw error message
        throw Error(errorMessage)
    }

}
export default responseHandler