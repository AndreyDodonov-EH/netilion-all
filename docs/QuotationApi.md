# NetilionApiDocumentation.QuotationApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDocumentsToQuotation**](QuotationApi.md#addDocumentsToQuotation) | **POST** /quotations/{quotation_id}/documents | Add documents to a quotation
[**addProductsToQuotation**](QuotationApi.md#addProductsToQuotation) | **POST** /quotations/{quotation_id}/products | Add products to a quotation
[**addPurchaseOrdersToQuotation**](QuotationApi.md#addPurchaseOrdersToQuotation) | **POST** /quotations/{quotation_id}/purchase_orders | Add purchase orders to a quotation
[**createQuotation**](QuotationApi.md#createQuotation) | **POST** /quotations | Create a new quotation
[**deleteQuotation**](QuotationApi.md#deleteQuotation) | **DELETE** /quotations/{id} | Delete a quotation
[**getDocumentsOfQuotation**](QuotationApi.md#getDocumentsOfQuotation) | **GET** /quotations/{quotation_id}/documents | Get all documents of one quotation
[**getProductsOfQuotation**](QuotationApi.md#getProductsOfQuotation) | **GET** /quotations/{quotation_id}/products | Get all products of one quotation
[**getPurchaseOrdersOfQuotation**](QuotationApi.md#getPurchaseOrdersOfQuotation) | **GET** /quotations/{quotation_id}/purchase_orders | Get all purchase orders of one quotation
[**getQuotationById**](QuotationApi.md#getQuotationById) | **GET** /quotations/{id} | Get a single quotation
[**getQuotationIdStatus**](QuotationApi.md#getQuotationIdStatus) | **GET** /quotations/{quotation_id}/status | Get the status of the specific quotation
[**getQuotations**](QuotationApi.md#getQuotations) | **GET** /quotations | Get a range of quotations
[**removeDocumentsFromQuotation**](QuotationApi.md#removeDocumentsFromQuotation) | **DELETE** /quotations/{quotation_id}/documents | Remove documents from a quotation
[**removeProductsFromQuotation**](QuotationApi.md#removeProductsFromQuotation) | **DELETE** /quotations/{quotation_id}/products | Remove products from a quotation
[**removePurchaseOrdersFromQuotation**](QuotationApi.md#removePurchaseOrdersFromQuotation) | **DELETE** /quotations/{quotation_id}/purchase_orders | Remove purchase orders from a quotation
[**replaceDocumentsOfQuotation**](QuotationApi.md#replaceDocumentsOfQuotation) | **PATCH** /quotations/{quotation_id}/documents | Replace the documents of a quotation
[**replaceProductsOfQuotation**](QuotationApi.md#replaceProductsOfQuotation) | **PATCH** /quotations/{quotation_id}/products | Replace the products of a quotation
[**replacePurchaseOrdersOfQuotation**](QuotationApi.md#replacePurchaseOrdersOfQuotation) | **PATCH** /quotations/{quotation_id}/purchase_orders | Replace the purchase orders of a quotation
[**updateProductQuantitiesOfQuotation**](QuotationApi.md#updateProductQuantitiesOfQuotation) | **PATCH** /quotations/{quotation_id}/products/quantity | Change the product quantity in a quotation
[**updateQuotation**](QuotationApi.md#updateQuotation) | **PATCH** /quotations/{id} | Update a quotation


<a name="addDocumentsToQuotation"></a>
# **addDocumentsToQuotation**
> addDocumentsToQuotation(quotationId, body)

Add documents to a quotation

Add one or more documents to a quotation.

### Example
```javascript
var NetilionApiDocumentation = require('netilion_api_documentation');
var defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
var API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: Authentication
var Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

var apiInstance = new NetilionApiDocumentation.QuotationApi();

var quotationId = 789; // Number | Id of the quotation to which the documents will be added

var body = new NetilionApiDocumentation.DocumentIDs(); // DocumentIDs | Resources that shall be added.

apiInstance.addDocumentsToQuotation(quotationId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quotationId** | **Number**| Id of the quotation to which the documents will be added | 
 **body** | [**DocumentIDs**](DocumentIDs.md)| Resources that shall be added. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addProductsToQuotation"></a>
# **addProductsToQuotation**
> addProductsToQuotation(quotationId, body)

Add products to a quotation

Add one or more products to a quotation.

### Example
```javascript
var NetilionApiDocumentation = require('netilion_api_documentation');
var defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
var API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: Authentication
var Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

var apiInstance = new NetilionApiDocumentation.QuotationApi();

var quotationId = 789; // Number | Id of the quotation to which the products will be added

var body = new NetilionApiDocumentation.ProductIDs(); // ProductIDs | Resources that shall be added.

apiInstance.addProductsToQuotation(quotationId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quotationId** | **Number**| Id of the quotation to which the products will be added | 
 **body** | [**ProductIDs**](ProductIDs.md)| Resources that shall be added. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addPurchaseOrdersToQuotation"></a>
# **addPurchaseOrdersToQuotation**
> addPurchaseOrdersToQuotation(quotationId, body)

Add purchase orders to a quotation

Add one or more purchase orders to a quotation.

### Example
```javascript
var NetilionApiDocumentation = require('netilion_api_documentation');
var defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
var API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: Authentication
var Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

var apiInstance = new NetilionApiDocumentation.QuotationApi();

var quotationId = 789; // Number | Id of the quotation to which the purchase orders will be added

var body = new NetilionApiDocumentation.PurchaseOrderIDs(); // PurchaseOrderIDs | Resources that shall be added.

apiInstance.addPurchaseOrdersToQuotation(quotationId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quotationId** | **Number**| Id of the quotation to which the purchase orders will be added | 
 **body** | [**PurchaseOrderIDs**](PurchaseOrderIDs.md)| Resources that shall be added. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createQuotation"></a>
# **createQuotation**
> QuotationResponse createQuotation(body)

Create a new quotation

Create a new quotation with a sender and a receiver.

### Example
```javascript
var NetilionApiDocumentation = require('netilion_api_documentation');
var defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
var API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: Authentication
var Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

var apiInstance = new NetilionApiDocumentation.QuotationApi();

var body = new NetilionApiDocumentation.QuotationRequest(); // QuotationRequest | Object body that will be created.

apiInstance.createQuotation(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**QuotationRequest**](QuotationRequest.md)| Object body that will be created. | 

### Return type

[**QuotationResponse**](QuotationResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteQuotation"></a>
# **deleteQuotation**
> deleteQuotation(id)

Delete a quotation

Delete a specific resource identified by the id in the URL.

### Example
```javascript
var NetilionApiDocumentation = require('netilion_api_documentation');
var defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
var API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: Authentication
var Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

var apiInstance = new NetilionApiDocumentation.QuotationApi();

var id = 789; // Number | Id of the quotation to delete

apiInstance.deleteQuotation(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the quotation to delete | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentsOfQuotation"></a>
# **getDocumentsOfQuotation**
> DocumentsResponse getDocumentsOfQuotation(quotationId, opts)

Get all documents of one quotation

Returns a list of documents. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language. Possible include values: &#x60;&#x60;&#x60;status, tenant, classification, categories, categories.parent, attachments&#x60;&#x60;&#x60;

### Example
```javascript
var NetilionApiDocumentation = require('netilion_api_documentation');
var defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
var API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: Authentication
var Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

var apiInstance = new NetilionApiDocumentation.QuotationApi();

var quotationId = 789; // Number | The resource defined in the URL

var opts = { 
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
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getDocumentsOfQuotation(quotationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quotationId** | **Number**| The resource defined in the URL | 
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
 **acceptLanguage** | **String**| The client&#39;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**DocumentsResponse**](DocumentsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProductsOfQuotation"></a>
# **getProductsOfQuotation**
> ProductsResponse getProductsOfQuotation(quotationId, opts)

Get all products of one quotation

Returns a list of all products that are available in your scope. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.

### Example
```javascript
var NetilionApiDocumentation = require('netilion_api_documentation');
var defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
var API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: Authentication
var Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

var apiInstance = new NetilionApiDocumentation.QuotationApi();

var quotationId = 789; // Number | The resource defined in the URL

var opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'productCode': "productCode_example", // String | Filter accepts `*` as wildcard
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'manufacturerId': "manufacturerId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'statusId': "statusId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'parentId': "parentId_example", // String | One or multiple ids (comma list). \"null\" to retrieve all objects without parent, \"!null\" for all objects with parent.
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getProductsOfQuotation(quotationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quotationId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **productCode** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **manufacturerId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **statusId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **parentId** | **String**| One or multiple ids (comma list). \&quot;null\&quot; to retrieve all objects without parent, \&quot;!null\&quot; for all objects with parent. | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 
 **acceptLanguage** | **String**| The client&#39;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**ProductsResponse**](ProductsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPurchaseOrdersOfQuotation"></a>
# **getPurchaseOrdersOfQuotation**
> PurchaseOrdersResponse getPurchaseOrdersOfQuotation(opts)

Get all purchase orders of one quotation

Returns a list of all purchase orders that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.

### Example
```javascript
var NetilionApiDocumentation = require('netilion_api_documentation');
var defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
var API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: Authentication
var Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

var apiInstance = new NetilionApiDocumentation.QuotationApi();

var opts = { 
  'quotationId': "quotationId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'name': "name_example", // String | Filter accepts `*` as wildcard
  '_number': "_number_example", // String | Filter accepts `*` as wildcard
  '_date': "_date_example", // String | Expected date format is YYYY-MM-DD
  'dateFrom': "dateFrom_example", // String | Expected date format is YYYY-MM-DD
  'dateTo': "dateTo_example", // String | Expected date format is YYYY-MM-DD
  'statusId': "statusId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'senderId': "senderId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'receiverId': "receiverId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getPurchaseOrdersOfQuotation(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quotationId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **_number** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **_date** | **String**| Expected date format is YYYY-MM-DD | [optional] 
 **dateFrom** | **String**| Expected date format is YYYY-MM-DD | [optional] 
 **dateTo** | **String**| Expected date format is YYYY-MM-DD | [optional] 
 **statusId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **senderId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **receiverId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**PurchaseOrdersResponse**](PurchaseOrdersResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getQuotationById"></a>
# **getQuotationById**
> QuotationResponse getQuotationById(id)

Get a single quotation

Get a specific quotation identified by the id in the URL.

### Example
```javascript
var NetilionApiDocumentation = require('netilion_api_documentation');
var defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
var API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: Authentication
var Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

var apiInstance = new NetilionApiDocumentation.QuotationApi();

var id = 789; // Number | Id of the quotation to fetch

apiInstance.getQuotationById(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the quotation to fetch | 

### Return type

[**QuotationResponse**](QuotationResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getQuotationIdStatus"></a>
# **getQuotationIdStatus**
> QuotationStatusResponse getQuotationIdStatus(quotationId, opts)

Get the status of the specific quotation

Returns the status of the quotation. Needed if only permission on quotation but not on tenant. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language. Possible include value: &#x60;&#x60;&#x60;tenant&#x60;&#x60;&#x60;

### Example
```javascript
var NetilionApiDocumentation = require('netilion_api_documentation');
var defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
var API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: Authentication
var Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

var apiInstance = new NetilionApiDocumentation.QuotationApi();

var quotationId = 789; // Number | Id of the specified quotation

var opts = { 
  'include': "include_example", // String | Comma separated list of objects to include in response
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getQuotationIdStatus(quotationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quotationId** | **Number**| Id of the specified quotation | 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 
 **acceptLanguage** | **String**| The client&#39;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**QuotationStatusResponse**](QuotationStatusResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getQuotations"></a>
# **getQuotations**
> QuotationsResponse getQuotations(opts)

Get a range of quotations

Returns a list of quotations. If the query has no matches, the response is an empty list.

### Example
```javascript
var NetilionApiDocumentation = require('netilion_api_documentation');
var defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
var API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: Authentication
var Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

var apiInstance = new NetilionApiDocumentation.QuotationApi();

var opts = { 
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
apiInstance.getQuotations(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeDocumentsFromQuotation"></a>
# **removeDocumentsFromQuotation**
> removeDocumentsFromQuotation(quotationId, body)

Remove documents from a quotation

Remove one or more documents from a quotation.

### Example
```javascript
var NetilionApiDocumentation = require('netilion_api_documentation');
var defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
var API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: Authentication
var Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

var apiInstance = new NetilionApiDocumentation.QuotationApi();

var quotationId = 789; // Number | Id of the quotation from which the documents will be removed

var body = new NetilionApiDocumentation.DocumentIDs(); // DocumentIDs | Resources that shall be removed.

apiInstance.removeDocumentsFromQuotation(quotationId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quotationId** | **Number**| Id of the quotation from which the documents will be removed | 
 **body** | [**DocumentIDs**](DocumentIDs.md)| Resources that shall be removed. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeProductsFromQuotation"></a>
# **removeProductsFromQuotation**
> removeProductsFromQuotation(quotationId, body)

Remove products from a quotation

Remove one or more products from a quotation.

### Example
```javascript
var NetilionApiDocumentation = require('netilion_api_documentation');
var defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
var API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: Authentication
var Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

var apiInstance = new NetilionApiDocumentation.QuotationApi();

var quotationId = 789; // Number | Id of the quotation from which the products will be removed

var body = new NetilionApiDocumentation.ProductIDs(); // ProductIDs | Resources that shall be removed.

apiInstance.removeProductsFromQuotation(quotationId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quotationId** | **Number**| Id of the quotation from which the products will be removed | 
 **body** | [**ProductIDs**](ProductIDs.md)| Resources that shall be removed. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removePurchaseOrdersFromQuotation"></a>
# **removePurchaseOrdersFromQuotation**
> removePurchaseOrdersFromQuotation(quotationId, body)

Remove purchase orders from a quotation

Remove one or more purchase orders from a quotation.

### Example
```javascript
var NetilionApiDocumentation = require('netilion_api_documentation');
var defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
var API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: Authentication
var Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

var apiInstance = new NetilionApiDocumentation.QuotationApi();

var quotationId = 789; // Number | Id of the quotation from which the purchase orders will be removed

var body = new NetilionApiDocumentation.PurchaseOrderIDs(); // PurchaseOrderIDs | Resources that shall be removed.

apiInstance.removePurchaseOrdersFromQuotation(quotationId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quotationId** | **Number**| Id of the quotation from which the purchase orders will be removed | 
 **body** | [**PurchaseOrderIDs**](PurchaseOrderIDs.md)| Resources that shall be removed. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceDocumentsOfQuotation"></a>
# **replaceDocumentsOfQuotation**
> replaceDocumentsOfQuotation(quotationId, body)

Replace the documents of a quotation

Replaces all documents belonging to a quotation. You can send a list of resources that will replace all previous values.

### Example
```javascript
var NetilionApiDocumentation = require('netilion_api_documentation');
var defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
var API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: Authentication
var Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

var apiInstance = new NetilionApiDocumentation.QuotationApi();

var quotationId = 789; // Number | Id of the quotation of which the documents will be replaced

var body = new NetilionApiDocumentation.DocumentIDs(); // DocumentIDs | Resources that shall be replaced

apiInstance.replaceDocumentsOfQuotation(quotationId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quotationId** | **Number**| Id of the quotation of which the documents will be replaced | 
 **body** | [**DocumentIDs**](DocumentIDs.md)| Resources that shall be replaced | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceProductsOfQuotation"></a>
# **replaceProductsOfQuotation**
> replaceProductsOfQuotation(quotationId, body)

Replace the products of a quotation

Replaces all products belonging to a quotation. You can send a list of resources that will replace all previous values.

### Example
```javascript
var NetilionApiDocumentation = require('netilion_api_documentation');
var defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
var API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: Authentication
var Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

var apiInstance = new NetilionApiDocumentation.QuotationApi();

var quotationId = 789; // Number | Id of the quotation of which the products will be replaced

var body = new NetilionApiDocumentation.ProductIDs(); // ProductIDs | Resources that shall be replaced

apiInstance.replaceProductsOfQuotation(quotationId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quotationId** | **Number**| Id of the quotation of which the products will be replaced | 
 **body** | [**ProductIDs**](ProductIDs.md)| Resources that shall be replaced | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replacePurchaseOrdersOfQuotation"></a>
# **replacePurchaseOrdersOfQuotation**
> replacePurchaseOrdersOfQuotation(quotationId, body)

Replace the purchase orders of a quotation

Replaces all purchase orders belonging to a quotation. You can send a list of resources that will replace all previous values.

### Example
```javascript
var NetilionApiDocumentation = require('netilion_api_documentation');
var defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
var API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: Authentication
var Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

var apiInstance = new NetilionApiDocumentation.QuotationApi();

var quotationId = 789; // Number | Id of the quotation of which the purchase orders will be replaced

var body = new NetilionApiDocumentation.PurchaseOrderIDs(); // PurchaseOrderIDs | Resources that shall be replaced

apiInstance.replacePurchaseOrdersOfQuotation(quotationId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quotationId** | **Number**| Id of the quotation of which the purchase orders will be replaced | 
 **body** | [**PurchaseOrderIDs**](PurchaseOrderIDs.md)| Resources that shall be replaced | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateProductQuantitiesOfQuotation"></a>
# **updateProductQuantitiesOfQuotation**
> updateProductQuantitiesOfQuotation(quotationId, body)

Change the product quantity in a quotation

Sets a new quantity of a product in a quotation or deletes the line in case quantity is zero.

### Example
```javascript
var NetilionApiDocumentation = require('netilion_api_documentation');
var defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
var API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: Authentication
var Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

var apiInstance = new NetilionApiDocumentation.QuotationApi();

var quotationId = 789; // Number | Id of the quotation of which the change will be done

var body = new NetilionApiDocumentation.ProductQuantity(); // ProductQuantity | Resources that shall be changed or removed

apiInstance.updateProductQuantitiesOfQuotation(quotationId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quotationId** | **Number**| Id of the quotation of which the change will be done | 
 **body** | [**ProductQuantity**](ProductQuantity.md)| Resources that shall be changed or removed | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateQuotation"></a>
# **updateQuotation**
> updateQuotation(id, body)

Update a quotation

Update accessible parameters of the requested resource.

### Example
```javascript
var NetilionApiDocumentation = require('netilion_api_documentation');
var defaultClient = NetilionApiDocumentation.ApiClient.instance;

// Configure API key authorization: API-Key
var API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: Authentication
var Authentication = defaultClient.authentications['Authentication'];
Authentication.username = 'YOUR USERNAME';
Authentication.password = 'YOUR PASSWORD';

var apiInstance = new NetilionApiDocumentation.QuotationApi();

var id = 789; // Number | Id of the quotation to update

var body = new NetilionApiDocumentation.QuotationRequest(); // QuotationRequest | Parameters that shall be updated.

apiInstance.updateQuotation(id, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the quotation to update | 
 **body** | [**QuotationRequest**](QuotationRequest.md)| Parameters that shall be updated. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

