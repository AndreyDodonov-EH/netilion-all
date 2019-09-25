# NetilionApiDocumentation.ThresholdApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createInstrumentationThreshold**](ThresholdApi.md#createInstrumentationThreshold) | **POST** /instrumentations/{instrumentation_id}/thresholds | Create an instrumentation threshold
[**deleteInstrumentationThreshold**](ThresholdApi.md#deleteInstrumentationThreshold) | **DELETE** /instrumentations/{instrumentation_id}/thresholds/{id} | Delete an instrumentation threshold
[**getInstrumentationThreshold**](ThresholdApi.md#getInstrumentationThreshold) | **GET** /instrumentations/{instrumentation_id}/thresholds/{id} | Get an instrumentation threshold
[**getInstrumentationThresholds**](ThresholdApi.md#getInstrumentationThresholds) | **GET** /instrumentations/{instrumentation_id}/thresholds | Get instrumentation thresholds
[**updateInstrumentationThreshold**](ThresholdApi.md#updateInstrumentationThreshold) | **PATCH** /instrumentations/{instrumentation_id}/thresholds/{id} | Update an instrumentation threshold


<a name="createInstrumentationThreshold"></a>
# **createInstrumentationThreshold**
> ThresholdResponse createInstrumentationThreshold(instrumentationId, body)

Create an instrumentation threshold

Create a new instrumentation threshold. Thresholds value order must be &#x60;&#x60;&#x60;low_low &lt; low &lt; high &lt; high_high&#x60;&#x60;&#x60;. This action requires &#x60;&#x60;&#x60;can_udpate&#x60;&#x60;&#x60; permission on the instrumentation.

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

var apiInstance = new NetilionApiDocumentation.ThresholdApi();

var instrumentationId = 789; // Number | Id of the specified instrumentation

var body = new NetilionApiDocumentation.ThresholdRequest(); // ThresholdRequest | Object body that will be created.

apiInstance.createInstrumentationThreshold(instrumentationId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the specified instrumentation | 
 **body** | [**ThresholdRequest**](ThresholdRequest.md)| Object body that will be created. | 

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

var apiInstance = new NetilionApiDocumentation.ThresholdApi();

var instrumentationId = 789; // Number | Id of the instrumentation

var id = 789; // Number | Id of the instrumentation threshold

apiInstance.deleteInstrumentationThreshold(instrumentationId, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInstrumentationThreshold"></a>
# **getInstrumentationThreshold**
> ThresholdResponse getInstrumentationThreshold(instrumentationId, id)

Get an instrumentation threshold

Get a single threshold of an instrumentation.

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

var apiInstance = new NetilionApiDocumentation.ThresholdApi();

var instrumentationId = 789; // Number | Id of the instrumentation

var id = 789; // Number | Id of the instrumentation threshold

apiInstance.getInstrumentationThreshold(instrumentationId, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInstrumentationThresholds"></a>
# **getInstrumentationThresholds**
> ThresholdsResponse getInstrumentationThresholds(instrumentationId, opts)

Get instrumentation thresholds

Get all thresholds of an instrumentation.

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

var apiInstance = new NetilionApiDocumentation.ThresholdApi();

var instrumentationId = 789; // Number | Id of the instrumentation

var opts = { 
  'key': "key_example", // String | filter by key
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `key`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getInstrumentationThresholds(instrumentationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateInstrumentationThreshold"></a>
# **updateInstrumentationThreshold**
> ThresholdResponse updateInstrumentationThreshold(instrumentationId, id, body)

Update an instrumentation threshold

Replaces the threshold belonging to an instrumentation. This action requires &#x60;can_udpate&#x60; permission on the instrumentation

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

var apiInstance = new NetilionApiDocumentation.ThresholdApi();

var instrumentationId = 789; // Number | Id of the instrumentation

var id = 789; // Number | Id of the instrumentation threshold

var body = new NetilionApiDocumentation.ThresholdRequest(); // ThresholdRequest | Object body that will be updated.

apiInstance.updateInstrumentationThreshold(instrumentationId, id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation | 
 **id** | **Number**| Id of the instrumentation threshold | 
 **body** | [**ThresholdRequest**](ThresholdRequest.md)| Object body that will be updated. | 

### Return type

[**ThresholdResponse**](ThresholdResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

