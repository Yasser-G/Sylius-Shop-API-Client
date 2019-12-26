import cart from './cart'
import products from './products'
import taxons from './taxons'
import checkout from './checkout'
import orders from './orders'
import user from './user'
import addresses from './addresses'

/**
 *  Shop API
 */
const ShopAPI = {

    /**
     * All actions related to cart management.
     */
    cart,


    /**
     * Show product catalog and add product reviews.
     */
    products,

    /**
     * Show taxon tree
     */
    taxons,



    /**
     * All actions related to checkout fulfillment.
     * It is important, to execute them in given order (address, choose shipment, choose payment and complete).
     */
    checkout,



    /**
     * Showing the order information
     */
    orders,

    /**
     * All actions related to user functionality.
     */
    user,


    /**
     * All functions related to the Sylius Customer Address Book
     */
    addresses,


}
export default ShopAPI