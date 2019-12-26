import API_Client from '../client'

export default {

    /**
     * Shows a list of placed orders of the customer
     */
    list_orders: () =>
        API_Client.get("orders"),

    /**
     * Shows details of specific customer's order
     */
    order_details: (tokenValue: string) =>
        API_Client.get(`orders/${tokenValue}`),


}