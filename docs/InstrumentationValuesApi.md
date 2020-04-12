# NetilionApiDocumentation.InstrumentationValuesApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInstrumentationValues**](InstrumentationValuesApi.md#getInstrumentationValues) | **GET** /instrumentations/{instrumentation_id}/values | Get latest values for the instrumentation.
[**getInstrumentationValuesForKey**](InstrumentationValuesApi.md#getInstrumentationValuesForKey) | **GET** /instrumentations/{instrumentation_id}/values/{key} | Get instrumentation values for a specific key.


<a name="getInstrumentationValues"></a>
# **getInstrumentationValues**
> AssetValuesResponse getInstrumentationValues(instrumentationId, , opts)

Get latest values for the instrumentation.

Returns a collection of the latest values for all keys of the instrumentation. Possible include values: &#x60;&#x60;&#x60;unit, asset&#x60;&#x60;&#x60;

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

var apiInstance = new NetilionApiDocumentation.InstrumentationValuesApi();

var instrumentationId = 789; // Number | The resource defined in the URL

var opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'key': "key_example", // String | only the values of the specified keys will be returned. If no key is specified all keys of the asset with its latest values will be received. Multiple values can be specified in a comma seperated list.
  'keyUnitId': "keyUnitId_example", // String | value of the provided key will be returned in the specified unit. If no key_unit is defined the last written unit will be returned. Accepted format is `key[unit_id]`. Multiple values can be provided in a comma seperated list.
  'group': "group_example" // String | Group of the asset value.
};
apiInstance.getInstrumentationValues(instrumentationId, , opts).then(function(data) {
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
 **key** | **String**| only the values of the specified keys will be returned. If no key is specified all keys of the asset with its latest values will be received. Multiple values can be specified in a comma seperated list. | [optional] 
 **keyUnitId** | **String**| value of the provided key will be returned in the specified unit. If no key_unit is defined the last written unit will be returned. Accepted format is &#x60;key[unit_id]&#x60;. Multiple values can be provided in a comma seperated list. | [optional] 
 **group** | **String**| Group of the asset value. | [optional] 

### Return type

[**AssetValuesResponse**](AssetValuesResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInstrumentationValuesForKey"></a>
# **getInstrumentationValuesForKey**
> AssetKeyValuesResponse getInstrumentationValuesForKey(instrumentationId, key, opts)

Get instrumentation values for a specific key.

Returns a collection of the history values of an values for the specified key. For a aggregated result of the values the filter parameters aggregation and interval are mandatory. Receiving the result in a specific unit please use the filter parameter unit. The allowed units can be found in the intro section. With the filter parameters from to it is possible to receive the history of a defined time period. Possible include values: &#x60;&#x60;&#x60;unit&#x60;&#x60;&#x60;

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

var apiInstance = new NetilionApiDocumentation.InstrumentationValuesApi();

var instrumentationId = 789; // Number | The resource defined in the URL

var key = "key_example"; // String | key for the instrumentation values

var opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page, default value is 500, maximum is 1000
  'include': "include_example", // String | Comma separated list of objects to include in response
  'from': new Date("2013-10-20"), // Date | Start date filter for history values. Expected date format is YYYY-MM-DDThh:mm:ss
  'to': new Date("2013-10-20"), // Date | End date for history values. Expected date format is YYYY-MM-DDThh:mm:ss
  'unitId': 56, // Number | Id of the unit in which the values are to be returned.
  'aggregation': "aggregation_example", // String | Supported aggregation methods are `mean, min, max, sum, stddev`. This value is mandatory if interval is defined.
  'interval': "interval_example", // String | Interval which is used for the aggregation. The value is mandatory if aggregation is defined. Supported intervals are number of `s, m, h, d, w`. Example `3h`.
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `timestamp`, add `-` as a prefix for descending order. Default value is `timestamp`
};
apiInstance.getInstrumentationValuesForKey(instrumentationId, key, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| The resource defined in the URL | 
 **key** | **String**| key for the instrumentation values | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page, default value is 500, maximum is 1000 | [optional] 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 
 **from** | **Date**| Start date filter for history values. Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **to** | **Date**| End date for history values. Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **unitId** | **Number**| Id of the unit in which the values are to be returned. | [optional] 
 **aggregation** | **String**| Supported aggregation methods are &#x60;mean, min, max, sum, stddev&#x60;. This value is mandatory if interval is defined. | [optional] 
 **interval** | **String**| Interval which is used for the aggregation. The value is mandatory if aggregation is defined. Supported intervals are number of &#x60;s, m, h, d, w&#x60;. Example &#x60;3h&#x60;. | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;timestamp&#x60;, add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;timestamp&#x60; | [optional] 

### Return type

[**AssetKeyValuesResponse**](AssetKeyValuesResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

