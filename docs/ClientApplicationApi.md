# NetilionApiDocumentation.ClientApplicationApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUsersToClientApplicationUserRole**](ClientApplicationApi.md#addUsersToClientApplicationUserRole) | **POST** /client_applications/{client_application_id}/roles/{userrole_id}/users | Add users to a client application user role
[**createClientApplication**](ClientApplicationApi.md#createClientApplication) | **POST** /client_applications | Create a new client_application
[**deleteClientApplication**](ClientApplicationApi.md#deleteClientApplication) | **DELETE** /client_applications/{id} | Delete an client_application
[**deleteUsersFromClientApplicationUserRole**](ClientApplicationApi.md#deleteUsersFromClientApplicationUserRole) | **DELETE** /client_applications/{client_application_id}/roles/{userrole_id}/users | Remove users from a client application user role
[**getAPIKeysOfClientApplication**](ClientApplicationApi.md#getAPIKeysOfClientApplication) | **GET** /client_applications/{client_application_id}/api_keys | GetAPI Keys of Client Application
[**getClientApplicationById**](ClientApplicationApi.md#getClientApplicationById) | **GET** /client_applications/{id} | Get a single client_application
[**getClientApplications**](ClientApplicationApi.md#getClientApplications) | **GET** /client_applications | Get a range of client_applications
[**getCurrentClientApplication**](ClientApplicationApi.md#getCurrentClientApplication) | **GET** /client_applications/current | Get current client_application
[**getUsersOfClientApplicationUserRole**](ClientApplicationApi.md#getUsersOfClientApplicationUserRole) | **GET** /client_applications/{client_application_id}/roles/{userrole_id}/users | Get all users of a user role assigned to a client application
[**updateClientApplication**](ClientApplicationApi.md#updateClientApplication) | **PATCH** /client_applications/{id} | Update an client_application


<a name="addUsersToClientApplicationUserRole"></a>
# **addUsersToClientApplicationUserRole**
> addUsersToClientApplicationUserRole(clientApplicationId, userroleIdbody)

Add users to a client application user role

Add one or more users to a user role.

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

var apiInstance = new NetilionApiDocumentation.ClientApplicationApi();

var clientApplicationId = 789; // Number | The resource defined in the URL

var userroleId = 789; // Number | The resource defined in the URL

var body = new NetilionApiDocumentation.UserIDs(); // UserIDs | Resources that shall be added.

apiInstance.addUsersToClientApplicationUserRole(clientApplicationId, userroleIdbody).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientApplicationId** | **Number**| The resource defined in the URL | 
 **userroleId** | **Number**| The resource defined in the URL | 
 **body** | [**UserIDs**](UserIDs.md)| Resources that shall be added. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createClientApplication"></a>
# **createClientApplication**
> ClientApplicationResponse createClientApplication(body)

Create a new client_application

Create a new client_application.

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

var apiInstance = new NetilionApiDocumentation.ClientApplicationApi();

var body = new NetilionApiDocumentation.ClientApplicationRequest(); // ClientApplicationRequest | ClientApplication object that needs to be created. name and contact_person are required.

apiInstance.createClientApplication(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ClientApplicationRequest**](ClientApplicationRequest.md)| ClientApplication object that needs to be created. name and contact_person are required. | 

### Return type

[**ClientApplicationResponse**](ClientApplicationResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteClientApplication"></a>
# **deleteClientApplication**
> deleteClientApplication(id)

Delete an client_application

Delete a specific resource in your accessible scope, identified by the id in the URL.

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

var apiInstance = new NetilionApiDocumentation.ClientApplicationApi();

var id = 789; // Number | Id of the client_application to delete

apiInstance.deleteClientApplication(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the client_application to delete | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUsersFromClientApplicationUserRole"></a>
# **deleteUsersFromClientApplicationUserRole**
> deleteUsersFromClientApplicationUserRole(clientApplicationId, userroleIdbody)

Remove users from a client application user role

Remove one or more users from an user role. To work with roles, admin role is required.

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

var apiInstance = new NetilionApiDocumentation.ClientApplicationApi();

var clientApplicationId = 789; // Number | The resource defined in the URL

var userroleId = 789; // Number | The resource defined in the URL

var body = new NetilionApiDocumentation.UserIDs(); // UserIDs | Resources that shall be removed.

apiInstance.deleteUsersFromClientApplicationUserRole(clientApplicationId, userroleIdbody).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientApplicationId** | **Number**| The resource defined in the URL | 
 **userroleId** | **Number**| The resource defined in the URL | 
 **body** | [**UserIDs**](UserIDs.md)| Resources that shall be removed. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAPIKeysOfClientApplication"></a>
# **getAPIKeysOfClientApplication**
> ClientApplicationResponse getAPIKeysOfClientApplication(clientApplicationId, , opts)

GetAPI Keys of Client Application

Returns a list of api_keys of an client application. If the query has no matches, the response is an empty list. Only api_keys on which the user has the can_read permission are loaded.

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

var apiInstance = new NetilionApiDocumentation.ClientApplicationApi();

var clientApplicationId = 789; // Number | The resource defined in the URL

var opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'apiKey': "apiKey_example", // String | Filter accepts `*` as wildcard
  'validFrom': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'validFromFrom': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'validFromTo': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'validUntil': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'validUntilFrom': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'validUntilTo': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'orderBy': "orderBy_example", // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getAPIKeysOfClientApplication(clientApplicationId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientApplicationId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **apiKey** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **validFrom** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **validFromFrom** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **validFromTo** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **validUntil** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **validUntilFrom** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **validUntilTo** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**ClientApplicationResponse**](ClientApplicationResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getClientApplicationById"></a>
# **getClientApplicationById**
> ClientApplicationResponse getClientApplicationById(id, opts)

Get a single client_application

Get a specific client_application in your accessible scope, identified by the id in the URL.

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

var apiInstance = new NetilionApiDocumentation.ClientApplicationApi();

var id = 789; // Number | Id of the client_application to fetch

var opts = { 
  'include': "include_example", // String | Comma separated list of objects to include in response
};
apiInstance.getClientApplicationById(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the client_application to fetch | 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 

### Return type

[**ClientApplicationResponse**](ClientApplicationResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getClientApplications"></a>
# **getClientApplications**
> ClientApplicationsResponse getClientApplications(opts)

Get a range of client_applications

Returns a list of client_applications in your accessible scope. If the query has no matches, the response is an empty list. Only client_applications on which the user has the can_read permission are loaded. Possible include values: &#x60;&#x60;&#x60;technical_user

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

var apiInstance = new NetilionApiDocumentation.ClientApplicationApi();

var opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'contactPersonId': "contactPersonId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'orderBy': "orderBy_example", // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getClientApplications(opts).then(function(data) {
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
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **contactPersonId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**ClientApplicationsResponse**](ClientApplicationsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCurrentClientApplication"></a>
# **getCurrentClientApplication**
> ClientApplicationPublicResponse getCurrentClientApplication()

Get current client_application

Returns current client application used to access the api.

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

var apiInstance = new NetilionApiDocumentation.ClientApplicationApi();
apiInstance.getCurrentClientApplication().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ClientApplicationPublicResponse**](ClientApplicationPublicResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUsersOfClientApplicationUserRole"></a>
# **getUsersOfClientApplicationUserRole**
> UsersPublicResponse getUsersOfClientApplicationUserRole(clientApplicationId, userroleId, opts)

Get all users of a user role assigned to a client application

Returns a list of all users that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.

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

var apiInstance = new NetilionApiDocumentation.ClientApplicationApi();

var clientApplicationId = 789; // Number | The resource defined in the URL

var userroleId = 789; // Number | The resource defined in the URL

var opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'firstName': "firstName_example", // String | Filter accepts `*` as wildcard
  'lastName': "lastName_example", // String | Filter accepts `*` as wildcard
  'orderBy': "orderBy_example", // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getUsersOfClientApplicationUserRole(clientApplicationId, userroleId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientApplicationId** | **Number**| The resource defined in the URL | 
 **userroleId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **firstName** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **lastName** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**UsersPublicResponse**](UsersPublicResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateClientApplication"></a>
# **updateClientApplication**
> updateClientApplication(id, body)

Update an client_application

Update accessible parameters of the requested resource in your accessible scope.

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

var apiInstance = new NetilionApiDocumentation.ClientApplicationApi();

var id = 789; // Number | Id of the client_application to update

var body = new NetilionApiDocumentation.ClientApplicationRequest(); // ClientApplicationRequest | Parameters that shall be updated.

apiInstance.updateClientApplication(id, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the client_application to update | 
 **body** | [**ClientApplicationRequest**](ClientApplicationRequest.md)| Parameters that shall be updated. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

