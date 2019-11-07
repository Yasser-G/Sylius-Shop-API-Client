import { Client } from '../client'

export const cart = {
    /**
     * Pick up your cart from the store
     */
    pick: () =>
        Client.post("carts"),

    /**
     * Show summarized cart.
     * @param token Cart identifier.
     */
    show: (token: string) =>
        Client.get(`carts/${token}`),

    /**
     * Show summarized cart.
     * @param token Cart identifier.
     */
    drop: (token: string) =>
        Client.delete(`carts/${token}`),

    /**
     * Add an item to your cart.
     * 
     * @param content Description of an item. The smallest required amount of data is a product code and quantity for a simple product. Configurable products will require an additional variant_code or options field, but never both.
     * @param token Cart identifier.
     */
    add: (content: object, token: string) =>
        Client.post(`carts/${token}`, content),

    /**
     * Add multiple items to your cart.
     * 
     * @param content Description of items. The same rules applied to each of the array values as to the previous point.
     * @param token Cart identifier.
     */
    add_multiple: (content: object, token: string) =>
        Client.post(`carts/${token}`, content),

    /**
     * Change quantity of a cart item.
     * 
     * @param quantity new quantity for a specific item.
     * @param identifier Identifier of a specific item. Can be found in the cart summary.
     * @param token Cart identifier.
     */
    change_quantitiy: (quantity: number, identifier: string, token: string) =>
        Client.put(`carts/${token}/items/${identifier}`, { quantity }),


    /**
     * Remove cart item.
     * 
     * @param token Cart identifier.
     * @param identifier Identifier of a specific item. Can be found in the cart summary.
     */
    remove_item: (token: string, identifier: string) =>
        Client.delete(`carts/${token}/items/${identifier}`),

    /**
     * Estimates the shipping cost of the cart
     * 
     * @param token Cart identifier.
     * @param countryCode Shipping Country
     * @param provinceCode Province to ship to
     */
    shipping_cost: (token: string, countryCode: string, provinceCode: string) =>
        Client.get(`carts/${token}/estimated-shipping-costcarts`, { countryCode, provinceCode }),

    /**
     * Add a promotion coupon code to the cart.
     * 
     * @param coupon Coupon code.
     * @param token Cart identifier.
     */
    add_coupon: (coupon: string, token: string) =>
        Client.put(`carts/${token}/coupon`, { coupon }),


    /**
     * Add a promotion coupon code to the cart.
     * 
     * @param token Cart identifier.
     */
    remove_coupon: (token: string) =>
        Client.delete(`carts/${token}/coupon`),

}