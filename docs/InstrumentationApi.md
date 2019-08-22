# NetilionApiDocumentation.InstrumentationApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAssetsToInstrumentation**](InstrumentationApi.md#addAssetsToInstrumentation) | **POST** /instrumentations/{instrumentation_id}/assets | Add assets to an instrumentation
[**addBillOfMaterialsToInstrumentation**](InstrumentationApi.md#addBillOfMaterialsToInstrumentation) | **POST** /instrumentations/{instrumentation_id}/bill_of_materials | Add bill of materials to an instrumentation
[**addDocumentsToInstrumentation**](InstrumentationApi.md#addDocumentsToInstrumentation) | **POST** /instrumentations/{instrumentation_id}/documents | Add documents to an instrumentation
[**addInstrumentationPictureLink**](InstrumentationApi.md#addInstrumentationPictureLink) | **POST** /instrumentations/{id}/pictures/links | Add a link as instrumentation picture
[**addNodesToInstrumentation**](InstrumentationApi.md#addNodesToInstrumentation) | **POST** /instrumentations/{instrumentation_id}/nodes | Add nodes to an instrumentation
[**createEventForInstrumentation**](InstrumentationApi.md#createEventForInstrumentation) | **POST** /instrumentations/{instrumentation_id}/events | Create a new event for an instrumentation
[**createInstrumentation**](InstrumentationApi.md#createInstrumentation) | **POST** /instrumentations | Create a new instrumentation
[**deleteInstrumentation**](InstrumentationApi.md#deleteInstrumentation) | **DELETE** /instrumentations/{id} | Delete an instrumentation
[**deleteInstrumentationPicture**](InstrumentationApi.md#deleteInstrumentationPicture) | **DELETE** /instrumentations/{instrumentation_id}/pictures/{id} | Delete an instrumentation picture
[**downloadInstrumentationPicture**](InstrumentationApi.md#downloadInstrumentationPicture) | **GET** /instrumentations/{instrumentation_id}/pictures/{id}/download | Download an instrumentation picture
[**getAssetsOfInstrumentation**](InstrumentationApi.md#getAssetsOfInstrumentation) | **GET** /instrumentations/{instrumentation_id}/assets | Get all assets of one instrumentation
[**getAssetsOfInstrumentationHistory**](InstrumentationApi.md#getAssetsOfInstrumentationHistory) | **GET** /instrumentations/{instrumentation_id}/assets/history | Get all assets an instrumentation was assigned to
[**getBillOfMaterialsOfInstrumentation**](InstrumentationApi.md#getBillOfMaterialsOfInstrumentation) | **GET** /instrumentations/{instrumentation_id}/bill_of_materials | Get all bill of materials of an instrumentation
[**getDocumentsOfInstrumentation**](InstrumentationApi.md#getDocumentsOfInstrumentation) | **GET** /instrumentations/{instrumentation_id}/documents | Get all documents of an instrumentation
[**getEventsOfInstrumentation**](InstrumentationApi.md#getEventsOfInstrumentation) | **GET** /instrumentations/{instrumentation_id}/events | Get all events of one instrumentation
[**getInstrumentationById**](InstrumentationApi.md#getInstrumentationById) | **GET** /instrumentations/{id} | Get a single instrumentation
[**getInstrumentationIdStatus**](InstrumentationApi.md#getInstrumentationIdStatus) | **GET** /instrumentations/{instrumentation_id}/status | Get the status of the specific instrumentation
[**getInstrumentationIdType**](InstrumentationApi.md#getInstrumentationIdType) | **GET** /instrumentations/{instrumentation_id}/type | Get the type of the specific instrumentation
[**getInstrumentationPicture**](InstrumentationApi.md#getInstrumentationPicture) | **GET** /instrumentations/{instrumentation_id}/pictures/{id} | Get an instrumentation picture
[**getInstrumentationPictures**](InstrumentationApi.md#getInstrumentationPictures) | **GET** /instrumentations/{id}/pictures | Get instrumentation pictures
[**getInstrumentationStatusesOptions**](InstrumentationApi.md#getInstrumentationStatusesOptions) | **GET** /instrumentations/{instrumentation_id}/status-options | Get all possible statuses of the specified instrumentation
[**getInstrumentationTypesOptions**](InstrumentationApi.md#getInstrumentationTypesOptions) | **GET** /instrumentations/{instrumentation_id}/type-options | Get all possible types of the specified instrumentation
[**getInstrumentations**](InstrumentationApi.md#getInstrumentations) | **GET** /instrumentations | Get a range of instrumentations
[**getNodesOfInstrumentation**](InstrumentationApi.md#getNodesOfInstrumentation) | **GET** /instrumentations/{instrumentation_id}/nodes | Get all nodes of one Instrumentation
[**getSpecificationHistoryOfInstrumentation**](InstrumentationApi.md#getSpecificationHistoryOfInstrumentation) | **GET** /instrumentations/{instrumentation_id}/specifications/{key}/history | Get the history of one specification attribute of an instrumentation.
[**getSpecificationsOfInstrumentation**](InstrumentationApi.md#getSpecificationsOfInstrumentation) | **GET** /instrumentations/{instrumentation_id}/specifications | Get specifications of an instrumentation
[**removeAssetsFromInstrumentation**](InstrumentationApi.md#removeAssetsFromInstrumentation) | **DELETE** /instrumentations/{instrumentation_id}/assets | Remove assets from an instrumentation
[**removeBillOfMaterialsFromInstrumentation**](InstrumentationApi.md#removeBillOfMaterialsFromInstrumentation) | **DELETE** /instrumentations/{instrumentation_id}/bill_of_materials | Remove bill of materials from an instrumentation
[**removeDocumentsFromInstrumentation**](InstrumentationApi.md#removeDocumentsFromInstrumentation) | **DELETE** /instrumentations/{instrumentation_id}/documents | Remove documents from an instrumentation
[**removeEventFromInstrumentation**](InstrumentationApi.md#removeEventFromInstrumentation) | **DELETE** /instrumentations/{instrumentation_id}/events | Remove events from an instrumentation
[**removeNodesFromInstrumentation**](InstrumentationApi.md#removeNodesFromInstrumentation) | **DELETE** /instrumentations/{instrumentation_id}/nodes | Remove nodes from an instrumentation
[**removeSpecificationsFromInstrumentation**](InstrumentationApi.md#removeSpecificationsFromInstrumentation) | **DELETE** /instrumentations/{instrumentation_id}/specifications | Delete specifications of an instrumentation
[**renameSpecificationsOfInstrumentation**](InstrumentationApi.md#renameSpecificationsOfInstrumentation) | **PATCH** /instrumentations/{instrumentation_id}/specifications/rename | Rename a specification key
[**replaceAssetsOfInstrumentation**](InstrumentationApi.md#replaceAssetsOfInstrumentation) | **PATCH** /instrumentations/{instrumentation_id}/assets | Replace the assets of an instrumentation
[**replaceBillOfMaterialsOfInstrumentation**](InstrumentationApi.md#replaceBillOfMaterialsOfInstrumentation) | **PATCH** /instrumentations/{instrumentation_id}/bill_of_materials | Replace the bill of materials of an instrumentation
[**replaceDocumentsOfInstrumentation**](InstrumentationApi.md#replaceDocumentsOfInstrumentation) | **PATCH** /instrumentations/{instrumentation_id}/documents | Replace the documents of an instrumentation
[**replaceNodesOfInstrumentation**](InstrumentationApi.md#replaceNodesOfInstrumentation) | **PATCH** /instrumentations/{instrumentation_id}/nodes | Replace the nodes of an instrumentation
[**updateInstrumentation**](InstrumentationApi.md#updateInstrumentation) | **PATCH** /instrumentations/{id} | Update an instrumentation
[**updateInstrumentationPicture**](InstrumentationApi.md#updateInstrumentationPicture) | **PATCH** /instrumentations/{instrumentation_id}/pictures/{id} | Update an instrumentation picture
[**updateInstrumentationPictureLink**](InstrumentationApi.md#updateInstrumentationPictureLink) | **PATCH** /instrumentations/{instrumentation_id}/pictures/links/{id} | Update an instrumentation picture link
[**updateSpecificationsOfInstrumentation**](InstrumentationApi.md#updateSpecificationsOfInstrumentation) | **PATCH** /instrumentations/{instrumentation_id}/specifications | Update specifications of an instrumentation
[**uploadInstrumentationPicture**](InstrumentationApi.md#uploadInstrumentationPicture) | **POST** /instrumentations/{id}/pictures | Upload an instrumentation picture


<a name="addAssetsToInstrumentation"></a>
# **addAssetsToInstrumentation**
> addAssetsToInstrumentation(instrumentationId, body)

Add assets to an instrumentation

Add one or more assets to an instrumentation. This action requires &#x60;can_permit&#x60; permission on the instrumentation and on the asset.

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | Id of the instrumentation to which the assets will be added

var body = new NetilionApiDocumentation.AssetIDs(); // AssetIDs | Resources that shall be added.

apiInstance.addAssetsToInstrumentation(instrumentationId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation to which the assets will be added | 
 **body** | [**AssetIDs**](AssetIDs.md)| Resources that shall be added. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addBillOfMaterialsToInstrumentation"></a>
# **addBillOfMaterialsToInstrumentation**
> addBillOfMaterialsToInstrumentation(instrumentationId, body)

Add bill of materials to an instrumentation

Add one or more bill of materials to an instrumentation.

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | Id of the instrumentation to which the bill of materials will be added

var body = new NetilionApiDocumentation.BillOfMaterialIDs(); // BillOfMaterialIDs | Resources that shall be added.

apiInstance.addBillOfMaterialsToInstrumentation(instrumentationId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation to which the bill of materials will be added | 
 **body** | [**BillOfMaterialIDs**](BillOfMaterialIDs.md)| Resources that shall be added. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addDocumentsToInstrumentation"></a>
# **addDocumentsToInstrumentation**
> addDocumentsToInstrumentation(instrumentationId, body)

Add documents to an instrumentation

Add one or more documents to an instrumentation. This action requires &#x60;can_update&#x60; permission on the instrumentation and &#x60;can_read&#x60; permission on the document.

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | Id of the instrumentation to which the documents will be added

var body = new NetilionApiDocumentation.DocumentIDs(); // DocumentIDs | Resources that shall be added.

apiInstance.addDocumentsToInstrumentation(instrumentationId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation to which the documents will be added | 
 **body** | [**DocumentIDs**](DocumentIDs.md)| Resources that shall be added. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addInstrumentationPictureLink"></a>
# **addInstrumentationPictureLink**
> PictureResponse addInstrumentationPictureLink(id, body)

Add a link as instrumentation picture

Add an external resource as instrumentation picture.

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var id = 789; // Number | Id of the instrumentation

var body = new NetilionApiDocumentation.PictureLinkRequest(); // PictureLinkRequest | Picture link object to be created

apiInstance.addInstrumentationPictureLink(id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the instrumentation | 
 **body** | [**PictureLinkRequest**](PictureLinkRequest.md)| Picture link object to be created | 

### Return type

[**PictureResponse**](PictureResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addNodesToInstrumentation"></a>
# **addNodesToInstrumentation**
> addNodesToInstrumentation(instrumentationId, body)

Add nodes to an instrumentation

Add one or more nodes to an instrumentation in your accessible scope. This action requires &#x60;can_permit&#x60; permission on the instrumentation and on the node.

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | Id of the instrumentation to which the nodes will be added

var body = new NetilionApiDocumentation.NodeIDs(); // NodeIDs | Resources that shall be added.

apiInstance.addNodesToInstrumentation(instrumentationId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation to which the nodes will be added | 
 **body** | [**NodeIDs**](NodeIDs.md)| Resources that shall be added. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createEventForInstrumentation"></a>
# **createEventForInstrumentation**
> EventResponse createEventForInstrumentation(instrumentationId, body)

Create a new event for an instrumentation

Events must have a name, and can have a start_datetime (if not provided, the date of creation will be used as default value), end_datetime, event_type, event_status, description and responsible

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | Id of the instrumentation

var body = new NetilionApiDocumentation.EventRequestNoInstrumentations(); // EventRequestNoInstrumentations | Object to be created.

apiInstance.createEventForInstrumentation(instrumentationId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation | 
 **body** | [**EventRequestNoInstrumentations**](EventRequestNoInstrumentations.md)| Object to be created. | 

### Return type

[**EventResponse**](EventResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createInstrumentation"></a>
# **createInstrumentation**
> InstrumentationResponse createInstrumentation(body)

Create a new instrumentation

Create a new instrumentation. The tag of the given instrumentation needs to be unique within its parent. The instrumentation will not be created when this constraint is violated.  To assign a parent instrumentation the user needs &#x60;can_permit&#x60; permission on the parent.

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var body = new NetilionApiDocumentation.InstrumentationRequest(); // InstrumentationRequest | Instrumentation object that needs to be created. tag, instrumentation status and instrumentation type are required

apiInstance.createInstrumentation(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InstrumentationRequest**](InstrumentationRequest.md)| Instrumentation object that needs to be created. tag, instrumentation status and instrumentation type are required | 

### Return type

[**InstrumentationResponse**](InstrumentationResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteInstrumentation"></a>
# **deleteInstrumentation**
> deleteInstrumentation(id)

Delete an instrumentation

Delete a specific resource in your accessible scope, identified by the id in the URL.

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var id = 789; // Number | Id of the instrumentation to delete

apiInstance.deleteInstrumentation(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the instrumentation to delete | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteInstrumentationPicture"></a>
# **deleteInstrumentationPicture**
> deleteInstrumentationPicture(instrumentationId, id)

Delete an instrumentation picture

Delete an instrumentation picture.

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | Id of the instrumentation

var id = 789; // Number | Id of the instrumentation picture

apiInstance.deleteInstrumentationPicture(instrumentationId, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation | 
 **id** | **Number**| Id of the instrumentation picture | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="downloadInstrumentationPicture"></a>
# **downloadInstrumentationPicture**
> downloadInstrumentationPicture(instrumentationId, id)

Download an instrumentation picture

Download an instrumentation picture.

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | Id of the instrumentation

var id = 789; // Number | Id of the instrumentation picture

apiInstance.downloadInstrumentationPicture(instrumentationId, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation | 
 **id** | **Number**| Id of the instrumentation picture | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAssetsOfInstrumentation"></a>
# **getAssetsOfInstrumentation**
> AssetsResponse getAssetsOfInstrumentation(instrumentationId, , opts)

Get all assets of one instrumentation

Returns a list of all assets that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.  Possible include values: &#x60;&#x60;&#x60;status, tenant, parent, pictures, product, product.manufacturer, product.pictures, product.status, product.categories, product.categories.parent, specifications, specifications[key1,key2], product.tenant,                             product.manufacturer.tenant, status.tenant, instrumentations &#x60;&#x60;&#x60;

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | The resource defined in the URL

var opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'serialNumber': "serialNumber_example", // String | Filter accepts `*` as wildcard
  'productId': "productId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'productCategoryId': "productCategoryId_example", // String | One or multiple ids (comma list). By adding `+` after the id, the filter considers the given category and all its children (e.g. 3+).
  'parentId': "parentId_example", // String | One or multiple ids (comma list). \"null\" to retrieve all objects without parent, \"!null\" for all objects with parent.
  'manufacturerId': "manufacturerId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'statusId': "statusId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'statusCode': "statusCode_example", // String | Filter accepts `*` as wildcard
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'productionDate': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'productionDateFrom': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'productionDateTo': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'specificationsKey': "specificationsKey_example", // String | Filter accepts `*` as wildcard (if used as single specifications filter), supports comma list of keys in connection with specifications_value filter
  'specificationsValue': "specificationsValue_example", // String | Filter accepts `*` as wildcard, supports comma list of values in connection with specifications_key filter. Does not work for vectors
  'nodeId': "nodeId_example", // String | One or multiple ids (comma list). Filter acccepts \"null\" for all objects with no nodes assigned or \"!null\" for any assigned node
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `serial_number`, `created_at` or `updated_at`, `last_seen_at`, add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getAssetsOfInstrumentation(instrumentationId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 
 **serialNumber** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **productId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **productCategoryId** | **String**| One or multiple ids (comma list). By adding &#x60;+&#x60; after the id, the filter considers the given category and all its children (e.g. 3+). | [optional] 
 **parentId** | **String**| One or multiple ids (comma list). \&quot;null\&quot; to retrieve all objects without parent, \&quot;!null\&quot; for all objects with parent. | [optional] 
 **manufacturerId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **statusId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **statusCode** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **productionDate** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **productionDateFrom** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **productionDateTo** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **specificationsKey** | **String**| Filter accepts &#x60;*&#x60; as wildcard (if used as single specifications filter), supports comma list of keys in connection with specifications_value filter | [optional] 
 **specificationsValue** | **String**| Filter accepts &#x60;*&#x60; as wildcard, supports comma list of values in connection with specifications_key filter. Does not work for vectors | [optional] 
 **nodeId** | **String**| One or multiple ids (comma list). Filter acccepts \&quot;null\&quot; for all objects with no nodes assigned or \&quot;!null\&quot; for any assigned node | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;serial_number&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;, &#x60;last_seen_at&#x60;, add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**AssetsResponse**](AssetsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAssetsOfInstrumentationHistory"></a>
# **getAssetsOfInstrumentationHistory**
> InstrumentationAssetsHistoryResponse getAssetsOfInstrumentationHistory(instrumentationId, , opts)

Get all assets an instrumentation was assigned to

Returns a list of all assets history available in your scope which have been assigned to the specified instrumentation. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | The resource defined in the URL

var opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'assetId': "assetId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'event': "event_example", // String | Filter accepts `create` or `destroy`
  'eventDatetimeFrom': new Date("2013-10-20"), // Date | Starting with + will include the previous value as well. Expected date format is YYYY-MM-DDThh:mm:ss
  'eventDatetimeTo': new Date("2013-10-20"), // Date | Ending with + will include the next value as well. Expected date format is YYYY-MM-DDThh:mm:ss
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `event` or `event_datetime`, add `-` as a prefix for descending order.
};
apiInstance.getAssetsOfInstrumentationHistory(instrumentationId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **assetId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **event** | **String**| Filter accepts &#x60;create&#x60; or &#x60;destroy&#x60; | [optional] 
 **eventDatetimeFrom** | **Date**| Starting with + will include the previous value as well. Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **eventDatetimeTo** | **Date**| Ending with + will include the next value as well. Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;event&#x60; or &#x60;event_datetime&#x60;, add &#x60;-&#x60; as a prefix for descending order. | [optional] 

### Return type

[**InstrumentationAssetsHistoryResponse**](InstrumentationAssetsHistoryResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBillOfMaterialsOfInstrumentation"></a>
# **getBillOfMaterialsOfInstrumentation**
> BillOfMaterialsResponse getBillOfMaterialsOfInstrumentation(instrumentationId, , opts)

Get all bill of materials of an instrumentation

Returns a list of all bill of materials that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | The resource defined in the URL

var opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'author': "author_example", // String | Filter accepts `*` as wildcard
  '_date': "_date_example", // String | Expected date format is YYYY-MM-DD
  'dateFrom': "dateFrom_example", // String | Expected date format is YYYY-MM-DD
  'dateTo': "dateTo_example", // String | Expected date format is YYYY-MM-DD
};
apiInstance.getBillOfMaterialsOfInstrumentation(instrumentationId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **author** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **_date** | **String**| Expected date format is YYYY-MM-DD | [optional] 
 **dateFrom** | **String**| Expected date format is YYYY-MM-DD | [optional] 
 **dateTo** | **String**| Expected date format is YYYY-MM-DD | [optional] 

### Return type

[**BillOfMaterialsResponse**](BillOfMaterialsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentsOfInstrumentation"></a>
# **getDocumentsOfInstrumentation**
> DocumentsResponse getDocumentsOfInstrumentation(instrumentationId, , opts)

Get all documents of an instrumentation

Returns a list of documents. If the query has no matches, the response is an empty list.  Possible include values: &#x60;&#x60;&#x60;status, tenant, classification, categories, categories.parent, attachments&#x60;&#x60;&#x60;

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | The resource defined in the URL

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
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getDocumentsOfInstrumentation(instrumentationId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| The resource defined in the URL | 
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
 **acceptLanguage** | **String**| The client&#39;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**DocumentsResponse**](DocumentsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEventsOfInstrumentation"></a>
# **getEventsOfInstrumentation**
> EventsResponse getEventsOfInstrumentation(instrumentationId, , opts)

Get all events of one instrumentation

Returns a list of all events belonging to an instrumentation in your accessible scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.  Possible include values: &#x60;&#x60;assets, instrumentations, status, type&#x60;&#x60;

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | The resource defined in the URL

var opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'typeId': "typeId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'statusId': "statusId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'startDatetime': "startDatetime_example", // String | Expected date format is YYYY-MM-DDThh:mm:ss
  'startDatetimeFrom': "startDatetimeFrom_example", // String | Expected date format is YYYY-MM-DDThh:mm:ss
  'startDatetimeTo': "startDatetimeTo_example", // String | Expected date format is YYYY-MM-DDThh:mm:ss
  'endDatetime': "endDatetime_example", // String | Expected date format is YYYY-MM-DDThh:mm:ss
  'endDatetimeFrom': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DDThh:mm:ss
  'endDatetimeTo': "endDatetimeTo_example", // String | Expected date format is YYYY-MM-DDThh:mm:ss
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `start_datetime`, `end_datetime`, `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getEventsOfInstrumentation(instrumentationId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **typeId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **statusId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **startDatetime** | **String**| Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **startDatetimeFrom** | **String**| Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **startDatetimeTo** | **String**| Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **endDatetime** | **String**| Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **endDatetimeFrom** | **Date**| Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **endDatetimeTo** | **String**| Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;start_datetime&#x60;, &#x60;end_datetime&#x60;, &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**EventsResponse**](EventsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInstrumentationById"></a>
# **getInstrumentationById**
> InstrumentationResponse getInstrumentationById(id, opts)

Get a single instrumentation

Get a specific instrumentation in your accessible scope, identified by the id in the URL.  Possible include values: &#x60;&#x60;&#x60;specifications, specifications[key1,key2], pictures, tenant, parent, status, type, type.parent, type.tenant, values, values.unit, values.asset &#x60;&#x60;&#x60; 

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var id = 789; // Number | Id of the instrumentation to fetch

var opts = { 
  'include': "include_example", // String | Comma separated list of objects to include in response
};
apiInstance.getInstrumentationById(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the instrumentation to fetch | 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 

### Return type

[**InstrumentationResponse**](InstrumentationResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInstrumentationIdStatus"></a>
# **getInstrumentationIdStatus**
> InstrumentationStatusResponse getInstrumentationIdStatus(instrumentationId, opts)

Get the status of the specific instrumentation

Returns the status of the instrumentation. Needed if only permission on instrumentation but not on tenant. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translations set Accept-Language.

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | Id of the instrumentation

var opts = { 
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getInstrumentationIdStatus(instrumentationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation | 
 **acceptLanguage** | **String**| The client&#39;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**InstrumentationStatusResponse**](InstrumentationStatusResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInstrumentationIdType"></a>
# **getInstrumentationIdType**
> InstrumentationTypeResponse getInstrumentationIdType(instrumentationId, opts)

Get the type of the specific instrumentation

Returns the type of the instrumentation. Needed if only permission on instrumentation but not on tenant. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translations set Accept-Language. Possible include values: &#x60;&#x60;&#x60;parent&#x60;&#x60;&#x60;

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | Id of the instrumentation

var opts = { 
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getInstrumentationIdType(instrumentationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation | 
 **acceptLanguage** | **String**| The client&#39;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**InstrumentationTypeResponse**](InstrumentationTypeResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInstrumentationPicture"></a>
# **getInstrumentationPicture**
> PictureResponse getInstrumentationPicture(instrumentationId, id)

Get an instrumentation picture

Get a single picture of an instrumentation.

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | Id of the instrumentation

var id = 789; // Number | Id of the instrumentation picture

apiInstance.getInstrumentationPicture(instrumentationId, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation | 
 **id** | **Number**| Id of the instrumentation picture | 

### Return type

[**PictureResponse**](PictureResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInstrumentationPictures"></a>
# **getInstrumentationPictures**
> PicturesResponse getInstrumentationPictures(id, opts)

Get instrumentation pictures

Get all pictures of an instrumentation.

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var id = 789; // Number | Id of the instrumentation

var opts = { 
  'width': 56, // Number | filter by width
  'widthFrom': 56, // Number | filter by width_from
  'widthTo': 56, // Number | filter by width_to
  'height': 56, // Number | filter by height
  'heightFrom': 56, // Number | filter by height_from
  'heightTo': 56 // Number | filter by height_to
};
apiInstance.getInstrumentationPictures(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the instrumentation | 
 **width** | **Number**| filter by width | [optional] 
 **widthFrom** | **Number**| filter by width_from | [optional] 
 **widthTo** | **Number**| filter by width_to | [optional] 
 **height** | **Number**| filter by height | [optional] 
 **heightFrom** | **Number**| filter by height_from | [optional] 
 **heightTo** | **Number**| filter by height_to | [optional] 

### Return type

[**PicturesResponse**](PicturesResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInstrumentationStatusesOptions"></a>
# **getInstrumentationStatusesOptions**
> InstrumentationStatuses getInstrumentationStatusesOptions(instrumentationId, opts)

Get all possible statuses of the specified instrumentation

Returns a list of all possible instrumentation statuses for the specified instrument. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translations set Accept-Language.

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | Id of the instrumentation

var opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'code': "code_example", // String | Filter accepts `*` as wildcard
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getInstrumentationStatusesOptions(instrumentationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **code** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **acceptLanguage** | **String**| The client&#39;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**InstrumentationStatuses**](InstrumentationStatuses.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInstrumentationTypesOptions"></a>
# **getInstrumentationTypesOptions**
> InstrumentationTypes getInstrumentationTypesOptions(instrumentationId, opts)

Get all possible types of the specified instrumentation

Returns a list of all possible instrumentation types for the specified instrument. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translations set Accept-Language.

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | Id of the instrumentation

var opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'code': "code_example", // String | Filter accepts `*` as wildcard
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getInstrumentationTypesOptions(instrumentationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **code** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **acceptLanguage** | **String**| The client&#39;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**InstrumentationTypes**](InstrumentationTypes.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInstrumentations"></a>
# **getInstrumentations**
> InstrumentationsResponse getInstrumentations(opts)

Get a range of instrumentations

Returns a list of instrumentations in your accessible scope. If the query has no matches, the response is an empty list.  Possible include values: &#x60;&#x60;&#x60;specifications, specifications[key1,key2], pictures, tenant, parent, status, type, type.tenant, type.parent&#x60;&#x60;&#x60; 

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'tag': "tag_example", // String | Filter accepts `*` as wildcard
  'statusId': "statusId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'typeId': "typeId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'parentId': "parentId_example", // String | One or multiple ids (comma list). \"null\" to retrieve all objects without parent, \"!null\" for all objects with parent.
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'specificationsKey': "specificationsKey_example", // String | Filter accepts `*` as wildcard (if used as single specifications filter), supports comma list of keys in connection with specifications_value filter
  'specificationsValue': "specificationsValue_example", // String | Filter accepts `*` as wildcard, supports comma list of values in connection with specifications_key filter. Does not work for vectors
  'criticality': "criticality_example", // String | Filter accepts undefined, low, medium or high
  'accessibility': "accessibility_example", // String | Filter accepts undefined, easy, moderate or difficult
  'nodeId': "nodeId_example", // String | One or multiple ids (comma list). Filter acccepts \"null\" for all objects with no nodes assigned or \"!null\" for any assigned node
  'assetId': "assetId_example", // String | One or multiple ids (comma list). Filter acccepts \"null\" for all objects with no nodes assigned or \"!null\" for any assigned node
  'assetStatusId': "assetStatusId_example", // String | One or multiple ids (comma list). Expected id format is integer. This retrieves all Instrumentations where at least one of its assets has one of the given statuses.
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `tag`, `created_at` or `updated_at`, add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getInstrumentations(opts).then(function(data) {
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
 **include** | **String**| Comma separated list of objects to include in response | [optional] 
 **tag** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **statusId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **typeId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **parentId** | **String**| One or multiple ids (comma list). \&quot;null\&quot; to retrieve all objects without parent, \&quot;!null\&quot; for all objects with parent. | [optional] 
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **specificationsKey** | **String**| Filter accepts &#x60;*&#x60; as wildcard (if used as single specifications filter), supports comma list of keys in connection with specifications_value filter | [optional] 
 **specificationsValue** | **String**| Filter accepts &#x60;*&#x60; as wildcard, supports comma list of values in connection with specifications_key filter. Does not work for vectors | [optional] 
 **criticality** | **String**| Filter accepts undefined, low, medium or high | [optional] 
 **accessibility** | **String**| Filter accepts undefined, easy, moderate or difficult | [optional] 
 **nodeId** | **String**| One or multiple ids (comma list). Filter acccepts \&quot;null\&quot; for all objects with no nodes assigned or \&quot;!null\&quot; for any assigned node | [optional] 
 **assetId** | **String**| One or multiple ids (comma list). Filter acccepts \&quot;null\&quot; for all objects with no nodes assigned or \&quot;!null\&quot; for any assigned node | [optional] 
 **assetStatusId** | **String**| One or multiple ids (comma list). Expected id format is integer. This retrieves all Instrumentations where at least one of its assets has one of the given statuses. | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;tag&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;, add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**InstrumentationsResponse**](InstrumentationsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNodesOfInstrumentation"></a>
# **getNodesOfInstrumentation**
> NodesResponse getNodesOfInstrumentation(instrumentationId, , opts)

Get all nodes of one Instrumentation

Returns a list of all nodes that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | The resource defined in the URL

var opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'typeId': "typeId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'parentId': "parentId_example", // String | One or multiple ids (comma list). \"null\" to retrieve all objects without parent, \"!null\" for all objects with parent.
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'hidden': true, // Boolean | Filter accepts true or false
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `name`, `created_at` or `updated_at`, add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getNodesOfInstrumentation(instrumentationId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **typeId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **parentId** | **String**| One or multiple ids (comma list). \&quot;null\&quot; to retrieve all objects without parent, \&quot;!null\&quot; for all objects with parent. | [optional] 
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **hidden** | **Boolean**| Filter accepts true or false | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;name&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;, add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**NodesResponse**](NodesResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSpecificationHistoryOfInstrumentation"></a>
# **getSpecificationHistoryOfInstrumentation**
> SpecificationHistoryResponse getSpecificationHistoryOfInstrumentation(instrumentationId, key, opts)

Get the history of one specification attribute of an instrumentation.

This might be useful for history data. The response contains a collection of historic values and when they&#x60;ve been updated. Since this can be a lot of data the service uses pagination. The history can be filtered by using a date range of source_timestamp and/or updated_at. Please consider that source_timestamp is not required and update on the attribute without giving a source_timestamp wont be included in the resulting response

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | Id of the specified instrumentation

var key = "key_example"; // String | the exact key

var opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'sourceTimestampFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | source_timestamp filter from. Starting with + will include the previous value as well. Expected date format is YYYY-MM-DDThh:mm:ss
  'sourceTimestampTo': new Date("2013-10-20T19:20:30+01:00"), // Date | source_timestamp filter to. Ending with + will include the next value as well. Expected date format is YYYY-MM-DDThh:mm:ss
  'updatedAtFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | updated_at filter from. Starting with + will include the previous value as well. Expected date format is YYYY-MM-DDThh:mm:ss
  'updatedAtTo': new Date("2013-10-20T19:20:30+01:00"), // Date | updated_at filter to. Ending with + will include the next value as well. Expected date format is YYYY-MM-DDThh:mm:ss
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `source_timestamp` or `updated_at`, add `-` as a prefix for descending order.
};
apiInstance.getSpecificationHistoryOfInstrumentation(instrumentationId, key, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the specified instrumentation | 
 **key** | **String**| the exact key | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **sourceTimestampFrom** | **Date**| source_timestamp filter from. Starting with + will include the previous value as well. Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **sourceTimestampTo** | **Date**| source_timestamp filter to. Ending with + will include the next value as well. Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **updatedAtFrom** | **Date**| updated_at filter from. Starting with + will include the previous value as well. Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **updatedAtTo** | **Date**| updated_at filter to. Ending with + will include the next value as well. Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;source_timestamp&#x60; or &#x60;updated_at&#x60;, add &#x60;-&#x60; as a prefix for descending order. | [optional] 

### Return type

[**SpecificationHistoryResponse**](SpecificationHistoryResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSpecificationsOfInstrumentation"></a>
# **getSpecificationsOfInstrumentation**
> SpecificationsResponse getSpecificationsOfInstrumentation(instrumentationId, opts)

Get specifications of an instrumentation

Returns the specification of an object in your accessible scope. If no specifications are defined, this is just an empty object. Specification must have the form below.

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | Id of the specified instrumentation

var opts = { 
  'key': "key_example" // String | Filter accepts '*' as wildcard
};
apiInstance.getSpecificationsOfInstrumentation(instrumentationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the specified instrumentation | 
 **key** | **String**| Filter accepts &#39;*&#39; as wildcard | [optional] 

### Return type

[**SpecificationsResponse**](SpecificationsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeAssetsFromInstrumentation"></a>
# **removeAssetsFromInstrumentation**
> removeAssetsFromInstrumentation(instrumentationId, body)

Remove assets from an instrumentation

Remove one or more assets from an instrumentation in your accessible scope. This action requires &#x60;can_permit&#x60; permission on the instrumentation and on the asset.

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | Id of the instrumentation from which the assets will be removed

var body = new NetilionApiDocumentation.AssetIDs(); // AssetIDs | Resources that shall be removed.

apiInstance.removeAssetsFromInstrumentation(instrumentationId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation from which the assets will be removed | 
 **body** | [**AssetIDs**](AssetIDs.md)| Resources that shall be removed. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeBillOfMaterialsFromInstrumentation"></a>
# **removeBillOfMaterialsFromInstrumentation**
> removeBillOfMaterialsFromInstrumentation(instrumentationId, body)

Remove bill of materials from an instrumentation

Remove one or more bill of materials from an instrumentation in your accessible scope.

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | Id of the instrumentation from which the bill of materials will be removed

var body = new NetilionApiDocumentation.BillOfMaterialIDs(); // BillOfMaterialIDs | Resources that shall be removed.

apiInstance.removeBillOfMaterialsFromInstrumentation(instrumentationId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation from which the bill of materials will be removed | 
 **body** | [**BillOfMaterialIDs**](BillOfMaterialIDs.md)| Resources that shall be removed. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeDocumentsFromInstrumentation"></a>
# **removeDocumentsFromInstrumentation**
> removeDocumentsFromInstrumentation(instrumentationId, body)

Remove documents from an instrumentation

Remove one or more documents from an instrumentation. This action requires &#x60;can_update&#x60; permission on the instrumentation and &#x60;can_read&#x60; permission on the document.

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | Id of the instrumentation from which the documents will be removed

var body = new NetilionApiDocumentation.DocumentIDs(); // DocumentIDs | Resources that shall be removed.

apiInstance.removeDocumentsFromInstrumentation(instrumentationId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation from which the documents will be removed | 
 **body** | [**DocumentIDs**](DocumentIDs.md)| Resources that shall be removed. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeEventFromInstrumentation"></a>
# **removeEventFromInstrumentation**
> removeEventFromInstrumentation(instrumentationId, body)

Remove events from an instrumentation

Remove one or more events from an instrumentation in your accessible scope. If the event has no more related instrumentations, the event will be deleted

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | Id of the instrumentation from which the events will removed.

var body = new NetilionApiDocumentation.Events1(); // Events1 | Resources that shall be removed.

apiInstance.removeEventFromInstrumentation(instrumentationId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation from which the events will removed. | 
 **body** | [**Events1**](Events1.md)| Resources that shall be removed. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeNodesFromInstrumentation"></a>
# **removeNodesFromInstrumentation**
> removeNodesFromInstrumentation(instrumentationId, body)

Remove nodes from an instrumentation

Remove one or more nodes from an instrumentation in your accessible scope. This action requires &#x60;can_permit&#x60; permission on the instrumentation and on the node.

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | Id of the instrumentation from which the nodes will be removed

var body = new NetilionApiDocumentation.NodeIDs(); // NodeIDs | Resources that shall be removed.

apiInstance.removeNodesFromInstrumentation(instrumentationId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation from which the nodes will be removed | 
 **body** | [**NodeIDs**](NodeIDs.md)| Resources that shall be removed. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeSpecificationsFromInstrumentation"></a>
# **removeSpecificationsFromInstrumentation**
> removeSpecificationsFromInstrumentation(instrumentationId, body)

Delete specifications of an instrumentation

The specification keys in the body will be removed of the object in your accessible scope. Multiple specification keys can be sent in the same request. If a key does not exist it will be ignored.

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | Id of the specified instrumentation

var body = new NetilionApiDocumentation.SpecificationsDelete(); // SpecificationsDelete | Array of keys to delete from specifications

apiInstance.removeSpecificationsFromInstrumentation(instrumentationId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the specified instrumentation | 
 **body** | [**SpecificationsDelete**](SpecificationsDelete.md)| Array of keys to delete from specifications | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="renameSpecificationsOfInstrumentation"></a>
# **renameSpecificationsOfInstrumentation**
> renameSpecificationsOfInstrumentation(instrumentationId, body)

Rename a specification key

Rename one specification key of an instrumentation in your accessible scope. The key name allows [a-z A-Z 0-9 . - _ ] all uppercase letters will be converted to lower-case.

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | Id of the specified instrumentation

var body = new NetilionApiDocumentation.SpecificationsRename(); // SpecificationsRename | The specifications object to patch.

apiInstance.renameSpecificationsOfInstrumentation(instrumentationId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the specified instrumentation | 
 **body** | [**SpecificationsRename**](SpecificationsRename.md)| The specifications object to patch. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceAssetsOfInstrumentation"></a>
# **replaceAssetsOfInstrumentation**
> replaceAssetsOfInstrumentation(instrumentationId, body)

Replace the assets of an instrumentation

Replaces all assets belonging to an instrumentation. You can send a list of resources that will replace all previous values. This action requires &#x60;can_permit&#x60; permission on the instrumentation and on the asset.

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | Id of the instrumentation of which the assets will be replaced

var body = new NetilionApiDocumentation.AssetIDs(); // AssetIDs | Resources that shall be replaced

apiInstance.replaceAssetsOfInstrumentation(instrumentationId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation of which the assets will be replaced | 
 **body** | [**AssetIDs**](AssetIDs.md)| Resources that shall be replaced | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceBillOfMaterialsOfInstrumentation"></a>
# **replaceBillOfMaterialsOfInstrumentation**
> replaceBillOfMaterialsOfInstrumentation(instrumentationId, body)

Replace the bill of materials of an instrumentation

Replaces all bill of materials belonging to an instrumentation. You can send a list of resources that will replace all previous values.

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | Id of the instrumentation of which the bill of materials will be replaced

var body = new NetilionApiDocumentation.BillOfMaterialIDs(); // BillOfMaterialIDs | Resources that shall be replaced

apiInstance.replaceBillOfMaterialsOfInstrumentation(instrumentationId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation of which the bill of materials will be replaced | 
 **body** | [**BillOfMaterialIDs**](BillOfMaterialIDs.md)| Resources that shall be replaced | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceDocumentsOfInstrumentation"></a>
# **replaceDocumentsOfInstrumentation**
> replaceDocumentsOfInstrumentation(instrumentationId, body)

Replace the documents of an instrumentation

Replaces all documents belonging to an instrumentation. You can send a list of resources that will replace all previous values. This action requires &#x60;can_udpate&#x60; permission on the instrumentation and &#x60;can_read&#x60; permission on the document.

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | Id of the instrumentation of which the documents will be replaced

var body = new NetilionApiDocumentation.DocumentIDs(); // DocumentIDs | Resources that shall be replaced

apiInstance.replaceDocumentsOfInstrumentation(instrumentationId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation of which the documents will be replaced | 
 **body** | [**DocumentIDs**](DocumentIDs.md)| Resources that shall be replaced | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceNodesOfInstrumentation"></a>
# **replaceNodesOfInstrumentation**
> replaceNodesOfInstrumentation(instrumentationId, body)

Replace the nodes of an instrumentation

Replaces all nodes belonging to an instrumentation in your accessible scope. You can send a list of resources that will replace all previous values. This action requires &#x60;can_permit&#x60; permission on the instrumentation and on the node.

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | Id of the instrumentation of which the nodes will be replaced

var body = new NetilionApiDocumentation.NodeIDs(); // NodeIDs | Resources that shall be replaced

apiInstance.replaceNodesOfInstrumentation(instrumentationId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation of which the nodes will be replaced | 
 **body** | [**NodeIDs**](NodeIDs.md)| Resources that shall be replaced | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateInstrumentation"></a>
# **updateInstrumentation**
> updateInstrumentation(id, body)

Update an instrumentation

Update accessible parameters of the requested resource in your accessible scope. To assign a parent instrumentation the user needs &#x60;can_permit&#x60; permission on the parent and on the current instrumentation.

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var id = 789; // Number | Id of the instrumentation to update

var body = new NetilionApiDocumentation.InstrumentationRequest(); // InstrumentationRequest | Parameters that shall be updated.

apiInstance.updateInstrumentation(id, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the instrumentation to update | 
 **body** | [**InstrumentationRequest**](InstrumentationRequest.md)| Parameters that shall be updated. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateInstrumentationPicture"></a>
# **updateInstrumentationPicture**
> PictureResponse updateInstrumentationPicture(instrumentationId, id, image)

Update an instrumentation picture

Upload a new instrumentation picture. Check the file-storage quota. Allowed content-types are - image/gif - image/jpg - image/jpeg - image/png

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | Id of the instrumentation

var id = 789; // Number | Id of the instrumentation picture

var image = "/path/to/file.txt"; // File | the image to upload (up to 1 MB)

apiInstance.updateInstrumentationPicture(instrumentationId, id, image).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation | 
 **id** | **Number**| Id of the instrumentation picture | 
 **image** | **File**| the image to upload (up to 1 MB) | 

### Return type

[**PictureResponse**](PictureResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="updateInstrumentationPictureLink"></a>
# **updateInstrumentationPictureLink**
> PictureResponse updateInstrumentationPictureLink(instrumentationId, id, body)

Update an instrumentation picture link

Update an instrumentation picture link.

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | Id of the instrumentation

var id = 789; // Number | Id of the instrumentation picture

var body = new NetilionApiDocumentation.PictureLinkRequest(); // PictureLinkRequest | Picture link object to be updated

apiInstance.updateInstrumentationPictureLink(instrumentationId, id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation | 
 **id** | **Number**| Id of the instrumentation picture | 
 **body** | [**PictureLinkRequest**](PictureLinkRequest.md)| Picture link object to be updated | 

### Return type

[**PictureResponse**](PictureResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSpecificationsOfInstrumentation"></a>
# **updateSpecificationsOfInstrumentation**
> updateSpecificationsOfInstrumentation(instrumentationId, body)

Update specifications of an instrumentation

Update the specification object of an instrumentation in your accessible scope. To add specifications, just add the key and set the value object with value, unit and source_timestamp. To mark an existing specification to be unknown, the value could be set to null. To delete keys, use the delete method. Multiple specification objects can be sent in the same request. Keys inside a specification are unique and can only be added once. Keys can only consist of [a-z A-Z 0-9 . - _ ]. All uppercase A-Z are converted to lower-case a-z. For a key that is send multiple times in the request body, only the last key-value is saved.

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var instrumentationId = 789; // Number | Id of the specified instrumentation

var body = new NetilionApiDocumentation.SpecificationsRequest(); // SpecificationsRequest | The specifications objects to patch.

apiInstance.updateSpecificationsOfInstrumentation(instrumentationId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the specified instrumentation | 
 **body** | [**SpecificationsRequest**](SpecificationsRequest.md)| The specifications objects to patch. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="uploadInstrumentationPicture"></a>
# **uploadInstrumentationPicture**
> PictureResponse uploadInstrumentationPicture(id, image)

Upload an instrumentation picture

Upload a new instrumentation picture. Checks the file-storage quota. Allowed content-types are - image/gif - image/jpg - image/jpeg - image/png

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

var apiInstance = new NetilionApiDocumentation.InstrumentationApi();

var id = 789; // Number | Id of the instrumentation

var image = "/path/to/file.txt"; // File | the image to upload (up to 1 MB)

apiInstance.uploadInstrumentationPicture(id, image).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the instrumentation | 
 **image** | **File**| the image to upload (up to 1 MB) | 

### Return type

[**PictureResponse**](PictureResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

