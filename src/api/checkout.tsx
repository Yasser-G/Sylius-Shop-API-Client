import { Client } from '../client'

export default {


    /**
     * Show checkout summary.
     */
    summary: () =>
        Client.get(`checkout/${Client.cartToken}`),



    /**
     * Address cart.
     * @param content Shipping & Billing Addresses
     */
    address: (content: object) =>
        Client.put(`checkout/${Client.cartToken}/address`, content),


    /**
     * Get available shipping methods.
     */
    get_shipping_methods: () =>
        Client.get(`checkout/${Client.cartToken}/shipping`),


    /**
     * Choosing a cart shipping method.
     * @param id Order number of shipment for which shipping method should be specified.
     * @param content Shipping Method Object
     */
    set_shipping_method: (id: string, content: object) =>
        Client.put(`checkout/${Client.cartToken}/shipping/${id}`, content),





    /**
     * Get available payment methods.
     */
    get_payment_methods: () =>
        Client.get(`checkout/${Client.cartToken}/shipping`),


    /**
     * Choosing cart payment method.
     * @param id Order number of payment for which payment method should be specified.
     * @param content Payment Method Object
     */
    set_payment_method: (id: string, content: object) =>
        Client.put(`checkout/${Client.cartToken}/payment/${id}`, content),


    /**
     * Completing checkout.
     * @param content Email and Notes object
     */
    complete: (content: object) =>
        Client.put(`checkout/${Client.cartToken}/complete`, content),




}
