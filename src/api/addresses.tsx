import { Client } from '../client'

export default {
    /**
     * Gets the address book of the currently logged in user
     */
    list: () =>
        Client.get("address-book"),

    /**
     * Creates a new address in the the address book
     * @param content Address object
     */
    create: (content: object) =>
        Client.post("address-book", content),


    /**
     * Updates an address in the address book
     * @param id Id of the address to update
     * @param content Address object
     */
    update: (id: number, content: object) =>
        Client.put(`address-book/${id}`, content),

    /**
     * Deletes an address from the address book
     * @param id Id of the address to delete
     */
    delete: (id: number) =>
        Client.delete(`address-book/${id}`),


    /**
     * Change the default address in the address book
     * @param id Id of the address to be the default address
     */
    set_default: (id: number) =>
        Client.delete(`address-book/${id}/default`),

}