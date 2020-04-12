# NetilionApiDocumentation.UserApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUserGroupsToUser**](UserApi.md#addUserGroupsToUser) | **POST** /users/{user_id}/usergroups | Add user groups to a user
[**addUserRolesToUser**](UserApi.md#addUserRolesToUser) | **POST** /users/{user_id}/userroles | Add user roles to a user
[**createCurrentUserDataExport**](UserApi.md#createCurrentUserDataExport) | **POST** /users/current/data_exports | create users data export for current user
[**createTechnicalUser**](UserApi.md#createTechnicalUser) | **POST** /technical_users | Create a new technical user
[**deleteCurrentUserDatasExport**](UserApi.md#deleteCurrentUserDatasExport) | **DELETE** /users/current/data_exports/{id} | delete users data export for current user
[**deleteCurrentUserNotifications**](UserApi.md#deleteCurrentUserNotifications) | **DELETE** /users/current/notifications/{id} | Delete the given notification for the current user
[**deleteTechnicalUser**](UserApi.md#deleteTechnicalUser) | **DELETE** /technical_users/{id} | Delete a technical user
[**deleteUser**](UserApi.md#deleteUser) | **DELETE** /users/{id} | Delete a user
[**getCurrentUser**](UserApi.md#getCurrentUser) | **GET** /users/current | Get current user
[**getCurrentUserAccessRights**](UserApi.md#getCurrentUserAccessRights) | **GET** /users/current/access_rights | Get current users access rights for a permitable
[**getCurrentUserDataExportbyId**](UserApi.md#getCurrentUserDataExportbyId) | **GET** /users/current/data_exports/{id} | Get a single user data export
[**getCurrentUserDataExports**](UserApi.md#getCurrentUserDataExports) | **GET** /users/current/data_exports | Get current users data exports
[**getCurrentUserDataExportsFile**](UserApi.md#getCurrentUserDataExportsFile) | **GET** /users/current/data_exports/{id}/download | Get current users data export zip file
[**getCurrentUserNotifications**](UserApi.md#getCurrentUserNotifications) | **GET** /users/current/notifications | Get relevant notifications for the current authenticated user
[**getSignInsOfUser**](UserApi.md#getSignInsOfUser) | **GET** /users/{user_id}/sign_ins | Get sign_ins of a user
[**getSpecificationsOfUser**](UserApi.md#getSpecificationsOfUser) | **GET** /users/{user_id}/specifications | Get specifications of a user
[**getTechnicalUsers**](UserApi.md#getTechnicalUsers) | **GET** /technical_users | Get a range of technical users
[**getUsageOfUser**](UserApi.md#getUsageOfUser) | **GET** /users/{user_id}/usage | Get the use of storage and the number of assets registred of a user
[**getUserById**](UserApi.md#getUserById) | **GET** /users/{id} | Get a single user
[**getUserGroupsOfUser**](UserApi.md#getUserGroupsOfUser) | **GET** /users/{user_id}/usergroups | Get the user groups of one user
[**getUserRolesOfUser**](UserApi.md#getUserRolesOfUser) | **GET** /users/{user_id}/userroles | Get all user roles of one user
[**getUsers**](UserApi.md#getUsers) | **GET** /users | Get a range of users
[**lookupUser**](UserApi.md#lookupUser) | **GET** /users/lookup | Lookup user by email
[**removeSpecificationsFromUsers**](UserApi.md#removeSpecificationsFromUsers) | **DELETE** /users/{user_id}/specifications | Delete specifications of a user
[**removeUserGroupFromUser**](UserApi.md#removeUserGroupFromUser) | **DELETE** /users/{user_id}/usergroups | Remove user groups from a user
[**removeUserRolesFromUser**](UserApi.md#removeUserRolesFromUser) | **DELETE** /users/{user_id}/userroles | Remove user roles from a user
[**renameSpecificationsOfUsers**](UserApi.md#renameSpecificationsOfUsers) | **PATCH** /users/{user_id}/specifications/rename | Rename a specification key
[**replaceUserGroupsOfUser**](UserApi.md#replaceUserGroupsOfUser) | **PATCH** /users/{user_id}/usergroups | Replace the user groups of a user
[**replaceUserRolesOfUser**](UserApi.md#replaceUserRolesOfUser) | **PATCH** /users/{user_id}/userroles | Replace the user roles of a user
[**resetPasswordTechnicalUser**](UserApi.md#resetPasswordTechnicalUser) | **POST** /technical_users/{id}/reset_password | create a new password for a technical user
[**updateSpecificationsOfUsers**](UserApi.md#updateSpecificationsOfUsers) | **PATCH** /users/{user_id}/specifications | Update specifications of a user
[**updateUser**](UserApi.md#updateUser) | **PATCH** /users/{id} | Update a user

<a name="addUserGroupsToUser"></a>
# **addUserGroupsToUser**
> addUserGroupsToUser(bodyuserId)

Add user groups to a user

Add one or more user groups to a user identified by id in the url.

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

let apiInstance = new NetilionApiDocumentation.UserApi();
let body = new NetilionApiDocumentation.UserGroupIDs(); // UserGroupIDs | Resources that shall be added.
let userId = 789; // Number | Id of the user to whom the user groups will be added

apiInstance.addUserGroupsToUser(bodyuserId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserGroupIDs**](UserGroupIDs.md)| Resources that shall be added. | 
 **userId** | **Number**| Id of the user to whom the user groups will be added | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addUserRolesToUser"></a>
# **addUserRolesToUser**
> addUserRolesToUser(bodyuserId)

Add user roles to a user

Add one or more user roles to a user. To work with roles, admin role is required.

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

let apiInstance = new NetilionApiDocumentation.UserApi();
let body = new NetilionApiDocumentation.UserRoleIDs(); // UserRoleIDs | Resources that shall be added.
let userId = 789; // Number | Id of the user to which the user roles will be added

apiInstance.addUserRolesToUser(bodyuserId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserRoleIDs**](UserRoleIDs.md)| Resources that shall be added. | 
 **userId** | **Number**| Id of the user to which the user roles will be added | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createCurrentUserDataExport"></a>
# **createCurrentUserDataExport**
> DataExportResponse createCurrentUserDataExport(body)

create users data export for current user

create the data export of the authenticated user in the current context.

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

let apiInstance = new NetilionApiDocumentation.UserApi();
let body = new NetilionApiDocumentation.DataExportRequest(); // DataExportRequest | Resources that shall be added.

apiInstance.createCurrentUserDataExport(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DataExportRequest**](DataExportRequest.md)| Resources that shall be added. | 

### Return type

[**DataExportResponse**](DataExportResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTechnicalUser"></a>
# **createTechnicalUser**
> TechnicalUserCreateResponse createTechnicalUser(body)

Create a new technical user

Creates a new technical user. Password is automatically generated an can not be defined. The generated password is part of the response (but cannot be later received again) Technical users must not be confirmed via eMail link. 

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

let apiInstance = new NetilionApiDocumentation.UserApi();
let body = new NetilionApiDocumentation.TechnicalUserRequest(); // TechnicalUserRequest | Technical User object that needs to be registered

apiInstance.createTechnicalUser(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TechnicalUserRequest**](TechnicalUserRequest.md)| Technical User object that needs to be registered | 

### Return type

[**TechnicalUserCreateResponse**](TechnicalUserCreateResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCurrentUserDatasExport"></a>
# **deleteCurrentUserDatasExport**
> deleteCurrentUserDatasExport(id)

delete users data export for current user

delete the data export of the authenticated user in the current context.

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

let apiInstance = new NetilionApiDocumentation.UserApi();
let id = 789; // Number | Id of the data_export to delete

apiInstance.deleteCurrentUserDatasExport(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the data_export to delete | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteCurrentUserNotifications"></a>
# **deleteCurrentUserNotifications**
> deleteCurrentUserNotifications(id)

Delete the given notification for the current user

Delete the given notification for the currently authenticated user.

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

let apiInstance = new NetilionApiDocumentation.UserApi();
let id = 789; // Number | Id of the notification to delete

apiInstance.deleteCurrentUserNotifications(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the notification to delete | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteTechnicalUser"></a>
# **deleteTechnicalUser**
> deleteTechnicalUser(id)

Delete a technical user

Delete a technical user identified by the id in the URL.

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

let apiInstance = new NetilionApiDocumentation.UserApi();
let id = 789; // Number | Id of the technical user to delete

apiInstance.deleteTechnicalUser(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the technical user to delete | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteUser"></a>
# **deleteUser**
> deleteUser(id)

Delete a user

Delete a specific resource in your permission scope identified by the id in the URL.

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

let apiInstance = new NetilionApiDocumentation.UserApi();
let id = 789; // Number | Id of the user to delete

apiInstance.deleteUser(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the user to delete | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCurrentUser"></a>
# **getCurrentUser**
> CurrentUserResponse getCurrentUser(opts)

Get current user

Get the user authenticated in the current context. Possible include values: &#x60;&#x60;&#x60;userroles, usergroups, usage, specifications, specifications[key1,key2]&#x60;&#x60;&#x60;

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

let apiInstance = new NetilionApiDocumentation.UserApi();
let opts = { 
  'include': "include_example" // String | Comma separated list of objects to include in response
};
apiInstance.getCurrentUser(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **include** | **String**| Comma separated list of objects to include in response | [optional] 

### Return type

[**CurrentUserResponse**](CurrentUserResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCurrentUserAccessRights"></a>
# **getCurrentUserAccessRights**
> AccessRightsResponse getCurrentUserAccessRights(permitableId, permitableType)

Get current users access rights for a permitable

Get the access rights for a permitable of the authenticated user in the current context.

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

let apiInstance = new NetilionApiDocumentation.UserApi();
let permitableId = 789; // Number | id of the permitable.
let permitableType = "permitableType_example"; // String | permitable type eg. Asset, Node, EDM::EdgeDevice.

apiInstance.getCurrentUserAccessRights(permitableId, permitableType).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **permitableId** | **Number**| id of the permitable. | 
 **permitableType** | **String**| permitable type eg. Asset, Node, EDM::EdgeDevice. | 

### Return type

[**AccessRightsResponse**](AccessRightsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCurrentUserDataExportbyId"></a>
# **getCurrentUserDataExportbyId**
> DataExportResponse getCurrentUserDataExportbyId(id)

Get a single user data export

Get the data exports of the authenticated user.

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

let apiInstance = new NetilionApiDocumentation.UserApi();
let id = 789; // Number | Id of the data_export to fetch

apiInstance.getCurrentUserDataExportbyId(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the data_export to fetch | 

### Return type

[**DataExportResponse**](DataExportResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCurrentUserDataExports"></a>
# **getCurrentUserDataExports**
> DataExportsResponse getCurrentUserDataExports(opts)

Get current users data exports

Get the data exports of the authenticated user.

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

let apiInstance = new NetilionApiDocumentation.UserApi();
let opts = { 
  'type': "type_example" // String | type of data export, can be complete or measurements.
};
apiInstance.getCurrentUserDataExports(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| type of data export, can be complete or measurements. | [optional] 

### Return type

[**DataExportsResponse**](DataExportsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCurrentUserDataExportsFile"></a>
# **getCurrentUserDataExportsFile**
> getCurrentUserDataExportsFile(id)

Get current users data export zip file

Get the data export file of the authenticated user in the current context. Content-Transfer-Encoding header is set to binary.

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

let apiInstance = new NetilionApiDocumentation.UserApi();
let id = 789; // Number | Id of the data_export to download

apiInstance.getCurrentUserDataExportsFile(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the data_export to download | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCurrentUserNotifications"></a>
# **getCurrentUserNotifications**
> Object getCurrentUserNotifications(opts)

Get relevant notifications for the current authenticated user

Returns a list of all notifications available for the authenticated user on the current client application. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;content&#x60;&#x60;&#x60;. To get a translation set Accept-Language.

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

let apiInstance = new NetilionApiDocumentation.UserApi();
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'startDatetime': "startDatetime_example", // String | Expected date format is YYYY-MM-DDThh:mm:ss
  'startDatetimeFrom': "startDatetimeFrom_example", // String | Expected date format is YYYY-MM-DDThh:mm:ss
  'startDatetimeTo': "startDatetimeTo_example", // String | Expected date format is YYYY-MM-DDThh:mm:ss
  'endDatetime': "endDatetime_example", // String | Expected date format is YYYY-MM-DDThh:mm:ss
  'endDatetimeFrom': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DDThh:mm:ss
  'endDatetimeTo': "endDatetimeTo_example", // String | Expected date format is YYYY-MM-DDThh:mm:ss
  'orderBy': "orderBy_example", // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getCurrentUserNotifications(opts).then((data) => {
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
 **startDatetime** | **String**| Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **startDatetimeFrom** | **String**| Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **startDatetimeTo** | **String**| Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **endDatetime** | **String**| Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **endDatetimeFrom** | **Date**| Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **endDatetimeTo** | **String**| Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

**Object**

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSignInsOfUser"></a>
# **getSignInsOfUser**
> SignInsResponse getSignInsOfUser(userId, opts)

Get sign_ins of a user

Returns a list of all sign ins of a specific user identified by id in the url. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.&#x27;

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

let apiInstance = new NetilionApiDocumentation.UserApi();
let userId = 789; // Number | Id of the user to fetch
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getSignInsOfUser(userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the user to fetch | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**SignInsResponse**](SignInsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSpecificationsOfUser"></a>
# **getSpecificationsOfUser**
> SpecificationsResponse getSpecificationsOfUser(userId, opts)

Get specifications of a user

Returns the specification of an object in your accessible scope. If no specifications are defined, this is just an empty object. Specification must have the form below.

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

let apiInstance = new NetilionApiDocumentation.UserApi();
let userId = 789; // Number | Id of the specified user
let opts = { 
  'key': "key_example" // String | Filter accepts '*' as wildcard
};
apiInstance.getSpecificationsOfUser(userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the specified user | 
 **key** | **String**| Filter accepts &#x27;*&#x27; as wildcard | [optional] 

### Return type

[**SpecificationsResponse**](SpecificationsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTechnicalUsers"></a>
# **getTechnicalUsers**
> TechnicalUsersResponse getTechnicalUsers(opts)

Get a range of technical users

Returns a list of technical users. If the query has no matches, the response is an empty list. Possible include values: &#x60;&#x60;&#x60;userroles, usergroups&#x60;&#x60;&#x60;

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

let apiInstance = new NetilionApiDocumentation.UserApi();
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'email': "email_example", // String | Filter accepts `*` as wildcard
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `email`, `first_name`, `last_name`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getTechnicalUsers(opts).then((data) => {
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
 **email** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;email&#x60;, &#x60;first_name&#x60;, &#x60;last_name&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**TechnicalUsersResponse**](TechnicalUsersResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUsageOfUser"></a>
# **getUsageOfUser**
> UsageResponse getUsageOfUser(userId)

Get the use of storage and the number of assets registred of a user

Returns the storage and number of assets of a specific user identified by id in the url.&#x27;

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

let apiInstance = new NetilionApiDocumentation.UserApi();
let userId = 789; // Number | Id of the user to fetch

apiInstance.getUsageOfUser(userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the user to fetch | 

### Return type

[**UsageResponse**](UsageResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserById"></a>
# **getUserById**
> UserResponse getUserById(id, opts)

Get a single user

Get a specific user in your permission scope, identified by the id in the URL. Possible include values: &#x60;&#x60;&#x60;userroles, usergroups, specifications, specifications[key1,key2]&#x60;&#x60;&#x60;

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

let apiInstance = new NetilionApiDocumentation.UserApi();
let id = 789; // Number | Id of the user to fetch
let opts = { 
  'include': "include_example" // String | Comma separated list of objects to include in response
};
apiInstance.getUserById(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the user to fetch | 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserGroupsOfUser"></a>
# **getUserGroupsOfUser**
> UserGroupsWithUsers getUserGroupsOfUser(userId, opts)

Get the user groups of one user

Returns a list of all usergroups of a specific user identified by id in the url. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.&#x27;

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

let apiInstance = new NetilionApiDocumentation.UserApi();
let userId = 789; // Number | The resource defined in the URL
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `name`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getUserGroupsOfUser(userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The resource defined in the URL | 
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

<a name="getUserRolesOfUser"></a>
# **getUserRolesOfUser**
> UserRolesResponse getUserRolesOfUser(userId, opts)

Get all user roles of one user

Returns a list of all user roles that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.

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

let apiInstance = new NetilionApiDocumentation.UserApi();
let userId = 789; // Number | The resource defined in the URL
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `name`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getUserRolesOfUser(userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;name&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**UserRolesResponse**](UserRolesResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUsers"></a>
# **getUsers**
> UsersResponse getUsers(opts)

Get a range of users

Returns a list of users in your permission scope. If the query has no matches, the response is an empty list. Possible include values: &#x60;&#x60;&#x60;userroles, usergroups, specifications, specifications[key1,key2]&#x60;&#x60;&#x60;. Specification filters and includes are only available for admin users

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

let apiInstance = new NetilionApiDocumentation.UserApi();
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'email': "email_example", // String | Filter accepts `*` as wildcard
  'firstName': "firstName_example", // String | Filter accepts `*` as wildcard
  'lastName': "lastName_example", // String | Filter accepts `*` as wildcard
  'specificationsKey': "specificationsKey_example", // String | Filter accepts `*` as wildcard (if used as single specifications filter), supports comma list of keys in connection with specifications_value filter
  'specificationsValue': "specificationsValue_example", // String | Filter accepts `*` as wildcard, supports comma list of values in connection with specifications_key filter. Does not work for vectors
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `email`, `first_name`, `last_name`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getUsers(opts).then((data) => {
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
 **email** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **firstName** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **lastName** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **specificationsKey** | **String**| Filter accepts &#x60;*&#x60; as wildcard (if used as single specifications filter), supports comma list of keys in connection with specifications_value filter | [optional] 
 **specificationsValue** | **String**| Filter accepts &#x60;*&#x60; as wildcard, supports comma list of values in connection with specifications_key filter. Does not work for vectors | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;email&#x60;, &#x60;first_name&#x60;, &#x60;last_name&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**UsersResponse**](UsersResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="lookupUser"></a>
# **lookupUser**
> UserPublicResponse lookupUser(email)

Lookup user by email

Get a user for a given email adress.

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

let apiInstance = new NetilionApiDocumentation.UserApi();
let email = "email_example"; // String | email of the user to lookup.

apiInstance.lookupUser(email).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| email of the user to lookup. | 

### Return type

[**UserPublicResponse**](UserPublicResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="removeSpecificationsFromUsers"></a>
# **removeSpecificationsFromUsers**
> removeSpecificationsFromUsers(bodyuserId)

Delete specifications of a user

The specification keys in the body will be removed of the object in your accessible scope. If a key does not exist it will be ignored.

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

let apiInstance = new NetilionApiDocumentation.UserApi();
let body = ["body_example"]; // [String] | Array of keys to delete from specifications
let userId = 789; // Number | Id of the specified user

apiInstance.removeSpecificationsFromUsers(bodyuserId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[String]**](String.md)| Array of keys to delete from specifications | 
 **userId** | **Number**| Id of the specified user | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeUserGroupFromUser"></a>
# **removeUserGroupFromUser**
> removeUserGroupFromUser(bodyuserId)

Remove user groups from a user

Remove one or more user groups from a user identified by id in the url.

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

let apiInstance = new NetilionApiDocumentation.UserApi();
let body = new NetilionApiDocumentation.UserGroupIDs(); // UserGroupIDs | Resources that shall be removed.
let userId = 789; // Number | Id of the user from which the user groups will be removed

apiInstance.removeUserGroupFromUser(bodyuserId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserGroupIDs**](UserGroupIDs.md)| Resources that shall be removed. | 
 **userId** | **Number**| Id of the user from which the user groups will be removed | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeUserRolesFromUser"></a>
# **removeUserRolesFromUser**
> removeUserRolesFromUser(bodyuserId)

Remove user roles from a user

Remove one or more user roles from a user. To work with roles, admin role is required.

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

let apiInstance = new NetilionApiDocumentation.UserApi();
let body = new NetilionApiDocumentation.UserRoleIDs(); // UserRoleIDs | Resources that shall be removed.
let userId = 789; // Number | Id of the user from which the user roles will be removed

apiInstance.removeUserRolesFromUser(bodyuserId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserRoleIDs**](UserRoleIDs.md)| Resources that shall be removed. | 
 **userId** | **Number**| Id of the user from which the user roles will be removed | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="renameSpecificationsOfUsers"></a>
# **renameSpecificationsOfUsers**
> renameSpecificationsOfUsers(bodyuserId)

Rename a specification key

Rename one specification key of a user in your accessible scope. The key name allows [a-z A-Z 0-9 . - _ ] all uppercase letters will be converted to lower-case.

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

let apiInstance = new NetilionApiDocumentation.UserApi();
let body = new NetilionApiDocumentation.SpecificationsRename(); // SpecificationsRename | The specifications object to patch.
let userId = 789; // Number | Id of the specified user

apiInstance.renameSpecificationsOfUsers(bodyuserId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SpecificationsRename**](SpecificationsRename.md)| The specifications object to patch. | 
 **userId** | **Number**| Id of the specified user | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceUserGroupsOfUser"></a>
# **replaceUserGroupsOfUser**
> replaceUserGroupsOfUser(bodyuserId)

Replace the user groups of a user

Replaces all user groups belonging to a user. You can send a list of resources that will replace all previous values.

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

let apiInstance = new NetilionApiDocumentation.UserApi();
let body = new NetilionApiDocumentation.UserGroupIDs(); // UserGroupIDs | Resources that shall be replaced.
let userId = 789; // Number | Id of the user of which the user groups will be replaced

apiInstance.replaceUserGroupsOfUser(bodyuserId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserGroupIDs**](UserGroupIDs.md)| Resources that shall be replaced. | 
 **userId** | **Number**| Id of the user of which the user groups will be replaced | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceUserRolesOfUser"></a>
# **replaceUserRolesOfUser**
> replaceUserRolesOfUser(bodyuserId)

Replace the user roles of a user

Replaces all user roles belonging to a user. You can send a list of resources that will replace all previous values. To work with roles, admin role is required.

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

let apiInstance = new NetilionApiDocumentation.UserApi();
let body = new NetilionApiDocumentation.UserRoleIDs(); // UserRoleIDs | Resources that shall be replaced
let userId = 789; // Number | Id of the user of which the user roles will be replaced

apiInstance.replaceUserRolesOfUser(bodyuserId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserRoleIDs**](UserRoleIDs.md)| Resources that shall be replaced | 
 **userId** | **Number**| Id of the user of which the user roles will be replaced | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="resetPasswordTechnicalUser"></a>
# **resetPasswordTechnicalUser**
> TechnicalUserPasswordResponse resetPasswordTechnicalUser(id)

create a new password for a technical user

 Password is automatically generated an can not be defined. The generated password is part of the response (but cannot be later received again). 

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

let apiInstance = new NetilionApiDocumentation.UserApi();
let id = 789; // Number | Id of the technical user

apiInstance.resetPasswordTechnicalUser(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the technical user | 

### Return type

[**TechnicalUserPasswordResponse**](TechnicalUserPasswordResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateSpecificationsOfUsers"></a>
# **updateSpecificationsOfUsers**
> updateSpecificationsOfUsers(bodyuserId)

Update specifications of a user

Update the specification object of a user in your accessible scope. To add specifications, just add the key and set the value object with value, unit and source_timestamp. To mark an existing specification to be unknown, the value could be set to null. To delete keys, use the delete method. Multiple specification objects can be sent in the same request. Keys inside a specification are unique and can only be added once. Keys can only consist of [a-z A-Z 0-9 . - _ ]. All uppercase A-Z are converted to lower-case a-z. For a key that is send multiple times in the request body, only the last key-value is saved.

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

let apiInstance = new NetilionApiDocumentation.UserApi();
let body = null; // {String: SpecificationRequest} | The specifications objects to patch.
let userId = 789; // Number | Id of the specified user

apiInstance.updateSpecificationsOfUsers(bodyuserId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**{String: SpecificationRequest}**](Object.md)| The specifications objects to patch. | 
 **userId** | **Number**| Id of the specified user | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUser"></a>
# **updateUser**
> updateUser(bodyid)

Update a user

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

let apiInstance = new NetilionApiDocumentation.UserApi();
let body = new NetilionApiDocumentation.UserChangeRequest(); // UserChangeRequest | Parameters that shall be updated.
let id = 789; // Number | Id of the user to update

apiInstance.updateUser(bodyid).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserChangeRequest**](UserChangeRequest.md)| Parameters that shall be updated. | 
 **id** | **Number**| Id of the user to update | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

