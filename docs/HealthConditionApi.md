# NetilionApiDocumentation.HealthConditionApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createHealthCondition**](HealthConditionApi.md#createHealthCondition) | **POST** /health_conditions | Create a new health condition
[**deleteHealthCondition**](HealthConditionApi.md#deleteHealthCondition) | **DELETE** /health_conditions/{id} | Delete a health condition
[**getHealthConditionById**](HealthConditionApi.md#getHealthConditionById) | **GET** /health_conditions/{id} | Get a single health condition
[**getHealthConditions**](HealthConditionApi.md#getHealthConditions) | **GET** /health_conditions | Get a range of health conditions
[**updateHealthCondition**](HealthConditionApi.md#updateHealthCondition) | **PATCH** /health_conditions/{id} | Update a health condition

<a name="createHealthCondition"></a>
# **createHealthCondition**
> HealthConditionResponse createHealthCondition(body)

Create a new health condition

Health condition must have a diagnosis_code, a protocol and a device ident

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

let apiInstance = new NetilionApiDocumentation.HealthConditionApi();
let body = new NetilionApiDocumentation.HealthConditionRequest(); // HealthConditionRequest | Health Condition to create.

apiInstance.createHealthCondition(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**HealthConditionRequest**](HealthConditionRequest.md)| Health Condition to create. | 

### Return type

[**HealthConditionResponse**](HealthConditionResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteHealthCondition"></a>
# **deleteHealthCondition**
> deleteHealthCondition(id)

Delete a health condition

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

let apiInstance = new NetilionApiDocumentation.HealthConditionApi();
let id = 789; // Number | Id of the health condition to delete

apiInstance.deleteHealthCondition(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the health condition to delete | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHealthConditionById"></a>
# **getHealthConditionById**
> HealthConditionResponse getHealthConditionById(id, opts)

Get a single health condition

Get a specific health condition identified by the id in the URL. Possible include value: &#x60;&#x60;asset_status,tenant,causes,causes.remedies&#x60;&#x60;

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

let apiInstance = new NetilionApiDocumentation.HealthConditionApi();
let id = 789; // Number | Id of health condition to fetch
let opts = { 
  'include': "include_example", // String | Comma separated list of objects to include in response
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getHealthConditionById(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of health condition to fetch | 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**HealthConditionResponse**](HealthConditionResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHealthConditions"></a>
# **getHealthConditions**
> HealthConditionsResponse getHealthConditions(opts)

Get a range of health conditions

Returns a list of all health conditions. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.  Possible include value: &#x60;&#x60;asset_status,tenant,causes,causes.remedies&#x60;&#x60;

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

let apiInstance = new NetilionApiDocumentation.HealthConditionApi();
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'assetStatusId': "assetStatusId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'diagnosisCode': "diagnosisCode_example", // String | Filter accepts `*` as wildcard
  'deviceIdent': "deviceIdent_example", // String | Filter accepts `*` as wildcard
  'protocol': "protocol_example", // String | Filter accepts `PROFIBUS`, `HART` and `MODBUS`
  'protocolVersion': "protocolVersion_example", // String | Filter accepts `*` as wildcard
  'hidden': true, // Boolean | Filter accepts true or false
  'orderBy': "orderBy_example", // String | Order result by attribute value, accepts `id`, `diagnosis_code`, `device_ident`, `created_at` or `updated_at`, add `-` as a prefix for descending order. Default value is `id`
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getHealthConditions(opts).then((data) => {
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
 **assetStatusId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **diagnosisCode** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **deviceIdent** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **protocol** | **String**| Filter accepts &#x60;PROFIBUS&#x60;, &#x60;HART&#x60; and &#x60;MODBUS&#x60; | [optional] 
 **protocolVersion** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **hidden** | **Boolean**| Filter accepts true or false | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;diagnosis_code&#x60;, &#x60;device_ident&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;, add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**HealthConditionsResponse**](HealthConditionsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateHealthCondition"></a>
# **updateHealthCondition**
> updateHealthCondition(bodyid)

Update a health condition

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

let apiInstance = new NetilionApiDocumentation.HealthConditionApi();
let body = new NetilionApiDocumentation.HealthConditionRequest(); // HealthConditionRequest | Parameters that shall be updated.
let id = 789; // Number | Id of the health condition to update

apiInstance.updateHealthCondition(bodyid).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**HealthConditionRequest**](HealthConditionRequest.md)| Parameters that shall be updated. | 
 **id** | **Number**| Id of the health condition to update | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

