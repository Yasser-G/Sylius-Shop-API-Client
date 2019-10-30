import { Client } from './client'

/**
 *  Shop API
 */
const ShopAPI = {

    initialize: () => null,

    /**
     * All actions related to cart management.
     */
    cart: {
        /**
         * Pick up your cart from the store
         */
        pick: () =>
            Client.post("carts"),

        /**
         * Show summarized cart.
         * @param token Cart identifier.
         */
        show: (token: string) =>
            Client.get(`carts/${token}`),

        /**
         * Show summarized cart.
         * @param token Cart identifier.
         */
        drop: (token: string) =>
            Client.delete(`carts/${token}`),

        /**
         * Add an item to your cart.
         * 
         * @param content Description of an item. The smallest required amount of data is a product code and quantity for a simple product. Configurable products will require an additional variant_code or options field, but never both.
         * @param token Cart identifier.
         */
        add: (content: object, token: string, ) =>
            Client.post(`carts/${token}`, content),

        /**
         * Add multiple items to your cart.
         * 
         * @param content Description of items. The same rules applied to each of the array values as to the previous point.
         * @param token Cart identifier.
         */
        add_multiple: (content: object, token: string) =>
            Client.post(`carts/${token}`, content),

        /**
         * Change quantity of a cart item.
         * 
         * @param quantity new quantity for a specific item.
         * @param identifier Identifier of a specific item. Can be found in the cart summary.
         * @param token Cart identifier.
         */
        change_quantitiy: (quantity: number, identifier: string, token: string) =>
            Client.put(`carts/${token}/items/${identifier}`, { quantity }),


        /**
         * Remove cart item.
         * 
         * @param token Cart identifier.
         * @param identifier Identifier of a specific item. Can be found in the cart summary.
         */
        remove_item: (token: string, identifier: string) =>
            Client.delete(`carts/${token}/items/${identifier}`),

        /**
         * Estimates the shipping cost of the cart
         * 
         * @param token Cart identifier.
         * @param countryCode Shipping Country
         * @param provinceCode Province to ship to
         */
        shipping_cost: (token: string, countryCode: string, provinceCode: string) =>
            Client.get(`carts/${token}/estimated-shipping-costcarts`, { countryCode, provinceCode }),

        /**
         * Add a promotion coupon code to the cart.
         * 
         * @param coupon Coupon code.
         * @param token Cart identifier.
         */
        add_coupon: (coupon: string, token: string) =>
            Client.put(`carts/${token}/coupon`, { coupon }),


        /**
         * Add a promotion coupon code to the cart.
         * 
         * @param token Cart identifier.
         */
        remove_coupon: (token: string) =>
            Client.delete(`carts/${token}/coupon`),

    },


    /**
     * Show product catalog and add product reviews.
     */
    products: {


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

    },

    /**
     * Show taxon tree
     */
    taxons: {
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

    },

    /**
     * All actions related to checkout fulfillment. It is important, to execute them in given order (address, choose shipment, choose payment and complete).
     */
    checkout: {

    },

    /**
     * Showing the order information
     */
    order: {

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


    },

    /**
     * All actions related to user functionality.
     */
    users: {

        /**
         * Request resetting password of user with passed email.
         * @param email passed email
         */
        request_reset_password: (email: string) =>
            Client.put("request-password-reset", { email }),


        /**
         * Password reset.
         * @param token Password reset token.
         * @param new_password new password
         */
        password_reset: (token: string, new_password: string) =>
            Client.put(`password-reset/${token}`, { first: new_password, second: new_password }),


        /**
         * Registering a new user.
         * @param user_object User Object
         * @example
         * {
         *  "email": "test`@`site.com",
         *  "plainPassword": "test12334verysecure",
         *  "firstName": "Sherlock",
         *  "lastName": "Holmes",
         *  "channel": "WEB_GB"
         * }
         */
        register: (user_object: object) =>
            Client.post("register", user_object),


        /**
         * Logs the user in and returns the token
         * @param email
         * @param password
         * @param token
         */
        login: (email: string, password: string, token: string) =>
            Client.post("login", { email, password, token }),



        /**
         * Verify an account by verification token
         * @param token 
         */
        verify_account: (token) =>
            Client.get("verify-account", { token }),



        /**
         * Provides currently logged in user details.
         */
        me: () =>
            Client.get("me"),


        /**
         * Updates currently logged in users details.
         * @param user_object User Object
         * @example
         * {
         *  "firstName": "Sherlock",
         *  "lastName": "Holmes",
         *  "email": "test`@`site.com",
         *  "birthday": "2017-08-12",
         *  "gender": "f",
         *  "phoneNumber": "+490000000000",
         *  "subscribedToNewsletter": 0,
         * }
         */
        update_me: (user_object) =>
            Client.put("me", user_object),

    },


    /**
     * All functions related to the Sylius Customer Address Book
     */
    addresses: {
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



    },

    /**
     * Custom Request
     * @param resourceURL 
     * @param method request method, GET by default
     * @param requestBody request body
     * @param requestHeaders 
     * @throws {string} Error Message
     * @returns {Promise} JSON Response
     */
    custom_request: (resourceURL: string, method?: string, requestBody?: object, requestHeaders?: object) =>
        Client.custom_request(resourceURL, method, requestBody, requestHeaders)



}
export { ShopAPI }