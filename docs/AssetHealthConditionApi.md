# NetilionApiDocumentation.AssetHealthConditionApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addHealthConditionsToAsset**](AssetHealthConditionApi.md#addHealthConditionsToAsset) | **POST** /assets/{asset_id}/health_conditions | Add health conditions to an asset
[**calculateAssetHealthConditions**](AssetHealthConditionApi.md#calculateAssetHealthConditions) | **GET** /assets/{asset_id}/health_conditions/calculate | Calculate health conditions of an asset
[**calculateAssetHealthConditionsAndUpdateAsset**](AssetHealthConditionApi.md#calculateAssetHealthConditionsAndUpdateAsset) | **PATCH** /assets/{asset_id}/health_conditions/calculate | Calculate health conditions of an asset and update asset with this health conditions
[**getAssetHealthConditions**](AssetHealthConditionApi.md#getAssetHealthConditions) | **GET** /assets/{asset_id}/health_conditions | Get all health conditions assigned to an asset
[**getHealthConditionsOfAssetTimemachine**](AssetHealthConditionApi.md#getHealthConditionsOfAssetTimemachine) | **GET** /assets/{asset_id}/health_conditions/timemachine | Get all health_conditions historical evolution the given asset had assigned
[**reaplaceHealthConditionsOfAsset**](AssetHealthConditionApi.md#reaplaceHealthConditionsOfAsset) | **PATCH** /assets/{asset_id}/health_conditions | Replace health conditions of an asset
[**removeHealthConditionsOfAsset**](AssetHealthConditionApi.md#removeHealthConditionsOfAsset) | **DELETE** /assets/{asset_id}/health_conditions | Remove health conditions of an asset

<a name="addHealthConditionsToAsset"></a>
# **addHealthConditionsToAsset**
> addHealthConditionsToAsset(bodyassetId)

Add health conditions to an asset

Add one or more health conditions to an asset.

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

let apiInstance = new NetilionApiDocumentation.AssetHealthConditionApi();
let body = new NetilionApiDocumentation.AssetHealthConditionsRequest(); // AssetHealthConditionsRequest | Resources that shall be added.
let assetId = 789; // Number | The resource defined in the URL

apiInstance.addHealthConditionsToAsset(bodyassetId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetHealthConditionsRequest**](AssetHealthConditionsRequest.md)| Resources that shall be added. | 
 **assetId** | **Number**| The resource defined in the URL | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="calculateAssetHealthConditions"></a>
# **calculateAssetHealthConditions**
> AssetHealthConditionsResponse calculateAssetHealthConditions(assetId, protocol, diagnosisMessage, deviceIdent, opts)

Calculate health conditions of an asset

Calculates the health conditions of an asset defined by the given diagnosis message, protocol and device ident. Possible include values: &#x60;&#x60;asset_status,causes,causes.remedies&#x60;&#x60;

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

let apiInstance = new NetilionApiDocumentation.AssetHealthConditionApi();
let assetId = 789; // Number | The resource defined in the URL
let protocol = "protocol_example"; // String | Filter accepts 'PROFIBUS', 'HART' or 'MODBUS'
let diagnosisMessage = "diagnosisMessage_example"; // String | diagnosis message of an asset
let deviceIdent = "deviceIdent_example"; // String | device_ident of the asset
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'protocolVersion': "protocolVersion_example", // String | definition of the protocol version. For example 5, 6 or 7 for HART
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.calculateAssetHealthConditions(assetId, protocol, diagnosisMessage, deviceIdent, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| The resource defined in the URL | 
 **protocol** | **String**| Filter accepts &#x27;PROFIBUS&#x27;, &#x27;HART&#x27; or &#x27;MODBUS&#x27; | 
 **diagnosisMessage** | **String**| diagnosis message of an asset | 
 **deviceIdent** | **String**| device_ident of the asset | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 
 **protocolVersion** | **String**| definition of the protocol version. For example 5, 6 or 7 for HART | [optional] 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**AssetHealthConditionsResponse**](AssetHealthConditionsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="calculateAssetHealthConditionsAndUpdateAsset"></a>
# **calculateAssetHealthConditionsAndUpdateAsset**
> calculateAssetHealthConditionsAndUpdateAsset(bodyassetId)

Calculate health conditions of an asset and update asset with this health conditions

Calculates the health conditions of an asset defined by the given diagnosis message, protocol and device ident. The asset will be automatically updated with the result.

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

let apiInstance = new NetilionApiDocumentation.AssetHealthConditionApi();
let body = new NetilionApiDocumentation.AssetHealthConditionsCalculateRequest(); // AssetHealthConditionsCalculateRequest | Resources that shall be replaced.
let assetId = 789; // Number | The resource defined in the URL

apiInstance.calculateAssetHealthConditionsAndUpdateAsset(bodyassetId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetHealthConditionsCalculateRequest**](AssetHealthConditionsCalculateRequest.md)| Resources that shall be replaced. | 
 **assetId** | **Number**| The resource defined in the URL | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAssetHealthConditions"></a>
# **getAssetHealthConditions**
> AssetHealthConditionsResponse getAssetHealthConditions(assetId, opts)

Get all health conditions assigned to an asset

Returns a list of health conditions of an asset.  Possible include value: &#x60;&#x60;asset_status, causes, causes.remedies&#x60;&#x60;

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

let apiInstance = new NetilionApiDocumentation.AssetHealthConditionApi();
let assetId = 789; // Number | The resource defined in the URL
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'healthConditionId': "healthConditionId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'diagnosisCode': "diagnosisCode_example", // String | Filter accepts `*` as wildcard
  'assetStatusId': "assetStatusId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getAssetHealthConditions(assetId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **healthConditionId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **diagnosisCode** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **assetStatusId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**AssetHealthConditionsResponse**](AssetHealthConditionsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHealthConditionsOfAssetTimemachine"></a>
# **getHealthConditionsOfAssetTimemachine**
> AssetHealthConditionsTimemachineResponse getHealthConditionsOfAssetTimemachine(assetId, opts)

Get all health_conditions historical evolution the given asset had assigned

Returns a list of all health_conditions available in your scope of an asset. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.

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

let apiInstance = new NetilionApiDocumentation.AssetHealthConditionApi();
let assetId = 789; // Number | The resource defined in the URL
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | Start date filter for timemachine values. Expected date format is YYYY-MM-DDThh:mm:ss
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | End date for timemachine values. Expected date format is YYYY-MM-DDThh:mm:ss
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `created_datetime` or `deleted_datetime`, add `-` as a prefix for descending order.
};
apiInstance.getHealthConditionsOfAssetTimemachine(assetId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **from** | **Date**| Start date filter for timemachine values. Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **to** | **Date**| End date for timemachine values. Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;created_datetime&#x60; or &#x60;deleted_datetime&#x60;, add &#x60;-&#x60; as a prefix for descending order. | [optional] 

### Return type

[**AssetHealthConditionsTimemachineResponse**](AssetHealthConditionsTimemachineResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="reaplaceHealthConditionsOfAsset"></a>
# **reaplaceHealthConditionsOfAsset**
> reaplaceHealthConditionsOfAsset(bodyassetId)

Replace health conditions of an asset

Replaces all health conditions belonging to an asset. You can send a list of resources that will replace all previous values.

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

let apiInstance = new NetilionApiDocumentation.AssetHealthConditionApi();
let body = new NetilionApiDocumentation.AssetHealthConditionsRequest(); // AssetHealthConditionsRequest | Resources that shall be replaced.
let assetId = 789; // Number | The resource defined in the URL

apiInstance.reaplaceHealthConditionsOfAsset(bodyassetId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetHealthConditionsRequest**](AssetHealthConditionsRequest.md)| Resources that shall be replaced. | 
 **assetId** | **Number**| The resource defined in the URL | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeHealthConditionsOfAsset"></a>
# **removeHealthConditionsOfAsset**
> removeHealthConditionsOfAsset(bodyassetId)

Remove health conditions of an asset

Remove one or more health conditions from an asset.

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

let apiInstance = new NetilionApiDocumentation.AssetHealthConditionApi();
let body = new NetilionApiDocumentation.AssetHealthConditionsRequest(); // AssetHealthConditionsRequest | Resources that shall be removed.
let assetId = 789; // Number | The resource defined in the URL

apiInstance.removeHealthConditionsOfAsset(bodyassetId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetHealthConditionsRequest**](AssetHealthConditionsRequest.md)| Resources that shall be removed. | 
 **assetId** | **Number**| The resource defined in the URL | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

