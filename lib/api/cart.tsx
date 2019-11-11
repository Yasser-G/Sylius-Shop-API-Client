import { Client } from '../client'

export default {
    /**
     * Pick up your cart from the store
     */
    pick: () =>
        Client.post("carts"),

    /**
     * Show summarized cart.
     */
    show: () =>
        Client.get(`carts/${Client.cartToken}`),

    /**
     * Show summarized cart.
     */
    drop: () =>
        Client.delete(`carts/${Client.cartToken}`),

    /**
     * Add an item to your cart.
     * 
     * @param content Description of an item. The smallest required amount of data is a product code and quantity for a simple product. Configurable products will require an additional variant_code or options field, but never both.
     */
    add: (content: object) =>
        Client.post(`carts/${Client.cartToken}`, content),

    /**
     * Add multiple items to your cart.
     * 
     * @param content Description of items. The same rules applied to each of the array values as to the previous point.
     */
    add_multiple: (content: object) =>
        Client.post(`carts/${Client.cartToken}`, content),

    /**
     * Change quantity of a cart item.
     * 
     * @param quantity new quantity for a specific item.
     * @param identifier Identifier of a specific item. Can be found in the cart summary.
     */
    change_quantitiy: (quantity: number, identifier: string) =>
        Client.put(`carts/${Client.cartToken}/items/${identifier}`, { quantity }),


    /**
     * Remove cart item.
     * 
     * @param identifier Identifier of a specific item. Can be found in the cart summary.
     */
    remove_item: (identifier: string) =>
        Client.delete(`carts/${Client.cartToken}/items/${identifier}`),

    /**
     * Estimates the shipping cost of the cart
     * 
     * @param countryCode Shipping Country
     * @param provinceCode Province to ship to
     */
    shipping_cost: (countryCode: string, provinceCode: string) =>
        Client.get(`carts/${Client.cartToken}/estimated-shipping-costcarts`, { countryCode, provinceCode }),

    /**
     * Add a promotion coupon code to the cart.
     * 
     * @param coupon Coupon code.
     */
    add_coupon: (coupon: string) =>
        Client.put(`carts/${Client.cartToken}/coupon`, { coupon }),


    /**
     * Remove a promotion coupon code from the cart.
     */
    remove_coupon: () =>
        Client.delete(`carts/${Client.cartToken}/coupon`),

}