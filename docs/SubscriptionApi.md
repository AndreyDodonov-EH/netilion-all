# NetilionApiDocumentation.SubscriptionApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAssetsToSubscription**](SubscriptionApi.md#addAssetsToSubscription) | **POST** /subscriptions/{subscription_id}/assets | Add assets to a subscription
[**addSeatUsersToSubscription**](SubscriptionApi.md#addSeatUsersToSubscription) | **POST** /subscriptions/{subscription_id}/seats | Add users (existing users) or emails (new users) to a seat in subscription
[**createSubscription**](SubscriptionApi.md#createSubscription) | **POST** /subscriptions | Create a new subscription
[**deleteSubscription**](SubscriptionApi.md#deleteSubscription) | **DELETE** /subscriptions/{id} | Delete a subscription
[**deleteSubscriptionSeat**](SubscriptionApi.md#deleteSubscriptionSeat) | **DELETE** /subscription/seats/{id} | Delete a subscription seat
[**getAssetsOfSubscription**](SubscriptionApi.md#getAssetsOfSubscription) | **GET** /subscriptions/{subscription_id}/assets | Get all assets of one subscription
[**getSeatUsersOfSubscription**](SubscriptionApi.md#getSeatUsersOfSubscription) | **GET** /subscriptions/{subscription_id}/seats | Get all users or invited emails having a seat in subscription
[**getSpecificationsOfSubscription**](SubscriptionApi.md#getSpecificationsOfSubscription) | **GET** /subscriptions/{subscription_id}/specifications | Get specifications of a subscription
[**getSubscriptionById**](SubscriptionApi.md#getSubscriptionById) | **GET** /subscriptions/{id} | Get a single subscription
[**getSubscriptionSeats**](SubscriptionApi.md#getSubscriptionSeats) | **GET** /subscription/seats | Get a range of subscription seats
[**getSubscriptions**](SubscriptionApi.md#getSubscriptions) | **GET** /subscriptions | Get a range of subscriptions
[**removeAssetsFromSubscription**](SubscriptionApi.md#removeAssetsFromSubscription) | **DELETE** /subscriptions/{subscription_id}/assets | Remove assets from a subscription
[**removeSeatUsersFromSubscription**](SubscriptionApi.md#removeSeatUsersFromSubscription) | **DELETE** /subscriptions/{subscription_id}/seats | Remove users (existing users) or emails (new users) from a seat in subscription
[**removeSpecificationsFromSubscriptions**](SubscriptionApi.md#removeSpecificationsFromSubscriptions) | **DELETE** /subscriptions/{subscription_id}/specifications | Delete specifications of a subscription
[**renameSpecificationsOfSubscriptions**](SubscriptionApi.md#renameSpecificationsOfSubscriptions) | **PATCH** /subscriptions/{subscription_id}/specifications/rename | Rename a specification key
[**replaceAssetsOfSubscription**](SubscriptionApi.md#replaceAssetsOfSubscription) | **PATCH** /subscriptions/{subscription_id}/assets | Replace the assets of a subscription
[**updateSpecificationsOfSubscriptions**](SubscriptionApi.md#updateSpecificationsOfSubscriptions) | **PATCH** /subscriptions/{subscription_id}/specifications | Update specifications of a subscription
[**updateSubscription**](SubscriptionApi.md#updateSubscription) | **PATCH** /subscriptions/{id} | Update a subscription
[**updateSubscriptionSeat**](SubscriptionApi.md#updateSubscriptionSeat) | **PATCH** /subscription/seats/{id} | Update a subscription seat


<a name="addAssetsToSubscription"></a>
# **addAssetsToSubscription**
> addAssetsToSubscription(subscriptionId, body)

Add assets to a subscription

Add one or more assets to a subscription.

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

var apiInstance = new NetilionApiDocumentation.SubscriptionApi();

var subscriptionId = 789; // Number | Id of the subscription to which the assets will be added

var body = new NetilionApiDocumentation.AssetIDs(); // AssetIDs | Resources that shall be added.

apiInstance.addAssetsToSubscription(subscriptionId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **Number**| Id of the subscription to which the assets will be added | 
 **body** | [**AssetIDs**](AssetIDs.md)| Resources that shall be added. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addSeatUsersToSubscription"></a>
# **addSeatUsersToSubscription**
> addSeatUsersToSubscription(subscriptionId, body)

Add users (existing users) or emails (new users) to a seat in subscription

Add one or more users to a seat in subscription. User can only have one subscription per service (as seat user or as owner), the amount of available seats is defined in seat_quota of subscription. One or more emails can also be sent for users that do not yet exist in Netilion, the users emails will then be invited to join Netilion. &#x60;&#x60;&#x60;Either id or email pro entry should be provided (not both).&#x60;&#x60;&#x60; If an email is provided for existing user, then given user will be used.

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

var apiInstance = new NetilionApiDocumentation.SubscriptionApi();

var subscriptionId = 789; // Number | Id of the subscription to which the user will be added

var body = new NetilionApiDocumentation.UserIDorEmails(); // UserIDorEmails | Resources that shall be added.

apiInstance.addSeatUsersToSubscription(subscriptionId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **Number**| Id of the subscription to which the user will be added | 
 **body** | [**UserIDorEmails**](UserIDorEmails.md)| Resources that shall be added. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSubscription"></a>
# **createSubscription**
> SubscriptionResponse createSubscription(body)

Create a new subscription

Creates a new subscription. Only available for technical_users of the client_application and admins. Setting a successor or predecessor is possible. The client_application and user of the given Subscription and the reference Subscription have to match to do so.

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

var apiInstance = new NetilionApiDocumentation.SubscriptionApi();

var body = new NetilionApiDocumentation.SubscriptionRequest(); // SubscriptionRequest | subscription body

apiInstance.createSubscription(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SubscriptionRequest**](SubscriptionRequest.md)| subscription body | 

### Return type

[**SubscriptionResponse**](SubscriptionResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSubscription"></a>
# **deleteSubscription**
> deleteSubscription(id)

Delete a subscription

Delete a specific subscription identified by the id in the URL.

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

var apiInstance = new NetilionApiDocumentation.SubscriptionApi();

var id = 789; // Number | Id of the subscription

apiInstance.deleteSubscription(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the subscription | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSubscriptionSeat"></a>
# **deleteSubscriptionSeat**
> deleteSubscriptionSeat(id)

Delete a subscription seat

Delete a specific subscription seat identified by the id in the URL. This operation does send notification emails to the subscription owner, so it should be used by the invited user.

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

var apiInstance = new NetilionApiDocumentation.SubscriptionApi();

var id = 789; // Number | Id of the subscription seat

apiInstance.deleteSubscriptionSeat(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the subscription seat | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAssetsOfSubscription"></a>
# **getAssetsOfSubscription**
> AssetsResponse getAssetsOfSubscription(subscriptionId, opts)

Get all assets of one subscription

Returns a list of all assets that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.  Possible include values: &#x60;&#x60;&#x60;status, tenant, parent, pictures, product, product.manufacturer, product.pictures, product.status, product.categories, product.categories.parent, specifications, specifications[key1,key2], product.tenant,                             product.manufacturer.tenant, status.tenant, instrumentations &#x60;&#x60;&#x60;

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

var apiInstance = new NetilionApiDocumentation.SubscriptionApi();

var subscriptionId = 789; // Number | The resource defined in the URL

var opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'serialNumber': "serialNumber_example", // String | Filter accepts `*` as wildcard
  'productId': "productId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'productCategoryId': "productCategoryId_example", // String | One or multiple ids (comma list). By adding `+` after the id, the filter considers the given category and all its children (e.g. 3+).
  'parentId': "parentId_example", // String | One or multiple ids (comma list). \"null\" to retrieve all objects without parent, \"!null\" for all objects with parent.
  'manufacturerId': "manufacturerId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'statusId': "statusId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'statusCode': "statusCode_example", // String | Filter accepts `*` as wildcard
  'productionDate': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'productionDateFrom': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'productionDateTo': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'specificationsKey': "specificationsKey_example", // String | Filter accepts `*` as wildcard (if used as single specifications filter), supports comma list of keys in connection with specifications_value filter
  'specificationsValue': "specificationsValue_example", // String | Filter accepts `*` as wildcard, supports comma list of values in connection with specifications_key filter. Does not work for vectors
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `serial_number`, `created_at` or `updated_at`, `last_seen_at`, add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getAssetsOfSubscription(subscriptionId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 
 **serialNumber** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **productId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **productCategoryId** | **String**| One or multiple ids (comma list). By adding &#x60;+&#x60; after the id, the filter considers the given category and all its children (e.g. 3+). | [optional] 
 **parentId** | **String**| One or multiple ids (comma list). \&quot;null\&quot; to retrieve all objects without parent, \&quot;!null\&quot; for all objects with parent. | [optional] 
 **manufacturerId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **statusId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **statusCode** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **productionDate** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **productionDateFrom** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **productionDateTo** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **specificationsKey** | **String**| Filter accepts &#x60;*&#x60; as wildcard (if used as single specifications filter), supports comma list of keys in connection with specifications_value filter | [optional] 
 **specificationsValue** | **String**| Filter accepts &#x60;*&#x60; as wildcard, supports comma list of values in connection with specifications_key filter. Does not work for vectors | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;serial_number&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;, &#x60;last_seen_at&#x60;, add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**AssetsResponse**](AssetsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSeatUsersOfSubscription"></a>
# **getSeatUsersOfSubscription**
> SubscriptionSeatsResponse getSeatUsersOfSubscription(subscriptionId, opts)

Get all users or invited emails having a seat in subscription

Returns a list of all users or emails.  Possible include values: &#x60;&#x60;&#x60;subscription&#x60;&#x60;&#x60;

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

var apiInstance = new NetilionApiDocumentation.SubscriptionApi();

var subscriptionId = 789; // Number | The resource defined in the URL

var opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'email': "email_example", // String | Filter accepts `*` as wildcard
  'userId': 789, // Number | One or multiple ids (comma list). Expected id format is integer
  'status': "status_example", // String | one or multiple statuses (comma list). Allowed values are `pending`, `invited`, `accepted`
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getSeatUsersOfSubscription(subscriptionId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 
 **email** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **userId** | **Number**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **status** | **String**| one or multiple statuses (comma list). Allowed values are &#x60;pending&#x60;, &#x60;invited&#x60;, &#x60;accepted&#x60; | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**SubscriptionSeatsResponse**](SubscriptionSeatsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSpecificationsOfSubscription"></a>
# **getSpecificationsOfSubscription**
> SpecificationsResponse getSpecificationsOfSubscription(subscriptionId, opts)

Get specifications of a subscription

Returns the specification of an object in your accessible scope. If no specifications are defined, this is just an empty object. Specification must have the form below.

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

var apiInstance = new NetilionApiDocumentation.SubscriptionApi();

var subscriptionId = 789; // Number | Id of the specified subscription

var opts = { 
  'key': "key_example" // String | Filter accepts '*' as wildcard
};
apiInstance.getSpecificationsOfSubscription(subscriptionId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **Number**| Id of the specified subscription | 
 **key** | **String**| Filter accepts &#39;*&#39; as wildcard | [optional] 

### Return type

[**SpecificationsResponse**](SpecificationsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSubscriptionById"></a>
# **getSubscriptionById**
> SubscriptionResponse getSubscriptionById(id, opts)

Get a single subscription

Get a specific subscription identified by the id in the URL.  Possible include values: &#x60;&#x60;&#x60;user, user.usage, specifications, specifications[key1,key2]&#x60;&#x60;&#x60; 

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

var apiInstance = new NetilionApiDocumentation.SubscriptionApi();

var id = 789; // Number | Id of the subscription to fetch

var opts = { 
  'include': "include_example", // String | Comma separated list of objects to include in response
};
apiInstance.getSubscriptionById(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the subscription to fetch | 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 

### Return type

[**SubscriptionResponse**](SubscriptionResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSubscriptionSeats"></a>
# **getSubscriptionSeats**
> SubscriptionSeatsResponse getSubscriptionSeats(opts)

Get a range of subscription seats

Returns a list of subscriptions seats.  Possible include values: &#x60;&#x60;&#x60;subscription, subscription.user&#x60;&#x60;&#x60; 

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

var apiInstance = new NetilionApiDocumentation.SubscriptionApi();

var opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'email': "email_example", // String | Filter accepts `*` as wildcard
  'userId': 789, // Number | One or multiple ids (comma list). Expected id format is integer
  'status': "status_example", // String | one or multiple statuses (comma list). Allowed values are `pending`, `invited`, `accepted`
  'clientApplicationId': 789, // Number | Expected id format is integer
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getSubscriptionSeats(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 
 **email** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **userId** | **Number**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **status** | **String**| one or multiple statuses (comma list). Allowed values are &#x60;pending&#x60;, &#x60;invited&#x60;, &#x60;accepted&#x60; | [optional] 
 **clientApplicationId** | **Number**| Expected id format is integer | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**SubscriptionSeatsResponse**](SubscriptionSeatsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSubscriptions"></a>
# **getSubscriptions**
> SubscriptionsResponse getSubscriptions(opts)

Get a range of subscriptions

Returns a list of subscriptions.  Possible include values: &#x60;&#x60;&#x60;user, user.usage, specifications, specifications[key1,key2]&#x60;&#x60;&#x60; 

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

var apiInstance = new NetilionApiDocumentation.SubscriptionApi();

var opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'userId': 789, // Number | One or multiple ids (comma list). Expected id format is integer
  'clientApplicationId': 789, // Number | One or multiple ids (comma list). Expected id format is integer
  'externalReference': "externalReference_example", // String | Filter accepts `*` as wildcard
  'status': "status_example", // String | one or multiple statuses (comma list). Allowed values are `open`, `payment_required`, `confirmed`, `scheduled_update`, `non_renewing` and `cancelled`
  'notificationStatus': "notificationStatus_example", // String | Filter by notification status - no wildcard support
  'specificationsKey': "specificationsKey_example", // String | Filter accepts `*` as wildcard (if used as single specifications filter), supports comma list of keys in connection with specifications_value filter
  'specificationsValue': "specificationsValue_example", // String | Filter accepts `*` as wildcard, supports comma list of values in connection with specifications_key filter. Does not work for vectors
  'startDate': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'endDate': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getSubscriptions(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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
 **notificationStatus** | **String**| Filter by notification status - no wildcard support | [optional] 
 **specificationsKey** | **String**| Filter accepts &#x60;*&#x60; as wildcard (if used as single specifications filter), supports comma list of keys in connection with specifications_value filter | [optional] 
 **specificationsValue** | **String**| Filter accepts &#x60;*&#x60; as wildcard, supports comma list of values in connection with specifications_key filter. Does not work for vectors | [optional] 
 **startDate** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **endDate** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**SubscriptionsResponse**](SubscriptionsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeAssetsFromSubscription"></a>
# **removeAssetsFromSubscription**
> removeAssetsFromSubscription(subscriptionId, body)

Remove assets from a subscription

Remove one or more assets from a subscription in your accessible scope.

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

var apiInstance = new NetilionApiDocumentation.SubscriptionApi();

var subscriptionId = 789; // Number | Id of the subscription from which the assets will be removed

var body = new NetilionApiDocumentation.AssetIDs(); // AssetIDs | Resources that shall be removed.

apiInstance.removeAssetsFromSubscription(subscriptionId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **Number**| Id of the subscription from which the assets will be removed | 
 **body** | [**AssetIDs**](AssetIDs.md)| Resources that shall be removed. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeSeatUsersFromSubscription"></a>
# **removeSeatUsersFromSubscription**
> removeSeatUsersFromSubscription(subscriptionId, body)

Remove users (existing users) or emails (new users) from a seat in subscription

Remove one or more users or emails from a seat in subscription. **Either id or email pro entry should be provided (not both).** If an email is provided for existing user, then given user will be used. This operation does send notification emails to the seat user, so it should be used by the owner to remove seats.

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

var apiInstance = new NetilionApiDocumentation.SubscriptionApi();

var subscriptionId = 789; // Number | Id of the subscription from which the user will be removed

var body = new NetilionApiDocumentation.UserIDorEmails(); // UserIDorEmails | Resources that shall be removed.

apiInstance.removeSeatUsersFromSubscription(subscriptionId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **Number**| Id of the subscription from which the user will be removed | 
 **body** | [**UserIDorEmails**](UserIDorEmails.md)| Resources that shall be removed. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeSpecificationsFromSubscriptions"></a>
# **removeSpecificationsFromSubscriptions**
> removeSpecificationsFromSubscriptions(subscriptionId, body)

Delete specifications of a subscription

The specification keys in the body will be removed of the object in your accessible scope. If a key does not exist it will be ignored.

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

var apiInstance = new NetilionApiDocumentation.SubscriptionApi();

var subscriptionId = 789; // Number | Id of the specified subscription

var body = new NetilionApiDocumentation.SpecificationsDelete(); // SpecificationsDelete | Array of keys to delete from specifications

apiInstance.removeSpecificationsFromSubscriptions(subscriptionId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **Number**| Id of the specified subscription | 
 **body** | [**SpecificationsDelete**](SpecificationsDelete.md)| Array of keys to delete from specifications | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="renameSpecificationsOfSubscriptions"></a>
# **renameSpecificationsOfSubscriptions**
> renameSpecificationsOfSubscriptions(subscriptionId, body)

Rename a specification key

Rename one specification key of a subscription in your accessible scope. The key name allows [a-z A-Z 0-9 . - _ ] all uppercase letters will be converted to lower-case.

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

var apiInstance = new NetilionApiDocumentation.SubscriptionApi();

var subscriptionId = 789; // Number | Id of the specified subscription

var body = new NetilionApiDocumentation.SpecificationsRename(); // SpecificationsRename | The specifications object to patch.

apiInstance.renameSpecificationsOfSubscriptions(subscriptionId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **Number**| Id of the specified subscription | 
 **body** | [**SpecificationsRename**](SpecificationsRename.md)| The specifications object to patch. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceAssetsOfSubscription"></a>
# **replaceAssetsOfSubscription**
> replaceAssetsOfSubscription(subscriptionId, body)

Replace the assets of a subscription

Replaces all assets belonging to a subscription in your accessible scope. You can send a list of resources that will replace all previous values.

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

var apiInstance = new NetilionApiDocumentation.SubscriptionApi();

var subscriptionId = 789; // Number | Id of the subscription of which the assets will be replaced

var body = new NetilionApiDocumentation.AssetIDs(); // AssetIDs | Resources that shall be replaced

apiInstance.replaceAssetsOfSubscription(subscriptionId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **Number**| Id of the subscription of which the assets will be replaced | 
 **body** | [**AssetIDs**](AssetIDs.md)| Resources that shall be replaced | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSpecificationsOfSubscriptions"></a>
# **updateSpecificationsOfSubscriptions**
> updateSpecificationsOfSubscriptions(subscriptionId, body)

Update specifications of a subscription

Update the specification object of a subscription in your accessible scope. To add specifications, just add the key and set the value object with value, unit and source_timestamp. To mark an existing specification to be unknown, the value could be set to null. To delete keys, use the delete method. Multiple specification objects can be sent in the same request. Keys inside a specification are unique and can only be added once. Keys can only consist of [a-z A-Z 0-9 . - _ ]. All uppercase A-Z are converted to lower-case a-z. For a key that is send multiple times in the request body, only the last key-value is saved.

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

var apiInstance = new NetilionApiDocumentation.SubscriptionApi();

var subscriptionId = 789; // Number | Id of the specified subscription

var body = new NetilionApiDocumentation.SpecificationsRequest(); // SpecificationsRequest | The specifications objects to patch.

apiInstance.updateSpecificationsOfSubscriptions(subscriptionId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **Number**| Id of the specified subscription | 
 **body** | [**SpecificationsRequest**](SpecificationsRequest.md)| The specifications objects to patch. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSubscription"></a>
# **updateSubscription**
> updateSubscription(id, body)

Update a subscription

Update accessible parameters of the requested resource. Setting a successor or predecessor is possible. The client_application and user of the given Subscription and the reference Subscription have to match to do so. The successor/predecessor of a subscription cant be itself

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

var apiInstance = new NetilionApiDocumentation.SubscriptionApi();

var id = 789; // Number | Id of the subscription to update

var body = new NetilionApiDocumentation.SubscriptionRequest(); // SubscriptionRequest | Parameters that shall be updated.

apiInstance.updateSubscription(id, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the subscription to update | 
 **body** | [**SubscriptionRequest**](SubscriptionRequest.md)| Parameters that shall be updated. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSubscriptionSeat"></a>
# **updateSubscriptionSeat**
> updateSubscriptionSeat(id, body)

Update a subscription seat

Update the status of a subscription seat

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

var apiInstance = new NetilionApiDocumentation.SubscriptionApi();

var id = 789; // Number | Id of the subscription seat to update

var body = new NetilionApiDocumentation.SubscriptionSeatPatch(); // SubscriptionSeatPatch | Parameters that shall be updated.

apiInstance.updateSubscriptionSeat(id, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the subscription seat to update | 
 **body** | [**SubscriptionSeatPatch**](SubscriptionSeatPatch.md)| Parameters that shall be updated. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

