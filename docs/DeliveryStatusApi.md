# NetilionApiDocumentation.DeliveryStatusApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDeliveryStatus**](DeliveryStatusApi.md#createDeliveryStatus) | **POST** /delivery/statuses | Create a new delivery status
[**deleteDeliveryStatus**](DeliveryStatusApi.md#deleteDeliveryStatus) | **DELETE** /delivery/statuses/{id} | Delete a delivery status
[**getDeliveryIdStatus**](DeliveryStatusApi.md#getDeliveryIdStatus) | **GET** /deliveries/{delivery_id}/status | Get the status of the specific delivery
[**getDeliveryStatusById**](DeliveryStatusApi.md#getDeliveryStatusById) | **GET** /delivery/statuses/{id} | Get a single delivery status
[**getDeliveryStatuses**](DeliveryStatusApi.md#getDeliveryStatuses) | **GET** /delivery/statuses | Get a range of delivery statuses
[**updateDeliveryStatuses**](DeliveryStatusApi.md#updateDeliveryStatuses) | **PATCH** /delivery/statuses/{id} | Update an delivery status

<a name="createDeliveryStatus"></a>
# **createDeliveryStatus**
> DeliveryStatusRequest createDeliveryStatus(body)

Create a new delivery status

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

let apiInstance = new NetilionApiDocumentation.DeliveryStatusApi();
let body = new NetilionApiDocumentation.DeliveryStatusRequest(); // DeliveryStatusRequest | DeliveryStatus object to create.

apiInstance.createDeliveryStatus(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DeliveryStatusRequest**](DeliveryStatusRequest.md)| DeliveryStatus object to create. | 

### Return type

[**DeliveryStatusRequest**](DeliveryStatusRequest.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDeliveryStatus"></a>
# **deleteDeliveryStatus**
> deleteDeliveryStatus(id)

Delete a delivery status

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

let apiInstance = new NetilionApiDocumentation.DeliveryStatusApi();
let id = 789; // Number | Id of the delivery status to delete

apiInstance.deleteDeliveryStatus(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the delivery status to delete | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeliveryIdStatus"></a>
# **getDeliveryIdStatus**
> DeliveryStatusResponse getDeliveryIdStatus(deliveryId, opts)

Get the status of the specific delivery

Returns the status of the delivery. You can apply the query parameters listed below to get a filtered list. Required Permissions: &#x60;&#x60;&#x60;can_read&#x60;&#x60;&#x60; Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To add a translation set Content-Language. Possible include value: &#x60;&#x60;&#x60;tenant&#x60;&#x60;&#x60;

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

let apiInstance = new NetilionApiDocumentation.DeliveryStatusApi();
let deliveryId = 789; // Number | Id of the specified delivery
let opts = { 
  'include': "include_example", // String | Comma separated list of objects to include in response
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getDeliveryIdStatus(deliveryId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deliveryId** | **Number**| Id of the specified delivery | 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**DeliveryStatusResponse**](DeliveryStatusResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeliveryStatusById"></a>
# **getDeliveryStatusById**
> DeliveryStatusResponse getDeliveryStatusById(id, opts)

Get a single delivery status

Get a specific delivery status identified by the id in the URL. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.

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

let apiInstance = new NetilionApiDocumentation.DeliveryStatusApi();
let id = 789; // Number | Id of delivery status to fetch
let opts = { 
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getDeliveryStatusById(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of delivery status to fetch | 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**DeliveryStatusResponse**](DeliveryStatusResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeliveryStatuses"></a>
# **getDeliveryStatuses**
> Object getDeliveryStatuses(opts)

Get a range of delivery statuses

Returns a list of all delivery statuses that are available in your scope. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.

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

let apiInstance = new NetilionApiDocumentation.DeliveryStatusApi();
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'code': "code_example", // String | Filter accepts `*` as wildcard
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'orderBy': "orderBy_example", // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getDeliveryStatuses(opts).then((data) => {
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
 **code** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

**Object**

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateDeliveryStatuses"></a>
# **updateDeliveryStatuses**
> updateDeliveryStatuses(bodyid, opts)

Update an delivery status

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

let apiInstance = new NetilionApiDocumentation.DeliveryStatusApi();
let body = new NetilionApiDocumentation.DeliveryStatusRequest(); // DeliveryStatusRequest | Parameters that shall be updated.
let id = 789; // Number | Id of the delivery to update
let opts = { 
  'contentLanguage': "contentLanguage_example" // String | language of the content
};
apiInstance.updateDeliveryStatuses(bodyid, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DeliveryStatusRequest**](DeliveryStatusRequest.md)| Parameters that shall be updated. | 
 **id** | **Number**| Id of the delivery to update | 
 **contentLanguage** | **String**| language of the content | [optional] 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

