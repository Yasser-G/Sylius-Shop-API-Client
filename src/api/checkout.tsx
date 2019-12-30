import API_Client from '../client'

export default {


    /**
     * Show checkout summary.
     */
    summary: () =>
        API_Client.get(`checkout/${API_Client.cartToken}`),



    /**
     * Address cart.
     * @param content Shipping & Billing Addresses
     */
    address: (content: object) =>
        API_Client.put(`checkout/${API_Client.cartToken}/address`, content),


    /**
     * Get available shipping methods.
     */
    get_shipping_methods: () =>
        API_Client.get(`checkout/${API_Client.cartToken}/shipping`),


    /**
     * Choosing a cart shipping method.
     * @param method Shipping Method Code
     * @param id Order number of shipment for which shipping method should be specified.
     */
    set_shipping_method: (method: string, id = 0) =>
        API_Client.put(`checkout/${API_Client.cartToken}/shipping/${id}`, { method }),





    /**
     * Get available payment methods.
     */
    get_payment_methods: () =>
        API_Client.get(`checkout/${API_Client.cartToken}/payment`),


    /**
     * Choosing cart payment method.
     * @param method Payment Method Code
     * @param id Order number of payment for which payment method should be specified.
     */
    set_payment_method: (method: string, id: number = 0) =>
        API_Client.put(`checkout/${API_Client.cartToken}/payment/${id}`, { method }),


    /**
     * Completing checkout.
     * @param content Email and Notes object
     */
    complete: (content: object) =>
        API_Client.put(`checkout/${API_Client.cartToken}/complete`, content),




}
