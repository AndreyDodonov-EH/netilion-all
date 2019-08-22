# NetilionApiDocumentation.AssetApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAssetPictureLink**](AssetApi.md#addAssetPictureLink) | **POST** /assets/{id}/pictures/links | Add a link as asset picture
[**addDeliveriesToAsset**](AssetApi.md#addDeliveriesToAsset) | **POST** /assets/{asset_id}/deliveries | Add deliveries to an asset
[**addDocumentsToAsset**](AssetApi.md#addDocumentsToAsset) | **POST** /assets/{asset_id}/documents | Add documents to an asset
[**addInstrumentationsToAsset**](AssetApi.md#addInstrumentationsToAsset) | **POST** /assets/{asset_id}/instrumentations | Add instrumentations to an asset
[**addNodesToAsset**](AssetApi.md#addNodesToAsset) | **POST** /assets/{asset_id}/nodes | Add nodes to an asset
[**createAsset**](AssetApi.md#createAsset) | **POST** /assets | Create a new asset
[**createEventForAsset**](AssetApi.md#createEventForAsset) | **POST** /assets/{asset_id}/events | Create a new event for an asset
[**deleteAsset**](AssetApi.md#deleteAsset) | **DELETE** /assets/{id} | Delete an asset
[**deleteAssetPicture**](AssetApi.md#deleteAssetPicture) | **DELETE** /assets/{asset_id}/pictures/{id} | Delete an asset picture
[**deleteSpecificationsOfAsset**](AssetApi.md#deleteSpecificationsOfAsset) | **DELETE** /assets/{asset_id}/specifications | Delete specifications of an asset
[**downloadAssetPicture**](AssetApi.md#downloadAssetPicture) | **GET** /assets/{asset_id}/pictures/{id}/download | Download an asset picture
[**getAssetById**](AssetApi.md#getAssetById) | **GET** /assets/{id} | Get a single asset
[**getAssetCompanyOptions**](AssetApi.md#getAssetCompanyOptions) | **GET** /assets/{asset_id}/company-options | Get all possible companies of the specified assets
[**getAssetHistory**](AssetApi.md#getAssetHistory) | **GET** /assets/{asset_id}/history | Get the history of an asset
[**getAssetIdStatus**](AssetApi.md#getAssetIdStatus) | **GET** /assets/{asset_id}/status | Get the status of the specific asset
[**getAssetPicture**](AssetApi.md#getAssetPicture) | **GET** /assets/{asset_id}/pictures/{id} | Get an asset picture
[**getAssetPictures**](AssetApi.md#getAssetPictures) | **GET** /assets/{id}/pictures | Get asset pictures
[**getAssetProductOptions**](AssetApi.md#getAssetProductOptions) | **GET** /assets/{asset_id}/product-options | Get all possible products of the specified assets
[**getAssetStatusesOptions**](AssetApi.md#getAssetStatusesOptions) | **GET** /assets/{asset_id}/status-options | Get all possible statuses of the specified assets
[**getAssetTenantOptions**](AssetApi.md#getAssetTenantOptions) | **GET** /assets/{asset_id}/tenant-options | Get all possible tenants of the specified assets
[**getAssets**](AssetApi.md#getAssets) | **GET** /assets | Get a range of assets
[**getDeliveriesOfAsset**](AssetApi.md#getDeliveriesOfAsset) | **GET** /assets/{asset_id}/deliveries | Get all deliveries of one asset
[**getDocumentsOfAsset**](AssetApi.md#getDocumentsOfAsset) | **GET** /assets/{asset_id}/documents | Get all documents of an asset
[**getEventsOfAsset**](AssetApi.md#getEventsOfAsset) | **GET** /assets/{asset_id}/events | Get all events of one asset
[**getInstrumentationsOfAsset**](AssetApi.md#getInstrumentationsOfAsset) | **GET** /assets/{asset_id}/instrumentations | Get all instrumentations of one asset
[**getInstrumentationsOfAssetHistory**](AssetApi.md#getInstrumentationsOfAssetHistory) | **GET** /assets/{asset_id}/instrumentations/history | Get all instrumentations an asset was assigned to
[**getNodesOfAsset**](AssetApi.md#getNodesOfAsset) | **GET** /assets/{asset_id}/nodes | Get all nodes of one asset
[**getSpecificationHistoryOfAsset**](AssetApi.md#getSpecificationHistoryOfAsset) | **GET** /assets/{asset_id}/specifications/{key}/history | Get the history of one specification attribute of an asset.
[**getSpecificationsOfAsset**](AssetApi.md#getSpecificationsOfAsset) | **GET** /assets/{asset_id}/specifications | Get specifications of an asset
[**getSubscriptionsOfAsset**](AssetApi.md#getSubscriptionsOfAsset) | **GET** /assets/{asset_id}/subscriptions | Get all subscriptions of asset
[**removeDeliveriesFromAsset**](AssetApi.md#removeDeliveriesFromAsset) | **DELETE** /assets/{asset_id}/deliveries | Remove deliveries from an asset
[**removeDocumentsFromAsset**](AssetApi.md#removeDocumentsFromAsset) | **DELETE** /assets/{asset_id}/documents | Remove documents from an asset
[**removeEventFromAsset**](AssetApi.md#removeEventFromAsset) | **DELETE** /assets/{asset_id}/events | Remove events from an asset
[**removeInstrumentationsOfAsset**](AssetApi.md#removeInstrumentationsOfAsset) | **DELETE** /assets/{asset_id}/instrumentations | Remove instrumentations from an asset
[**removeNodesFromAsset**](AssetApi.md#removeNodesFromAsset) | **DELETE** /assets/{asset_id}/nodes | Remove nodes from an asset
[**renameSpecificationsOfAsset**](AssetApi.md#renameSpecificationsOfAsset) | **PATCH** /assets/{asset_id}/specifications/rename | Rename a specification key
[**replaceDeliveriesOfAsset**](AssetApi.md#replaceDeliveriesOfAsset) | **PATCH** /assets/{asset_id}/deliveries | Replace the deliveries of an asset
[**replaceDocumentsOfAsset**](AssetApi.md#replaceDocumentsOfAsset) | **PATCH** /assets/{asset_id}/documents | Replace the documents of an asset
[**replaceInstrumentationsOfAsset**](AssetApi.md#replaceInstrumentationsOfAsset) | **PATCH** /assets/{asset_id}/instrumentations | Replace the instrumentations of an asset
[**replaceNodesOfAsset**](AssetApi.md#replaceNodesOfAsset) | **PATCH** /assets/{asset_id}/nodes | Replace the nodes of an asset
[**updateAsset**](AssetApi.md#updateAsset) | **PATCH** /assets/{id} | Update an asset
[**updateAssetPicture**](AssetApi.md#updateAssetPicture) | **PATCH** /assets/{asset_id}/pictures/{id} | Update an asset picture
[**updateAssetPictureLink**](AssetApi.md#updateAssetPictureLink) | **PATCH** /assets/{asset_id}/pictures/links/{id} | Update an asset picture link
[**updateSpecificationsOfAsset**](AssetApi.md#updateSpecificationsOfAsset) | **PATCH** /assets/{asset_id}/specifications | Update specifications of an asset
[**uploadAssetPicture**](AssetApi.md#uploadAssetPicture) | **POST** /assets/{id}/pictures | Upload an asset picture


<a name="addAssetPictureLink"></a>
# **addAssetPictureLink**
> PictureResponse addAssetPictureLink(id, body)

Add a link as asset picture

Add an external resource as asset picture.

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var id = 789; // Number | Id of the asset

var body = new NetilionApiDocumentation.PictureLinkRequest(); // PictureLinkRequest | Picture link object to be created

apiInstance.addAssetPictureLink(id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the asset | 
 **body** | [**PictureLinkRequest**](PictureLinkRequest.md)| Picture link object to be created | 

### Return type

[**PictureResponse**](PictureResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addDeliveriesToAsset"></a>
# **addDeliveriesToAsset**
> addDeliveriesToAsset(assetId, body)

Add deliveries to an asset

Add one or more deliveries to an asset.

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | Id of the asset to which the deliveries will be added

var body = new NetilionApiDocumentation.DeliveryIDs(); // DeliveryIDs | Resources that shall be added.

apiInstance.addDeliveriesToAsset(assetId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| Id of the asset to which the deliveries will be added | 
 **body** | [**DeliveryIDs**](DeliveryIDs.md)| Resources that shall be added. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addDocumentsToAsset"></a>
# **addDocumentsToAsset**
> addDocumentsToAsset(assetId, body)

Add documents to an asset

Add one or more documents to an asset.

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | Id of the asset to which the documents will be added

var body = new NetilionApiDocumentation.DocumentIDs(); // DocumentIDs | Resources that shall be added.

apiInstance.addDocumentsToAsset(assetId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| Id of the asset to which the documents will be added | 
 **body** | [**DocumentIDs**](DocumentIDs.md)| Resources that shall be added. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addInstrumentationsToAsset"></a>
# **addInstrumentationsToAsset**
> addInstrumentationsToAsset(assetId, body)

Add instrumentations to an asset

Add one or more instrumentations to an asset. This action requires &#x60;can_permit&#x60; permission on the asset and on the instrumentation.

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | Id of the asset to which the instrumentations will be added

var body = new NetilionApiDocumentation.InstrumentationIDs(); // InstrumentationIDs | Resources that shall be added.

apiInstance.addInstrumentationsToAsset(assetId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| Id of the asset to which the instrumentations will be added | 
 **body** | [**InstrumentationIDs**](InstrumentationIDs.md)| Resources that shall be added. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addNodesToAsset"></a>
# **addNodesToAsset**
> addNodesToAsset(assetId, body)

Add nodes to an asset

Add one or more nodes to an asset. This action requires &#x60;can_permit&#x60; permission on the asset and on the node.

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | Id of the asset to which the nodes will be added

var body = new NetilionApiDocumentation.NodeIDs(); // NodeIDs | Resources that shall be added.

apiInstance.addNodesToAsset(assetId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| Id of the asset to which the nodes will be added | 
 **body** | [**NodeIDs**](NodeIDs.md)| Resources that shall be added. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createAsset"></a>
# **createAsset**
> AssetResponse createAsset(body)

Create a new asset

Create a new asset. An asset is an instance of a product and therefore needs to refer to one when creating it. The serialnumber of the given asset needs to be unique within the products manufacturer scope. The asset will not be created when this constraint is violated. The user gains &#x60;can_read&#x60;, &#x60;can_update&#x60;, &#x60;can_delete&#x60;, &#x60;can_permit&#x60; per default on the newly created asset. To assign a parent asset the user needs &#x60;can_permit&#x60; permission on the parent.

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var body = new NetilionApiDocumentation.AssetRequest(); // AssetRequest | Asset object that needs to be created. serial_number, product are required

apiInstance.createAsset(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetRequest**](AssetRequest.md)| Asset object that needs to be created. serial_number, product are required | 

### Return type

[**AssetResponse**](AssetResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createEventForAsset"></a>
# **createEventForAsset**
> EventResponse createEventForAsset(assetId, body)

Create a new event for an asset

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | Id of the asset

var body = new NetilionApiDocumentation.EventRequestNoAssets(); // EventRequestNoAssets | Object to be created.

apiInstance.createEventForAsset(assetId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| Id of the asset | 
 **body** | [**EventRequestNoAssets**](EventRequestNoAssets.md)| Object to be created. | 

### Return type

[**EventResponse**](EventResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAsset"></a>
# **deleteAsset**
> deleteAsset(id)

Delete an asset

Delete a specific resource identified by the id in the URL. Required Permissions: &#x60;&#x60;&#x60;can_delete&#x60;&#x60;&#x60;.

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var id = 789; // Number | Id of the asset to delete

apiInstance.deleteAsset(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the asset to delete | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAssetPicture"></a>
# **deleteAssetPicture**
> deleteAssetPicture(assetId, id)

Delete an asset picture

Delete an asset picture.

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | Id of the asset

var id = 789; // Number | Id of the asset picture

apiInstance.deleteAssetPicture(assetId, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| Id of the asset | 
 **id** | **Number**| Id of the asset picture | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSpecificationsOfAsset"></a>
# **deleteSpecificationsOfAsset**
> deleteSpecificationsOfAsset(assetId, body)

Delete specifications of an asset

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | Id of the specified asset

var body = new NetilionApiDocumentation.SpecificationsDelete(); // SpecificationsDelete | Array of keys to delete from specifications

apiInstance.deleteSpecificationsOfAsset(assetId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| Id of the specified asset | 
 **body** | [**SpecificationsDelete**](SpecificationsDelete.md)| Array of keys to delete from specifications | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="downloadAssetPicture"></a>
# **downloadAssetPicture**
> downloadAssetPicture(assetId, id)

Download an asset picture

Download an asset picture.

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | Id of the asset

var id = 789; // Number | Id of the asset picture

apiInstance.downloadAssetPicture(assetId, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| Id of the asset | 
 **id** | **Number**| Id of the asset picture | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAssetById"></a>
# **getAssetById**
> AssetResponse getAssetById(id, opts)

Get a single asset

Get a specific asset identified by the id in the URL. Possible include values: &#x60;&#x60;&#x60;status, tenant, parent, pictures, product, product.manufacturer, product.pictures, product.status, product.categories, product.categories.parent, specifications, specifications[key1,key2], product.tenant, product.manufacturer.tenant, status.tenant, instrumentations, values, values.units &#x60;&#x60;&#x60;

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var id = 789; // Number | Id of the asset to fetch

var opts = { 
  'include': "include_example", // String | Comma separated list of objects to include in response
};
apiInstance.getAssetById(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the asset to fetch | 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 

### Return type

[**AssetResponse**](AssetResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAssetCompanyOptions"></a>
# **getAssetCompanyOptions**
> Companies getAssetCompanyOptions(assetId, opts)

Get all possible companies of the specified assets

Returns a list of all possible companies for the specified asset. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.  Possible include values: &#x60;&#x60;&#x60;tenant, parent&#x60;&#x60;&#x60;

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | Id of the specified asset

var opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'orderBy': "orderBy_example", // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getAssetCompanyOptions(assetId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**Companies**](Companies.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAssetHistory"></a>
# **getAssetHistory**
> AssetHistoryResponse getAssetHistory(assetId, , opts)

Get the history of an asset

Returns a collection of historical values of the asset identified by the id in the URL. Specifications are not included.   With the filter parameters from and to, it is possible to receive the history of a defined time period   Define the from with a &#x60;&#x60;&#x60;+&#x60;&#x60;&#x60; in front of the date the previous values is part of the collection (+2018-06-21T14:45:23).   Define the to with a &#x60;&#x60;&#x60;+&#x60;&#x60;&#x60; at the end of the date the next values is part of the collection (2018-06-21T14:45:23+).

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | The resource defined in the URL

var opts = { 
  'attribute': "attribute_example", // String | limit history to changes of a specific attribute e.g status or serial_number
  'from': new Date("2013-10-20"), // Date | Start date filter for history values. Starting with ```+``` will include the previous value as well. Expected date format is YYYY-MM-DDThh:mm:ss
  'to': new Date("2013-10-20"), // Date | End date for history values. Ending with ```+``` will include the next value as well. Expected date format is YYYY-MM-DDThh:mm:ss
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `datetime`, add `-` as a prefix for descending order.
};
apiInstance.getAssetHistory(assetId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| The resource defined in the URL | 
 **attribute** | **String**| limit history to changes of a specific attribute e.g status or serial_number | [optional] 
 **from** | **Date**| Start date filter for history values. Starting with &#x60;&#x60;&#x60;+&#x60;&#x60;&#x60; will include the previous value as well. Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **to** | **Date**| End date for history values. Ending with &#x60;&#x60;&#x60;+&#x60;&#x60;&#x60; will include the next value as well. Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;datetime&#x60;, add &#x60;-&#x60; as a prefix for descending order. | [optional] 

### Return type

[**AssetHistoryResponse**](AssetHistoryResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAssetIdStatus"></a>
# **getAssetIdStatus**
> AssetStatusResponse getAssetIdStatus(assetId, opts)

Get the status of the specific asset

Returns the status of the asset. Needed if only permission on asset but not on tenant. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translations set Accept-Language. Possible include value: &#x60;&#x60;&#x60;tenant&#x60;&#x60;&#x60;

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | Id of the specified asset

var opts = { 
  'include': "include_example", // String | Comma separated list of objects to include in response
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getAssetIdStatus(assetId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| Id of the specified asset | 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 
 **acceptLanguage** | **String**| The client&#39;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**AssetStatusResponse**](AssetStatusResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAssetPicture"></a>
# **getAssetPicture**
> PictureResponse getAssetPicture(assetId, id)

Get an asset picture

Get a single picture of an asset.

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | Id of the asset

var id = 789; // Number | Id of the asset picture

apiInstance.getAssetPicture(assetId, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| Id of the asset | 
 **id** | **Number**| Id of the asset picture | 

### Return type

[**PictureResponse**](PictureResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAssetPictures"></a>
# **getAssetPictures**
> PicturesResponse getAssetPictures(id, opts)

Get asset pictures

Get all pictures of an asset.

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var id = 789; // Number | Id of the asset

var opts = { 
  'width': 56, // Number | filter by width
  'widthFrom': 56, // Number | filter by width_from
  'widthTo': 56, // Number | filter by width_to
  'height': 56, // Number | filter by height
  'heightFrom': 56, // Number | filter by height_from
  'heightTo': 56, // Number | filter by height_to
  'orderBy': "orderBy_example", // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getAssetPictures(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the asset | 
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAssetProductOptions"></a>
# **getAssetProductOptions**
> Products getAssetProductOptions(assetId, opts)

Get all possible products of the specified assets

Returns a list of all possible products for the specified asset. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translations set Accept-Language. Possible include values: &#x60;&#x60;&#x60;status, tenant, parent, manufacturer, pictures, categories, categories.parent&#x60;&#x60;&#x60;

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | Id of the specified asset

var opts = { 
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
  'orderBy': "orderBy_example", // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getAssetProductOptions(assetId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

[**Products**](Products.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAssetStatusesOptions"></a>
# **getAssetStatusesOptions**
> AssetStatuses getAssetStatusesOptions(assetId, opts)

Get all possible statuses of the specified assets

Returns a list of all possible asset statuses for the specified asset. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translations set Accept-Language. Possible include value: &#x60;&#x60;&#x60;tenant&#x60;&#x60;&#x60;

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | Id of the specified asset

var opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'code': "code_example", // String | Filter accepts `*` as wildcard
  'orderBy': "orderBy_example", // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getAssetStatusesOptions(assetId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **code** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 
 **acceptLanguage** | **String**| The client&#39;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**AssetStatuses**](AssetStatuses.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAssetTenantOptions"></a>
# **getAssetTenantOptions**
> Tenants getAssetTenantOptions(assetId, opts)

Get all possible tenants of the specified assets

Returns a list of all possible tenants for the specified asset. That is all public tenants and the assets tenant. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | Id of the specified asset

var opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'orderBy': "orderBy_example", // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getAssetTenantOptions(assetId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| Id of the specified asset | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**Tenants**](Tenants.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAssets"></a>
# **getAssets**
> AssetsResponse getAssets(opts)

Get a range of assets

Returns a list of assets in your accessible scope. You can apply the query parameters listed below to get a filtered list. Possible include values: &#x60;&#x60;&#x60;status, tenant, parent, pictures, product, product.manufacturer, product.pictures, product.status, product.categories, product.categories.parent, specifications, specifications[key1,key2], product.tenant, product.manufacturer.tenant, status.tenant, instrumentations, values, values.unit &#x60;&#x60;&#x60;

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'serialNumber': "serialNumber_example", // String | Filter accepts `*` as wildcard
  'productId': "productId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'productStatusId': "productStatusId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'productCategoryId': "productCategoryId_example", // String | One or multiple ids (comma list). By adding `+` after the id, the filter considers the given category and all its children (e.g. 3+).
  'parentId': "parentId_example", // String | One or multiple ids (comma list). \"null\" to retrieve all objects without parent, \"!null\" for all objects with parent.
  'manufacturerId': "manufacturerId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'statusId': "statusId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'statusCode': "statusCode_example", // String | Filter accepts `*` as wildcard
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'lastSeenAtFrom': "lastSeenAtFrom_example", // String | Expected date format is YYYY-MM-DDThh:mm:ss
  'lastSeenAtTo': "lastSeenAtTo_example", // String | Expected date format is YYYY-MM-DDThh:mm:ss
  'productionDate': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'productionDateFrom': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'productionDateTo': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'specificationsKey': "specificationsKey_example", // String | Filter accepts `*` as wildcard (if used as single specifications filter), supports comma list of keys in connection with specifications_value filter
  'specificationsValue': "specificationsValue_example", // String | Filter accepts `*` as wildcard, supports comma list of values in connection with specifications_key filter. Does not work for vectors
  'nodeId': "nodeId_example", // String | One or multiple ids (comma list). Filter acccepts \"null\" for all objects with no nodes assigned or \"!null\" for any assigned node
  'instrumentationId': "instrumentationId_example", // String | One or multiple ids (comma list). Filter acccepts \"null\" for all objects with no nodes assigned or \"!null\" for any assigned node
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `serial_number`, `created_at` or `updated_at`, `last_seen_at`, add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getAssets(opts).then(function(data) {
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
 **serialNumber** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **productId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **productStatusId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **productCategoryId** | **String**| One or multiple ids (comma list). By adding &#x60;+&#x60; after the id, the filter considers the given category and all its children (e.g. 3+). | [optional] 
 **parentId** | **String**| One or multiple ids (comma list). \&quot;null\&quot; to retrieve all objects without parent, \&quot;!null\&quot; for all objects with parent. | [optional] 
 **manufacturerId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **statusId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **statusCode** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **lastSeenAtFrom** | **String**| Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **lastSeenAtTo** | **String**| Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **productionDate** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **productionDateFrom** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **productionDateTo** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **specificationsKey** | **String**| Filter accepts &#x60;*&#x60; as wildcard (if used as single specifications filter), supports comma list of keys in connection with specifications_value filter | [optional] 
 **specificationsValue** | **String**| Filter accepts &#x60;*&#x60; as wildcard, supports comma list of values in connection with specifications_key filter. Does not work for vectors | [optional] 
 **nodeId** | **String**| One or multiple ids (comma list). Filter acccepts \&quot;null\&quot; for all objects with no nodes assigned or \&quot;!null\&quot; for any assigned node | [optional] 
 **instrumentationId** | **String**| One or multiple ids (comma list). Filter acccepts \&quot;null\&quot; for all objects with no nodes assigned or \&quot;!null\&quot; for any assigned node | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;serial_number&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;, &#x60;last_seen_at&#x60;, add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**AssetsResponse**](AssetsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDeliveriesOfAsset"></a>
# **getDeliveriesOfAsset**
> DeliveriesResponse getDeliveriesOfAsset(assetId, , opts)

Get all deliveries of one asset

Returns a list of all deliveries that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | The resource defined in the URL

var opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  '_number': "_number_example", // String | Filter accepts `*` as wildcard
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'statusId': "statusId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'dateOfShipment': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'dateOfShipmentFrom': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'dateOfShipmentTo': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'senderId': "senderId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'receiverId': "receiverId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'orderBy': "orderBy_example", // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getDeliveriesOfAsset(assetId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **_number** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **statusId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **dateOfShipment** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **dateOfShipmentFrom** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **dateOfShipmentTo** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **senderId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **receiverId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**DeliveriesResponse**](DeliveriesResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentsOfAsset"></a>
# **getDocumentsOfAsset**
> DocumentsResponse getDocumentsOfAsset(assetId, , opts)

Get all documents of an asset

Returns a list of all documents that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translations set Accept-Language. Possible include values: &#x60;&#x60;&#x60;status, tenant, classification, categories, categories.parent, attachments&#x60;&#x60;&#x60;

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | The resource defined in the URL

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
  'orderBy': "orderBy_example", // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getDocumentsOfAsset(assetId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| The resource defined in the URL | 
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
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 
 **acceptLanguage** | **String**| The client&#39;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**DocumentsResponse**](DocumentsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEventsOfAsset"></a>
# **getEventsOfAsset**
> EventsResponse getEventsOfAsset(assetId, , opts)

Get all events of one asset

Returns a list of all events belonging to an asset in your accessible scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.  Possible include values: &#x60;&#x60;assets, instrumentations, status, type&#x60;&#x60;

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | The resource defined in the URL

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
apiInstance.getEventsOfAsset(assetId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| The resource defined in the URL | 
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

<a name="getInstrumentationsOfAsset"></a>
# **getInstrumentationsOfAsset**
> InstrumentationsResponse getInstrumentationsOfAsset(assetId, , opts)

Get all instrumentations of one asset

Returns a list of all instrumentations that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.  Possible include values: &#x60;&#x60;&#x60;specifications, specifications[key1,key2], pictures, tenant, parent, status, type&#x60;&#x60;&#x60;

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | The resource defined in the URL

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
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `tag`, `created_at` or `updated_at`, add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getInstrumentationsOfAsset(assetId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| The resource defined in the URL | 
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
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;tag&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;, add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**InstrumentationsResponse**](InstrumentationsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInstrumentationsOfAssetHistory"></a>
# **getInstrumentationsOfAssetHistory**
> AssetInstrumentationsHistoryResponse getInstrumentationsOfAssetHistory(assetId, , opts)

Get all instrumentations an asset was assigned to

Returns a list of all instrumentations history available in your scope which have been assigned to the specified asset. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | The resource defined in the URL

var opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'instrumentationId': "instrumentationId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'event': "event_example", // String | Filter accepts `create` or `destroy`
  'eventDatetimeFrom': new Date("2013-10-20"), // Date | Starting with + will include the previous value as well. Expected date format is YYYY-MM-DDThh:mm:ss
  'eventDatetimeTo': new Date("2013-10-20"), // Date | Ending with + will include the next value as well. Expected date format is YYYY-MM-DDThh:mm:ss
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `event` or `event_datetime`, add `-` as a prefix for descending order.
};
apiInstance.getInstrumentationsOfAssetHistory(assetId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **instrumentationId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **event** | **String**| Filter accepts &#x60;create&#x60; or &#x60;destroy&#x60; | [optional] 
 **eventDatetimeFrom** | **Date**| Starting with + will include the previous value as well. Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **eventDatetimeTo** | **Date**| Ending with + will include the next value as well. Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;event&#x60; or &#x60;event_datetime&#x60;, add &#x60;-&#x60; as a prefix for descending order. | [optional] 

### Return type

[**AssetInstrumentationsHistoryResponse**](AssetInstrumentationsHistoryResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNodesOfAsset"></a>
# **getNodesOfAsset**
> NodesResponse getNodesOfAsset(assetId, , opts)

Get all nodes of one asset

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | The resource defined in the URL

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
apiInstance.getNodesOfAsset(assetId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| The resource defined in the URL | 
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

<a name="getSpecificationHistoryOfAsset"></a>
# **getSpecificationHistoryOfAsset**
> SpecificationHistoryResponse getSpecificationHistoryOfAsset(assetId, key, opts)

Get the history of one specification attribute of an asset.

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | Id of the specified asset

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
apiInstance.getSpecificationHistoryOfAsset(assetId, key, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| Id of the specified asset | 
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

<a name="getSpecificationsOfAsset"></a>
# **getSpecificationsOfAsset**
> SpecificationsResponse getSpecificationsOfAsset(assetId, opts)

Get specifications of an asset

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | Id of the specified asset

var opts = { 
  'key': "key_example" // String | Filter accepts '*' as wildcard
};
apiInstance.getSpecificationsOfAsset(assetId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| Id of the specified asset | 
 **key** | **String**| Filter accepts &#39;*&#39; as wildcard | [optional] 

### Return type

[**SpecificationsResponse**](SpecificationsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSubscriptionsOfAsset"></a>
# **getSubscriptionsOfAsset**
> SubscriptionsResponse getSubscriptionsOfAsset(assetId, , opts)

Get all subscriptions of asset

Returns a list of all subscriptions that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.  Possible include values: &#x60;&#x60;&#x60;user, user.usage, specifications, specifications[key1,key2]&#x60;&#x60;&#x60; 

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | The resource defined in the URL

var opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'userId': 789, // Number | One or multiple ids (comma list). Expected id format is integer
  'clientApplicationId': 789, // Number | One or multiple ids (comma list). Expected id format is integer
  'externalReference': "externalReference_example", // String | Filter accepts `*` as wildcard
  'status': "status_example", // String | Filter by status - no wildcard support
  'notificationStatus': "notificationStatus_example", // String | Filter by notification status - no wildcard support
  'specificationsKey': "specificationsKey_example", // String | Filter accepts `*` as wildcard (if used as single specifications filter), supports comma list of keys in connection with specifications_value filter
  'specificationsValue': "specificationsValue_example", // String | Filter accepts `*` as wildcard, supports comma list of values in connection with specifications_key filter. Does not work for vectors
  'startDate': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'endDate': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'orderBy': "orderBy_example", // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getSubscriptionsOfAsset(assetId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 
 **userId** | **Number**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **clientApplicationId** | **Number**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **externalReference** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **status** | **String**| Filter by status - no wildcard support | [optional] 
 **notificationStatus** | **String**| Filter by notification status - no wildcard support | [optional] 
 **specificationsKey** | **String**| Filter accepts &#x60;*&#x60; as wildcard (if used as single specifications filter), supports comma list of keys in connection with specifications_value filter | [optional] 
 **specificationsValue** | **String**| Filter accepts &#x60;*&#x60; as wildcard, supports comma list of values in connection with specifications_key filter. Does not work for vectors | [optional] 
 **startDate** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **endDate** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**SubscriptionsResponse**](SubscriptionsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeDeliveriesFromAsset"></a>
# **removeDeliveriesFromAsset**
> removeDeliveriesFromAsset(assetId, body)

Remove deliveries from an asset

Remove one or more deliveries from an asset in your accessible scope.

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | Id of the asset from which the deliveries will be removed

var body = new NetilionApiDocumentation.DeliveryIDs(); // DeliveryIDs | Resources that shall be removed.

apiInstance.removeDeliveriesFromAsset(assetId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| Id of the asset from which the deliveries will be removed | 
 **body** | [**DeliveryIDs**](DeliveryIDs.md)| Resources that shall be removed. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeDocumentsFromAsset"></a>
# **removeDocumentsFromAsset**
> removeDocumentsFromAsset(assetId, body)

Remove documents from an asset

Remove one or more documents from an asset.

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | Id of the asset from which the documents will be removed

var body = new NetilionApiDocumentation.DocumentIDs(); // DocumentIDs | Resources that shall be removed.

apiInstance.removeDocumentsFromAsset(assetId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| Id of the asset from which the documents will be removed | 
 **body** | [**DocumentIDs**](DocumentIDs.md)| Resources that shall be removed. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeEventFromAsset"></a>
# **removeEventFromAsset**
> removeEventFromAsset(assetId, body)

Remove events from an asset

Remove one or more events from an asset in your accessible scope. If the event has no more related assets, the event will be deleted

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | Id of the asset from which the events will removed.

var body = new NetilionApiDocumentation.Events(); // Events | Resources that shall be removed.

apiInstance.removeEventFromAsset(assetId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| Id of the asset from which the events will removed. | 
 **body** | [**Events**](Events.md)| Resources that shall be removed. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeInstrumentationsOfAsset"></a>
# **removeInstrumentationsOfAsset**
> removeInstrumentationsOfAsset(assetId, body)

Remove instrumentations from an asset

Remove one or more instrumentations from an asset in your accessible scope. This action requires &#x60;can_permit&#x60; permission on the asset and on the instrumentation.

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | Id of the asset from which the instrumentations will be removed

var body = new NetilionApiDocumentation.InstrumentationIDs(); // InstrumentationIDs | Resources that shall be removed.

apiInstance.removeInstrumentationsOfAsset(assetId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| Id of the asset from which the instrumentations will be removed | 
 **body** | [**InstrumentationIDs**](InstrumentationIDs.md)| Resources that shall be removed. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeNodesFromAsset"></a>
# **removeNodesFromAsset**
> removeNodesFromAsset(assetId, body)

Remove nodes from an asset

Remove one or more nodes from an asset in your accessible scope. &#x60;This action&#x60; requires &#x60;can_permit&#x60; permission on the asset and on the node.

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | Id of the asset from which the nodes will be removed

var body = new NetilionApiDocumentation.NodeIDs(); // NodeIDs | Resources that shall be removed.

apiInstance.removeNodesFromAsset(assetId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| Id of the asset from which the nodes will be removed | 
 **body** | [**NodeIDs**](NodeIDs.md)| Resources that shall be removed. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="renameSpecificationsOfAsset"></a>
# **renameSpecificationsOfAsset**
> renameSpecificationsOfAsset(assetId, body)

Rename a specification key

Rename one specification key of an asset in your accessible scope. The key name allows [a-z A-Z 0-9 . - _ ]. All uppercase letters will be converted to lower-case.

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | Id of the specified asset

var body = new NetilionApiDocumentation.SpecificationsRename(); // SpecificationsRename | The specifications object to patch.

apiInstance.renameSpecificationsOfAsset(assetId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| Id of the specified asset | 
 **body** | [**SpecificationsRename**](SpecificationsRename.md)| The specifications object to patch. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceDeliveriesOfAsset"></a>
# **replaceDeliveriesOfAsset**
> replaceDeliveriesOfAsset(assetId, body)

Replace the deliveries of an asset

Replaces all deliveries belonging to an asset in your accessible scope. You can send a list of resources that will replace all previous values.

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | Id of the asset of which the deliveries will be replaced

var body = new NetilionApiDocumentation.DeliveryIDs(); // DeliveryIDs | Resources that shall be replaced

apiInstance.replaceDeliveriesOfAsset(assetId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| Id of the asset of which the deliveries will be replaced | 
 **body** | [**DeliveryIDs**](DeliveryIDs.md)| Resources that shall be replaced | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceDocumentsOfAsset"></a>
# **replaceDocumentsOfAsset**
> replaceDocumentsOfAsset(assetId, body)

Replace the documents of an asset

Replaces all documents belonging to an asset. You can send a list of resources that will replace all previous values.

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | Id of the asset of which the documents will be replaced

var body = new NetilionApiDocumentation.DocumentIDs(); // DocumentIDs | Resources that shall be replaced

apiInstance.replaceDocumentsOfAsset(assetId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| Id of the asset of which the documents will be replaced | 
 **body** | [**DocumentIDs**](DocumentIDs.md)| Resources that shall be replaced | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceInstrumentationsOfAsset"></a>
# **replaceInstrumentationsOfAsset**
> replaceInstrumentationsOfAsset(assetId, body)

Replace the instrumentations of an asset

Replaces all instrumentations belonging to an asset in your accessible scope. You can send a list of resources that will replace all previous values. This action requires &#x60;can_permit&#x60; permission on the asset and on the instrumentation.

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | Id of the asset of which the instrumentations will be replaced

var body = new NetilionApiDocumentation.InstrumentationIDs(); // InstrumentationIDs | Resources that shall be replaced

apiInstance.replaceInstrumentationsOfAsset(assetId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| Id of the asset of which the instrumentations will be replaced | 
 **body** | [**InstrumentationIDs**](InstrumentationIDs.md)| Resources that shall be replaced | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceNodesOfAsset"></a>
# **replaceNodesOfAsset**
> replaceNodesOfAsset(assetId, body)

Replace the nodes of an asset

Replaces all nodes belonging to an asset in your accessible scope. You can send a list of resources that will replace all previous values. This action requires &#x60;can_permit&#x60; permission on the asset and on the node.

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | Id of the asset of which the nodes will be replaced

var body = new NetilionApiDocumentation.NodeIDs(); // NodeIDs | Resources that shall be replaced

apiInstance.replaceNodesOfAsset(assetId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| Id of the asset of which the nodes will be replaced | 
 **body** | [**NodeIDs**](NodeIDs.md)| Resources that shall be replaced | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateAsset"></a>
# **updateAsset**
> updateAsset(id, body)

Update an asset

Update accessible parameters of the requested resource in your accessible scope.  To assign a parent asset the user needs &#x60;can_permit&#x60; permission on the parent and on the current asset.

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var id = 789; // Number | Id of the asset to update

var body = new NetilionApiDocumentation.AssetRequest(); // AssetRequest | Parameters that shall be updated. To remove an associative object use \"object_name\": null

apiInstance.updateAsset(id, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the asset to update | 
 **body** | [**AssetRequest**](AssetRequest.md)| Parameters that shall be updated. To remove an associative object use \&quot;object_name\&quot;: null | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateAssetPicture"></a>
# **updateAssetPicture**
> PictureResponse updateAssetPicture(assetId, id, image)

Update an asset picture

Upload a new asset picture. Check the file-storage quota. Allowed content-types are - image/gif - image/jpg - image/jpeg - image/png

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | Id of the asset

var id = 789; // Number | Id of the asset picture

var image = "/path/to/file.txt"; // File | the image to upload (up to 1 MB)

apiInstance.updateAssetPicture(assetId, id, image).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| Id of the asset | 
 **id** | **Number**| Id of the asset picture | 
 **image** | **File**| the image to upload (up to 1 MB) | 

### Return type

[**PictureResponse**](PictureResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="updateAssetPictureLink"></a>
# **updateAssetPictureLink**
> PictureResponse updateAssetPictureLink(assetId, id, body)

Update an asset picture link

Update an asset picture link.

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | Id of the asset

var id = 789; // Number | Id of the asset picture

var body = new NetilionApiDocumentation.PictureLinkRequest(); // PictureLinkRequest | Picture link object to be updated

apiInstance.updateAssetPictureLink(assetId, id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| Id of the asset | 
 **id** | **Number**| Id of the asset picture | 
 **body** | [**PictureLinkRequest**](PictureLinkRequest.md)| Picture link object to be updated | 

### Return type

[**PictureResponse**](PictureResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSpecificationsOfAsset"></a>
# **updateSpecificationsOfAsset**
> updateSpecificationsOfAsset(assetId, body)

Update specifications of an asset

Update the specification object of an asset in your accessible scope. To add specifications, just add the key and set the value in form of&#39;#/definitions/Specification&#39;. To mark an existing specification to be unknown, the value could be set to null. To delete keys, use the delete method. Multiple specification objects can be sent in the same request. Keys inside a specification are unique and can only be added once. Keys can only consist of [a-z A-Z 0-9 . - _ ]. All uppercase A-Z are converted to lower-case a-z. For a key that is send multiple times in the request body, only the last key-value is saved.  It is possible to save complex objects in the value as vector. In this case the unit must be &#39;vector&#39; and the value a valid object in the following format: &#x60;&#x60;&#x60;       [           {             \&quot;key\&quot;: {              \&quot;value\&quot;: \&quot;string\&quot;,              \&quot;unit\&quot;: \&quot;string\&quot;            }           },           {             \&quot;second_key\&quot;: {               \&quot;value\&quot;: \&quot;string\&quot;             }           }        ]   &#x60;&#x60;&#x60;  - key can only consist of [a-z A-Z 0-9 . - _ ]. - value is mandatory, max length 4000 chars - unit is optional, max length 50 chars - its impossible to filter for vector values

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var assetId = 789; // Number | Id of the specified asset

var body = new NetilionApiDocumentation.SpecificationsRequest(); // SpecificationsRequest | The specifications objects to patch.

apiInstance.updateSpecificationsOfAsset(assetId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| Id of the specified asset | 
 **body** | [**SpecificationsRequest**](SpecificationsRequest.md)| The specifications objects to patch. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="uploadAssetPicture"></a>
# **uploadAssetPicture**
> PictureResponse uploadAssetPicture(id, image)

Upload an asset picture

Upload a new asset picture. Checks the file-storage quota. Allowed content-types are - image/gif - image/jpg - image/jpeg - image/png

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

var apiInstance = new NetilionApiDocumentation.AssetApi();

var id = 789; // Number | Id of the asset

var image = "/path/to/file.txt"; // File | the image to upload (up to 1 MB)

apiInstance.uploadAssetPicture(id, image).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the asset | 
 **image** | **File**| the image to upload (up to 1 MB) | 

### Return type

[**PictureResponse**](PictureResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

