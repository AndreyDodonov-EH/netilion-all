# NetilionApiDocumentation.ThresholdApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createInstrumentationThreshold**](ThresholdApi.md#createInstrumentationThreshold) | **POST** /instrumentations/{instrumentation_id}/thresholds | Create an instrumentation threshold
[**deleteInstrumentationThreshold**](ThresholdApi.md#deleteInstrumentationThreshold) | **DELETE** /instrumentations/{instrumentation_id}/thresholds/{id} | Delete an instrumentation threshold
[**getInstrumentationThreshold**](ThresholdApi.md#getInstrumentationThreshold) | **GET** /instrumentations/{instrumentation_id}/thresholds/{id} | Get an instrumentation threshold
[**getInstrumentationThresholds**](ThresholdApi.md#getInstrumentationThresholds) | **GET** /instrumentations/{instrumentation_id}/thresholds | Get instrumentation thresholds
[**updateInstrumentationThreshold**](ThresholdApi.md#updateInstrumentationThreshold) | **PATCH** /instrumentations/{instrumentation_id}/thresholds/{id} | Update an instrumentation threshold

<a name="createInstrumentationThreshold"></a>
# **createInstrumentationThreshold**
> ThresholdResponse createInstrumentationThreshold(bodyinstrumentationId)

Create an instrumentation threshold

Create a new instrumentation threshold. Thresholds value order must be &#x60;&#x60;&#x60;low_low &lt; low &lt; high &lt; high_high&#x60;&#x60;&#x60;. This action requires &#x60;&#x60;&#x60;can_udpate&#x60;&#x60;&#x60; permission on the instrumentation.

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

let apiInstance = new NetilionApiDocumentation.ThresholdApi();
let body = new NetilionApiDocumentation.ThresholdRequest(); // ThresholdRequest | Object body that will be created.
let instrumentationId = 789; // Number | Id of the specified instrumentation

apiInstance.createInstrumentationThreshold(bodyinstrumentationId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ThresholdRequest**](ThresholdRequest.md)| Object body that will be created. | 
 **instrumentationId** | **Number**| Id of the specified instrumentation | 

### Return type

[**ThresholdResponse**](ThresholdResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteInstrumentationThreshold"></a>
# **deleteInstrumentationThreshold**
> deleteInstrumentationThreshold(instrumentationId, id)

Delete an instrumentation threshold

Delete an instrumentation threshold.

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

let apiInstance = new NetilionApiDocumentation.ThresholdApi();
let instrumentationId = 789; // Number | Id of the instrumentation
let id = 789; // Number | Id of the instrumentation threshold

apiInstance.deleteInstrumentationThreshold(instrumentationId, id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation | 
 **id** | **Number**| Id of the instrumentation threshold | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInstrumentationThreshold"></a>
# **getInstrumentationThreshold**
> ThresholdResponse getInstrumentationThreshold(instrumentationId, id)

Get an instrumentation threshold

Get a single threshold of an instrumentation.

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

let apiInstance = new NetilionApiDocumentation.ThresholdApi();
let instrumentationId = 789; // Number | Id of the instrumentation
let id = 789; // Number | Id of the instrumentation threshold

apiInstance.getInstrumentationThreshold(instrumentationId, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation | 
 **id** | **Number**| Id of the instrumentation threshold | 

### Return type

[**ThresholdResponse**](ThresholdResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInstrumentationThresholds"></a>
# **getInstrumentationThresholds**
> ThresholdsResponse getInstrumentationThresholds(instrumentationId, opts)

Get instrumentation thresholds

Get all thresholds of an instrumentation.

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

let apiInstance = new NetilionApiDocumentation.ThresholdApi();
let instrumentationId = 789; // Number | Id of the instrumentation
let opts = { 
  'key': "key_example", // String | filter by key
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `key`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getInstrumentationThresholds(instrumentationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation | 
 **key** | **String**| filter by key | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;key&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**ThresholdsResponse**](ThresholdsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateInstrumentationThreshold"></a>
# **updateInstrumentationThreshold**
> ThresholdResponse updateInstrumentationThreshold(bodyinstrumentationIdid)

Update an instrumentation threshold

Replaces the threshold belonging to an instrumentation. This action requires &#x60;can_udpate&#x60; permission on the instrumentation

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

let apiInstance = new NetilionApiDocumentation.ThresholdApi();
let body = new NetilionApiDocumentation.ThresholdRequest(); // ThresholdRequest | Object body that will be updated.
let instrumentationId = 789; // Number | Id of the instrumentation
let id = 789; // Number | Id of the instrumentation threshold

apiInstance.updateInstrumentationThreshold(bodyinstrumentationIdid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ThresholdRequest**](ThresholdRequest.md)| Object body that will be updated. | 
 **instrumentationId** | **Number**| Id of the instrumentation | 
 **id** | **Number**| Id of the instrumentation threshold | 

### Return type

[**ThresholdResponse**](ThresholdResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

