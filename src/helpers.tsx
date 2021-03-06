/**
 * Converts any Object into http request params string
 * @param object Object to convert
 */
const convertObjToParams = (object: object): string => {

    if (typeof object !== 'object') { throw Error("object argument should be of type object!") }

    const convertedParams = Object.keys(object).filter(key => !!object[key]).map(key => {
        const value = object[key]
        return `${key}=${value}`
    }).join("&")

    return `?${convertedParams}`

}
export { convertObjToParams }