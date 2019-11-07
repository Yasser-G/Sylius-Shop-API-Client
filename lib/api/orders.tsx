import { Client } from '../client'

export default {

    /**
     * Shows a list of placed orders of the customer
     */
    list_orders: () =>
        Client.get("orders"),

    /**
     * Shows details of specific customer's order
     */
    order_details: (tokenValue) =>
        Client.get(`orders/${tokenValue}`),


}