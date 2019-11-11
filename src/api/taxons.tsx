import { Client } from '../client'

export default {

    /**
     * Show taxon tree.
     */
    show_tree: () =>
        Client.get("taxons", { locale: Client.locale }),

    /**
     * Show taxon with given code.
     * @param code Code of expected taxon.
     */
    show_subtree: (code: string) =>
        Client.get(`taxons/${code}`, { locale: Client.locale }),

}