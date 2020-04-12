# NetilionApiDocumentation.PermissionRequestApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPermissionRequest**](PermissionRequestApi.md#createPermissionRequest) | **POST** /permission_requests | Create a new permission request
[**deletePermissionRequest**](PermissionRequestApi.md#deletePermissionRequest) | **DELETE** /permission_requests/{id} | Delete a permission request
[**getPermissionRequestById**](PermissionRequestApi.md#getPermissionRequestById) | **GET** /permission_requests/{id} | Get a single permissionRequest
[**updatePermissionRequest**](PermissionRequestApi.md#updatePermissionRequest) | **PATCH** /permission_requests/{id} | Update a permission request


<a name="createPermissionRequest"></a>
# **createPermissionRequest**
> PermissionRequestResponse createPermissionRequest(body)

Create a new permission request

Permissions must have a permission_type, assignable and permitable.

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

var apiInstance = new NetilionApiDocumentation.PermissionRequestApi();

var body = new NetilionApiDocumentation.PermissionRequestCreateRequest(); // PermissionRequestCreateRequest | Permission object that needs to be created.

apiInstance.createPermissionRequest(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PermissionRequestCreateRequest**](PermissionRequestCreateRequest.md)| Permission object that needs to be created. | 

### Return type

[**PermissionRequestResponse**](PermissionRequestResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePermissionRequest"></a>
# **deletePermissionRequest**
> deletePermissionRequest(id)

Delete a permission request

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

var apiInstance = new NetilionApiDocumentation.PermissionRequestApi();

var id = 789; // Number | Id of the permission request to delete

apiInstance.deletePermissionRequest(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the permission request to delete | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPermissionRequestById"></a>
# **getPermissionRequestById**
> PermissionRequestResponse getPermissionRequestById(id)

Get a single permissionRequest

Get a specific permission request identified by the id in the URL.

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

var apiInstance = new NetilionApiDocumentation.PermissionRequestApi();

var id = 789; // Number | Id of the permission request to fetch

apiInstance.getPermissionRequestById(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the permission request to fetch | 

### Return type

[**PermissionRequestResponse**](PermissionRequestResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatePermissionRequest"></a>
# **updatePermissionRequest**
> updatePermissionRequest(id, body)

Update a permission request

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

var apiInstance = new NetilionApiDocumentation.PermissionRequestApi();

var id = 789; // Number | Id of the permission request to update

var body = new NetilionApiDocumentation.PermissionRequestUpdateRequest(); // PermissionRequestUpdateRequest | Parameters that shall be updated.

apiInstance.updatePermissionRequest(id, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the permission request to update | 
 **body** | [**PermissionRequestUpdateRequest**](PermissionRequestUpdateRequest.md)| Parameters that shall be updated. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

