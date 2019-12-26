import API_Client from '../client'

export default {
    /**
     * Pick up your cart from the store
     */
    pick: () =>
        API_Client.post("carts"),

    /**
     * Show summarized cart.
     */
    show: () =>
        API_Client.get(`carts/${API_Client.cartToken}`),

    /**
     * Drop your cart.
     */
    drop: () =>
        API_Client.delete(`carts/${API_Client.cartToken}`),

    /**
     * Add an item to your cart.
     * 
     * @param content Description of an item. The smallest required amount of data is a product code and quantity for a simple product. Configurable products will require an additional variant_code or options field, but never both.
     */
    add: (content: object) =>
        API_Client.post(`carts/${API_Client.cartToken}/items`, content),

    /**
     * Add multiple items to your cart.
     * 
     * @param content Description of items. The same rules applied to each of the array values as to the previous point.
     */
    add_multiple: (content: object) =>
        API_Client.post(`carts/${API_Client.cartToken}`, content),

    /**
     * Change quantity of a cart item.
     * 
     * @param quantity new quantity for a specific item.
     * @param identifier Identifier of a specific item. Can be found in the cart summary.
     */
    change_quantitiy: (quantity: number, identifier: string) =>
        API_Client.put(`carts/${API_Client.cartToken}/items/${identifier}`, { quantity }),


    /**
     * Remove cart item.
     * 
     * @param identifier Identifier of a specific item. Can be found in the cart summary.
     */
    remove_item: (identifier: string) =>
        API_Client.delete(`carts/${API_Client.cartToken}/items/${identifier}`),

    /**
     * Estimates the shipping cost of the cart
     * 
     * @param countryCode Shipping Country
     * @param provinceCode Province to ship to
     */
    shipping_cost: (countryCode: string, provinceCode: string) =>
        API_Client.get(`carts/${API_Client.cartToken}/estimated-shipping-costcarts`, { countryCode, provinceCode }),

    /**
     * Add a promotion coupon code to the cart.
     * 
     * @param coupon Coupon code.
     */
    add_coupon: (coupon: string) =>
        API_Client.put(`carts/${API_Client.cartToken}/coupon`, { coupon }),


    /**
     * Remove a promotion coupon code from the cart.
     */
    remove_coupon: () =>
        API_Client.delete(`carts/${API_Client.cartToken}/coupon`),

}