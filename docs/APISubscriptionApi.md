# NetilionApiDocumentation.APISubscriptionApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addEdgeDevicesToApiSubscription**](APISubscriptionApi.md#addEdgeDevicesToApiSubscription) | **POST** /api_subscriptions/{id}/edge_devices | Add edge devices to an api subscription
[**createAPISubscription**](APISubscriptionApi.md#createAPISubscription) | **POST** /api_subscriptions | Create a new api subscription
[**deleteAPISubscription**](APISubscriptionApi.md#deleteAPISubscription) | **DELETE** /api_subscriptions/{id} | Delete an api subscription
[**getAPISubscriptionById**](APISubscriptionApi.md#getAPISubscriptionById) | **GET** /api_subscriptions/{id} | Get a single api subscription
[**getAPISubscriptions**](APISubscriptionApi.md#getAPISubscriptions) | **GET** /api_subscriptions | Get a range of api subscriptions
[**getEdgeDevicesOfAPISubscription**](APISubscriptionApi.md#getEdgeDevicesOfAPISubscription) | **GET** /api_subscriptions/{id}/edge_devices | Get all edge devices of an api subscription
[**removeEdgeDevicesFromApiSubscription**](APISubscriptionApi.md#removeEdgeDevicesFromApiSubscription) | **DELETE** /api_subscriptions/{id}/edge_devices | Remove edge devices from an api subscription
[**replaceEdgeDevicesOfApiSubscription**](APISubscriptionApi.md#replaceEdgeDevicesOfApiSubscription) | **PATCH** /api_subscriptions/{id}/edge_devices | Replace the edge devices of an api subscription
[**updateAPISubscription**](APISubscriptionApi.md#updateAPISubscription) | **PATCH** /api_subscriptions/{id} | Update an api subscription

<a name="addEdgeDevicesToApiSubscription"></a>
# **addEdgeDevicesToApiSubscription**
> addEdgeDevicesToApiSubscription(bodyid)

Add edge devices to an api subscription

Add one or more edge devices to an api subscription.

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

let apiInstance = new NetilionApiDocumentation.APISubscriptionApi();
let body = new NetilionApiDocumentation.EdgeDevicesIds(); // EdgeDevicesIds | Resources that shall be added.
let id = 789; // Number | Id of the api subscription to which the edge devices will be added

apiInstance.addEdgeDevicesToApiSubscription(bodyid).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EdgeDevicesIds**](EdgeDevicesIds.md)| Resources that shall be added. | 
 **id** | **Number**| Id of the api subscription to which the edge devices will be added | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createAPISubscription"></a>
# **createAPISubscription**
> APISubscriptionResponse createAPISubscription(body)

Create a new api subscription

Creates a new api subscription. Only available for technical_users of the ID application and admins. Setting a successor or predecessor is not possible.

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

let apiInstance = new NetilionApiDocumentation.APISubscriptionApi();
let body = new NetilionApiDocumentation.APISubscriptionRequest(); // APISubscriptionRequest | api subscription body

apiInstance.createAPISubscription(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**APISubscriptionRequest**](APISubscriptionRequest.md)| api subscription body | 

### Return type

[**APISubscriptionResponse**](APISubscriptionResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAPISubscription"></a>
# **deleteAPISubscription**
> deleteAPISubscription(id)

Delete an api subscription

Delete a specific api subscription identified by the id in the URL.

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

let apiInstance = new NetilionApiDocumentation.APISubscriptionApi();
let id = 789; // Number | Id of the api subscription

apiInstance.deleteAPISubscription(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the api subscription | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAPISubscriptionById"></a>
# **getAPISubscriptionById**
> APISubscriptionResponse getAPISubscriptionById(id, opts)

Get a single api subscription

Get a specific api subscription identified by the id in the URL.  Possible include values: &#x60;&#x60;&#x60;user&#x60;&#x60;&#x60; 

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

let apiInstance = new NetilionApiDocumentation.APISubscriptionApi();
let id = 789; // Number | Id of the api subscription to fetch
let opts = { 
  'include': "include_example" // String | Comma separated list of objects to include in response
};
apiInstance.getAPISubscriptionById(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the api subscription to fetch | 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 

### Return type

[**APISubscriptionResponse**](APISubscriptionResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAPISubscriptions"></a>
# **getAPISubscriptions**
> APISubscriptionsResponse getAPISubscriptions(opts)

Get a range of api subscriptions

Returns a list of api subscriptions.  Possible include values: &#x60;&#x60;&#x60;user&#x60;&#x60;&#x60; 

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

let apiInstance = new NetilionApiDocumentation.APISubscriptionApi();
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'userId': 789, // Number | One or multiple ids (comma list). Expected id format is integer
  'clientApplicationId': 789, // Number | One or multiple ids (comma list). Expected id format is integer
  'externalReference': "externalReference_example", // String | Filter accepts `*` as wildcard
  'status': "status_example", // String | one or multiple statuses (comma list). Allowed values are `open`, `payment_required`, `confirmed`, `scheduled_update`, `non_renewing` and `cancelled`
  'subscriptionType': "subscriptionType_example", // String | Filter by subscription type - no wildcard support
  'notificationStatus': "notificationStatus_example", // String | Filter by notification status - no wildcard support
  'startDate': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'endDate': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getAPISubscriptions(opts).then((data) => {
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
 **userId** | **Number**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **clientApplicationId** | **Number**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **externalReference** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **status** | **String**| one or multiple statuses (comma list). Allowed values are &#x60;open&#x60;, &#x60;payment_required&#x60;, &#x60;confirmed&#x60;, &#x60;scheduled_update&#x60;, &#x60;non_renewing&#x60; and &#x60;cancelled&#x60; | [optional] 
 **subscriptionType** | **String**| Filter by subscription type - no wildcard support | [optional] 
 **notificationStatus** | **String**| Filter by notification status - no wildcard support | [optional] 
 **startDate** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **endDate** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**APISubscriptionsResponse**](APISubscriptionsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEdgeDevicesOfAPISubscription"></a>
# **getEdgeDevicesOfAPISubscription**
> EdgeDeviceResponse getEdgeDevicesOfAPISubscription(id, opts)

Get all edge devices of an api subscription

Returns a list of all edge devices that are assigned to an api subscription. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.  Possible include values: &#x60;&#x60;&#x60;status type tenant technical_user order_user software_version usergroup specifications api_subscription api_subscription.user&#x60;&#x60;&#x60;

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

let apiInstance = new NetilionApiDocumentation.APISubscriptionApi();
let id = 789; // Number | Get a list of edge devices assigned to the api subscription identified by this id.
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'serialNumber': "serialNumber_example", // String | Filter accepts `*` as wildcard
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'typeId': "typeId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'statusId': "statusId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'softwareVersionId': "softwareVersionId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'technicalUserId': "technicalUserId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'orderUserId': "orderUserId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'logLevel': "logLevel_example", // String | Filter accepts trace, debug, info, warning, error, critical, off
  'specificationsKey': "specificationsKey_example", // String | Filter accepts `*` as wildcard (if used as single specifications filter), supports comma list of keys in connection with specifications_value filter
  'specificationsValue': "specificationsValue_example", // String | Filter accepts `*` as wildcard, supports comma list of values in connection with specifications_key filter. Does not work for vectors
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `serial_number`, `created_at` or `updated_at`, `last_seen_at`, `name`, add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getEdgeDevicesOfAPISubscription(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Get a list of edge devices assigned to the api subscription identified by this id. | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 
 **serialNumber** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **typeId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **statusId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **softwareVersionId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **technicalUserId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **orderUserId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **logLevel** | **String**| Filter accepts trace, debug, info, warning, error, critical, off | [optional] 
 **specificationsKey** | **String**| Filter accepts &#x60;*&#x60; as wildcard (if used as single specifications filter), supports comma list of keys in connection with specifications_value filter | [optional] 
 **specificationsValue** | **String**| Filter accepts &#x60;*&#x60; as wildcard, supports comma list of values in connection with specifications_key filter. Does not work for vectors | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;serial_number&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;, &#x60;last_seen_at&#x60;, &#x60;name&#x60;, add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**EdgeDeviceResponse**](EdgeDeviceResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="removeEdgeDevicesFromApiSubscription"></a>
# **removeEdgeDevicesFromApiSubscription**
> removeEdgeDevicesFromApiSubscription(bodyid)

Remove edge devices from an api subscription

Remove one or more edge devices from an api subscription in your accessible scope.

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

let apiInstance = new NetilionApiDocumentation.APISubscriptionApi();
let body = new NetilionApiDocumentation.EdgeDevicesIds(); // EdgeDevicesIds | Resources that shall be removed.
let id = 789; // Number | Id of the api subscription from which the edge devices will be removed

apiInstance.removeEdgeDevicesFromApiSubscription(bodyid).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EdgeDevicesIds**](EdgeDevicesIds.md)| Resources that shall be removed. | 
 **id** | **Number**| Id of the api subscription from which the edge devices will be removed | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceEdgeDevicesOfApiSubscription"></a>
# **replaceEdgeDevicesOfApiSubscription**
> replaceEdgeDevicesOfApiSubscription(bodyid)

Replace the edge devices of an api subscription

Replaces all edge devices belonging to an api subscription in your accessible scope. You can send a list of resources that will replace all previous values.

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

let apiInstance = new NetilionApiDocumentation.APISubscriptionApi();
let body = new NetilionApiDocumentation.EdgeDevicesIds(); // EdgeDevicesIds | Resources that shall be replaced
let id = 789; // Number | Id of the api subscription of which the edge devices will be replaced

apiInstance.replaceEdgeDevicesOfApiSubscription(bodyid).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EdgeDevicesIds**](EdgeDevicesIds.md)| Resources that shall be replaced | 
 **id** | **Number**| Id of the api subscription of which the edge devices will be replaced | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateAPISubscription"></a>
# **updateAPISubscription**
> updateAPISubscription(bodyid)

Update an api subscription

Update accessible parameters of the requested resource. Setting a successor or predecessor is not possible.

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

let apiInstance = new NetilionApiDocumentation.APISubscriptionApi();
let body = new NetilionApiDocumentation.APISubscriptionRequest(); // APISubscriptionRequest | Parameters that shall be updated.
let id = 789; // Number | Id of the api subscription to update

apiInstance.updateAPISubscription(bodyid).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**APISubscriptionRequest**](APISubscriptionRequest.md)| Parameters that shall be updated. | 
 **id** | **Number**| Id of the api subscription to update | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

