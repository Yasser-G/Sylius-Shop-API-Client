import API_Client from '../client'

export default {

    /**
     * Show taxon tree.
     */
    show_tree: () =>
        API_Client.get("taxons", { locale: API_Client.locale }),

    /**
     * Show taxon with given code.
     * @param code Code of expected taxon.
     */
    show_subtree: (code: string) =>
        API_Client.get(`taxons/${code}`, { locale: API_Client.locale }),

}