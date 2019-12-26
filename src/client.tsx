import { convertObjToParams } from './helpers'
import request from "./request"

/**
 * API Client
 */
class API_Client {


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
    static locale = "en_US"

    /**
     * Set API default pagination limit
     * Number of expected products per page.
     * @example
     * API_Client.limit = "10"
     */
    static limit = "10"


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
    static onResponseStatus(status: number): void { }





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
    static get = async (
        resourceURL: string,
        requestParams?: object,
        requestHeaders = {}
    ) => {
        if (requestParams) { resourceURL += convertObjToParams(requestParams) }
        return await request(resourceURL, "GET", {}, requestHeaders)
    }

    /**
     * Create Resource
     */
    static post = async (
        resourceURL: string,
        requestBody?: object,
        requestHeaders?: object,
    ) => request(resourceURL, "POST", requestBody, requestHeaders)

    /**
     * Replace Resource
     */
    static put = async (
        resourceURL: string,
        requestBody?: object,
        requestHeaders?: object,
    ) => request(resourceURL, "PUT", requestBody, requestHeaders)

    /**
     * Modify Resource
     */
    static patch = async (
        resourceURL: string,
        requestBody?: object,
        requestHeaders?: object,
    ) => request(resourceURL, "PATCH", requestBody, requestHeaders)

    /**
     * Delete Resource
     */
    static delete = async (
        resourceURL: string,
        requestBody?: object,
        requestHeaders?: object,
    ) => request(resourceURL, "DELETE", requestBody, requestHeaders)



}
export default API_Client