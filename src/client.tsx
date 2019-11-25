import { convertObjToParams } from './helpers'
import { request } from "./request"

/**
 * API Client
 */
export class Client {


    /**
     * Initialize API BaseURL
     * @example
     * API_Client.baseURL = "https://api.demo.sylius.com/shop-api/"
     */
    static baseURL = "https://api.demo.sylius.com/shop-api/"

    /**
     * Set / Clear API Cart Identifier (token)
     * @example
     * // Set After Picking  
     * API_Client.cartToken = "xxxxxxxxxxxxxxx"
     * 
     * // Clear Afer Dropping
     * API_Client.cartToken = ""
     */
    static cartToken = ""

    /**
     * Set API Locale
     * @example
     * API_Client.locale = "en_US"
     */
    static locale = ""



    /**
     * Set API Default Headers
     * @example
     * const myDefaultHeaders = {
     * "Accept": "application/json",
     * "Content-Type": "application/json",
     *  }
     * API_Client.defaultHeaders = myDefaultHeaders
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
     */
    static defaultHeaders = {
        "Accept": "application/json",
        "Content-Type": "application/json",
    }


    /**
     * Set onResponseStatus handler
     *  to invoke your custom functions in certain response status codes
     * @example
     * API_Client.onResponseStatus = (status) => {
     * 
     *  switch(status) {
     *  
     *  case 403:
     *      // Do something, etc Clear UserData, Remove Auth Headers.
     *      break
     * 
     *  case 500:
     *      // Do something else.
     *      break
     * 
     *  default:
     *      // Unhandled cases
     *      console.log("Unhandled case for status ", status)
     * 
     *  }
     * 
     * }
     */
    static onResponseStatus(status: number): void {  }





    /**
        * Append New Header (name, value) pair
        * @example // Usage Example
        * API_Client.appendHeader("Authorization", "Bearer xxxxx")
        * @param headerKey Header Name
        * @param headerValue Header Value
        */
    static appendHeader(headerKey: string, headerValue: string) {

        if ((typeof headerKey !== "string") || (typeof headerValue !== "string")) {
            throw Error("type of headerKey & headerValue should be both strings!")
        }

        this.defaultHeaders = {
            // Old Default Headers
            ...this.defaultHeaders,
            // New Header name and value pair
            [headerKey]: headerValue
        }
    }

    /**
     * Remove header from default headers
     * @example // Usage Example
     * API_Client.removeHeader("Authorization")
     * @param headerKey Header Key to remove
     */
    static removeHeader(headerKey: string) {
        if (typeof headerKey == "string") {
            delete this.defaultHeaders[headerKey]
        } else {
            throw Error("type of headerKey should be string!")
        }
    }




    /**
     * Retrieve Resource
     */
    public static async get(resourceURL: string, requestParams = null, requestHeaders = {}) {
        if (requestParams) { resourceURL += convertObjToParams(requestParams) }
        return await request(resourceURL, "GET", null, requestHeaders)
    }
    /**
     * Create Resource
     */
    public static async post(resourceURL: string, requestBody = null, requestHeaders = {}) {
        return await request(resourceURL, "POST", requestBody, requestHeaders)
    }
    /**
     * Replace Resource
     */
    public static async put(resourceURL: string, requestBody = null, requestHeaders = {}) {
        return await request(resourceURL, "PUT", requestBody, requestHeaders)
    }
    /**
     * Modify Resource
     */
    public static async patch(resourceURL: string, requestBody = null, requestHeaders = {}) {
        return await request(resourceURL, "PATCH", requestBody, requestHeaders)
    }
    /**
     * Delete Resource
     */
    public static async delete(resourceURL: string, requestBody = null, requestHeaders = {}) {
        return await request(resourceURL, "DELETE", requestBody, requestHeaders)
    }
    /**
     * Custom Request
     * @param {string} resourceURL 
     * @param {string} method request method, GET by default
     * @param {object} requestBody request body
     * @param {object} requestHeaders 
     * @throws {string} Error Message
     * @returns {Promise} JSON Response
     */
    public static async custom_request(resourceURL: string, method = "GET", requestBody = null, requestHeaders = {}) {
        return await request(resourceURL, method, requestBody, requestHeaders)
    }


}