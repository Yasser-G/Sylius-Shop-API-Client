import { Client } from '../client'

export default {

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
    update_me: (user_object: object) =>
        Client.put("me", user_object),

}