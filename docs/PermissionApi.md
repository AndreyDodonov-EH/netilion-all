# NetilionApiDocumentation.PermissionApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPermissionInheritance**](PermissionApi.md#createPermissionInheritance) | **POST** /permission_inheritances | Create a new permission inheritance
[**createPermissions**](PermissionApi.md#createPermissions) | **POST** /permissions | Create a new permission
[**deletePermission**](PermissionApi.md#deletePermission) | **DELETE** /permissions/{id} | Delete a permission
[**deletePermissionInheritance**](PermissionApi.md#deletePermissionInheritance) | **DELETE** /permission_inheritances/{id} | Delete a permission inheritance
[**getPermissionById**](PermissionApi.md#getPermissionById) | **GET** /permissions/{id} | Get a single permission
[**getPermissionInheritanceById**](PermissionApi.md#getPermissionInheritanceById) | **GET** /permission_inheritances/{id} | Get a single permission inheritance
[**getPermissionInheritances**](PermissionApi.md#getPermissionInheritances) | **GET** /permission_inheritances | Get a range of permission inheritances
[**getPermissions**](PermissionApi.md#getPermissions) | **GET** /permissions | Get a range of permissions


<a name="createPermissionInheritance"></a>
# **createPermissionInheritance**
> PermissionInheritanceResponse createPermissionInheritance(body)

Create a new permission inheritance

Create a new permission inheritance, only needed if default permission inheritance should be overwritten.

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

var apiInstance = new NetilionApiDocumentation.PermissionApi();

var body = new NetilionApiDocumentation.PermissionInheritanceRequest(); // PermissionInheritanceRequest | Permission object that needs to be created.

apiInstance.createPermissionInheritance(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PermissionInheritanceRequest**](PermissionInheritanceRequest.md)| Permission object that needs to be created. | 

### Return type

[**PermissionInheritanceResponse**](PermissionInheritanceResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPermissions"></a>
# **createPermissions**
> PermissionResponse createPermissions(body)

Create a new permission

Permissions must have a permission_type, assignable and permitable. To create multiple permissions at ones, multiple permission_types can be passed as array. In this case the API will return an array of the created permissions.

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

var apiInstance = new NetilionApiDocumentation.PermissionApi();

var body = new NetilionApiDocumentation.PermissionRequest(); // PermissionRequest | Permission object that needs to be created.

apiInstance.createPermissions(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PermissionRequest**](PermissionRequest.md)| Permission object that needs to be created. | 

### Return type

[**PermissionResponse**](PermissionResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePermission"></a>
# **deletePermission**
> deletePermission(id)

Delete a permission

Delete a specific resource identified by the id in the URL.

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

var apiInstance = new NetilionApiDocumentation.PermissionApi();

var id = 789; // Number | Id of the permission to delete

apiInstance.deletePermission(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the permission to delete | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePermissionInheritance"></a>
# **deletePermissionInheritance**
> deletePermissionInheritance(id)

Delete a permission inheritance

Delete a specific resource identified by the id in the URL.

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

var apiInstance = new NetilionApiDocumentation.PermissionApi();

var id = 789; // Number | Id of the permission inheritance to delete

apiInstance.deletePermissionInheritance(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the permission inheritance to delete | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPermissionById"></a>
# **getPermissionById**
> PermissionResponse getPermissionById(id, opts)

Get a single permission

Get a specific permission identified by the id in the URL.  Possible include values: &#x60;&#x60;&#x60;assignable, permitable&#x60;&#x60;&#x60;

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

var apiInstance = new NetilionApiDocumentation.PermissionApi();

var id = 789; // Number | Id of the permission to fetch

var opts = { 
  'include': "include_example", // String | Comma separated list of objects to include in response
};
apiInstance.getPermissionById(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the permission to fetch | 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 

### Return type

[**PermissionResponse**](PermissionResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPermissionInheritanceById"></a>
# **getPermissionInheritanceById**
> PermissionInheritanceResponse getPermissionInheritanceById(id)

Get a single permission inheritance

Get a specific permission inheritance identified by the id in the URL.

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

var apiInstance = new NetilionApiDocumentation.PermissionApi();

var id = 789; // Number | Id of the permission inheritance to fetch

apiInstance.getPermissionInheritanceById(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the permission inheritance to fetch | 

### Return type

[**PermissionInheritanceResponse**](PermissionInheritanceResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPermissionInheritances"></a>
# **getPermissionInheritances**
> PermissionInheritances getPermissionInheritances(opts)

Get a range of permission inheritances

Returns a list of all permission inheritances that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.

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

var apiInstance = new NetilionApiDocumentation.PermissionApi();

var opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'permissionType': "permissionType_example", // String | filter by one of the permission_types (`can_read`, `can_update`, `can_delete`, `can_permit`)
  'permissionInheritableId': 789, // Number | filter by id of permitable
  'permissionInheritableType': "permissionInheritableType_example", // String | filter by a specific type of permitables eg. `Event`
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getPermissionInheritances(opts).then(function(data) {
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
 **permissionType** | **String**| filter by one of the permission_types (&#x60;can_read&#x60;, &#x60;can_update&#x60;, &#x60;can_delete&#x60;, &#x60;can_permit&#x60;) | [optional] 
 **permissionInheritableId** | **Number**| filter by id of permitable | [optional] 
 **permissionInheritableType** | **String**| filter by a specific type of permitables eg. &#x60;Event&#x60; | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**PermissionInheritances**](PermissionInheritances.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPermissions"></a>
# **getPermissions**
> Permissions getPermissions(opts)

Get a range of permissions

Returns a list of all permissions that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.  Possible include values: &#x60;&#x60;&#x60;assignable, permitable&#x60;&#x60;&#x60;

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

var apiInstance = new NetilionApiDocumentation.PermissionApi();

var opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'permissionType': "permissionType_example", // String | one or multiple permission_types (comma list). Allowed values are `can_read`, `can_update`, `can_delete` and `can_permit`
  'assignableId': 789, // Number | filter by an assignable id
  'assignableType': "assignableType_example", // String | filter by a specific type of assignables eg. `User` or `Usergroup`.
  'permitableId': 789, // Number | filter by a permitable id
  'permitableType': "permitableType_example", // String | filter by a specific type of permitables eg. `Asset` or `Node`
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getPermissions(opts).then(function(data) {
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
 **permissionType** | **String**| one or multiple permission_types (comma list). Allowed values are &#x60;can_read&#x60;, &#x60;can_update&#x60;, &#x60;can_delete&#x60; and &#x60;can_permit&#x60; | [optional] 
 **assignableId** | **Number**| filter by an assignable id | [optional] 
 **assignableType** | **String**| filter by a specific type of assignables eg. &#x60;User&#x60; or &#x60;Usergroup&#x60;. | [optional] 
 **permitableId** | **Number**| filter by a permitable id | [optional] 
 **permitableType** | **String**| filter by a specific type of permitables eg. &#x60;Asset&#x60; or &#x60;Node&#x60; | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**Permissions**](Permissions.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

