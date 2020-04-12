# NetilionApiDocumentation.HealthConditionCauseApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createHealthConditionCause**](HealthConditionCauseApi.md#createHealthConditionCause) | **POST** /health_conditions/{health_condition_id}/causes | Create a health condition cause
[**deleteCause**](HealthConditionCauseApi.md#deleteCause) | **DELETE** /health_conditions/{health_condition_id}/causes/{id} | Delete a health condition cause
[**getHealthConditionCauseById**](HealthConditionCauseApi.md#getHealthConditionCauseById) | **GET** /health_conditions/{health_condition_id}/causes/{id} | Get a single health condition cause
[**getHealthConditionCauses**](HealthConditionCauseApi.md#getHealthConditionCauses) | **GET** /health_conditions/{health_condition_id}/causes | Get all causes of a health condition
[**updateHealthConditionCause**](HealthConditionCauseApi.md#updateHealthConditionCause) | **PATCH** /health_conditions/{health_condition_id}/causes/{id} | Update a health condition cause

<a name="createHealthConditionCause"></a>
# **createHealthConditionCause**
> HealthConditionCauseResponse createHealthConditionCause(bodyhealthConditionId)

Create a health condition cause

Cause must have a code and at least one health condition

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

let apiInstance = new NetilionApiDocumentation.HealthConditionCauseApi();
let body = new NetilionApiDocumentation.HealthConditionCauseRequest(); // HealthConditionCauseRequest | Parameters that shall be updated.
let healthConditionId = 789; // Number | The resource defined in the URL

apiInstance.createHealthConditionCause(bodyhealthConditionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**HealthConditionCauseRequest**](HealthConditionCauseRequest.md)| Parameters that shall be updated. | 
 **healthConditionId** | **Number**| The resource defined in the URL | 

### Return type

[**HealthConditionCauseResponse**](HealthConditionCauseResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCause"></a>
# **deleteCause**
> deleteCause(healthConditionId, id)

Delete a health condition cause

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

let apiInstance = new NetilionApiDocumentation.HealthConditionCauseApi();
let healthConditionId = 789; // Number | The resource defined in the URL
let id = 789; // Number | Id of the cause to delete

apiInstance.deleteCause(healthConditionId, id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **healthConditionId** | **Number**| The resource defined in the URL | 
 **id** | **Number**| Id of the cause to delete | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHealthConditionCauseById"></a>
# **getHealthConditionCauseById**
> HealthConditionCauseResponse getHealthConditionCauseById(healthConditionId, id, opts)

Get a single health condition cause

Get a specific cause identified by the id in the URL. Possible include value: &#x60;&#x60;remedies&#x60;&#x60;

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

let apiInstance = new NetilionApiDocumentation.HealthConditionCauseApi();
let healthConditionId = 789; // Number | The resource defined in the URL
let id = 789; // Number | Id of the cause to fetch
let opts = { 
  'include': "include_example", // String | Comma separated list of objects to include in response
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getHealthConditionCauseById(healthConditionId, id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **healthConditionId** | **Number**| The resource defined in the URL | 
 **id** | **Number**| Id of the cause to fetch | 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**HealthConditionCauseResponse**](HealthConditionCauseResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHealthConditionCauses"></a>
# **getHealthConditionCauses**
> Object getHealthConditionCauses(healthConditionId, opts)

Get all causes of a health condition

Returns a list of causes of a health condition. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.

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

let apiInstance = new NetilionApiDocumentation.HealthConditionCauseApi();
let healthConditionId = 789; // Number | The resource defined in the URL
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'code': "code_example", // String | Filter accepts `*` as wildcard
  'description': "description_example", // String | Filter accepts `*` as wildcard
  'orderBy': "orderBy_example", // String | Order result by attribute value, accepts `id`, `code`, `created_at` or `updated_at`, add `-` as a prefix for descending order. Default value is `id`
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getHealthConditionCauses(healthConditionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **healthConditionId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **code** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **description** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;code&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;, add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

**Object**

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateHealthConditionCause"></a>
# **updateHealthConditionCause**
> updateHealthConditionCause(bodyhealthConditionIdid, opts)

Update a health condition cause

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

let apiInstance = new NetilionApiDocumentation.HealthConditionCauseApi();
let body = new NetilionApiDocumentation.HealthConditionCauseRequest(); // HealthConditionCauseRequest | Parameters that shall be updated.
let healthConditionId = 789; // Number | The resource defined in the URL
let id = 789; // Number | Id of the cause to update
let opts = { 
  'contentLanguage': "contentLanguage_example" // String | language of the content
};
apiInstance.updateHealthConditionCause(bodyhealthConditionIdid, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**HealthConditionCauseRequest**](HealthConditionCauseRequest.md)| Parameters that shall be updated. | 
 **healthConditionId** | **Number**| The resource defined in the URL | 
 **id** | **Number**| Id of the cause to update | 
 **contentLanguage** | **String**| language of the content | [optional] 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

