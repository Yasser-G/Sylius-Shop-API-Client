import { Client } from '../client'

export default {
    
    /**
     * Show taxon tree.
     * @param locale Locale in which taxons should be shown.
     */
    show_tree: (locale?: string) =>
        Client.get("taxons", { locale }),

    /**
     * Show taxon with given code.
     * @param code Code of expected taxon.
     * @param locale Locale in which taxons should be shown.
     */
    show_subtree: (code: string, locale?: string) =>
        Client.get(`taxons/${code}`, { locale }),

}