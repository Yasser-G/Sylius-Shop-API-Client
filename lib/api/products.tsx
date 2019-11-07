import { Client } from '../client'

export default {


    /**
     * Show product catalog by taxon slug.
     * @param taxonSlug Slug of expected product.
     * @param locale Locale in which taxons should be shown.
     * @param limit Number of expected products per page.
     * @param page Page number.
     */
    by_taxon_slug: (taxonSlug: string, locale: string, limit: number, page: number) =>
        Client.get(`taxon-products/by-slug/${taxonSlug}`, { locale, limit, page }),

    /**
     * Show product catalog by taxon code.
     * @param taxonCode Code of taxonomy for which products should be listed.
     * @param locale Locale in which taxons should be shown.
     * @param limit Number of expected products per page.
     * @param page Page number.
     */
    by_taxon_code: (taxonCode: string, locale: string, limit: number, page: number) =>
        Client.get(`taxon-products/by-code/${taxonCode}`, { locale, limit, page }),


    /**
     * Show product reviews by product slug.
     * @param slug Slug of expected product.
     */
    reviews_by_slug: (slug: string) =>
        Client.get(`products/by-slug/${slug}/reviews`),


    /**
     * Show product reviews by product code.
     * @param code Code of expected product.
     */
    reviews_by_code: (code: string) =>
        Client.get(`products/by-code/${code}/reviews`),

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
        Client.post(`products/by-slug/${slug}/reviews`, content),


    /**
     * Add a review to the product by product code.
     * @param code Code of expected product.
     * @param content Review Object contet
     * @example
     * {
     *  "title": "Awesome product",
     *  "rating": 5,
     *  "comment": "If I were a mug, I would like to be like this one!",
     *  "email": "customer@example.com"
     * }
     */
    add_review_by_code: (code: string, content: object) =>
        Client.get(`products/by-code/${code}/reviews`, content),


    /**
     * Show a product with the given code.
     * @param slug Slug of expected product.
     * @param locale Locale in which taxons should be shown.
     */
    by_slug: (slug: string, locale) =>
        Client.get(`products/by-code/${slug}`, { locale }),

    /**
     * Show a product with the given code.
     * @param code Code of expected product.
     * @param locale Locale in which taxons should be shown.
     */
    by_code: (code: string, locale) =>
        Client.get(`products/by-code/${code}`, { locale }),

    /**
     * Show latest products.
     * @param limit Number of expected products per page.
     * @param locale Locale in which products should be shown.
     */
    latest: (limit: number, locale?: string) =>
        Client.get("product-latest", { limit, locale })

}