
---
# IMPORTANT NOTE: UNDER CONSTRUCTION!
# This note will be removed when we are ready.
---


# Sylius Shop API Client 
![npm][npmDownloads]  ![npm][npmLicense] ![npm][npmVersion]

### Implement Sylius Shop API Client into your app in just One Step!

- Easy to configure API client for quick use
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