# NetilionApiDocumentation.AssetValuesApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAssetValues**](AssetValuesApi.md#createAssetValues) | **POST** /assets/{asset_id}/values | Create asset values
[**getAssetValues**](AssetValuesApi.md#getAssetValues) | **GET** /assets/{asset_id}/values | Get latest values for the asset.
[**getAssetValuesForKey**](AssetValuesApi.md#getAssetValuesForKey) | **GET** /assets/{asset_id}/values/{key} | Get asset values for a specific key.


<a name="createAssetValues"></a>
# **createAssetValues**
> createAssetValues(assetId, body)

Create asset values

Store values measured by an asset. For performance reasons, this endpoint behaves somewhat differently than normal endpoints:  * The data passed to this endpoint is processed asynchronously. * This endpoint always returns an empty response with status 204 No Content. * The data will be validated during processing. Invalid data will be dropped silently. * The request size is limited to 500kb, requests larger then 500kb will get an \&quot;413 Payload Too Large\&quot; error.  Data validations and manipultation:    * Keys and groups can only consist of the charaters [a-z A-Z 0-9 . - _ ].   * Keys and groups will be converted to lower case strings.   * Keys and groups must be between 1 and 128 characters long.   * Units can be passed as id or code. See the units endpoint for all available units.   * The timestamp is not mandatory and will be set to the time the value was transmitted to the server (This only works if the values get transfered one at a time, if you send multiple values without timestamp at once, all values will get the same timestamp and there for only the last one will be stored)

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

var apiInstance = new NetilionApiDocumentation.AssetValuesApi();

var assetId = 789; // Number | The resource defined in the URL

var body = new NetilionApiDocumentation.AssetValuesRequest(); // AssetValuesRequest | Values to store to an asset.

apiInstance.createAssetValues(assetId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| The resource defined in the URL | 
 **body** | [**AssetValuesRequest**](AssetValuesRequest.md)| Values to store to an asset. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAssetValues"></a>
# **getAssetValues**
> AssetValuesResponse getAssetValues(assetId, , opts)

Get latest values for the asset.

Returns a collection of the latest values for all keys of the asset. Possible include values: &#x60;&#x60;&#x60;unit&#x60;&#x60;&#x60;

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

var apiInstance = new NetilionApiDocumentation.AssetValuesApi();

var assetId = 789; // Number | The resource defined in the URL

var opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'key': "key_example", // String | only the values of the specified keys will be returned. If no key is specified all keys of the asset with its latest values will be received. Multiple values can be specified in a comma seperated list.
  'keyUnitId': "keyUnitId_example", // String | value of the provided key will be returned in the specified unit. If no key_unit is defined the last written unit will be retruned. Accepted format is `key[unit_id]`. Multiple vaöies can be provided in a comma seperated list.
  'group': "group_example" // String | Group of the asset value.
};
apiInstance.getAssetValues(assetId, , opts).then(function(data) {
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
 **key** | **String**| only the values of the specified keys will be returned. If no key is specified all keys of the asset with its latest values will be received. Multiple values can be specified in a comma seperated list. | [optional] 
 **keyUnitId** | **String**| value of the provided key will be returned in the specified unit. If no key_unit is defined the last written unit will be retruned. Accepted format is &#x60;key[unit_id]&#x60;. Multiple vaöies can be provided in a comma seperated list. | [optional] 
 **group** | **String**| Group of the asset value. | [optional] 

### Return type

[**AssetValuesResponse**](AssetValuesResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAssetValuesForKey"></a>
# **getAssetValuesForKey**
> AssetKeyValuesResponse getAssetValuesForKey(assetId, key, opts)

Get asset values for a specific key.

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

var apiInstance = new NetilionApiDocumentation.AssetValuesApi();

var assetId = 789; // Number | The resource defined in the URL

var key = "key_example"; // String | key for the asset values

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
apiInstance.getAssetValuesForKey(assetId, key, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| The resource defined in the URL | 
 **key** | **String**| key for the asset values | 
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

