# NetilionApiDocumentation.HealthConditionRemedyApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createHealthConditionRemedy**](HealthConditionRemedyApi.md#createHealthConditionRemedy) | **POST** /health_conditions/{health_condition_id}/causes/{cause_id}/remedies | Create a remedy
[**deleteHealthConditionRemedy**](HealthConditionRemedyApi.md#deleteHealthConditionRemedy) | **DELETE** /health_conditions/{health_condition_id}/causes/{cause_id}/remedies/{id} | Delete a remedy
[**getHealthConditionRemedies**](HealthConditionRemedyApi.md#getHealthConditionRemedies) | **GET** /health_conditions/{health_condition_id}/causes/{cause_id}/remedies | Get all remedies of a cause
[**getHealthConditionRemedyById**](HealthConditionRemedyApi.md#getHealthConditionRemedyById) | **GET** /health_conditions/{health_condition_id}/causes/{cause_id}/remedies/{id} | Get a single remedy
[**updateHealthConditionRemedy**](HealthConditionRemedyApi.md#updateHealthConditionRemedy) | **PATCH** /health_conditions/{health_condition_id}/causes/{cause_id}/remedies/{id} | Update a remedy

<a name="createHealthConditionRemedy"></a>
# **createHealthConditionRemedy**
> HealthConditionRemedyResponse createHealthConditionRemedy(bodyhealthConditionIdcauseId)

Create a remedy

Remedy must have a code and a description scope.

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

let apiInstance = new NetilionApiDocumentation.HealthConditionRemedyApi();
let body = new NetilionApiDocumentation.HealthConditionRemedyRequest(); // HealthConditionRemedyRequest | Parameters that shall be updated
let healthConditionId = 789; // Number | The resource defined in the URL
let causeId = 789; // Number | The resource defined in the URL

apiInstance.createHealthConditionRemedy(bodyhealthConditionIdcauseId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**HealthConditionRemedyRequest**](HealthConditionRemedyRequest.md)| Parameters that shall be updated | 
 **healthConditionId** | **Number**| The resource defined in the URL | 
 **causeId** | **Number**| The resource defined in the URL | 

### Return type

[**HealthConditionRemedyResponse**](HealthConditionRemedyResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteHealthConditionRemedy"></a>
# **deleteHealthConditionRemedy**
> deleteHealthConditionRemedy(healthConditionId, causeId, id)

Delete a remedy

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

let apiInstance = new NetilionApiDocumentation.HealthConditionRemedyApi();
let healthConditionId = 789; // Number | The resource defined in the URL
let causeId = 789; // Number | The resource defined in the URL
let id = 789; // Number | Id of the remedy to delete

apiInstance.deleteHealthConditionRemedy(healthConditionId, causeId, id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **healthConditionId** | **Number**| The resource defined in the URL | 
 **causeId** | **Number**| The resource defined in the URL | 
 **id** | **Number**| Id of the remedy to delete | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHealthConditionRemedies"></a>
# **getHealthConditionRemedies**
> Object getHealthConditionRemedies(healthConditionId, causeId, opts)

Get all remedies of a cause

Returns a list of remedies for a specific cause. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.

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

let apiInstance = new NetilionApiDocumentation.HealthConditionRemedyApi();
let healthConditionId = 789; // Number | The resource defined in the URL
let causeId = 789; // Number | The resource defined in the URL
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'code': "code_example", // String | Filter accepts `*` as wildcard
  'description': "description_example", // String | Filter accepts `*` as wildcard
  'orderBy': "orderBy_example", // String | Order result by attribute value, accepts `id`, `code`, `created_at` or `updated_at`, add `-` as a prefix for descending order. Default value is `id`
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getHealthConditionRemedies(healthConditionId, causeId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **healthConditionId** | **Number**| The resource defined in the URL | 
 **causeId** | **Number**| The resource defined in the URL | 
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

<a name="getHealthConditionRemedyById"></a>
# **getHealthConditionRemedyById**
> HealthConditionRemedyResponse getHealthConditionRemedyById(healthConditionId, causeId, id, opts)

Get a single remedy

Get a specific remedy identified by the id in the URL.

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

let apiInstance = new NetilionApiDocumentation.HealthConditionRemedyApi();
let healthConditionId = 789; // Number | The resource defined in the URL
let causeId = 789; // Number | The resource defined in the URL
let id = 789; // Number | Id of the remedy to fetch
let opts = { 
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getHealthConditionRemedyById(healthConditionId, causeId, id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **healthConditionId** | **Number**| The resource defined in the URL | 
 **causeId** | **Number**| The resource defined in the URL | 
 **id** | **Number**| Id of the remedy to fetch | 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**HealthConditionRemedyResponse**](HealthConditionRemedyResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateHealthConditionRemedy"></a>
# **updateHealthConditionRemedy**
> updateHealthConditionRemedy(bodyhealthConditionIdcauseIdid, opts)

Update a remedy

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

let apiInstance = new NetilionApiDocumentation.HealthConditionRemedyApi();
let body = new NetilionApiDocumentation.HealthConditionRemedyRequest(); // HealthConditionRemedyRequest | Parameters that shall be updated
let healthConditionId = 789; // Number | The resource defined in the URL
let causeId = 789; // Number | The resource defined in the URL
let id = 789; // Number | Id of the remedy to update
let opts = { 
  'contentLanguage': "contentLanguage_example" // String | language of the content
};
apiInstance.updateHealthConditionRemedy(bodyhealthConditionIdcauseIdid, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**HealthConditionRemedyRequest**](HealthConditionRemedyRequest.md)| Parameters that shall be updated | 
 **healthConditionId** | **Number**| The resource defined in the URL | 
 **causeId** | **Number**| The resource defined in the URL | 
 **id** | **Number**| Id of the remedy to update | 
 **contentLanguage** | **String**| language of the content | [optional] 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

