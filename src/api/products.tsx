import API_Client from '../client'

export default {


    /**
     * Show product catalog by taxon slug.
     * @param taxonSlug Slug of expected product.
     * @param page Page number.
     */
    by_taxon_slug: (taxonSlug: string, page: number) =>
        API_Client.get(`taxon-products/by-slug/${taxonSlug}`, { locale: API_Client.locale, limit: API_Client.limit, page }),

    /**
     * Show product catalog by taxon code.
     * @param taxonCode Code of taxonomy for which products should be listed.
     * @param page Page number.
     */
    by_taxon_code: (taxonCode: string, page: number) =>
        API_Client.get(`taxon-products/by-code/${taxonCode}`, { locale: API_Client.locale, limit: API_Client.limit, page }),


    /**
     * Show product reviews by product slug.
     * @param slug Slug of expected product.
     */
    reviews_by_slug: (slug: string) =>
        API_Client.get(`products/by-slug/${slug}/reviews`),


    /**
     * Show product reviews by product code.
     * @param code Code of expected product.
     */
    reviews_by_code: (code: string) =>
        API_Client.get(`products/by-code/${code}/reviews`),

    /**
     * Add a review to the product by product slug.
     * @param slug Slug of expected product.
     * @param content Review Object contet
     * @example
     * {
     *  "title": "Awesome product",
     *  "rating": 5,
     *  "comment": "If I were a mug, I would like to be like this one!",
     *  "email": "customer@example.com"
     * }
     */
    add_review_by_slug: (slug: string, content: object) =>
        API_Client.post(`products/by-slug/${slug}/reviews`, content),


    /**
     * Add a review to the product by product code.
     * @param code Code of expected product.
     * @param content Review Object contet
     * @example
     * {
     *  "title": "Awesome product",
     *  "rating": 5,
     *  "comment": "If I were a mug, I would like to be like this one!",
     *  "email": "customer`@example.com"
     * }
     */
    add_review_by_code: (code: string, content: object) =>
        API_Client.get(`products/by-code/${code}/reviews`, content),


    /**
     * Show a product with the given code.
     * @param slug Slug of expected product.
     */
    by_slug: (slug: string) =>
        API_Client.get(`products/by-code/${slug}`, { locale: API_Client.locale }),

    /**
     * Show a product with the given code.
     * @param code Code of expected product.
     */
    by_code: (code: string) =>
        API_Client.get(`products/by-code/${code}`, { locale: API_Client.locale }),

    /**
     * Show latest products.
     * @param limit Number of expected products per page.
     */
    latest: (limit: string) =>
        API_Client.get("product-latest", { limit: limit || API_Client.limit, locale: API_Client.locale }),



}