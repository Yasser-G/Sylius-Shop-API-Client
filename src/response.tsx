import { Client } from "./client"

export const responseHandler = async (response: Response) => {

    if (response.ok) {

        // Request Succeeded
        return await response.json()

    } else {

        // Request Failed For Some Reason
        const { message, errors } = await response.json()

        /* 
        Call onResponseStatus handler
        to invoke your custom functions in certain response status codes
        */
        Client.onResponseStatus(response.status)

        // Log errors
        console.log(errors)
        
        // Throw error message
        throw Error(message)
    }

}