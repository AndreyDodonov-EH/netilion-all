# NetilionApiDocumentation.ProductHealthConditionApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addHealthConditionsToProduct**](ProductHealthConditionApi.md#addHealthConditionsToProduct) | **POST** /products/{product_id}/health_conditions | Add health conditions to an product
[**getProductHealthConditions**](ProductHealthConditionApi.md#getProductHealthConditions) | **GET** /products/{product_id}/health_conditions | Get all health conditions assigned to an product
[**reaplaceHealthConditionsOfProduct**](ProductHealthConditionApi.md#reaplaceHealthConditionsOfProduct) | **PATCH** /products/{product_id}/health_conditions | Replace health conditions of an product
[**removeHealthConditionsOfProduct**](ProductHealthConditionApi.md#removeHealthConditionsOfProduct) | **DELETE** /products/{product_id}/health_conditions | Remove health conditions of an product

<a name="addHealthConditionsToProduct"></a>
# **addHealthConditionsToProduct**
> addHealthConditionsToProduct(bodyproductId)

Add health conditions to an product

Add one or more health conditions to an product.

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

let apiInstance = new NetilionApiDocumentation.ProductHealthConditionApi();
let body = new NetilionApiDocumentation.HealthConditionsRequest(); // HealthConditionsRequest | Resources that shall be added.
let productId = 789; // Number | The resource defined in the URL

apiInstance.addHealthConditionsToProduct(bodyproductId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**HealthConditionsRequest**](HealthConditionsRequest.md)| Resources that shall be added. | 
 **productId** | **Number**| The resource defined in the URL | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProductHealthConditions"></a>
# **getProductHealthConditions**
> HealthConditionsResponse getProductHealthConditions(productId, opts)

Get all health conditions assigned to an product

Returns a list of health conditions of an product.  Possible include value: &#x60;&#x60;asset_status, causes, causes.remedies&#x60;&#x60;

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

let apiInstance = new NetilionApiDocumentation.ProductHealthConditionApi();
let productId = 789; // Number | The resource defined in the URL
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'healthConditionId': "healthConditionId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'diagnosisCode': "diagnosisCode_example", // String | Filter accepts `*` as wildcard
  'deviceIdent': "deviceIdent_example", // String | Filter accepts `*` as wildcard
  'protocol': "protocol_example", // String | Filter accepts `PROFIBUS`, `HART` and `MODBUS`
  'orderBy': "orderBy_example", // String | Order result by attribute value, accepts `id`, `diagnosis_code`, `device_ident`, `created_at` or `updated_at`, add `-` as a prefix for descending order. Default value is `id`
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getProductHealthConditions(productId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 
 **healthConditionId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **diagnosisCode** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **deviceIdent** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **protocol** | **String**| Filter accepts &#x60;PROFIBUS&#x60;, &#x60;HART&#x60; and &#x60;MODBUS&#x60; | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;diagnosis_code&#x60;, &#x60;device_ident&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;, add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**HealthConditionsResponse**](HealthConditionsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="reaplaceHealthConditionsOfProduct"></a>
# **reaplaceHealthConditionsOfProduct**
> reaplaceHealthConditionsOfProduct(bodyproductId)

Replace health conditions of an product

Replaces all health conditions belonging to an product. You can send a list of resources that will replace all previous values.

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

let apiInstance = new NetilionApiDocumentation.ProductHealthConditionApi();
let body = new NetilionApiDocumentation.HealthConditionsRequest(); // HealthConditionsRequest | Resources that shall be replaced.
let productId = 789; // Number | The resource defined in the URL

apiInstance.reaplaceHealthConditionsOfProduct(bodyproductId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**HealthConditionsRequest**](HealthConditionsRequest.md)| Resources that shall be replaced. | 
 **productId** | **Number**| The resource defined in the URL | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeHealthConditionsOfProduct"></a>
# **removeHealthConditionsOfProduct**
> removeHealthConditionsOfProduct(bodyproductId)

Remove health conditions of an product

Remove one or more health conditions from an product.

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

let apiInstance = new NetilionApiDocumentation.ProductHealthConditionApi();
let body = new NetilionApiDocumentation.HealthConditionCauseIDs(); // HealthConditionCauseIDs | Resources that shall be removed.
let productId = 789; // Number | The resource defined in the URL

apiInstance.removeHealthConditionsOfProduct(bodyproductId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**HealthConditionCauseIDs**](HealthConditionCauseIDs.md)| Resources that shall be removed. | 
 **productId** | **Number**| The resource defined in the URL | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

