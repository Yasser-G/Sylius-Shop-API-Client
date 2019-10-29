/**
 * Converts any Object into http request params string
 * @param object Object to convert
 * @param encodeResult Optionally Encode result params string 
 */
const convertObjToParams = (object: object, encodeResult = false): string => {

    if (typeof object !== 'object') { throw Error("object argument should be of type object!") }


    const convertedParams = Object.keys(object).filter(key => !!object[key]).map(key => {
        const value = encodeResult ? encodeURIComponent(object[key]) : object[key]
        return `${key}=${value}`
    }).join("&")

    return `?${convertedParams}`


}
export { convertObjToParams }