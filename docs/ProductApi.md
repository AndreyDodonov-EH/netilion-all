# NetilionApiDocumentation.ProductApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCategoriesToProduct**](ProductApi.md#addCategoriesToProduct) | **POST** /products/{product_id}/categories | Add categories to a product
[**addDocumentsToProduct**](ProductApi.md#addDocumentsToProduct) | **POST** /products/{product_id}/documents | Add documents to a product
[**addEdgeDeviceFeaturesToProduct**](ProductApi.md#addEdgeDeviceFeaturesToProduct) | **POST** /products/{product_id}/edge_device_features | Add edge device features to a product
[**addProductPictureLink**](ProductApi.md#addProductPictureLink) | **POST** /products/{id}/pictures/links | Add a link as product picture
[**addPurchaseOrdersToProduct**](ProductApi.md#addPurchaseOrdersToProduct) | **POST** /products/{product_id}/purchase_orders | Add purchase orders to a product
[**addQuotationsToProduct**](ProductApi.md#addQuotationsToProduct) | **POST** /products/{product_id}/quotations | Add quotations to a product
[**addSoftwaresToProduct**](ProductApi.md#addSoftwaresToProduct) | **POST** /products/{product_id}/softwares | Add software to a product
[**createProduct**](ProductApi.md#createProduct) | **POST** /products | Create a new product
[**createProductFeature**](ProductApi.md#createProductFeature) | **POST** /product_features | Create a new product feature
[**createProductOption**](ProductApi.md#createProductOption) | **POST** /product_options | Create a new product option
[**createProductVariant**](ProductApi.md#createProductVariant) | **POST** /product_variants | Create a new product variant
[**deleteCategoriesFromProduct**](ProductApi.md#deleteCategoriesFromProduct) | **DELETE** /products/{product_id}/categories | Remove categories from a product
[**deleteProduct**](ProductApi.md#deleteProduct) | **DELETE** /products/{id} | Delete a product
[**deleteProductFeature**](ProductApi.md#deleteProductFeature) | **DELETE** /product_features/{id} | Delete a product feature
[**deleteProductOption**](ProductApi.md#deleteProductOption) | **DELETE** /product_options/{id} | Delete a product option
[**deleteProductPicture**](ProductApi.md#deleteProductPicture) | **DELETE** /products/{product_id}/pictures/{id} | Delete a product picture
[**deleteProductVariant**](ProductApi.md#deleteProductVariant) | **DELETE** /product_variants/{id} | Delete a product variant
[**downloadProductPicture**](ProductApi.md#downloadProductPicture) | **GET** /products/{product_id}/pictures/{id}/download | Download a product picture
[**getAssetProductOptions**](ProductApi.md#getAssetProductOptions) | **GET** /assets/{asset_id}/product-options | Get all possible products of the specified assets
[**getCategoriesOfProduct**](ProductApi.md#getCategoriesOfProduct) | **GET** /products/{product_id}/categories | Get all categories of a product
[**getCategoriesOptionsOfProduct**](ProductApi.md#getCategoriesOptionsOfProduct) | **GET** /products/{product_id}/categories-options | Get all categories of one product
[**getDocumentsOfProduct**](ProductApi.md#getDocumentsOfProduct) | **GET** /products/{product_id}/documents | Get all documents of a product
[**getEdgeDeviceFeaturesOfProduct**](ProductApi.md#getEdgeDeviceFeaturesOfProduct) | **GET** /products/{product_id}/edge_device_features | Get all edge device features of a product
[**getProductById**](ProductApi.md#getProductById) | **GET** /products/{id} | Get a single product
[**getProductFeatureById**](ProductApi.md#getProductFeatureById) | **GET** /product_features/{id} | Get a single product feature
[**getProductFeatures**](ProductApi.md#getProductFeatures) | **GET** /product_features | Get a range of product features
[**getProductIdStatus**](ProductApi.md#getProductIdStatus) | **GET** /products/{product_id}/status | Get the status of a specific product
[**getProductOptionById**](ProductApi.md#getProductOptionById) | **GET** /product_options/{id} | Get a single product option
[**getProductOptions**](ProductApi.md#getProductOptions) | **GET** /product_options | Get a range of product options
[**getProductPicture**](ProductApi.md#getProductPicture) | **GET** /products/{product_id}/pictures/{id} | Get a product picture
[**getProductPictures**](ProductApi.md#getProductPictures) | **GET** /products/{id}/pictures | Get product pictures
[**getProductStatusesOptions**](ProductApi.md#getProductStatusesOptions) | **GET** /products/{product_id}/status-options | Get all possible statuses for the specified product
[**getProductVaraints**](ProductApi.md#getProductVaraints) | **GET** /product_variants | Get a range of product variants
[**getProductVariantById**](ProductApi.md#getProductVariantById) | **GET** /product_variants/{id} | Get a single product variant
[**getProductVariantConfigurations**](ProductApi.md#getProductVariantConfigurations) | **GET** /product_variants/{id}/configurations | get configuration of product variant
[**getProducts**](ProductApi.md#getProducts) | **GET** /products | Get a range of products
[**getProductsOfCompany**](ProductApi.md#getProductsOfCompany) | **GET** /companies/{company_id}/products | Get all products of a company
[**getPurchaseOrdersOfProduct**](ProductApi.md#getPurchaseOrdersOfProduct) | **GET** /products/{product_id}/purchase_orders | Get all purchase orders of one product
[**getQuotationsOfProduct**](ProductApi.md#getQuotationsOfProduct) | **GET** /products/{product_id}/quotations | Get all quotations of one product
[**getSoftwaresOfProduct**](ProductApi.md#getSoftwaresOfProduct) | **GET** /products/{product_id}/softwares | Get a range of software of one product
[**getSpecificationsOfProduct**](ProductApi.md#getSpecificationsOfProduct) | **GET** /products/{product_id}/specifications | Get specifications of a product
[**removeDocumentsFromProduct**](ProductApi.md#removeDocumentsFromProduct) | **DELETE** /products/{product_id}/documents | Remove documents from a product
[**removeEdgeDeviceFeaturesFromProduct**](ProductApi.md#removeEdgeDeviceFeaturesFromProduct) | **DELETE** /products/{product_id}/edge_device_features | Remove edge device features from a product
[**removePurchaseOrdersFromProduct**](ProductApi.md#removePurchaseOrdersFromProduct) | **DELETE** /products/{product_id}/purchase_orders | Remove purchase orders from a product
[**removeQuotationsFromProduct**](ProductApi.md#removeQuotationsFromProduct) | **DELETE** /products/{product_id}/quotations | Remove quotations from a product
[**removeSoftwaresOfProduct**](ProductApi.md#removeSoftwaresOfProduct) | **DELETE** /products/{product_id}/softwares | Remove software from a product
[**removeSpecificationsFromProduct**](ProductApi.md#removeSpecificationsFromProduct) | **DELETE** /products/{product_id}/specifications | Delete specifications of a product
[**renameSpecificationsOfProduct**](ProductApi.md#renameSpecificationsOfProduct) | **PATCH** /products/{product_id}/specifications/rename | rename a key in the specification.
[**replaceCategoriesOfProduct**](ProductApi.md#replaceCategoriesOfProduct) | **PATCH** /products/{product_id}/categories | Replace all categories of a product
[**replaceDocumentsOfProduct**](ProductApi.md#replaceDocumentsOfProduct) | **PATCH** /products/{product_id}/documents | Replace the documents of a product
[**replaceEdgeDeviceFeaturesOfProduct**](ProductApi.md#replaceEdgeDeviceFeaturesOfProduct) | **PATCH** /products/{product_id}/edge_device_features | Replace the edge device features of a product
[**replacePurchaseOrdersOfProduct**](ProductApi.md#replacePurchaseOrdersOfProduct) | **PATCH** /products/{product_id}/purchase_orders | Replace the purchase orders of a product
[**replaceQuotationsOfProduct**](ProductApi.md#replaceQuotationsOfProduct) | **PATCH** /products/{product_id}/quotations | Replace the quotations of a product
[**replaceSoftwaresOfProduct**](ProductApi.md#replaceSoftwaresOfProduct) | **PATCH** /products/{product_id}/softwares | Replace the software of a product
[**setProductVariantConfiguration**](ProductApi.md#setProductVariantConfiguration) | **PATCH** /product_variants/{id}/configurations | update configuration of a product variant
[**updateProduct**](ProductApi.md#updateProduct) | **PATCH** /products/{id} | Update a product
[**updateProductFeature**](ProductApi.md#updateProductFeature) | **PATCH** /product_features/{id} | Update a product feature
[**updateProductOption**](ProductApi.md#updateProductOption) | **PATCH** /product_options/{id} | Update a product option
[**updateProductPicture**](ProductApi.md#updateProductPicture) | **PATCH** /products/{product_id}/pictures/{id} | Update a product picture
[**updateProductPictureLink**](ProductApi.md#updateProductPictureLink) | **PATCH** /products/{product_id}/pictures/links/{id} | Update a product picture link
[**updateProductVariant**](ProductApi.md#updateProductVariant) | **PATCH** /product_variants/{id} | Update a product variant
[**updateSpecificationsOfProduct**](ProductApi.md#updateSpecificationsOfProduct) | **PATCH** /products/{product_id}/specifications | Update specifications of a product
[**uploadProductPicture**](ProductApi.md#uploadProductPicture) | **POST** /products/{id}/pictures | Upload a product picture

<a name="addCategoriesToProduct"></a>
# **addCategoriesToProduct**
> addCategoriesToProduct(bodyproductId)

Add categories to a product

Add one or more categories to a product.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let body = new NetilionApiDocumentation.CategoryIDs(); // CategoryIDs | Resources that shall be added
let productId = 789; // Number | Id of the product

apiInstance.addCategoriesToProduct(bodyproductId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CategoryIDs**](CategoryIDs.md)| Resources that shall be added | 
 **productId** | **Number**| Id of the product | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addDocumentsToProduct"></a>
# **addDocumentsToProduct**
> addDocumentsToProduct(bodyproductId)

Add documents to a product

Add one or more documents to a product.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let body = new NetilionApiDocumentation.DocumentIDs(); // DocumentIDs | Resources that shall be added.
let productId = 789; // Number | Id of the product to which the documents will be added

apiInstance.addDocumentsToProduct(bodyproductId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DocumentIDs**](DocumentIDs.md)| Resources that shall be added. | 
 **productId** | **Number**| Id of the product to which the documents will be added | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addEdgeDeviceFeaturesToProduct"></a>
# **addEdgeDeviceFeaturesToProduct**
> addEdgeDeviceFeaturesToProduct(bodyproductId)

Add edge device features to a product

Add one or more edge device features to a product.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let body = new NetilionApiDocumentation.EdgeDeviceFeatureIDs(); // EdgeDeviceFeatureIDs | Resources that shall be added.
let productId = 789; // Number | Id of the product to which the edge device features will be added

apiInstance.addEdgeDeviceFeaturesToProduct(bodyproductId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EdgeDeviceFeatureIDs**](EdgeDeviceFeatureIDs.md)| Resources that shall be added. | 
 **productId** | **Number**| Id of the product to which the edge device features will be added | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addProductPictureLink"></a>
# **addProductPictureLink**
> PictureResponse addProductPictureLink(bodyid)

Add a link as product picture

Add an external resource as product picture.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let body = new NetilionApiDocumentation.PictureLinkRequest(); // PictureLinkRequest | Picture link object to be created
let id = 789; // Number | Id of the product

apiInstance.addProductPictureLink(bodyid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PictureLinkRequest**](PictureLinkRequest.md)| Picture link object to be created | 
 **id** | **Number**| Id of the product | 

### Return type

[**PictureResponse**](PictureResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addPurchaseOrdersToProduct"></a>
# **addPurchaseOrdersToProduct**
> addPurchaseOrdersToProduct(bodyproductId)

Add purchase orders to a product

Add one or more purchase orders to a product.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let body = new NetilionApiDocumentation.PurchaseOrderIDs(); // PurchaseOrderIDs | Resources that shall be added.
let productId = 789; // Number | Id of the product to which the purchase orders will be added

apiInstance.addPurchaseOrdersToProduct(bodyproductId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PurchaseOrderIDs**](PurchaseOrderIDs.md)| Resources that shall be added. | 
 **productId** | **Number**| Id of the product to which the purchase orders will be added | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addQuotationsToProduct"></a>
# **addQuotationsToProduct**
> addQuotationsToProduct(bodyproductId)

Add quotations to a product

Add one or more quotations to a product.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let body = new NetilionApiDocumentation.QuotationIDs(); // QuotationIDs | Resources that shall be added.
let productId = 789; // Number | Id of the product to which the quotations will be added

apiInstance.addQuotationsToProduct(bodyproductId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**QuotationIDs**](QuotationIDs.md)| Resources that shall be added. | 
 **productId** | **Number**| Id of the product to which the quotations will be added | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addSoftwaresToProduct"></a>
# **addSoftwaresToProduct**
> addSoftwaresToProduct(bodyproductId)

Add software to a product

Add one or more software to a product.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let body = new NetilionApiDocumentation.SoftwareIDs(); // SoftwareIDs | Resources that shall be added.
let productId = 789; // Number | Id of the product to which the software will be added

apiInstance.addSoftwaresToProduct(bodyproductId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SoftwareIDs**](SoftwareIDs.md)| Resources that shall be added. | 
 **productId** | **Number**| Id of the product to which the software will be added | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createProduct"></a>
# **createProduct**
> ProductResponse createProduct(body)

Create a new product

Products need a uninque product_code and a manufacturer (company). Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. POST sets values in default language: en.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let body = new NetilionApiDocumentation.ProductRequest(); // ProductRequest | Product object that needs to be created.

apiInstance.createProduct(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductRequest**](ProductRequest.md)| Product object that needs to be created. | 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createProductFeature"></a>
# **createProductFeature**
> ProductFeatureResponse createProductFeature(body)

Create a new product feature

Products must have a product (user needs product edit rights) and a unique feature_key (per product)

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let body = new NetilionApiDocumentation.ProductFeatureRequest(); // ProductFeatureRequest | Product Feature object that needs to be created.

apiInstance.createProductFeature(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductFeatureRequest**](ProductFeatureRequest.md)| Product Feature object that needs to be created. | 

### Return type

[**ProductFeatureResponse**](ProductFeatureResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createProductOption"></a>
# **createProductOption**
> ProductOptionResponse createProductOption(body)

Create a new product option

Products must have a product feature (user needs product feature - product edit rights) and a unique option_key (per product feature)

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let body = new NetilionApiDocumentation.ProductOptionRequest(); // ProductOptionRequest | Product option object that needs to be created.

apiInstance.createProductOption(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductOptionRequest**](ProductOptionRequest.md)| Product option object that needs to be created. | 

### Return type

[**ProductOptionResponse**](ProductOptionResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createProductVariant"></a>
# **createProductVariant**
> ProductVariantResponse createProductVariant(body)

Create a new product variant

Product Variants must have a product (user needs product edit rights) and a unique variant_code (per product)

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let body = new NetilionApiDocumentation.ProductVariantRequest(); // ProductVariantRequest | Product variant object that needs to be created.

apiInstance.createProductVariant(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductVariantRequest**](ProductVariantRequest.md)| Product variant object that needs to be created. | 

### Return type

[**ProductVariantResponse**](ProductVariantResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCategoriesFromProduct"></a>
# **deleteCategoriesFromProduct**
> deleteCategoriesFromProduct(bodyproductId)

Remove categories from a product

Remove one or more categories from a product.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let body = new NetilionApiDocumentation.CategoryIDs(); // CategoryIDs | Resources that shall be removed.
let productId = 789; // Number | Id of the product from which the category will be removed

apiInstance.deleteCategoriesFromProduct(bodyproductId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CategoryIDs**](CategoryIDs.md)| Resources that shall be removed. | 
 **productId** | **Number**| Id of the product from which the category will be removed | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteProduct"></a>
# **deleteProduct**
> deleteProduct(id)

Delete a product

Delete a specific resource identified by the id in the URL.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let id = 789; // Number | Id of the product to delete

apiInstance.deleteProduct(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the product to delete | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteProductFeature"></a>
# **deleteProductFeature**
> deleteProductFeature(id)

Delete a product feature

Delete a specific resource identified by the id in the URL.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let id = 789; // Number | Id of the product feature to delete

apiInstance.deleteProductFeature(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the product feature to delete | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteProductOption"></a>
# **deleteProductOption**
> deleteProductOption(id)

Delete a product option

Delete a specific resource identified by the id in the URL.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let id = 789; // Number | Id of the product option to delete

apiInstance.deleteProductOption(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the product option to delete | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteProductPicture"></a>
# **deleteProductPicture**
> deleteProductPicture(productId, id)

Delete a product picture

Delete a product picture.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let productId = 789; // Number | Id of the product
let id = 789; // Number | Id of the product picture

apiInstance.deleteProductPicture(productId, id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Number**| Id of the product | 
 **id** | **Number**| Id of the product picture | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteProductVariant"></a>
# **deleteProductVariant**
> deleteProductVariant(id)

Delete a product variant

Delete a specific resource identified by the id in the URL.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let id = 789; // Number | Id of the product variant to delete

apiInstance.deleteProductVariant(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the product variant to delete | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="downloadProductPicture"></a>
# **downloadProductPicture**
> downloadProductPicture(productId, id)

Download a product picture

Download a product picture.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let productId = 789; // Number | Id of the product
let id = 789; // Number | Id of the product picture

apiInstance.downloadProductPicture(productId, id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Number**| Id of the product | 
 **id** | **Number**| Id of the product picture | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAssetProductOptions"></a>
# **getAssetProductOptions**
> Object getAssetProductOptions(assetId, opts)

Get all possible products of the specified assets

Returns a list of all possible products for the specified asset. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language. Possible include values: &#x60;&#x60;&#x60;status, tenant, parent, manufacturer, pictures, categories, categories.parent&#x60;&#x60;&#x60;

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let assetId = 789; // Number | Id of the specified asset
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'productCode': "productCode_example", // String | Filter accepts `*` as wildcard
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'manufacturerId': "manufacturerId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'statusId': "statusId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'categoryId': "categoryId_example", // String | One or multiple ids (comma list). By adding `+` after the id, the filter considers the given category and all its children (e.g. 3+).
  'parentId': "parentId_example", // String | One or multiple ids (comma list). \"null\" to retrieve all objects without parent, \"!null\" for all objects with parent.
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getAssetProductOptions(assetId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| Id of the specified asset | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 
 **productCode** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **manufacturerId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **statusId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **categoryId** | **String**| One or multiple ids (comma list). By adding &#x60;+&#x60; after the id, the filter considers the given category and all its children (e.g. 3+). | [optional] 
 **parentId** | **String**| One or multiple ids (comma list). \&quot;null\&quot; to retrieve all objects without parent, \&quot;!null\&quot; for all objects with parent. | [optional] 
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

**Object**

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCategoriesOfProduct"></a>
# **getCategoriesOfProduct**
> ProductCategoriesResponse getCategoriesOfProduct(productId, opts)

Get all categories of a product

Get all categories for the specific product identified by the id in the URL. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language. Possible include values: &#x60;&#x60;&#x60;tenant, parent&#x60;&#x60;&#x60;

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let productId = 789; // Number | The resource defined in the URL
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'code': "code_example", // String | Filter accepts `*` as wildcard
  'parentId': "parentId_example", // String | One or multiple ids (comma list). \"null\" to retrieve all objects without parent, \"!null\" for all objects with parent.
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'orderBy': "orderBy_example", // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getCategoriesOfProduct(productId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **code** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **parentId** | **String**| One or multiple ids (comma list). \&quot;null\&quot; to retrieve all objects without parent, \&quot;!null\&quot; for all objects with parent. | [optional] 
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**ProductCategoriesResponse**](ProductCategoriesResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCategoriesOptionsOfProduct"></a>
# **getCategoriesOptionsOfProduct**
> ProductCategoriesResponse getCategoriesOptionsOfProduct(productId, opts)

Get all categories of one product

Returns a list of all possible categories for the specific product available in your scope. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language. Possible include values: &#x60;&#x60;&#x60;tenant, parent&#x60;&#x60;&#x60; \&quot;

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let productId = 789; // Number | The resource defined in the URL
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'code': "code_example", // String | Filter accepts `*` as wildcard
  'parentId': "parentId_example", // String | One or multiple ids (comma list). \"null\" to retrieve all objects without parent, \"!null\" for all objects with parent.
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'orderBy': "orderBy_example", // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getCategoriesOptionsOfProduct(productId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **code** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **parentId** | **String**| One or multiple ids (comma list). \&quot;null\&quot; to retrieve all objects without parent, \&quot;!null\&quot; for all objects with parent. | [optional] 
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**ProductCategoriesResponse**](ProductCategoriesResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDocumentsOfProduct"></a>
# **getDocumentsOfProduct**
> DocumentsResponse getDocumentsOfProduct(productId, opts)

Get all documents of a product

Returns a list of documents assigned to the specified product. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language. Possible include values: &#x60;&#x60;&#x60;status, tenant, classification, categories, categories.parent, attachments&#x60;&#x60;&#x60;

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let productId = 789; // Number | The resource defined in the URL
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'documentVersion': "documentVersion_example", // String | Filter accepts `*` as wildcard
  '_number': "_number_example", // String | Filter accepts `*` as wildcard
  'statusId': "statusId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'classificationId': "classificationId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'categoryId': "categoryId_example", // String | One or multiple ids (comma list). By adding `+` after the id, the filter considers the given category and all its children (e.g. 3+).
  'validFrom': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'validUntil': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'validAt': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD or YYYY-MM or YYYY
  'orderBy': "orderBy_example", // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getDocumentsOfProduct(productId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **documentVersion** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **_number** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **statusId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **classificationId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **categoryId** | **String**| One or multiple ids (comma list). By adding &#x60;+&#x60; after the id, the filter considers the given category and all its children (e.g. 3+). | [optional] 
 **validFrom** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **validUntil** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **validAt** | **Date**| Expected date format is YYYY-MM-DD or YYYY-MM or YYYY | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**DocumentsResponse**](DocumentsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEdgeDeviceFeaturesOfProduct"></a>
# **getEdgeDeviceFeaturesOfProduct**
> EdgeDeviceFeaturesResponse getEdgeDeviceFeaturesOfProduct(productId, opts)

Get all edge device features of a product

Returns a list of edge device features assigned to the specified product. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let productId = 789; // Number | The resource defined in the URL
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'code': "code_example", // String | Filter accepts `*` as wildcard
  'orderBy': "orderBy_example", // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getEdgeDeviceFeaturesOfProduct(productId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **code** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**EdgeDeviceFeaturesResponse**](EdgeDeviceFeaturesResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProductById"></a>
# **getProductById**
> ProductResponse getProductById(id, opts)

Get a single product

Get a specific product identified by the id in the URL. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language. Possible include values: &#x60;&#x60;&#x60;status, tenant, parent, manufacturer, pictures, specifications, specifications[key1,key2], categories, categories.parent&#x60;&#x60;&#x60;

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let id = 789; // Number | Id of the product to fetch
let opts = { 
  'include': "include_example", // String | Comma separated list of objects to include in response
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getProductById(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the product to fetch | 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProductFeatureById"></a>
# **getProductFeatureById**
> ProductFeatureResponse getProductFeatureById(id)

Get a single product feature

Get a specific product feature identified by the id in the URL. 

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let id = 789; // Number | Id of the product feature to fetch

apiInstance.getProductFeatureById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the product feature to fetch | 

### Return type

[**ProductFeatureResponse**](ProductFeatureResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProductFeatures"></a>
# **getProductFeatures**
> ProductFeaturesResponse getProductFeatures(opts)

Get a range of product features

 Returns a list of all product features that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array. 

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'productId': "productId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'featureKey': "featureKey_example", // String | Filter accepts `*` as wildcard
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getProductFeatures(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **productId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **featureKey** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**ProductFeaturesResponse**](ProductFeaturesResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProductIdStatus"></a>
# **getProductIdStatus**
> ProductStatusResponse getProductIdStatus(productId, opts)

Get the status of a specific product

Returns the status of the product. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let productId = 789; // Number | Id of the specified product
let opts = { 
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getProductIdStatus(productId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Number**| Id of the specified product | 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**ProductStatusResponse**](ProductStatusResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProductOptionById"></a>
# **getProductOptionById**
> ProductOptionResponse getProductOptionById(id)

Get a single product option

Get a specific product option identified by the id in the URL.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let id = 789; // Number | Id of the product option to fetch

apiInstance.getProductOptionById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the product option to fetch | 

### Return type

[**ProductOptionResponse**](ProductOptionResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProductOptions"></a>
# **getProductOptions**
> ProductOptionsResponse getProductOptions(opts)

Get a range of product options

Returns a list of all product options that are available in your scope. You can apply the query parameters listed below to get a filtered list.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'productFeatureId': "productFeatureId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'optionKey': "optionKey_example", // String | Filter accepts `*` as wildcard
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getProductOptions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **productFeatureId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **optionKey** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**ProductOptionsResponse**](ProductOptionsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProductPicture"></a>
# **getProductPicture**
> PictureResponse getProductPicture(productId, id)

Get a product picture

Get a single picture of a product.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let productId = 789; // Number | Id of the product
let id = 789; // Number | Id of the product picture

apiInstance.getProductPicture(productId, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Number**| Id of the product | 
 **id** | **Number**| Id of the product picture | 

### Return type

[**PictureResponse**](PictureResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProductPictures"></a>
# **getProductPictures**
> PicturesResponse getProductPictures(id, opts)

Get product pictures

Get all product pictures of a product.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let id = 789; // Number | Id of the product
let opts = { 
  'width': 56, // Number | filter by width
  'widthFrom': 56, // Number | filter by width_from
  'widthTo': 56, // Number | filter by width_to
  'height': 56, // Number | filter by height
  'heightFrom': 56, // Number | filter by height_from
  'heightTo': 56, // Number | filter by height_to
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getProductPictures(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the product | 
 **width** | **Number**| filter by width | [optional] 
 **widthFrom** | **Number**| filter by width_from | [optional] 
 **widthTo** | **Number**| filter by width_to | [optional] 
 **height** | **Number**| filter by height | [optional] 
 **heightFrom** | **Number**| filter by height_from | [optional] 
 **heightTo** | **Number**| filter by height_to | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**PicturesResponse**](PicturesResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProductStatusesOptions"></a>
# **getProductStatusesOptions**
> Object getProductStatusesOptions(productId, opts)

Get all possible statuses for the specified product

Returns a list of all possible product statuses for the specified product. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let productId = 789; // Number | Id of the specified product
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'code': "code_example", // String | Filter accepts `*` as wildcard
  'orderBy': "orderBy_example", // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getProductStatusesOptions(productId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Number**| Id of the specified product | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **code** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

**Object**

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProductVaraints"></a>
# **getProductVaraints**
> ProductVariantsResponse getProductVaraints(opts)

Get a range of product variants

 Returns a list of all product variants that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array. 

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'productId': "productId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'varaintCode': "varaintCode_example", // String | Filter accepts `*` as wildcard
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getProductVaraints(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **productId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **varaintCode** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**ProductVariantsResponse**](ProductVariantsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProductVariantById"></a>
# **getProductVariantById**
> ProductVariantResponse getProductVariantById(id)

Get a single product variant

Get a specific product variant identified by the id in the URL. 

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let id = 789; // Number | Id of the product variant to fetch

apiInstance.getProductVariantById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the product variant to fetch | 

### Return type

[**ProductVariantResponse**](ProductVariantResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProductVariantConfigurations"></a>
# **getProductVariantConfigurations**
> ProductVariantConfigurationResponse getProductVariantConfigurations(id, opts)

get configuration of product variant

get configuration of a product variant

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let id = 789; // Number | Id of the product variant
let opts = { 
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getProductVariantConfigurations(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the product variant | 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**ProductVariantConfigurationResponse**](ProductVariantConfigurationResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProducts"></a>
# **getProducts**
> ProductsResponse getProducts(opts)

Get a range of products

Returns a list of all products that are available in your scope. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language. Possible include values: &#x60;&#x60;&#x60;status, tenant, parent, manufacturer, pictures, specifications, specifications[key1,key2], categories, categories.parent&#x60;&#x60;&#x60; \&quot;

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'productCode': "productCode_example", // String | Filter accepts `*` as wildcard
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'manufacturerId': "manufacturerId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'statusId': "statusId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'categoryId': "categoryId_example", // String | One or multiple ids (comma list). By adding `+` after the id, the filter considers the given category and all its children (e.g. 3+).
  'parentId': "parentId_example", // String | One or multiple ids (comma list). \"null\" to retrieve all objects without parent, \"!null\" for all objects with parent.
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'specificationsKey': "specificationsKey_example", // String | Filter accepts `*` as wildcard (if used as single specifications filter), supports comma list of keys in connection with specifications_value filter
  'specificationsValue': "specificationsValue_example", // String | Filter accepts `*` as wildcard, supports comma list of values in connection with specifications_key filter. Does not work for vectors
  'orderBy': "orderBy_example", // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getProducts(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 
 **productCode** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **manufacturerId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **statusId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **categoryId** | **String**| One or multiple ids (comma list). By adding &#x60;+&#x60; after the id, the filter considers the given category and all its children (e.g. 3+). | [optional] 
 **parentId** | **String**| One or multiple ids (comma list). \&quot;null\&quot; to retrieve all objects without parent, \&quot;!null\&quot; for all objects with parent. | [optional] 
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **specificationsKey** | **String**| Filter accepts &#x60;*&#x60; as wildcard (if used as single specifications filter), supports comma list of keys in connection with specifications_value filter | [optional] 
 **specificationsValue** | **String**| Filter accepts &#x60;*&#x60; as wildcard, supports comma list of values in connection with specifications_key filter. Does not work for vectors | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**ProductsResponse**](ProductsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProductsOfCompany"></a>
# **getProductsOfCompany**
> ProductsResponse getProductsOfCompany(companyId, opts)

Get all products of a company

Receive a list of products of a specific company, identified by the id in the URL. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language. Possible include values: &#x60;&#x60;&#x60;status, tenant, parent, manufacturer, pictures, categories, categories.parent&#x60;&#x60;&#x60;

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let companyId = 789; // Number | The resource defined in the URL
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'productCode': "productCode_example", // String | Filter accepts `*` as wildcard
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'statusId': "statusId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'categoryId': "categoryId_example", // String | One or multiple ids (comma list). By adding `+` after the id, the filter considers the given category and all its children (e.g. 3+).
  'parentId': "parentId_example", // String | One or multiple ids (comma list). \"null\" to retrieve all objects without parent, \"!null\" for all objects with parent.
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getProductsOfCompany(companyId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 
 **productCode** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **statusId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **categoryId** | **String**| One or multiple ids (comma list). By adding &#x60;+&#x60; after the id, the filter considers the given category and all its children (e.g. 3+). | [optional] 
 **parentId** | **String**| One or multiple ids (comma list). \&quot;null\&quot; to retrieve all objects without parent, \&quot;!null\&quot; for all objects with parent. | [optional] 
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**ProductsResponse**](ProductsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPurchaseOrdersOfProduct"></a>
# **getPurchaseOrdersOfProduct**
> PurchaseOrdersResponse getPurchaseOrdersOfProduct(productId, opts)

Get all purchase orders of one product

Returns a list of all purchase orders that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let productId = 789; // Number | The resource defined in the URL
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'name': "name_example", // String | Filter accepts `*` as wildcard
  '_number': "_number_example", // String | Filter accepts `*` as wildcard
  'statusId': "statusId_example", // String | One or multiple ids (comma list). Expected id format is integer
  '_date': "_date_example", // String | Expected date format is YYYY-MM-DD
  'dateFrom': "dateFrom_example", // String | Expected date format is YYYY-MM-DD
  'dateTo': "dateTo_example", // String | Expected date format is YYYY-MM-DD
  'senderId': "senderId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'receiverId': "receiverId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'quotationId': "quotationId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getPurchaseOrdersOfProduct(productId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **_number** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **statusId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **_date** | **String**| Expected date format is YYYY-MM-DD | [optional] 
 **dateFrom** | **String**| Expected date format is YYYY-MM-DD | [optional] 
 **dateTo** | **String**| Expected date format is YYYY-MM-DD | [optional] 
 **senderId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **receiverId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **quotationId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**PurchaseOrdersResponse**](PurchaseOrdersResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getQuotationsOfProduct"></a>
# **getQuotationsOfProduct**
> QuotationsResponse getQuotationsOfProduct(productId, opts)

Get all quotations of one product

Returns a list of all quotations that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let productId = 789; // Number | The resource defined in the URL
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'name': "name_example", // String | Filter accepts `*` as wildcard
  '_number': "_number_example", // String | Filter accepts `*` as wildcard
  'statusId': "statusId_example", // String | One or multiple ids (comma list). Expected id format is integer
  '_date': "_date_example", // String | Expected date format is YYYY-MM-DD
  'dateFrom': "dateFrom_example", // String | Expected date format is YYYY-MM-DD
  'dateTo': "dateTo_example", // String | Expected date format is YYYY-MM-DD
  'senderId': "senderId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'receiverId': "receiverId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'requestForQuotationId': "requestForQuotationId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getQuotationsOfProduct(productId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **_number** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **statusId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **_date** | **String**| Expected date format is YYYY-MM-DD | [optional] 
 **dateFrom** | **String**| Expected date format is YYYY-MM-DD | [optional] 
 **dateTo** | **String**| Expected date format is YYYY-MM-DD | [optional] 
 **senderId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **receiverId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **requestForQuotationId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**QuotationsResponse**](QuotationsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSoftwaresOfProduct"></a>
# **getSoftwaresOfProduct**
> SoftwaresResponse getSoftwaresOfProduct(productId, opts)

Get a range of software of one product

Returns a list of software. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language. Possible include values: &#x60;&#x60;&#x60;software_attachments&#x60;&#x60;&#x60;

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let productId = 789; // Number | The resource defined in the URL
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'orderBy': "orderBy_example", // String | Order result by attribute value, accepts `version_number`, `name`, `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getSoftwaresOfProduct(productId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;version_number&#x60;, &#x60;name&#x60;, &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**SoftwaresResponse**](SoftwaresResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSpecificationsOfProduct"></a>
# **getSpecificationsOfProduct**
> SpecificationsResponse getSpecificationsOfProduct(productId, opts)

Get specifications of a product

Returns the specification of an object. If no specifications are defined, this is just an empty object.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let productId = 789; // Number | Id of the specified product
let opts = { 
  'key': "key_example" // String | Filter accepts '*' as wildcard
};
apiInstance.getSpecificationsOfProduct(productId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Number**| Id of the specified product | 
 **key** | **String**| Filter accepts &#x27;*&#x27; as wildcard | [optional] 

### Return type

[**SpecificationsResponse**](SpecificationsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="removeDocumentsFromProduct"></a>
# **removeDocumentsFromProduct**
> removeDocumentsFromProduct(bodyproductId)

Remove documents from a product

Remove one or more documents from a product.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let body = new NetilionApiDocumentation.DocumentIDs(); // DocumentIDs | Resources that shall be removed.
let productId = 789; // Number | Id of the product from which the documents will be removed

apiInstance.removeDocumentsFromProduct(bodyproductId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DocumentIDs**](DocumentIDs.md)| Resources that shall be removed. | 
 **productId** | **Number**| Id of the product from which the documents will be removed | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeEdgeDeviceFeaturesFromProduct"></a>
# **removeEdgeDeviceFeaturesFromProduct**
> removeEdgeDeviceFeaturesFromProduct(bodyproductId)

Remove edge device features from a product

Remove one or more edge device features from a product.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let body = new NetilionApiDocumentation.EdgeDeviceFeatureIDs(); // EdgeDeviceFeatureIDs | Resources that shall be removed.
let productId = 789; // Number | Id of the product from which the edge device features will be removed

apiInstance.removeEdgeDeviceFeaturesFromProduct(bodyproductId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EdgeDeviceFeatureIDs**](EdgeDeviceFeatureIDs.md)| Resources that shall be removed. | 
 **productId** | **Number**| Id of the product from which the edge device features will be removed | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removePurchaseOrdersFromProduct"></a>
# **removePurchaseOrdersFromProduct**
> removePurchaseOrdersFromProduct(bodyproductId)

Remove purchase orders from a product

Remove one or more purchase orders from a product.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let body = new NetilionApiDocumentation.PurchaseOrderIDs(); // PurchaseOrderIDs | Resources that shall be removed.
let productId = 789; // Number | Id of the product from which the purchase orders will be removed

apiInstance.removePurchaseOrdersFromProduct(bodyproductId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PurchaseOrderIDs**](PurchaseOrderIDs.md)| Resources that shall be removed. | 
 **productId** | **Number**| Id of the product from which the purchase orders will be removed | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeQuotationsFromProduct"></a>
# **removeQuotationsFromProduct**
> removeQuotationsFromProduct(bodyproductId)

Remove quotations from a product

Remove one or more quotations from a product.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let body = new NetilionApiDocumentation.QuotationIDs(); // QuotationIDs | Resources that shall be removed.
let productId = 789; // Number | Id of the product from which the quotations will be removed

apiInstance.removeQuotationsFromProduct(bodyproductId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**QuotationIDs**](QuotationIDs.md)| Resources that shall be removed. | 
 **productId** | **Number**| Id of the product from which the quotations will be removed | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeSoftwaresOfProduct"></a>
# **removeSoftwaresOfProduct**
> removeSoftwaresOfProduct(bodyproductId)

Remove software from a product

Remove one or more software from a product.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let body = new NetilionApiDocumentation.SoftwareIDs(); // SoftwareIDs | Resources that shall be removed.
let productId = 789; // Number | Id of the product from which the software will be removed

apiInstance.removeSoftwaresOfProduct(bodyproductId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SoftwareIDs**](SoftwareIDs.md)| Resources that shall be removed. | 
 **productId** | **Number**| Id of the product from which the software will be removed | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeSpecificationsFromProduct"></a>
# **removeSpecificationsFromProduct**
> removeSpecificationsFromProduct(bodyproductId)

Delete specifications of a product

The specification keys in the body will be removed. Multiple specification keys can be sent in the same request. If a key does not exist it will be ignored.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let body = ["body_example"]; // [String] | Array of keys to delete from specifications
let productId = 789; // Number | Id of the specified product

apiInstance.removeSpecificationsFromProduct(bodyproductId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[String]**](String.md)| Array of keys to delete from specifications | 
 **productId** | **Number**| Id of the specified product | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="renameSpecificationsOfProduct"></a>
# **renameSpecificationsOfProduct**
> renameSpecificationsOfProduct(bodyproductId)

rename a key in the specification.

Rename a key of the specification object of a product. Instead of delete and recreate again, this is to preserve the key´s value history. Also the new keys can only consist of a-z A-Z 0-9 . - _ all uppercase A-Z are converted to lower-case a-z. Only one key can be changed per request

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let body = new NetilionApiDocumentation.SpecificationsRename(); // SpecificationsRename | The specifications object to patch.
let productId = 789; // Number | Id of the specified product

apiInstance.renameSpecificationsOfProduct(bodyproductId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SpecificationsRename**](SpecificationsRename.md)| The specifications object to patch. | 
 **productId** | **Number**| Id of the specified product | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceCategoriesOfProduct"></a>
# **replaceCategoriesOfProduct**
> replaceCategoriesOfProduct(bodyproductId)

Replace all categories of a product

Replaces all categories belonging to a product. You can send a list of resources that will replace all previous values.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let body = new NetilionApiDocumentation.CategoryIDs(); // CategoryIDs | Resources that shall be added
let productId = 789; // Number | Id of the product

apiInstance.replaceCategoriesOfProduct(bodyproductId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CategoryIDs**](CategoryIDs.md)| Resources that shall be added | 
 **productId** | **Number**| Id of the product | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceDocumentsOfProduct"></a>
# **replaceDocumentsOfProduct**
> replaceDocumentsOfProduct(bodyproductId)

Replace the documents of a product

Replaces all documents belonging to a product. You can send a list of resources that will replace all previous values.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let body = new NetilionApiDocumentation.DocumentIDs(); // DocumentIDs | Resources that shall be replaced
let productId = 789; // Number | Id of the product of which the documents will be replaced

apiInstance.replaceDocumentsOfProduct(bodyproductId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DocumentIDs**](DocumentIDs.md)| Resources that shall be replaced | 
 **productId** | **Number**| Id of the product of which the documents will be replaced | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceEdgeDeviceFeaturesOfProduct"></a>
# **replaceEdgeDeviceFeaturesOfProduct**
> replaceEdgeDeviceFeaturesOfProduct(bodyproductId)

Replace the edge device features of a product

Replaces all edge device features belonging to a product. You can send a list of resources that will replace all previous values.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let body = new NetilionApiDocumentation.EdgeDeviceFeatureIDs(); // EdgeDeviceFeatureIDs | Resources that shall be replaced
let productId = 789; // Number | Id of the product of which the edge device features will be replaced

apiInstance.replaceEdgeDeviceFeaturesOfProduct(bodyproductId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EdgeDeviceFeatureIDs**](EdgeDeviceFeatureIDs.md)| Resources that shall be replaced | 
 **productId** | **Number**| Id of the product of which the edge device features will be replaced | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replacePurchaseOrdersOfProduct"></a>
# **replacePurchaseOrdersOfProduct**
> replacePurchaseOrdersOfProduct(bodyproductId)

Replace the purchase orders of a product

Replaces all purchase orders belonging to a product. You can send a list of resources that will replace all previous values.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let body = new NetilionApiDocumentation.PurchaseOrderIDs(); // PurchaseOrderIDs | Resources that shall be replaced
let productId = 789; // Number | Id of the product of which the purchase orders will be replaced

apiInstance.replacePurchaseOrdersOfProduct(bodyproductId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PurchaseOrderIDs**](PurchaseOrderIDs.md)| Resources that shall be replaced | 
 **productId** | **Number**| Id of the product of which the purchase orders will be replaced | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceQuotationsOfProduct"></a>
# **replaceQuotationsOfProduct**
> replaceQuotationsOfProduct(bodyproductId)

Replace the quotations of a product

Replaces all quotations belonging to a product. You can send a list of resources that will replace all previous values.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let body = new NetilionApiDocumentation.QuotationIDs(); // QuotationIDs | Resources that shall be replaced
let productId = 789; // Number | Id of the product of which the quotations will be replaced

apiInstance.replaceQuotationsOfProduct(bodyproductId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**QuotationIDs**](QuotationIDs.md)| Resources that shall be replaced | 
 **productId** | **Number**| Id of the product of which the quotations will be replaced | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceSoftwaresOfProduct"></a>
# **replaceSoftwaresOfProduct**
> replaceSoftwaresOfProduct(bodyproductId)

Replace the software of a product

Replaces all software belonging to a product. You can send a list of resources that will replace all previous values.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let body = new NetilionApiDocumentation.SoftwareIDs(); // SoftwareIDs | Resources that shall be replaced
let productId = 789; // Number | Id of the product of which the software will be replaced

apiInstance.replaceSoftwaresOfProduct(bodyproductId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SoftwareIDs**](SoftwareIDs.md)| Resources that shall be replaced | 
 **productId** | **Number**| Id of the product of which the software will be replaced | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setProductVariantConfiguration"></a>
# **setProductVariantConfiguration**
> setProductVariantConfiguration(bodyid)

update configuration of a product variant

set / update configuration of a product variant. The configuration is defined by the product features and product options. An empty array can be sent to remove the configuration.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let body = new NetilionApiDocumentation.ProductVariantConfigurationRequest(); // ProductVariantConfigurationRequest | Parameters that shall be updated.
let id = 789; // Number | Id of the product variant to update

apiInstance.setProductVariantConfiguration(bodyid).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductVariantConfigurationRequest**](ProductVariantConfigurationRequest.md)| Parameters that shall be updated. | 
 **id** | **Number**| Id of the product variant to update | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateProduct"></a>
# **updateProduct**
> updateProduct(bodyid)

Update a product

Update accessible parameters of the requested resource. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To add a translation set Content-Language.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let body = new NetilionApiDocumentation.ProductRequest(); // ProductRequest | Parameters that shall be updated.
let id = 789; // Number | Id of the product to update

apiInstance.updateProduct(bodyid).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductRequest**](ProductRequest.md)| Parameters that shall be updated. | 
 **id** | **Number**| Id of the product to update | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateProductFeature"></a>
# **updateProductFeature**
> updateProductFeature(bodyid, opts)

Update a product feature

Update accessible parameters of the requested resource.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let body = new NetilionApiDocumentation.ProductFeatureRequest(); // ProductFeatureRequest | Parameters that shall be updated.
let id = 789; // Number | Id of the product feature to update
let opts = { 
  'contentLanguage': "contentLanguage_example" // String | language of the content
};
apiInstance.updateProductFeature(bodyid, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductFeatureRequest**](ProductFeatureRequest.md)| Parameters that shall be updated. | 
 **id** | **Number**| Id of the product feature to update | 
 **contentLanguage** | **String**| language of the content | [optional] 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateProductOption"></a>
# **updateProductOption**
> updateProductOption(bodyid)

Update a product option

Update accessible parameters of the requested resource.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let body = new NetilionApiDocumentation.ProductOptionRequest(); // ProductOptionRequest | Parameters that shall be updated.
let id = 789; // Number | Id of the product option to update

apiInstance.updateProductOption(bodyid).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductOptionRequest**](ProductOptionRequest.md)| Parameters that shall be updated. | 
 **id** | **Number**| Id of the product option to update | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateProductPicture"></a>
# **updateProductPicture**
> PictureResponse updateProductPicture(imageproductIdid)

Update a product picture

Upload a new product picture. Checks the file-storage quota. Allowed content-types are - image/gif - image/jpg - image/jpeg - image/png

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let image = image_example; // Blob | 
let productId = 789; // Number | Id of the product
let id = 789; // Number | Id of the product picture

apiInstance.updateProductPicture(imageproductIdid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **Blob**|  | 
 **productId** | **Number**| Id of the product | 
 **id** | **Number**| Id of the product picture | 

### Return type

[**PictureResponse**](PictureResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="updateProductPictureLink"></a>
# **updateProductPictureLink**
> PictureResponse updateProductPictureLink(bodyproductIdid)

Update a product picture link

Update a product picture link.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let body = new NetilionApiDocumentation.PictureLinkRequest(); // PictureLinkRequest | Picture link object to be updated
let productId = 789; // Number | Id of the product
let id = 789; // Number | Id of the product picture

apiInstance.updateProductPictureLink(bodyproductIdid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PictureLinkRequest**](PictureLinkRequest.md)| Picture link object to be updated | 
 **productId** | **Number**| Id of the product | 
 **id** | **Number**| Id of the product picture | 

### Return type

[**PictureResponse**](PictureResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateProductVariant"></a>
# **updateProductVariant**
> updateProductVariant(bodyid)

Update a product variant

Update accessible parameters of the requested resource.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let body = new NetilionApiDocumentation.ProductVariantRequest(); // ProductVariantRequest | Parameters that shall be updated.
let id = 789; // Number | Id of the product variant to update

apiInstance.updateProductVariant(bodyid).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductVariantRequest**](ProductVariantRequest.md)| Parameters that shall be updated. | 
 **id** | **Number**| Id of the product variant to update | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSpecificationsOfProduct"></a>
# **updateSpecificationsOfProduct**
> updateSpecificationsOfProduct(bodyproductId)

Update specifications of a product

Update the specification object of a product. To add specifications, just add the key and set the value object with value, unit and source_timestamp. To mark an existing specification to be unknown, the value could be set to null. To delete keys, use the delete method. Multiple specification objects can be sent in the same request. Keys inside a specification are unique and can only be added once. Keys can only consist of [a-z A-Z 0-9 . - _ ]. All uppercase A-Z are converted to lower-case a-z. If a key occurs more than once in the request body, the last key-value will be saved.

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let body = null; // {String: SpecificationRequest} | The specifications objects to patch.
let productId = 789; // Number | Id of the specified product

apiInstance.updateSpecificationsOfProduct(bodyproductId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**{String: SpecificationRequest}**](Object.md)| The specifications objects to patch. | 
 **productId** | **Number**| Id of the specified product | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="uploadProductPicture"></a>
# **uploadProductPicture**
> PictureResponse uploadProductPicture(imageid)

Upload a product picture

Upload a new product picture. Checks the file-storage quota. Allowed content-types are - image/gif - image/jpg - image/jpeg - image/png

### Example
```javascript
import NetilionApiDocumentation from 'netilion_api_documentation';
let defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: Authentication
let Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

let apiInstance = new NetilionApiDocumentation.ProductApi();
let image = image_example; // Blob | 
let id = 789; // Number | Id of the product

apiInstance.uploadProductPicture(imageid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **Blob**|  | 
 **id** | **Number**| Id of the product | 

### Return type

[**PictureResponse**](PictureResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

