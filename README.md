
---
# IMPORTANT NOTE: UNDER CONSTRUCTION!
# This note will be removed when we are ready.
---


# Sylius Shop API Client 
![npm][npmDownloads]  ![npm][npmLicense] ![npm][npmVersion]

### Implement Sylius Shop API Client into your app in just One Step!

- Easy to configure API client for quick use
- All API Plugin endpoints is supported!
- Very simple way to add custom endpoints.
- Well-Organized and scalable project.
- All query params, paths and bodies are documented within the code using jsDoc.






## Instalation 


`npm i sylius-shop-api-client`  **- OR -**  `yarn add sylius-shop-api-client`







## Usage

### **API_Client**

```ts
import { API_Client } from "sylius-shop-api-client"

// Configuration

// Initialize API BaseURL ( Required ) Don't forget trailing /
API_Client.baseURL = "https://my.web.site/api/"


// Set / Clear API Cart Identifier (token), used in all cart requests.

// After Picking Cart => Set token
API_Client.cartToken = "xxxxxxxxxxxxxxx"

// After Dropping Cart => Clear token
API_Client.cartToken = ""


// Set API Locale
API_Client.locale = "en_US"


// Set API Default Headers ( Optional ), below values are already defaults.
const myDefaultHeaders = {
  "Accept": "application/json",
  "Content-Type": "application/json",
}
API_Client.defaultHeaders = myDefaultHeaders



// Append New Header (name, value) pair, Any where in your code,
API_Client.appendHeader("Authorization", "Bearer xxxxx")

// Remove header from default headers, Any where in your code,
API_Client.removeHeader("Authorization")


// Set onUnauthorized handler, More Usage description will be added soon
API_Client.onUnauthorized = () => {
      
 // Clear UserData, Remove Auth Headers
 // ( Temporarily Not Working )

}

```


---

### **ShopAPI**

```ts
import { ShopAPI } from "sylius-shop-api-client"

// Default Requests usage: 


// Async / Await approach
async loadTaxons() {
  
  try {

    const taxons = await ShopAPI.taxons.show_tree()

    // then use taxon constant

  } catch (error) {

    // handle errors

  }

}

// Callbacks approach
ShopAPI.taxons.show_tree().then((response) => {

// handle response

}).catch((error) => {

  // handle errors

})



```

### Cart `ShopAPI.cart`

|Method|Status|
|---|---|
|**ShopAPI.cart.pick**|✅|
|**ShopAPI.cart.show**|✅|
|**ShopAPI.cart.drop**|✅|
|**ShopAPI.cart.add**|✅|
|**ShopAPI.cart.add_multiple**|✅|
|**ShopAPI.cart.change_quantitiy**|✅|
|**ShopAPI.cart.remove_item**|✅|
|**ShopAPI.cart.shipping_cost**|✅|
|**ShopAPI.cart.add_coupon**|✅|
|**ShopAPI.cart.remove_coupon**|✅|

### Products `ShopAPI.products`

|Method|Status|
|---|---|
|**ShopAPI.products.by_slug**|✅|
|**ShopAPI.products.by_code**|✅|
|**ShopAPI.products.by_taxon_slug**|✅|
|**ShopAPI.products.by_taxon_code**|✅|
|**ShopAPI.products.reviews_by_slug**|✅|
|**ShopAPI.products.reviews_by_code**|✅|
|**ShopAPI.products.add_review_by_slug**|✅|
|**ShopAPI.products.add_review_by_code**|✅|
|**ShopAPI.products.latest**|✅|

### Taxon `ShopAPI.taxon`
   
|Method|Status|
|---|---|
|**ShopAPI.taxon.show_tree**|✅|
|**ShopAPI.taxon.show_subtree**|✅|


### Checkout `ShopAPI.checkout`

|Method|Status|
|---|---|
|**ShopAPI.checkout.summary**|✅|
|**ShopAPI.checkout.address**|✅|
|**ShopAPI.checkout.get_shipping_methods**|✅|
|**ShopAPI.checkout.set_shipping_method**|✅|
|**ShopAPI.checkout.get_payment_methods**|✅|
|**ShopAPI.checkout.set_payment_method**|✅|
|**ShopAPI.checkout.complete**|✅|


### Orders `ShopAPI.orders`

|Method|Status|
|---|---|
|**ShopAPI.orders.list_orders**|✅|
|**ShopAPI.orders.order_details**|✅|

     

### User `ShopAPI.user`

|Method|Status|
|---|---|
|**ShopAPI.user.request_reset_password**|✅|
|**ShopAPI.user.password_reset**|✅|
|**ShopAPI.user.register**|✅|
|**ShopAPI.user.login**|✅|
|**ShopAPI.user.verify_account**|✅|
|**ShopAPI.user.me**|✅|
|**ShopAPI.user.update_me**|✅|

### Addresses `ShopAPI.addresses`

|Method|Status|
|---|---|
|**ShopAPI.addresses.list**|✅|
|**ShopAPI.addresses.create**|✅|
|**ShopAPI.addresses.update**|✅|
|**ShopAPI.addresses.delete**|✅|
|**ShopAPI.addresses.set_default**|✅|




---

### **Custom Endpoint Extending**


```ts
import { ShopAPI, API_Client } from "sylius-shop-api-client"

const MyShopAPI = {

  // Spread defaults endpoints
  ...ShopAPI,


  // Create your own enpoints using API_client.

  // Get Method, without query params
  myEndpoint: () => API_Client.get("endpoint"),

  // Get Method, query params object (will be converted to string)
  myEndpointCallMethod: (params) => API_Client.get("endpoint", params),

  // Get Method, with changable path and params
  myEndpointPathMethod: (path, params) => API_Client.get(`endpoint/${path}`, params),

  // Post Method, body object (will be stringified inside)
  myEndpointPostMethod: (body) => API_Client.post("endpoint", body),

  // And so on, for put, patch and delete 
  
  

}

// Then use it anywhere in your code,

// Async / Await approach
async loadMyData() {
  
  try {

    const data = await MyShopAPI.myEndpoint()

    // then use data constant

  } catch (error) {

    // handle errors

  }

}

// Callbacks approach
MyShopAPI.myEndpoint().then((response) => {

// handle response

}).catch((error) => {

  // handle errors

})



```


[npmDownloads]: <https://img.shields.io/npm/dt/sylius-shop-api-client?label=Installs&logo=npm&style=plastic>
[npmLicense]: <https://img.shields.io/npm/l/sylius-shop-api-client?label=License&style=plastic>
[npmVersion]: <https://img.shields.io/npm/v/sylius-shop-api-client?label=Latest%20Version&style=plastic>
[PRsBadge]: <https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=plastic>
