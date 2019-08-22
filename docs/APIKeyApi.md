# NetilionApiDocumentation.APIKeyApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAPIKey**](APIKeyApi.md#createAPIKey) | **POST** /api_keys | Create a new APIKey
[**deleteAPIKey**](APIKeyApi.md#deleteAPIKey) | **DELETE** /api_keys/{id} | Delete an APIKey
[**getAPIKeyById**](APIKeyApi.md#getAPIKeyById) | **GET** /api_keys/{id} | Get a single APIKey
[**getAPIKeys**](APIKeyApi.md#getAPIKeys) | **GET** /api_keys | Get a range of APIKeys
[**updateAPIKey**](APIKeyApi.md#updateAPIKey) | **PATCH** /api_keys/{id} | Update an APIKey


<a name="createAPIKey"></a>
# **createAPIKey**
> APIKeyResponse createAPIKey(body)

Create a new APIKey

Create a new APIKey. The values of the api_key and the api_secret can&#39;t be set and will be generated. To create an APIKey, the client_application must have an API Subscription assigned. valid_from and valid_until will be adopted from the API Subscription

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

var apiInstance = new NetilionApiDocumentation.APIKeyApi();

var body = new NetilionApiDocumentation.APIKeyRequest(); // APIKeyRequest | APIKey object that needs to be created. client_application

apiInstance.createAPIKey(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**APIKeyRequest**](APIKeyRequest.md)| APIKey object that needs to be created. client_application | 

### Return type

[**APIKeyResponse**](APIKeyResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAPIKey"></a>
# **deleteAPIKey**
> deleteAPIKey(id)

Delete an APIKey

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

var apiInstance = new NetilionApiDocumentation.APIKeyApi();

var id = 789; // Number | Id of the APIKey to delete

apiInstance.deleteAPIKey(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the APIKey to delete | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAPIKeyById"></a>
# **getAPIKeyById**
> APIKeyResponse getAPIKeyById(id)

Get a single APIKey

Get a specific APIKey in your accessible scope, identified by the id in the URL.

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

var apiInstance = new NetilionApiDocumentation.APIKeyApi();

var id = 789; // Number | Id of the APIKey to fetch

apiInstance.getAPIKeyById(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the APIKey to fetch | 

### Return type

[**APIKeyResponse**](APIKeyResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAPIKeys"></a>
# **getAPIKeys**
> APIKeysResponse getAPIKeys(opts)

Get a range of APIKeys

Returns a list of APIKeys in your accessible scope. If the query has no matches, the response is an empty list.

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

var apiInstance = new NetilionApiDocumentation.APIKeyApi();

var opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'apiKey': "apiKey_example", // String | Filter accepts `*` as wildcard
  'validFrom': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'validFromFrom': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'validFromTo': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'validUntil': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'validUntilFrom': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'validUntilTo': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'orderBy': "orderBy_example", // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getAPIKeys(opts).then(function(data) {
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
 **apiKey** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **validFrom** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **validFromFrom** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **validFromTo** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **validUntil** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **validUntilFrom** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **validUntilTo** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**APIKeysResponse**](APIKeysResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateAPIKey"></a>
# **updateAPIKey**
> updateAPIKey(id, body)

Update an APIKey

Update accessible parameters of the requested resource in your accessible scope. The value of the api_key and api_secret can&#39;t be changed.

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

var apiInstance = new NetilionApiDocumentation.APIKeyApi();

var id = 789; // Number | Id of the APIKey to update

var body = new NetilionApiDocumentation.APIKeyRequest(); // APIKeyRequest | Parameters that shall be updated.

apiInstance.updateAPIKey(id, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the APIKey to update | 
 **body** | [**APIKeyRequest**](APIKeyRequest.md)| Parameters that shall be updated. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

