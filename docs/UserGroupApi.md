# NetilionApiDocumentation.UserGroupApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUsersToUserGroup**](UserGroupApi.md#addUsersToUserGroup) | **POST** /usergroups/{usergroup_id}/users | Add users to a user group
[**createUserGroup**](UserGroupApi.md#createUserGroup) | **POST** /usergroups | Create a new user group
[**deleteUserGroup**](UserGroupApi.md#deleteUserGroup) | **DELETE** /usergroups/{id} | Delete a user group
[**getUserGroupById**](UserGroupApi.md#getUserGroupById) | **GET** /usergroups/{id} | Get a single user group
[**getUserGroups**](UserGroupApi.md#getUserGroups) | **GET** /usergroups | Get a range of user groups
[**getUsersOfUserGroup**](UserGroupApi.md#getUsersOfUserGroup) | **GET** /usergroups/{usergroup_id}/users | Get the users of a user group
[**removeUsersFromUserGroup**](UserGroupApi.md#removeUsersFromUserGroup) | **DELETE** /usergroups/{usergroup_id}/users | Remove users from a user group
[**replaceUsersOfUserGroup**](UserGroupApi.md#replaceUsersOfUserGroup) | **PATCH** /usergroups/{usergroup_id}/users | Replace the users of a user group
[**updateUserGroup**](UserGroupApi.md#updateUserGroup) | **PATCH** /usergroups/{id} | Update a user group

<a name="addUsersToUserGroup"></a>
# **addUsersToUserGroup**
> addUsersToUserGroup(bodyusergroupId)

Add users to a user group

Add one or more users to a user group.

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

let apiInstance = new NetilionApiDocumentation.UserGroupApi();
let body = new NetilionApiDocumentation.UserIDs(); // UserIDs | Resources that shall be added.
let usergroupId = 789; // Number | Id of the user group to which the users will be added

apiInstance.addUsersToUserGroup(bodyusergroupId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserIDs**](UserIDs.md)| Resources that shall be added. | 
 **usergroupId** | **Number**| Id of the user group to which the users will be added | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createUserGroup"></a>
# **createUserGroup**
> UserGroupResponse createUserGroup(body)

Create a new user group

A user group can have many users and users can belong to several groups.

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

let apiInstance = new NetilionApiDocumentation.UserGroupApi();
let body = new NetilionApiDocumentation.UserGroupRequest(); // UserGroupRequest | User group to create

apiInstance.createUserGroup(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserGroupRequest**](UserGroupRequest.md)| User group to create | 

### Return type

[**UserGroupResponse**](UserGroupResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserGroup"></a>
# **deleteUserGroup**
> deleteUserGroup(id)

Delete a user group

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

let apiInstance = new NetilionApiDocumentation.UserGroupApi();
let id = 789; // Number | Id of the user group to delete

apiInstance.deleteUserGroup(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the user group to delete | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserGroupById"></a>
# **getUserGroupById**
> UserGroupResponse getUserGroupById(id)

Get a single user group

Get a specific user group identified by the id in the URL.

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

let apiInstance = new NetilionApiDocumentation.UserGroupApi();
let id = 789; // Number | Id of the user group to fetch

apiInstance.getUserGroupById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the user group to fetch | 

### Return type

[**UserGroupResponse**](UserGroupResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserGroups"></a>
# **getUserGroups**
> UserGroupsWithUsers getUserGroups(opts)

Get a range of user groups

Returns a list of all user group that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.&#x27;

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

let apiInstance = new NetilionApiDocumentation.UserGroupApi();
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `name`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getUserGroups(opts).then((data) => {
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
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;name&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**UserGroupsWithUsers**](UserGroupsWithUsers.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUsersOfUserGroup"></a>
# **getUsersOfUserGroup**
> UsersPublicResponse getUsersOfUserGroup(usergroupId, opts)

Get the users of a user group

Returns a list of all users of a specific user group identified by id in the url. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.

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

let apiInstance = new NetilionApiDocumentation.UserGroupApi();
let usergroupId = 789; // Number | The resource defined in the URL
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'firstName': "firstName_example", // String | Filter accepts `*` as wildcard
  'lastName': "lastName_example", // String | Filter accepts `*` as wildcard
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `email`, `first_name`, `last_name`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getUsersOfUserGroup(usergroupId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usergroupId** | **Number**| The resource defined in the URL | 
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

<a name="removeUsersFromUserGroup"></a>
# **removeUsersFromUserGroup**
> removeUsersFromUserGroup(bodyusergroupId)

Remove users from a user group

Remove one or more users from a user group.

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

let apiInstance = new NetilionApiDocumentation.UserGroupApi();
let body = new NetilionApiDocumentation.UserIDs(); // UserIDs | Resources that shall be removed.
let usergroupId = 789; // Number | Id of the user group from which the users will be removed

apiInstance.removeUsersFromUserGroup(bodyusergroupId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserIDs**](UserIDs.md)| Resources that shall be removed. | 
 **usergroupId** | **Number**| Id of the user group from which the users will be removed | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceUsersOfUserGroup"></a>
# **replaceUsersOfUserGroup**
> replaceUsersOfUserGroup(bodyusergroupId)

Replace the users of a user group

Replaces all users belonging to a user group. You can send a list of resources that will replace all previous values.

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

let apiInstance = new NetilionApiDocumentation.UserGroupApi();
let body = new NetilionApiDocumentation.UserIDs(); // UserIDs | Resources that shall be replaced
let usergroupId = 789; // Number | Id of the user group of which the users will be replaced

apiInstance.replaceUsersOfUserGroup(bodyusergroupId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserIDs**](UserIDs.md)| Resources that shall be replaced | 
 **usergroupId** | **Number**| Id of the user group of which the users will be replaced | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUserGroup"></a>
# **updateUserGroup**
> updateUserGroup(bodyid)

Update a user group

Update accessible parameters of the requested resource.

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

let apiInstance = new NetilionApiDocumentation.UserGroupApi();
let body = new NetilionApiDocumentation.UserGroupRequest(); // UserGroupRequest | Parameters that shall be updated.
let id = 789; // Number | Id of the user group to update

apiInstance.updateUserGroup(bodyid).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserGroupRequest**](UserGroupRequest.md)| Parameters that shall be updated. | 
 **id** | **Number**| Id of the user group to update | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

