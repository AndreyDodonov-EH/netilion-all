# NetilionApiDocumentation.AttachmentApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLinkAttachment**](AttachmentApi.md#createLinkAttachment) | **POST** /attachments/links | Create a new link as attachment
[**deleteAttachment**](AttachmentApi.md#deleteAttachment) | **DELETE** /attachments/{id} | Delete an attachment and the file
[**downloadAttachment**](AttachmentApi.md#downloadAttachment) | **GET** /attachments/{id}/download | Download the attachments file
[**getAttachmentById**](AttachmentApi.md#getAttachmentById) | **GET** /attachments/{id} | Get a single attachment
[**getAttachments**](AttachmentApi.md#getAttachments) | **GET** /attachments | Get a range of attachments
[**updateAttachment**](AttachmentApi.md#updateAttachment) | **PATCH** /attachments/{id} | Update an attachment and especially its file
[**updateLinkAttachment**](AttachmentApi.md#updateLinkAttachment) | **PATCH** /attachments/links/{id} | Update an attachment with a link
[**uploadAttachment**](AttachmentApi.md#uploadAttachment) | **POST** /attachments | Create and upload a new attachment


<a name="createLinkAttachment"></a>
# **createLinkAttachment**
> AttachmentResponse createLinkAttachment(body)

Create a new link as attachment

Create an attachments that links to an external resource

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

var apiInstance = new NetilionApiDocumentation.AttachmentApi();

var body = new NetilionApiDocumentation.AttachmentLinkRequest(); // AttachmentLinkRequest | Attachment object that needs to be created

apiInstance.createLinkAttachment(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AttachmentLinkRequest**](AttachmentLinkRequest.md)| Attachment object that needs to be created | 

### Return type

[**AttachmentResponse**](AttachmentResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAttachment"></a>
# **deleteAttachment**
> deleteAttachment(id)

Delete an attachment and the file

Delete a specific attachment resource and file identified by the id in the URL.

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

var apiInstance = new NetilionApiDocumentation.AttachmentApi();

var id = 789; // Number | Id of the attachment to fetch

apiInstance.deleteAttachment(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the attachment to fetch | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="downloadAttachment"></a>
# **downloadAttachment**
> downloadAttachment(id, opts)

Download the attachments file

Download the file of the attachment with the original filename. Content-Transfer-Encoding header is set to binary

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

var apiInstance = new NetilionApiDocumentation.AttachmentApi();

var id = 789; // Number | Id of the attachment to fetch

var opts = { 
  'disposition': "disposition_example" // String | Disposition type the download should be returned with. Allowed values are \"inline\" and \"attachment\". Default is \"attachment\".
};
apiInstance.downloadAttachment(id, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the attachment to fetch | 
 **disposition** | **String**| Disposition type the download should be returned with. Allowed values are \&quot;inline\&quot; and \&quot;attachment\&quot;. Default is \&quot;attachment\&quot;. | [optional] 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAttachmentById"></a>
# **getAttachmentById**
> AttachmentResponse getAttachmentById(id)

Get a single attachment

specific attachment in your accessible scope, identified by the id in the URL.

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

var apiInstance = new NetilionApiDocumentation.AttachmentApi();

var id = 789; // Number | Id of the attachment to fetch

apiInstance.getAttachmentById(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the attachment to fetch | 

### Return type

[**AttachmentResponse**](AttachmentResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAttachments"></a>
# **getAttachments**
> AttachmentsResponse getAttachments(opts)

Get a range of attachments

Returns a list of all attachments that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.&#39;

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

var apiInstance = new NetilionApiDocumentation.AttachmentApi();

var opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'contentAuthor': "contentAuthor_example", // String | Filter accepts `*` as wildcard
  'contentVersion': "contentVersion_example", // String | Filter accepts `*` as wildcard
  'remarks': "remarks_example", // String | Filter accepts `*` as wildcard
  'contentDate': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD or YYYY-MM-DDThh:mm:ss
  'contentDateFrom': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD or YYYY-MM-DDThh:mm:ss
  'contentDateTo': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD or YYYY-MM-DDThh:mm:ss
  'fileName': "fileName_example", // String | Filter accepts `*` as wildcard
  'orderBy': "orderBy_example", // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getAttachments(opts).then(function(data) {
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
 **contentAuthor** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **contentVersion** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **remarks** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **contentDate** | **Date**| Expected date format is YYYY-MM-DD or YYYY-MM-DDThh:mm:ss | [optional] 
 **contentDateFrom** | **Date**| Expected date format is YYYY-MM-DD or YYYY-MM-DDThh:mm:ss | [optional] 
 **contentDateTo** | **Date**| Expected date format is YYYY-MM-DD or YYYY-MM-DDThh:mm:ss | [optional] 
 **fileName** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**AttachmentsResponse**](AttachmentsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateAttachment"></a>
# **updateAttachment**
> updateAttachment(id, opts)

Update an attachment and especially its file

The attachment object and also the file can be changed with a patch call. Checks the file-storage quota

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

var apiInstance = new NetilionApiDocumentation.AttachmentApi();

var id = 789; // Number | Id of the attachment to update

var opts = { 
  'file': "/path/to/file.txt", // File | the filedata to upload
  'documentId': 789, // Number | the document this attachment belongs to
  'contentAuthor': "contentAuthor_example", // String | the file authors name
  'contentDate': "contentDate_example", // String | last edit date of the file. Datetime must be in format YYYY-MM-DD or YYYY-MM-DDThh:mm:ss
  'remarks': "remarks_example", // String | remarks on the attachment
  'languages': "languages_example" // String | the files content languages. Send as comma separated list with alpha2 language codes (eg. de,en,fr). Supported languages are defined in ISO639-1
};
apiInstance.updateAttachment(id, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the attachment to update | 
 **file** | **File**| the filedata to upload | [optional] 
 **documentId** | **Number**| the document this attachment belongs to | [optional] 
 **contentAuthor** | **String**| the file authors name | [optional] 
 **contentDate** | **String**| last edit date of the file. Datetime must be in format YYYY-MM-DD or YYYY-MM-DDThh:mm:ss | [optional] 
 **remarks** | **String**| remarks on the attachment | [optional] 
 **languages** | **String**| the files content languages. Send as comma separated list with alpha2 language codes (eg. de,en,fr). Supported languages are defined in ISO639-1 | [optional] 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="updateLinkAttachment"></a>
# **updateLinkAttachment**
> AttachmentResponse updateLinkAttachment(id, body)

Update an attachment with a link

update an attachment that has a link

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

var apiInstance = new NetilionApiDocumentation.AttachmentApi();

var id = 789; // Number | Id of the attachment to update

var body = new NetilionApiDocumentation.AttachmentLinkRequest(); // AttachmentLinkRequest | Attachment object that needs to be created

apiInstance.updateLinkAttachment(id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the attachment to update | 
 **body** | [**AttachmentLinkRequest**](AttachmentLinkRequest.md)| Attachment object that needs to be created | 

### Return type

[**AttachmentResponse**](AttachmentResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="uploadAttachment"></a>
# **uploadAttachment**
> AttachmentResponse uploadAttachment(file, documentId, opts)

Create and upload a new attachment

the creation of an attachment works through a multipart/form-data upload of the file, its filename, content-author, content-date and languages of the file. Checks for the file-storage quota.  Forbidden content-types are  - application/xhtml+xml - text/html - application/javascript - text/javascript - application/x-shockwave-flash - application/vnd.adobe.flash.movie - video/x-flv - text/php - application/php - application/x-php - application/x-httpd-php

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

var apiInstance = new NetilionApiDocumentation.AttachmentApi();

var file = "/path/to/file.txt"; // File | the filedata to upload

var documentId = 789; // Number | the document this attachment belongs to

var opts = { 
  'contentAuthor': "contentAuthor_example", // String | the file authors name
  'contentVersion': "contentVersion_example", // String | The version can be set as float
  'contentDate': "contentDate_example", // String | last edit date of the file. Datetime must be in format YYYY-MM-DD or YYYY-MM-DDThh:mm:ss
  'remarks': "remarks_example", // String | remarks on the attachment
  'languages': "languages_example" // String | the files content languages. Send as comma separated list with alpha2 language codes (eg. de,en,fr). Supported languages are defined in ISO639-1
};
apiInstance.uploadAttachment(file, documentId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| the filedata to upload | 
 **documentId** | **Number**| the document this attachment belongs to | 
 **contentAuthor** | **String**| the file authors name | [optional] 
 **contentVersion** | **String**| The version can be set as float | [optional] 
 **contentDate** | **String**| last edit date of the file. Datetime must be in format YYYY-MM-DD or YYYY-MM-DDThh:mm:ss | [optional] 
 **remarks** | **String**| remarks on the attachment | [optional] 
 **languages** | **String**| the files content languages. Send as comma separated list with alpha2 language codes (eg. de,en,fr). Supported languages are defined in ISO639-1 | [optional] 

### Return type

[**AttachmentResponse**](AttachmentResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

