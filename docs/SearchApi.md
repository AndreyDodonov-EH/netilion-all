# NetilionApiDocumentation.SearchApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search**](SearchApi.md#search) | **GET** /search | search assets, instrumentations, nodes.

<a name="search"></a>
# **search**
> SearchItemsResponse search(q, opts)

search assets, instrumentations, nodes.

search assets, instrumentations and nodes based on a defined set of fields.   asset - serial_number product_code product_name product_manufacturer_name   instrumentation - tag   nodes - name   These fields may be extended in the  future.

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

let apiInstance = new NetilionApiDocumentation.SearchApi();
let q = "q_example"; // String | search query
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'scope': "scope_example", // String | One or multiple scopes (comma list). Possible values are assets, instrumentations, nodes.
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.search(q, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| search query | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **scope** | **String**| One or multiple scopes (comma list). Possible values are assets, instrumentations, nodes. | [optional] 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**SearchItemsResponse**](SearchItemsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

