# NetilionApiDocumentation.UserRoleApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUsersToUserRole**](UserRoleApi.md#addUsersToUserRole) | **POST** /userroles/{userrole_id}/users | Add users to a user role
[**createUserRole**](UserRoleApi.md#createUserRole) | **POST** /userroles | Create a new user role
[**deleteUserRole**](UserRoleApi.md#deleteUserRole) | **DELETE** /userroles/{id} | Delete a user role
[**deleteUsersFromUserRole**](UserRoleApi.md#deleteUsersFromUserRole) | **DELETE** /userroles/{userrole_id}/users | Remove users from a user role
[**getUserRoleById**](UserRoleApi.md#getUserRoleById) | **GET** /userroles/{id} | Get a single user role
[**getUserRoles**](UserRoleApi.md#getUserRoles) | **GET** /userroles | Get a range of user roles
[**getUsersOfUserRole**](UserRoleApi.md#getUsersOfUserRole) | **GET** /userroles/{userrole_id}/users | Get all users of one user role. To work with roles, admin role is required.
[**replaceUsersOfUserRole**](UserRoleApi.md#replaceUsersOfUserRole) | **PATCH** /userroles/{userrole_id}/users | Replace the users of a user role
[**updateUserRole**](UserRoleApi.md#updateUserRole) | **PATCH** /userroles/{id} | Update a user role

<a name="addUsersToUserRole"></a>
# **addUsersToUserRole**
> addUsersToUserRole(bodyuserroleId)

Add users to a user role

Add one or more users to a user role. To work with roles, admin role is required.

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

let apiInstance = new NetilionApiDocumentation.UserRoleApi();
let body = new NetilionApiDocumentation.UserIDs(); // UserIDs | Resources that shall be added.
let userroleId = 789; // Number | Id of the user role to which the users will be added

apiInstance.addUsersToUserRole(bodyuserroleId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserIDs**](UserIDs.md)| Resources that shall be added. | 
 **userroleId** | **Number**| Id of the user role to which the users will be added | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createUserRole"></a>
# **createUserRole**
> UserRoleResponse createUserRole(body)

Create a new user role

A user role can have many users and users can belong to several roles. To work with roles, admin role is required.

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

let apiInstance = new NetilionApiDocumentation.UserRoleApi();
let body = new NetilionApiDocumentation.UserRoleRequest(); // UserRoleRequest | User role to create

apiInstance.createUserRole(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserRoleRequest**](UserRoleRequest.md)| User role to create | 

### Return type

[**UserRoleResponse**](UserRoleResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserRole"></a>
# **deleteUserRole**
> deleteUserRole(id)

Delete a user role

Delete a specific resource identified by the id in the URL. To work with roles, admin role is required.

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

let apiInstance = new NetilionApiDocumentation.UserRoleApi();
let id = 789; // Number | Id of the user role to delete

apiInstance.deleteUserRole(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the user role to delete | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteUsersFromUserRole"></a>
# **deleteUsersFromUserRole**
> deleteUsersFromUserRole(bodyuserroleId)

Remove users from a user role

Remove one or more users from an user role. To work with roles, admin role is required.

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

let apiInstance = new NetilionApiDocumentation.UserRoleApi();
let body = new NetilionApiDocumentation.UserIDs(); // UserIDs | Resources that shall be removed.
let userroleId = 789; // Number | Id of the user role from which the users will be removed

apiInstance.deleteUsersFromUserRole(bodyuserroleId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserIDs**](UserIDs.md)| Resources that shall be removed. | 
 **userroleId** | **Number**| Id of the user role from which the users will be removed | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserRoleById"></a>
# **getUserRoleById**
> UserRoleResponse getUserRoleById(id)

Get a single user role

Get a specific user role identified by the id in the URL. To work with roles, admin role is required.

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

let apiInstance = new NetilionApiDocumentation.UserRoleApi();
let id = 789; // Number | Id of the user role to fetch

apiInstance.getUserRoleById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the user role to fetch | 

### Return type

[**UserRoleResponse**](UserRoleResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserRoles"></a>
# **getUserRoles**
> UserRolesResponse getUserRoles(opts)

Get a range of user roles

Returns a list of all user roles that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.&#x27; To work with roles, admin role is required.

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

let apiInstance = new NetilionApiDocumentation.UserRoleApi();
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `name`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getUserRoles(opts).then((data) => {
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
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;name&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**UserRolesResponse**](UserRolesResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUsersOfUserRole"></a>
# **getUsersOfUserRole**
> UsersPublicResponse getUsersOfUserRole(userroleId, opts)

Get all users of one user role. To work with roles, admin role is required.

Returns a list of all users that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.

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

let apiInstance = new NetilionApiDocumentation.UserRoleApi();
let userroleId = 789; // Number | The resource defined in the URL
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'firstName': "firstName_example", // String | Filter accepts `*` as wildcard
  'lastName': "lastName_example", // String | Filter accepts `*` as wildcard
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `email`, `first_name`, `last_name`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getUsersOfUserRole(userroleId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userroleId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **firstName** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **lastName** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;email&#x60;, &#x60;first_name&#x60;, &#x60;last_name&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**UsersPublicResponse**](UsersPublicResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="replaceUsersOfUserRole"></a>
# **replaceUsersOfUserRole**
> replaceUsersOfUserRole(bodyuserroleId)

Replace the users of a user role

Replaces all users belonging to an user role. You can send a list of resources that will replace all previous values. To work with roles, admin role is required.

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

let apiInstance = new NetilionApiDocumentation.UserRoleApi();
let body = new NetilionApiDocumentation.UserIDs(); // UserIDs | Resources that shall be replaced
let userroleId = 789; // Number | Id of the user role of which the users will be replaced

apiInstance.replaceUsersOfUserRole(bodyuserroleId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserIDs**](UserIDs.md)| Resources that shall be replaced | 
 **userroleId** | **Number**| Id of the user role of which the users will be replaced | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUserRole"></a>
# **updateUserRole**
> updateUserRole(bodyid)

Update a user role

Update accessible parameters of the requested resource. To work with roles, admin role is required.

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

let apiInstance = new NetilionApiDocumentation.UserRoleApi();
let body = new NetilionApiDocumentation.UserRoleRequest(); // UserRoleRequest | Parameters that shall be updated.
let id = 789; // Number | Id of the user role to update

apiInstance.updateUserRole(bodyid).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserRoleRequest**](UserRoleRequest.md)| Parameters that shall be updated. | 
 **id** | **Number**| Id of the user role to update | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

