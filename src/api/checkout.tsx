import { Client } from '../client'

export default {


    /**
     * Show checkout summary.
     * @param token Cart identifier.
     */
    summary: (token: string) =>
        Client.get(`checkout/${token}`),



    /**
     * Address cart.
     * @param token Cart identifier.
     * @param content Shipping & Billing Addresses
     */
    address: (token: string, content: object) =>
        Client.put(`checkout/${token}/address`, content),


    /**
     * Get available shipping methods.
     * @param token Cart identifier.
     */
    get_shipping_methods: (token: string) =>
        Client.get(`checkout/${token}/shipping`),


    /**
     * Choosing a cart shipping method.
     * @param token Cart identifier.
     * @param id Order number of shipment for which shipping method should be specified.
     * @param content Shipping Method Object
     */
    set_shipping_method: (token: string, id: string, content: object) =>
        Client.put(`checkout/${token}/shipping/${id}`, content),





    /**
     * Get available payment methods.
     * @param token Cart identifier.
     */
    get_payment_methods: (token: string) =>
        Client.get(`checkout/${token}/shipping`),


    /**
     * Choosing cart payment method.
     * @param token Cart identifier.
     * @param id Order number of payment for which payment method should be specified.
     * @param content Payment Method Object
     */
    set_payment_method: (token: string, id: string, content: object) =>
        Client.put(`checkout/${token}/payment/${id}`, content),


    /**
     * Completing checkout.
     * @param token Cart identifier.
     * @param content Email and Notes object
     */
    complete: (token: string, content: object) =>
        Client.put(`checkout/${token}/complete`, content),




}
