# NetilionApiDocumentation.SpecificationApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSpecificationsOfAsset**](SpecificationApi.md#deleteSpecificationsOfAsset) | **DELETE** /assets/{asset_id}/specifications | Delete specifications of an asset
[**getSpecificationHistoryOfAsset**](SpecificationApi.md#getSpecificationHistoryOfAsset) | **GET** /assets/{asset_id}/specifications/{key}/history | Get the history of one specification attribute of an asset.
[**getSpecificationHistoryOfInstrumentation**](SpecificationApi.md#getSpecificationHistoryOfInstrumentation) | **GET** /instrumentations/{instrumentation_id}/specifications/{key}/history | Get the history of one specification attribute of an instrumentation.
[**getSpecificationsOfAsset**](SpecificationApi.md#getSpecificationsOfAsset) | **GET** /assets/{asset_id}/specifications | Get specifications of an asset
[**getSpecificationsOfEvent**](SpecificationApi.md#getSpecificationsOfEvent) | **GET** /events/{event_id}/specifications | Get specifications of an event
[**getSpecificationsOfInstrumentation**](SpecificationApi.md#getSpecificationsOfInstrumentation) | **GET** /instrumentations/{instrumentation_id}/specifications | Get specifications of an instrumentation
[**getSpecificationsOfNode**](SpecificationApi.md#getSpecificationsOfNode) | **GET** /nodes/{node_id}/specifications | Get specifications of a node
[**getSpecificationsOfProduct**](SpecificationApi.md#getSpecificationsOfProduct) | **GET** /products/{product_id}/specifications | Get specifications of a product
[**getSpecificationsOfSubscription**](SpecificationApi.md#getSpecificationsOfSubscription) | **GET** /subscriptions/{subscription_id}/specifications | Get specifications of a subscription
[**getSpecificationsOfUser**](SpecificationApi.md#getSpecificationsOfUser) | **GET** /users/{user_id}/specifications | Get specifications of a user
[**removeSpecificationsFromEvent**](SpecificationApi.md#removeSpecificationsFromEvent) | **DELETE** /events/{event_id}/specifications | Delete specifications of an event
[**removeSpecificationsFromInstrumentation**](SpecificationApi.md#removeSpecificationsFromInstrumentation) | **DELETE** /instrumentations/{instrumentation_id}/specifications | Delete specifications of an instrumentation
[**removeSpecificationsFromNode**](SpecificationApi.md#removeSpecificationsFromNode) | **DELETE** /nodes/{node_id}/specifications | Delete specifications of a node
[**removeSpecificationsFromProduct**](SpecificationApi.md#removeSpecificationsFromProduct) | **DELETE** /products/{product_id}/specifications | Delete specifications of a product
[**removeSpecificationsFromSubscriptions**](SpecificationApi.md#removeSpecificationsFromSubscriptions) | **DELETE** /subscriptions/{subscription_id}/specifications | Delete specifications of a subscription
[**removeSpecificationsFromUsers**](SpecificationApi.md#removeSpecificationsFromUsers) | **DELETE** /users/{user_id}/specifications | Delete specifications of a user
[**renameSpecificationsOfAsset**](SpecificationApi.md#renameSpecificationsOfAsset) | **PATCH** /assets/{asset_id}/specifications/rename | Rename a specification key
[**renameSpecificationsOfEvent**](SpecificationApi.md#renameSpecificationsOfEvent) | **PATCH** /events/{event_id}/specifications/rename | Rename a specification key
[**renameSpecificationsOfInstrumentation**](SpecificationApi.md#renameSpecificationsOfInstrumentation) | **PATCH** /instrumentations/{instrumentation_id}/specifications/rename | Rename a specification key
[**renameSpecificationsOfNode**](SpecificationApi.md#renameSpecificationsOfNode) | **PATCH** /nodes/{node_id}/specifications/rename | Rename a specification key
[**renameSpecificationsOfProduct**](SpecificationApi.md#renameSpecificationsOfProduct) | **PATCH** /products/{product_id}/specifications/rename | rename a key in the specification.
[**renameSpecificationsOfSubscriptions**](SpecificationApi.md#renameSpecificationsOfSubscriptions) | **PATCH** /subscriptions/{subscription_id}/specifications/rename | Rename a specification key
[**renameSpecificationsOfUsers**](SpecificationApi.md#renameSpecificationsOfUsers) | **PATCH** /users/{user_id}/specifications/rename | Rename a specification key
[**updateSpecificationsOfAsset**](SpecificationApi.md#updateSpecificationsOfAsset) | **PATCH** /assets/{asset_id}/specifications | Update specifications of an asset
[**updateSpecificationsOfEvent**](SpecificationApi.md#updateSpecificationsOfEvent) | **PATCH** /events/{event_id}/specifications | Update specifications of an event
[**updateSpecificationsOfInstrumentation**](SpecificationApi.md#updateSpecificationsOfInstrumentation) | **PATCH** /instrumentations/{instrumentation_id}/specifications | Update specifications of an instrumentation
[**updateSpecificationsOfNode**](SpecificationApi.md#updateSpecificationsOfNode) | **PATCH** /nodes/{node_id}/specifications | Update specifications of a node
[**updateSpecificationsOfProduct**](SpecificationApi.md#updateSpecificationsOfProduct) | **PATCH** /products/{product_id}/specifications | Update specifications of a product
[**updateSpecificationsOfSubscriptions**](SpecificationApi.md#updateSpecificationsOfSubscriptions) | **PATCH** /subscriptions/{subscription_id}/specifications | Update specifications of a subscription
[**updateSpecificationsOfUsers**](SpecificationApi.md#updateSpecificationsOfUsers) | **PATCH** /users/{user_id}/specifications | Update specifications of a user

<a name="deleteSpecificationsOfAsset"></a>
# **deleteSpecificationsOfAsset**
> deleteSpecificationsOfAsset(bodyassetId)

Delete specifications of an asset

The specification keys in the body will be removed of the object in your accessible scope. Multiple specification keys can be sent in the same request. If a key does not exist it will be ignored.

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

let apiInstance = new NetilionApiDocumentation.SpecificationApi();
let body = ["body_example"]; // [String] | Array of keys to delete from specifications
let assetId = 789; // Number | Id of the specified asset

apiInstance.deleteSpecificationsOfAsset(bodyassetId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[String]**](String.md)| Array of keys to delete from specifications | 
 **assetId** | **Number**| Id of the specified asset | 

### Return type

null (empty response body)

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

let apiInstance = new NetilionApiDocumentation.SpecificationApi();
let assetId = 789; // Number | Id of the specified asset
let key = "key_example"; // String | the exact key
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'sourceTimestampFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | source_timestamp filter from. Starting with + will include the previous value as well. Expected date format is YYYY-MM-DDThh:mm:ss
  'sourceTimestampTo': new Date("2013-10-20T19:20:30+01:00"), // Date | source_timestamp filter to. Ending with + will include the next value as well. Expected date format is YYYY-MM-DDThh:mm:ss
  'updatedAtFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | updated_at filter from. Starting with + will include the previous value as well. Expected date format is YYYY-MM-DDThh:mm:ss
  'updatedAtTo': new Date("2013-10-20T19:20:30+01:00"), // Date | updated_at filter to. Ending with + will include the next value as well. Expected date format is YYYY-MM-DDThh:mm:ss
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `source_timestamp` or `updated_at`, add `-` as a prefix for descending order.
};
apiInstance.getSpecificationHistoryOfAsset(assetId, key, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSpecificationHistoryOfInstrumentation"></a>
# **getSpecificationHistoryOfInstrumentation**
> SpecificationHistoryResponse getSpecificationHistoryOfInstrumentation(instrumentationId, key, opts)

Get the history of one specification attribute of an instrumentation.

This might be useful for history data. The response contains a collection of historic values and when they&#x60;ve been updated. Since this can be a lot of data the service uses pagination. The history can be filtered by using a date range of source_timestamp and/or updated_at. Please consider that source_timestamp is not required and update on the attribute without giving a source_timestamp wont be included in the resulting response

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

let apiInstance = new NetilionApiDocumentation.SpecificationApi();
let instrumentationId = 789; // Number | Id of the specified instrumentation
let key = "key_example"; // String | the exact key
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'sourceTimestampFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | source_timestamp filter from. Starting with + will include the previous value as well. Expected date format is YYYY-MM-DDThh:mm:ss
  'sourceTimestampTo': new Date("2013-10-20T19:20:30+01:00"), // Date | source_timestamp filter to. Ending with + will include the next value as well. Expected date format is YYYY-MM-DDThh:mm:ss
  'updatedAtFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | updated_at filter from. Starting with + will include the previous value as well. Expected date format is YYYY-MM-DDThh:mm:ss
  'updatedAtTo': new Date("2013-10-20T19:20:30+01:00"), // Date | updated_at filter to. Ending with + will include the next value as well. Expected date format is YYYY-MM-DDThh:mm:ss
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `source_timestamp` or `updated_at`, add `-` as a prefix for descending order.
};
apiInstance.getSpecificationHistoryOfInstrumentation(instrumentationId, key, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSpecificationsOfAsset"></a>
# **getSpecificationsOfAsset**
> SpecificationsResponse getSpecificationsOfAsset(assetId, opts)

Get specifications of an asset

Returns the specification of an object in your accessible scope. If no specifications are defined, this is just an empty object. Specification must have the form below.

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

let apiInstance = new NetilionApiDocumentation.SpecificationApi();
let assetId = 789; // Number | Id of the specified asset
let opts = { 
  'key': "key_example" // String | Filter accepts '*' as wildcard
};
apiInstance.getSpecificationsOfAsset(assetId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| Id of the specified asset | 
 **key** | **String**| Filter accepts &#x27;*&#x27; as wildcard | [optional] 

### Return type

[**SpecificationsResponse**](SpecificationsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSpecificationsOfEvent"></a>
# **getSpecificationsOfEvent**
> SpecificationsResponse getSpecificationsOfEvent(eventId, opts)

Get specifications of an event

Returns the specification of an object in your accessible scope. If no specifications are defined, this is just an empty object. Specification must have the form below.

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

let apiInstance = new NetilionApiDocumentation.SpecificationApi();
let eventId = 789; // Number | Id of the specified event
let opts = { 
  'key': "key_example" // String | Filter accepts '*' as wildcard
};
apiInstance.getSpecificationsOfEvent(eventId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **Number**| Id of the specified event | 
 **key** | **String**| Filter accepts &#x27;*&#x27; as wildcard | [optional] 

### Return type

[**SpecificationsResponse**](SpecificationsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSpecificationsOfInstrumentation"></a>
# **getSpecificationsOfInstrumentation**
> SpecificationsResponse getSpecificationsOfInstrumentation(instrumentationId, opts)

Get specifications of an instrumentation

Returns the specification of an object in your accessible scope. If no specifications are defined, this is just an empty object. Specification must have the form below.

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

let apiInstance = new NetilionApiDocumentation.SpecificationApi();
let instrumentationId = 789; // Number | Id of the specified instrumentation
let opts = { 
  'key': "key_example" // String | Filter accepts '*' as wildcard
};
apiInstance.getSpecificationsOfInstrumentation(instrumentationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the specified instrumentation | 
 **key** | **String**| Filter accepts &#x27;*&#x27; as wildcard | [optional] 

### Return type

[**SpecificationsResponse**](SpecificationsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSpecificationsOfNode"></a>
# **getSpecificationsOfNode**
> SpecificationsResponse getSpecificationsOfNode(nodeId, opts)

Get specifications of a node

Returns the specification of an object in your accessible scope. If no specifications are defined, this is just an empty object. Specification must have the form below.

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

let apiInstance = new NetilionApiDocumentation.SpecificationApi();
let nodeId = 789; // Number | Id of the specified node
let opts = { 
  'key': "key_example" // String | Filter accepts '*' as wildcard
};
apiInstance.getSpecificationsOfNode(nodeId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **Number**| Id of the specified node | 
 **key** | **String**| Filter accepts &#x27;*&#x27; as wildcard | [optional] 

### Return type

[**SpecificationsResponse**](SpecificationsResponse.md)

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

let apiInstance = new NetilionApiDocumentation.SpecificationApi();
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

<a name="getSpecificationsOfSubscription"></a>
# **getSpecificationsOfSubscription**
> SpecificationsResponse getSpecificationsOfSubscription(subscriptionId, opts)

Get specifications of a subscription

Returns the specification of an object in your accessible scope. If no specifications are defined, this is just an empty object. Specification must have the form below.

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

let apiInstance = new NetilionApiDocumentation.SpecificationApi();
let subscriptionId = 789; // Number | Id of the specified subscription
let opts = { 
  'key': "key_example" // String | Filter accepts '*' as wildcard
};
apiInstance.getSpecificationsOfSubscription(subscriptionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **Number**| Id of the specified subscription | 
 **key** | **String**| Filter accepts &#x27;*&#x27; as wildcard | [optional] 

### Return type

[**SpecificationsResponse**](SpecificationsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSpecificationsOfUser"></a>
# **getSpecificationsOfUser**
> SpecificationsResponse getSpecificationsOfUser(userId, opts)

Get specifications of a user

Returns the specification of an object in your accessible scope. If no specifications are defined, this is just an empty object. Specification must have the form below.

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

let apiInstance = new NetilionApiDocumentation.SpecificationApi();
let userId = 789; // Number | Id of the specified user
let opts = { 
  'key': "key_example" // String | Filter accepts '*' as wildcard
};
apiInstance.getSpecificationsOfUser(userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the specified user | 
 **key** | **String**| Filter accepts &#x27;*&#x27; as wildcard | [optional] 

### Return type

[**SpecificationsResponse**](SpecificationsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="removeSpecificationsFromEvent"></a>
# **removeSpecificationsFromEvent**
> removeSpecificationsFromEvent(bodyeventId)

Delete specifications of an event

The specification keys in the body will be removed of the object in your accessible scope. Multiple specification keys can be sent in the same request. If a key does not exist it will be ignored.

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

let apiInstance = new NetilionApiDocumentation.SpecificationApi();
let body = ["body_example"]; // [String] | Array of keys to delete from specifications
let eventId = 789; // Number | Id of the specified event

apiInstance.removeSpecificationsFromEvent(bodyeventId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[String]**](String.md)| Array of keys to delete from specifications | 
 **eventId** | **Number**| Id of the specified event | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeSpecificationsFromInstrumentation"></a>
# **removeSpecificationsFromInstrumentation**
> removeSpecificationsFromInstrumentation(bodyinstrumentationId)

Delete specifications of an instrumentation

The specification keys in the body will be removed of the object in your accessible scope. Multiple specification keys can be sent in the same request. If a key does not exist it will be ignored.

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

let apiInstance = new NetilionApiDocumentation.SpecificationApi();
let body = ["body_example"]; // [String] | Array of keys to delete from specifications
let instrumentationId = 789; // Number | Id of the specified instrumentation

apiInstance.removeSpecificationsFromInstrumentation(bodyinstrumentationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[String]**](String.md)| Array of keys to delete from specifications | 
 **instrumentationId** | **Number**| Id of the specified instrumentation | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeSpecificationsFromNode"></a>
# **removeSpecificationsFromNode**
> removeSpecificationsFromNode(bodynodeId)

Delete specifications of a node

The specification keys in the body will be removed of the object in your accessible scope. If a key does not exist it will be ignored.

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

let apiInstance = new NetilionApiDocumentation.SpecificationApi();
let body = ["body_example"]; // [String] | Array of keys to delete from specifications
let nodeId = 789; // Number | Id of the specified node

apiInstance.removeSpecificationsFromNode(bodynodeId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[String]**](String.md)| Array of keys to delete from specifications | 
 **nodeId** | **Number**| Id of the specified node | 

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

let apiInstance = new NetilionApiDocumentation.SpecificationApi();
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

<a name="removeSpecificationsFromSubscriptions"></a>
# **removeSpecificationsFromSubscriptions**
> removeSpecificationsFromSubscriptions(bodysubscriptionId)

Delete specifications of a subscription

The specification keys in the body will be removed of the object in your accessible scope. If a key does not exist it will be ignored.

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

let apiInstance = new NetilionApiDocumentation.SpecificationApi();
let body = ["body_example"]; // [String] | Array of keys to delete from specifications
let subscriptionId = 789; // Number | Id of the specified subscription

apiInstance.removeSpecificationsFromSubscriptions(bodysubscriptionId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[String]**](String.md)| Array of keys to delete from specifications | 
 **subscriptionId** | **Number**| Id of the specified subscription | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeSpecificationsFromUsers"></a>
# **removeSpecificationsFromUsers**
> removeSpecificationsFromUsers(bodyuserId)

Delete specifications of a user

The specification keys in the body will be removed of the object in your accessible scope. If a key does not exist it will be ignored.

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

let apiInstance = new NetilionApiDocumentation.SpecificationApi();
let body = ["body_example"]; // [String] | Array of keys to delete from specifications
let userId = 789; // Number | Id of the specified user

apiInstance.removeSpecificationsFromUsers(bodyuserId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[String]**](String.md)| Array of keys to delete from specifications | 
 **userId** | **Number**| Id of the specified user | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="renameSpecificationsOfAsset"></a>
# **renameSpecificationsOfAsset**
> renameSpecificationsOfAsset(bodyassetId)

Rename a specification key

Rename one specification key of an asset in your accessible scope. The key name allows [a-z A-Z 0-9 . - _ ]. All uppercase letters will be converted to lower-case.

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

let apiInstance = new NetilionApiDocumentation.SpecificationApi();
let body = new NetilionApiDocumentation.SpecificationsRename(); // SpecificationsRename | The specifications object to patch.
let assetId = 789; // Number | Id of the specified asset

apiInstance.renameSpecificationsOfAsset(bodyassetId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SpecificationsRename**](SpecificationsRename.md)| The specifications object to patch. | 
 **assetId** | **Number**| Id of the specified asset | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="renameSpecificationsOfEvent"></a>
# **renameSpecificationsOfEvent**
> renameSpecificationsOfEvent(bodyeventId)

Rename a specification key

Rename one specification key of an event in your accessible scope. The key name allows [a-z A-Z 0-9 . - _ ] all uppercase letters will be converted to lower-case.

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

let apiInstance = new NetilionApiDocumentation.SpecificationApi();
let body = new NetilionApiDocumentation.SpecificationsRename(); // SpecificationsRename | The specifications object to patch.
let eventId = 789; // Number | Id of the specified node

apiInstance.renameSpecificationsOfEvent(bodyeventId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SpecificationsRename**](SpecificationsRename.md)| The specifications object to patch. | 
 **eventId** | **Number**| Id of the specified node | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="renameSpecificationsOfInstrumentation"></a>
# **renameSpecificationsOfInstrumentation**
> renameSpecificationsOfInstrumentation(bodyinstrumentationId)

Rename a specification key

Rename one specification key of an instrumentation in your accessible scope. The key name allows [a-z A-Z 0-9 . - _ ] all uppercase letters will be converted to lower-case.

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

let apiInstance = new NetilionApiDocumentation.SpecificationApi();
let body = new NetilionApiDocumentation.SpecificationsRename(); // SpecificationsRename | The specifications object to patch.
let instrumentationId = 789; // Number | Id of the specified instrumentation

apiInstance.renameSpecificationsOfInstrumentation(bodyinstrumentationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SpecificationsRename**](SpecificationsRename.md)| The specifications object to patch. | 
 **instrumentationId** | **Number**| Id of the specified instrumentation | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="renameSpecificationsOfNode"></a>
# **renameSpecificationsOfNode**
> renameSpecificationsOfNode(bodynodeId)

Rename a specification key

Rename one specification key of a node in your accessible scope. The key name allows [a-z A-Z 0-9 . - _ ] all uppercase letters will be converted to lower-case.

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

let apiInstance = new NetilionApiDocumentation.SpecificationApi();
let body = new NetilionApiDocumentation.SpecificationsRename(); // SpecificationsRename | The specifications object to patch.
let nodeId = 789; // Number | Id of the specified node

apiInstance.renameSpecificationsOfNode(bodynodeId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SpecificationsRename**](SpecificationsRename.md)| The specifications object to patch. | 
 **nodeId** | **Number**| Id of the specified node | 

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

let apiInstance = new NetilionApiDocumentation.SpecificationApi();
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

<a name="renameSpecificationsOfSubscriptions"></a>
# **renameSpecificationsOfSubscriptions**
> renameSpecificationsOfSubscriptions(bodysubscriptionId)

Rename a specification key

Rename one specification key of a subscription in your accessible scope. The key name allows [a-z A-Z 0-9 . - _ ] all uppercase letters will be converted to lower-case.

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

let apiInstance = new NetilionApiDocumentation.SpecificationApi();
let body = new NetilionApiDocumentation.SpecificationsRename(); // SpecificationsRename | The specifications object to patch.
let subscriptionId = 789; // Number | Id of the specified subscription

apiInstance.renameSpecificationsOfSubscriptions(bodysubscriptionId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SpecificationsRename**](SpecificationsRename.md)| The specifications object to patch. | 
 **subscriptionId** | **Number**| Id of the specified subscription | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="renameSpecificationsOfUsers"></a>
# **renameSpecificationsOfUsers**
> renameSpecificationsOfUsers(bodyuserId)

Rename a specification key

Rename one specification key of a user in your accessible scope. The key name allows [a-z A-Z 0-9 . - _ ] all uppercase letters will be converted to lower-case.

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

let apiInstance = new NetilionApiDocumentation.SpecificationApi();
let body = new NetilionApiDocumentation.SpecificationsRename(); // SpecificationsRename | The specifications object to patch.
let userId = 789; // Number | Id of the specified user

apiInstance.renameSpecificationsOfUsers(bodyuserId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SpecificationsRename**](SpecificationsRename.md)| The specifications object to patch. | 
 **userId** | **Number**| Id of the specified user | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSpecificationsOfAsset"></a>
# **updateSpecificationsOfAsset**
> updateSpecificationsOfAsset(bodyassetId)

Update specifications of an asset

Update the specification object of an asset in your accessible scope. To add specifications, just add the key and set the value object with value, unit and source_timestamp. To mark an existing specification to be unknown, the value could be set to null. To delete keys, use the delete method. Multiple specification objects can be sent in the same request. Keys inside a specification are unique and can only be added once. Keys can only consist of [a-z A-Z 0-9 . - _ ]. All uppercase A-Z are converted to lower-case a-z. For a key that is send multiple times in the request body, only the last key-value is saved.  It is possible to save complex objects in the value as vector. In this case the unit must be &#x27;vector&#x27; and the value a valid object in the following format: &#x60;&#x60;&#x60;       [           {             \&quot;key\&quot;: {              \&quot;value\&quot;: \&quot;string\&quot;,              \&quot;unit\&quot;: \&quot;string\&quot;            }           },           {             \&quot;second_key\&quot;: {               \&quot;value\&quot;: \&quot;string\&quot;             }           }        ]   &#x60;&#x60;&#x60;  - key can only consist of [a-z A-Z 0-9 . - _ ]. - value is mandatory, max length 6000 chars - unit is optional, max length 50 chars - its impossible to filter for vector values

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

let apiInstance = new NetilionApiDocumentation.SpecificationApi();
let body = null; // {String: SpecificationRequest} | The specifications objects to patch.
let assetId = 789; // Number | Id of the specified asset

apiInstance.updateSpecificationsOfAsset(bodyassetId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**{String: SpecificationRequest}**](Object.md)| The specifications objects to patch. | 
 **assetId** | **Number**| Id of the specified asset | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSpecificationsOfEvent"></a>
# **updateSpecificationsOfEvent**
> updateSpecificationsOfEvent(bodyeventId)

Update specifications of an event

Update the specification object of an event in your accessible scope. To add specifications, just add the key and set the value object with value, unit and source_timestamp. To mark an existing specification to be unknown, the value could be set to null. To delete keys, use the delete method. Multiple specification objects can be sent in the same request. Keys inside a specification are unique and can only be added once. Keys can only consist of a-z A-Z 0-9 . - _ all uppercase A-Z are converted to lower-case a-z. For a key that is send mutliple times in the request body, only the last key-value is saved.

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

let apiInstance = new NetilionApiDocumentation.SpecificationApi();
let body = null; // {String: SpecificationRequest} | The specifications objects to patch.
let eventId = 789; // Number | Id of the specified event

apiInstance.updateSpecificationsOfEvent(bodyeventId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**{String: SpecificationRequest}**](Object.md)| The specifications objects to patch. | 
 **eventId** | **Number**| Id of the specified event | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSpecificationsOfInstrumentation"></a>
# **updateSpecificationsOfInstrumentation**
> updateSpecificationsOfInstrumentation(bodyinstrumentationId)

Update specifications of an instrumentation

Update the specification object of an instrumentation in your accessible scope. To add specifications, just add the key and set the value object with value, unit and source_timestamp. To mark an existing specification to be unknown, the value could be set to null. To delete keys, use the delete method. Multiple specification objects can be sent in the same request. Keys inside a specification are unique and can only be added once. Keys can only consist of [a-z A-Z 0-9 . - _ ]. All uppercase A-Z are converted to lower-case a-z. For a key that is send multiple times in the request body, only the last key-value is saved.

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

let apiInstance = new NetilionApiDocumentation.SpecificationApi();
let body = null; // {String: SpecificationRequest} | The specifications objects to patch.
let instrumentationId = 789; // Number | Id of the specified instrumentation

apiInstance.updateSpecificationsOfInstrumentation(bodyinstrumentationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**{String: SpecificationRequest}**](Object.md)| The specifications objects to patch. | 
 **instrumentationId** | **Number**| Id of the specified instrumentation | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSpecificationsOfNode"></a>
# **updateSpecificationsOfNode**
> updateSpecificationsOfNode(bodynodeId)

Update specifications of a node

Update the specification object of a node in your accessible scope. To add specifications, just add the key and set the value object with value, unit and source_timestamp. To mark an existing specification to be unknown, the value could be set to null. To delete keys, use the delete method. Multiple specification objects can be sent in the same request. Keys inside a specification are unique and can only be added once. Keys can only consist of [a-z A-Z 0-9 . - _ ]. All uppercase A-Z are converted to lower-case a-z. For a key that is send multiple times in the request body, only the last key-value is saved.

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

let apiInstance = new NetilionApiDocumentation.SpecificationApi();
let body = null; // {String: SpecificationRequest} | The specifications objects to patch.
let nodeId = 789; // Number | Id of the specified node

apiInstance.updateSpecificationsOfNode(bodynodeId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**{String: SpecificationRequest}**](Object.md)| The specifications objects to patch. | 
 **nodeId** | **Number**| Id of the specified node | 

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

let apiInstance = new NetilionApiDocumentation.SpecificationApi();
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

<a name="updateSpecificationsOfSubscriptions"></a>
# **updateSpecificationsOfSubscriptions**
> updateSpecificationsOfSubscriptions(bodysubscriptionId)

Update specifications of a subscription

Update the specification object of a subscription in your accessible scope. To add specifications, just add the key and set the value object with value, unit and source_timestamp. To mark an existing specification to be unknown, the value could be set to null. To delete keys, use the delete method. Multiple specification objects can be sent in the same request. Keys inside a specification are unique and can only be added once. Keys can only consist of [a-z A-Z 0-9 . - _ ]. All uppercase A-Z are converted to lower-case a-z. For a key that is send multiple times in the request body, only the last key-value is saved.

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

let apiInstance = new NetilionApiDocumentation.SpecificationApi();
let body = null; // {String: SpecificationRequest} | The specifications objects to patch.
let subscriptionId = 789; // Number | Id of the specified subscription

apiInstance.updateSpecificationsOfSubscriptions(bodysubscriptionId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**{String: SpecificationRequest}**](Object.md)| The specifications objects to patch. | 
 **subscriptionId** | **Number**| Id of the specified subscription | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSpecificationsOfUsers"></a>
# **updateSpecificationsOfUsers**
> updateSpecificationsOfUsers(bodyuserId)

Update specifications of a user

Update the specification object of a user in your accessible scope. To add specifications, just add the key and set the value object with value, unit and source_timestamp. To mark an existing specification to be unknown, the value could be set to null. To delete keys, use the delete method. Multiple specification objects can be sent in the same request. Keys inside a specification are unique and can only be added once. Keys can only consist of [a-z A-Z 0-9 . - _ ]. All uppercase A-Z are converted to lower-case a-z. For a key that is send multiple times in the request body, only the last key-value is saved.

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

let apiInstance = new NetilionApiDocumentation.SpecificationApi();
let body = null; // {String: SpecificationRequest} | The specifications objects to patch.
let userId = 789; // Number | Id of the specified user

apiInstance.updateSpecificationsOfUsers(bodyuserId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**{String: SpecificationRequest}**](Object.md)| The specifications objects to patch. | 
 **userId** | **Number**| Id of the specified user | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

