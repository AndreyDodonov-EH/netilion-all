# NetilionApiDocumentation.InstrumentationStatusApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createInstrumentationStatus**](InstrumentationStatusApi.md#createInstrumentationStatus) | **POST** /instrumentation/statuses | Create a new instrumentation status
[**deleteInstrumentationStatus**](InstrumentationStatusApi.md#deleteInstrumentationStatus) | **DELETE** /instrumentation/statuses/{id} | Delete an instrumentation status
[**getInstrumentationIdStatus**](InstrumentationStatusApi.md#getInstrumentationIdStatus) | **GET** /instrumentations/{instrumentation_id}/status | Get the status of the specific instrumentation
[**getInstrumentationStatusById**](InstrumentationStatusApi.md#getInstrumentationStatusById) | **GET** /instrumentation/statuses/{id} | Get a single instrumentation status
[**getInstrumentationStatuses**](InstrumentationStatusApi.md#getInstrumentationStatuses) | **GET** /instrumentation/statuses | Get a range of instrumentation statuses
[**getInstrumentationStatusesOptions**](InstrumentationStatusApi.md#getInstrumentationStatusesOptions) | **GET** /instrumentations/{instrumentation_id}/status-options | Get all possible statuses of the specified instrumentation
[**updateInstrumentationStatus**](InstrumentationStatusApi.md#updateInstrumentationStatus) | **PATCH** /instrumentation/statuses/{id} | Update an instrumentation status

<a name="createInstrumentationStatus"></a>
# **createInstrumentationStatus**
> InstrumentationStatusResponse createInstrumentationStatus(body)

Create a new instrumentation status

Code must be unique. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. POST sets values in default language: en.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationStatusApi();
let body = new NetilionApiDocumentation.InstrumentationStatusRequest(); // InstrumentationStatusRequest | InstrumentationStatus object to create.

apiInstance.createInstrumentationStatus(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InstrumentationStatusRequest**](InstrumentationStatusRequest.md)| InstrumentationStatus object to create. | 

### Return type

[**InstrumentationStatusResponse**](InstrumentationStatusResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteInstrumentationStatus"></a>
# **deleteInstrumentationStatus**
> deleteInstrumentationStatus(id)

Delete an instrumentation status

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

let apiInstance = new NetilionApiDocumentation.InstrumentationStatusApi();
let id = 789; // Number | Id of the instrumentation status to delete

apiInstance.deleteInstrumentationStatus(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the instrumentation status to delete | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInstrumentationIdStatus"></a>
# **getInstrumentationIdStatus**
> InstrumentationStatusResponse getInstrumentationIdStatus(instrumentationId, opts)

Get the status of the specific instrumentation

Returns the status of the instrumentation. Needed if only permission on instrumentation but not on tenant. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationStatusApi();
let instrumentationId = 789; // Number | Id of the instrumentation
let opts = { 
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getInstrumentationIdStatus(instrumentationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation | 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**InstrumentationStatusResponse**](InstrumentationStatusResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInstrumentationStatusById"></a>
# **getInstrumentationStatusById**
> InstrumentationStatusResponse getInstrumentationStatusById(id, opts)

Get a single instrumentation status

Get a specific instrumentation status identified by the id in the URL. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationStatusApi();
let id = 789; // Number | Id of instrumentation status to fetch
let opts = { 
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getInstrumentationStatusById(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of instrumentation status to fetch | 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**InstrumentationStatusResponse**](InstrumentationStatusResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInstrumentationStatuses"></a>
# **getInstrumentationStatuses**
> Object getInstrumentationStatuses(opts)

Get a range of instrumentation statuses

Returns a list of all event statuses that are available in your scope. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationStatusApi();
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'name': "name_example", // String | searches instrumentation statuses with given name
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'code': "code_example", // String | Filter accepts `*` as wildcard
  'orderBy': "orderBy_example", // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getInstrumentationStatuses(opts).then((data) => {
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
 **name** | **String**| searches instrumentation statuses with given name | [optional] 
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **code** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

**Object**

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInstrumentationStatusesOptions"></a>
# **getInstrumentationStatusesOptions**
> Object getInstrumentationStatusesOptions(instrumentationId, opts)

Get all possible statuses of the specified instrumentation

Returns a list of all possible instrumentation statuses for the specified instrument. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationStatusApi();
let instrumentationId = 789; // Number | Id of the instrumentation
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'code': "code_example", // String | Filter accepts `*` as wildcard
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getInstrumentationStatusesOptions(instrumentationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **code** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

**Object**

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateInstrumentationStatus"></a>
# **updateInstrumentationStatus**
> updateInstrumentationStatus(bodyid, opts)

Update an instrumentation status

Update accessible parameters of the requested resource. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To add a translation set Content-Language.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationStatusApi();
let body = new NetilionApiDocumentation.InstrumentationStatusRequest(); // InstrumentationStatusRequest | Parameters that shall be updated.
let id = 789; // Number | Id of the instrumentation status to update
let opts = { 
  'contentLanguage': "contentLanguage_example" // String | language of the content
};
apiInstance.updateInstrumentationStatus(bodyid, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InstrumentationStatusRequest**](InstrumentationStatusRequest.md)| Parameters that shall be updated. | 
 **id** | **Number**| Id of the instrumentation status to update | 
 **contentLanguage** | **String**| language of the content | [optional] 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

