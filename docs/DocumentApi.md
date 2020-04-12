# NetilionApiDocumentation.DocumentApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCategoriesToDocument**](DocumentApi.md#addCategoriesToDocument) | **POST** /documents/{document_id}/categories | Add categories to a document
[**createDocument**](DocumentApi.md#createDocument) | **POST** /documents | Create a new document
[**deleteDocument**](DocumentApi.md#deleteDocument) | **DELETE** /documents/{id} | Delete a document
[**downloadDocument**](DocumentApi.md#downloadDocument) | **GET** /documents/{id}/download | Download multiple attachments of a document
[**getAssetsOfDocument**](DocumentApi.md#getAssetsOfDocument) | **GET** /documents/{document_id}/assets | Get all assets of one document
[**getAttachmentsOfDocument**](DocumentApi.md#getAttachmentsOfDocument) | **GET** /documents/{document_id}/attachments | Get all attachments of one document
[**getBillOfMaterialsOfDocument**](DocumentApi.md#getBillOfMaterialsOfDocument) | **GET** /documents/{document_id}/bill_of_materials | Get all bill of materials of one document
[**getCategoriesOfDocument**](DocumentApi.md#getCategoriesOfDocument) | **GET** /documents/{document_id}/categories | Get all categories of one document
[**getCategoriesOptionsOfDocument**](DocumentApi.md#getCategoriesOptionsOfDocument) | **GET** /documents/{document_id}/categories-options | Get all possible categories for the specified document
[**getDeliveriesOfDocument**](DocumentApi.md#getDeliveriesOfDocument) | **GET** /documents/{document_id}/deliveries | Get all deliveries of one document
[**getDocumentById**](DocumentApi.md#getDocumentById) | **GET** /documents/{id} | Get a single document
[**getDocumentClassificationsOptions**](DocumentApi.md#getDocumentClassificationsOptions) | **GET** /documents/{document_id}/classification-options | Get all possible classifications for the specified document
[**getDocumentIdClassification**](DocumentApi.md#getDocumentIdClassification) | **GET** /documents/{document_id}/classification | Get the classification of a specific document
[**getDocumentIdStatus**](DocumentApi.md#getDocumentIdStatus) | **GET** /documents/{document_id}/status | Get the status of a specific document
[**getDocumentStatusesOptions**](DocumentApi.md#getDocumentStatusesOptions) | **GET** /documents/{document_id}/status-options | Get all possible statuses for the specified document
[**getDocuments**](DocumentApi.md#getDocuments) | **GET** /documents | Get a range of documents
[**getEventsOfDocument**](DocumentApi.md#getEventsOfDocument) | **GET** /documents/{document_id}/events | Get all events of one document
[**getInstrumentationsOfDocument**](DocumentApi.md#getInstrumentationsOfDocument) | **GET** /documents/{document_id}/instrumentations | Get all instrumentations of one document
[**getNodesOfDocument**](DocumentApi.md#getNodesOfDocument) | **GET** /documents/{document_id}/nodes | Get all nodes of one document
[**getProductsOfDocument**](DocumentApi.md#getProductsOfDocument) | **GET** /documents/{document_id}/products | Get all products of one document
[**getPurchaseOrdersOfDocument**](DocumentApi.md#getPurchaseOrdersOfDocument) | **GET** /documents/{document_id}/purchase_orders | Get all purchase orders of one document
[**getQuotationsOfDocument**](DocumentApi.md#getQuotationsOfDocument) | **GET** /documents/{document_id}/quotations | Get all quotations of one document
[**getRequestForQuotationsOfDocument**](DocumentApi.md#getRequestForQuotationsOfDocument) | **GET** /documents/{document_id}/request_for_quotations | Get all request for quotations of one document
[**removeCategoriesFromDocument**](DocumentApi.md#removeCategoriesFromDocument) | **DELETE** /documents/{document_id}/categories | Remove categories from a document
[**replaceCategoriesOfDocument**](DocumentApi.md#replaceCategoriesOfDocument) | **PATCH** /documents/{document_id}/categories | Replace the categories of a document
[**updateDocument**](DocumentApi.md#updateDocument) | **PATCH** /documents/{id} | Update a document

<a name="addCategoriesToDocument"></a>
# **addCategoriesToDocument**
> addCategoriesToDocument(bodydocumentId)

Add categories to a document

Add one or more categories to a document.

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

let apiInstance = new NetilionApiDocumentation.DocumentApi();
let body = new NetilionApiDocumentation.CategoryIDs(); // CategoryIDs | Resources that shall be added.
let documentId = 789; // Number | Id of the document to which the categories will be added

apiInstance.addCategoriesToDocument(bodydocumentId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CategoryIDs**](CategoryIDs.md)| Resources that shall be added. | 
 **documentId** | **Number**| Id of the document to which the categories will be added | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createDocument"></a>
# **createDocument**
> DocumentResponse createDocument(body)

Create a new document

Create a new document. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. POST sets values in default language: en.

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

let apiInstance = new NetilionApiDocumentation.DocumentApi();
let body = new NetilionApiDocumentation.DocumentRequest(); // DocumentRequest | Object body that will be created.

apiInstance.createDocument(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DocumentRequest**](DocumentRequest.md)| Object body that will be created. | 

### Return type

[**DocumentResponse**](DocumentResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDocument"></a>
# **deleteDocument**
> deleteDocument(id)

Delete a document

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

let apiInstance = new NetilionApiDocumentation.DocumentApi();
let id = 789; // Number | Id of the document to delete

apiInstance.deleteDocument(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the document to delete | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="downloadDocument"></a>
# **downloadDocument**
> downloadDocument(id, opts)

Download multiple attachments of a document

Download attached files of a document. If there are multiple attachments the files will be zipped. If number of attachments exceeds 25, only the first 25 attachments will be zipped. Links will be ignored. Content-Transfer-Encoding header is set to binary

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

let apiInstance = new NetilionApiDocumentation.DocumentApi();
let id = 789; // Number | Id of the document to fetch
let opts = { 
  'attachmentId': "attachmentId_example" // String | One or multiple ids (comma list), maximum length is 25. Expected id format is integer
};
apiInstance.downloadDocument(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the document to fetch | 
 **attachmentId** | **String**| One or multiple ids (comma list), maximum length is 25. Expected id format is integer | [optional] 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAssetsOfDocument"></a>
# **getAssetsOfDocument**
> AssetsResponse getAssetsOfDocument(documentId, opts)

Get all assets of one document

Returns a list of all assets that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.  Possible include values: &#x60;&#x60;&#x60;status, tenant, parent, pictures, product, product.manufacturer, product.pictures, product.status, product.categories, product.categories.parent, specifications, specifications[key1,key2], product.tenant,                             product.manufacturer.tenant, status.tenant, instrumentations &#x60;&#x60;&#x60;

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

let apiInstance = new NetilionApiDocumentation.DocumentApi();
let documentId = 789; // Number | The resource defined in the URL
let opts = { 
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
apiInstance.getAssetsOfDocument(documentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **Number**| The resource defined in the URL | 
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

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAttachmentsOfDocument"></a>
# **getAttachmentsOfDocument**
> AttachmentsResponse getAttachmentsOfDocument(documentId, opts)

Get all attachments of one document

Returns a list of all attachments that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.

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

let apiInstance = new NetilionApiDocumentation.DocumentApi();
let documentId = 789; // Number | The resource defined in the URL
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'contentAuthor': "contentAuthor_example", // String | Filter accepts `*` as wildcard
  'contentVersion': "contentVersion_example", // String | Filter accepts `*` as wildcard
  'remarks': "remarks_example", // String | Filter accepts `*` as wildcard
  'contentDate': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD or YYYY-MM-DDThh:mm:ss
  'contentDateFrom': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD or YYYY-MM-DDThh:mm:ss
  'contentDateTo': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD or YYYY-MM-DDThh:mm:ss
  'fileName': "fileName_example", // String | Filter accepts `*` as wildcard
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getAttachmentsOfDocument(documentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **Number**| The resource defined in the URL | 
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

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBillOfMaterialsOfDocument"></a>
# **getBillOfMaterialsOfDocument**
> BillOfMaterialsResponse getBillOfMaterialsOfDocument(documentId, opts)

Get all bill of materials of one document

Returns a list of all bill of materials that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.

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

let apiInstance = new NetilionApiDocumentation.DocumentApi();
let documentId = 789; // Number | The resource defined in the URL
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'author': "author_example", // String | Filter accepts `*` as wildcard
  '_date': "_date_example", // String | Expected date format is YYYY-MM-DD
  'dateFrom': "dateFrom_example", // String | Expected date format is YYYY-MM-DD
  'dateTo': "dateTo_example", // String | Expected date format is YYYY-MM-DD
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getBillOfMaterialsOfDocument(documentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **author** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **_date** | **String**| Expected date format is YYYY-MM-DD | [optional] 
 **dateFrom** | **String**| Expected date format is YYYY-MM-DD | [optional] 
 **dateTo** | **String**| Expected date format is YYYY-MM-DD | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**BillOfMaterialsResponse**](BillOfMaterialsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCategoriesOfDocument"></a>
# **getCategoriesOfDocument**
> DocumentCategoriesResponse getCategoriesOfDocument(documentId, opts)

Get all categories of one document

Returns a list of all categories that are available in your scope. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language. Possible include values: &#x60;&#x60;&#x60;status, tenant, classification, categories, categories.parent, attachments&#x60;&#x60;&#x60;

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

let apiInstance = new NetilionApiDocumentation.DocumentApi();
let documentId = 789; // Number | The resource defined in the URL
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'code': "code_example", // String | Filter accepts `*` as wildcard
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'parentId': "parentId_example", // String | One or multiple ids (comma list). \"null\" to retrieve all objects without parent, \"!null\" for all objects with parent.
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'orderBy': "orderBy_example", // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getCategoriesOfDocument(documentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **code** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **parentId** | **String**| One or multiple ids (comma list). \&quot;null\&quot; to retrieve all objects without parent, \&quot;!null\&quot; for all objects with parent. | [optional] 
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**DocumentCategoriesResponse**](DocumentCategoriesResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCategoriesOptionsOfDocument"></a>
# **getCategoriesOptionsOfDocument**
> DocumentCategoriesResponse getCategoriesOptionsOfDocument(documentId, opts)

Get all possible categories for the specified document

Returns a list of all possible categories for the specific document. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.

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

let apiInstance = new NetilionApiDocumentation.DocumentApi();
let documentId = 789; // Number | The resource defined in the URL
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'code': "code_example", // String | Filter accepts `*` as wildcard
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'parentId': "parentId_example", // String | One or multiple ids (comma list). \"null\" to retrieve all objects without parent, \"!null\" for all objects with parent.
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'orderBy': "orderBy_example", // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getCategoriesOptionsOfDocument(documentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **code** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **parentId** | **String**| One or multiple ids (comma list). \&quot;null\&quot; to retrieve all objects without parent, \&quot;!null\&quot; for all objects with parent. | [optional] 
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**DocumentCategoriesResponse**](DocumentCategoriesResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeliveriesOfDocument"></a>
# **getDeliveriesOfDocument**
> DeliveriesResponse getDeliveriesOfDocument(documentId, opts)

Get all deliveries of one document

Returns a list of all deliveries that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.

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

let apiInstance = new NetilionApiDocumentation.DocumentApi();
let documentId = 789; // Number | The resource defined in the URL
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  '_number': "_number_example", // String | Filter accepts `*` as wildcard
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'statusId': "statusId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'dateOfShipment': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'dateOfShipmentFrom': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'dateOfShipmentTo': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'senderId': "senderId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'receiverId': "receiverId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getDeliveriesOfDocument(documentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **_number** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **statusId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **dateOfShipment** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **dateOfShipmentFrom** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **dateOfShipmentTo** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **senderId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **receiverId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**DeliveriesResponse**](DeliveriesResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDocumentById"></a>
# **getDocumentById**
> DocumentResponse getDocumentById(id, opts)

Get a single document

Get a specific document identified by the id in the URL. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language. Possible include values: &#x60;&#x60;&#x60;status, tenant, classification, categories, categories.parent, attachments&#x60;&#x60;&#x60;

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

let apiInstance = new NetilionApiDocumentation.DocumentApi();
let id = 789; // Number | Id of the document to fetch
let opts = { 
  'include': "include_example", // String | Comma separated list of objects to include in response
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getDocumentById(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the document to fetch | 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**DocumentResponse**](DocumentResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDocumentClassificationsOptions"></a>
# **getDocumentClassificationsOptions**
> Object getDocumentClassificationsOptions(documentId, opts)

Get all possible classifications for the specified document

Returns a list of all possible document classifications for the specified document. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.

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

let apiInstance = new NetilionApiDocumentation.DocumentApi();
let documentId = 789; // Number | Id of the specified document
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'code': "code_example", // String | Filter accepts `*` as wildcard
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'orderBy': "orderBy_example", // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getDocumentClassificationsOptions(documentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **Number**| Id of the specified document | 
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

<a name="getDocumentIdClassification"></a>
# **getDocumentIdClassification**
> DocumentClassificationResponse getDocumentIdClassification(documentId, opts)

Get the classification of a specific document

Returns the classification of the document. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.

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

let apiInstance = new NetilionApiDocumentation.DocumentApi();
let documentId = 789; // Number | Id of the specified document
let opts = { 
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getDocumentIdClassification(documentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **Number**| Id of the specified document | 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**DocumentClassificationResponse**](DocumentClassificationResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDocumentIdStatus"></a>
# **getDocumentIdStatus**
> DocumentStatusResponse getDocumentIdStatus(documentId, opts)

Get the status of a specific document

Returns the status of the document. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.

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

let apiInstance = new NetilionApiDocumentation.DocumentApi();
let documentId = 789; // Number | Id of the specified document
let opts = { 
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getDocumentIdStatus(documentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **Number**| Id of the specified document | 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**DocumentStatusResponse**](DocumentStatusResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDocumentStatusesOptions"></a>
# **getDocumentStatusesOptions**
> Object getDocumentStatusesOptions(documentId, opts)

Get all possible statuses for the specified document

Returns a list of all possible document statuses for the specified document. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.

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

let apiInstance = new NetilionApiDocumentation.DocumentApi();
let documentId = 789; // Number | Id of the specified document
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'code': "code_example", // String | Filter accepts `*` as wildcard
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'orderBy': "orderBy_example", // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getDocumentStatusesOptions(documentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **Number**| Id of the specified document | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 
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

<a name="getDocuments"></a>
# **getDocuments**
> DocumentsResponse getDocuments(opts)

Get a range of documents

Returns a list of documents. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language. Possible include values: &#x60;&#x60;&#x60;status, tenant, classification, categories, categories.parent, attachments&#x60;&#x60;&#x60;

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

let apiInstance = new NetilionApiDocumentation.DocumentApi();
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'statusId': "statusId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'classificationId': "classificationId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'documentVersion': "documentVersion_example", // String | Filter accepts `*` as wildcard
  '_number': "_number_example", // String | Filter accepts `*` as wildcard
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'categoryId': "categoryId_example", // String | One or multiple ids (comma list). By adding `+` after the id, the filter considers the given category and all its children (e.g. 3+).
  'validFrom': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'validUntil': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'validAt': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD or YYYY-MM or YYYY
  'orderBy': "orderBy_example", // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getDocuments(opts).then((data) => {
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
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **statusId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **classificationId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **documentVersion** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **_number** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **categoryId** | **String**| One or multiple ids (comma list). By adding &#x60;+&#x60; after the id, the filter considers the given category and all its children (e.g. 3+). | [optional] 
 **validFrom** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **validUntil** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **validAt** | **Date**| Expected date format is YYYY-MM-DD or YYYY-MM or YYYY | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**DocumentsResponse**](DocumentsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEventsOfDocument"></a>
# **getEventsOfDocument**
> EventsResponse getEventsOfDocument(documentId, opts)

Get all events of one document

Returns a list of all events that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.

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

let apiInstance = new NetilionApiDocumentation.DocumentApi();
let documentId = 789; // Number | The resource defined in the URL
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'typeId': "typeId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'statusId': "statusId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'startDatetime': "startDatetime_example", // String | Expected date format is YYYY-MM-DDThh:mm:ss
  'startDatetimeFrom': "startDatetimeFrom_example", // String | Expected date format is YYYY-MM-DDThh:mm:ss
  'startDatetimeTo': "startDatetimeTo_example", // String | Expected date format is YYYY-MM-DDThh:mm:ss
  'endDatetime': "endDatetime_example", // String | Expected date format is YYYY-MM-DDThh:mm:ss
  'endDatetimeFrom': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DDThh:mm:ss
  'endDatetimeTo': "endDatetimeTo_example", // String | Expected date format is YYYY-MM-DDThh:mm:ss
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getEventsOfDocument(documentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **typeId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **statusId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **startDatetime** | **String**| Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **startDatetimeFrom** | **String**| Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **startDatetimeTo** | **String**| Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **endDatetime** | **String**| Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **endDatetimeFrom** | **Date**| Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **endDatetimeTo** | **String**| Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**EventsResponse**](EventsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInstrumentationsOfDocument"></a>
# **getInstrumentationsOfDocument**
> InstrumentationsResponse getInstrumentationsOfDocument(documentId, opts)

Get all instrumentations of one document

Returns a list of all instrumentations that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.  Possible include values: &#x60;&#x60;&#x60;specifications, specifications[key1,key2], pictures, tenant, parent, status, type&#x60;&#x60;&#x60;

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

let apiInstance = new NetilionApiDocumentation.DocumentApi();
let documentId = 789; // Number | The resource defined in the URL
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'tag': "tag_example", // String | Filter accepts `*` as wildcard
  'statusId': "statusId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'typeId': "typeId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'parentId': "parentId_example", // String | One or multiple ids (comma list). \"null\" to retrieve all objects without parent, \"!null\" for all objects with parent.
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'specificationsKey': "specificationsKey_example", // String | Filter accepts `*` as wildcard (if used as single specifications filter), supports comma list of keys in connection with specifications_value filter
  'specificationsValue': "specificationsValue_example", // String | Filter accepts `*` as wildcard, supports comma list of values in connection with specifications_key filter. Does not work for vectors
  'criticality': "criticality_example", // String | Filter accepts undefined, low, medium or high
  'accessibility': "accessibility_example", // String | Filter accepts undefined, easy, moderate or difficult
  'assetStatusId': "assetStatusId_example", // String | One or multiple ids (comma list). Expected id format is integer. This retrieves all Instrumentations where at least one of its assets has one of the given statuses.
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `tag`, `created_at` or `updated_at`, add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getInstrumentationsOfDocument(documentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 
 **tag** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **statusId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **typeId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **parentId** | **String**| One or multiple ids (comma list). \&quot;null\&quot; to retrieve all objects without parent, \&quot;!null\&quot; for all objects with parent. | [optional] 
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **specificationsKey** | **String**| Filter accepts &#x60;*&#x60; as wildcard (if used as single specifications filter), supports comma list of keys in connection with specifications_value filter | [optional] 
 **specificationsValue** | **String**| Filter accepts &#x60;*&#x60; as wildcard, supports comma list of values in connection with specifications_key filter. Does not work for vectors | [optional] 
 **criticality** | **String**| Filter accepts undefined, low, medium or high | [optional] 
 **accessibility** | **String**| Filter accepts undefined, easy, moderate or difficult | [optional] 
 **assetStatusId** | **String**| One or multiple ids (comma list). Expected id format is integer. This retrieves all Instrumentations where at least one of its assets has one of the given statuses. | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;tag&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;, add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**InstrumentationsResponse**](InstrumentationsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNodesOfDocument"></a>
# **getNodesOfDocument**
> NodesResponse getNodesOfDocument(documentId, opts)

Get all nodes of one document

Returns a list of all nodes that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.

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

let apiInstance = new NetilionApiDocumentation.DocumentApi();
let documentId = 789; // Number | The resource defined in the URL
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'typeId': "typeId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'parentId': "parentId_example", // String | One or multiple ids (comma list). \"null\" to retrieve all objects without parent, \"!null\" for all objects with parent.
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'hidden': true, // Boolean | Filter accepts true or false
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `name`, `created_at` or `updated_at`, add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getNodesOfDocument(documentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **typeId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **parentId** | **String**| One or multiple ids (comma list). \&quot;null\&quot; to retrieve all objects without parent, \&quot;!null\&quot; for all objects with parent. | [optional] 
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **hidden** | **Boolean**| Filter accepts true or false | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;name&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;, add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**NodesResponse**](NodesResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProductsOfDocument"></a>
# **getProductsOfDocument**
> ProductsResponse getProductsOfDocument(documentId, opts)

Get all products of one document

Returns a list of all products that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.

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

let apiInstance = new NetilionApiDocumentation.DocumentApi();
let documentId = 789; // Number | The resource defined in the URL
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'productCode': "productCode_example", // String | Filter accepts `*` as wildcard
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'manufacturerId': "manufacturerId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'statusId': "statusId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'parentId': "parentId_example", // String | One or multiple ids (comma list). \"null\" to retrieve all objects without parent, \"!null\" for all objects with parent.
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'categoryId': "categoryId_example", // String | One or multiple ids (comma list). By adding `+` after the id, the filter considers the given category and all its children (e.g. 3+).
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getProductsOfDocument(documentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **productCode** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **manufacturerId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **statusId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **parentId** | **String**| One or multiple ids (comma list). \&quot;null\&quot; to retrieve all objects without parent, \&quot;!null\&quot; for all objects with parent. | [optional] 
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **categoryId** | **String**| One or multiple ids (comma list). By adding &#x60;+&#x60; after the id, the filter considers the given category and all its children (e.g. 3+). | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**ProductsResponse**](ProductsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPurchaseOrdersOfDocument"></a>
# **getPurchaseOrdersOfDocument**
> PurchaseOrdersResponse getPurchaseOrdersOfDocument(documentId, opts)

Get all purchase orders of one document

Returns a list of all purchase orders that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.

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

let apiInstance = new NetilionApiDocumentation.DocumentApi();
let documentId = 789; // Number | The resource defined in the URL
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'name': "name_example", // String | Filter accepts `*` as wildcard
  '_number': "_number_example", // String | Filter accepts `*` as wildcard
  'statusId': "statusId_example", // String | One or multiple ids (comma list). Expected id format is integer
  '_date': "_date_example", // String | Expected date format is YYYY-MM-DD
  'dateFrom': "dateFrom_example", // String | Expected date format is YYYY-MM-DD
  'dateTo': "dateTo_example", // String | Expected date format is YYYY-MM-DD
  'senderId': "senderId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'receiverId': "receiverId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'quotationId': "quotationId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getPurchaseOrdersOfDocument(documentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **_number** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **statusId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **_date** | **String**| Expected date format is YYYY-MM-DD | [optional] 
 **dateFrom** | **String**| Expected date format is YYYY-MM-DD | [optional] 
 **dateTo** | **String**| Expected date format is YYYY-MM-DD | [optional] 
 **senderId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **receiverId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **quotationId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**PurchaseOrdersResponse**](PurchaseOrdersResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getQuotationsOfDocument"></a>
# **getQuotationsOfDocument**
> QuotationsResponse getQuotationsOfDocument(documentId, opts)

Get all quotations of one document

Returns a list of all quotations that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.

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

let apiInstance = new NetilionApiDocumentation.DocumentApi();
let documentId = 789; // Number | The resource defined in the URL
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'name': "name_example", // String | Filter accepts `*` as wildcard
  '_number': "_number_example", // String | Filter accepts `*` as wildcard
  'statusId': "statusId_example", // String | One or multiple ids (comma list). Expected id format is integer
  '_date': "_date_example", // String | Expected date format is YYYY-MM-DD
  'dateFrom': "dateFrom_example", // String | Expected date format is YYYY-MM-DD
  'dateTo': "dateTo_example", // String | Expected date format is YYYY-MM-DD
  'senderId': "senderId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'receiverId': "receiverId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'requestForQuotationId': "requestForQuotationId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getQuotationsOfDocument(documentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **_number** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **statusId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **_date** | **String**| Expected date format is YYYY-MM-DD | [optional] 
 **dateFrom** | **String**| Expected date format is YYYY-MM-DD | [optional] 
 **dateTo** | **String**| Expected date format is YYYY-MM-DD | [optional] 
 **senderId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **receiverId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **requestForQuotationId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**QuotationsResponse**](QuotationsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRequestForQuotationsOfDocument"></a>
# **getRequestForQuotationsOfDocument**
> RequestForQuotationsResponse getRequestForQuotationsOfDocument(documentId, opts)

Get all request for quotations of one document

Returns a list of all request for quotations that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.

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

let apiInstance = new NetilionApiDocumentation.DocumentApi();
let documentId = 789; // Number | The resource defined in the URL
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'name': "name_example", // String | Filter accepts `*` as wildcard
  '_number': "_number_example", // String | Filter accepts `*` as wildcard
  'statusId': "statusId_example", // String | One or multiple ids (comma list). Expected id format is integer
  '_date': "_date_example", // String | Expected date format is YYYY-MM-DD
  'dateFrom': "dateFrom_example", // String | Expected date format is YYYY-MM-DD
  'dateTo': "dateTo_example", // String | Expected date format is YYYY-MM-DD
  'senderId': "senderId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'receiverId': "receiverId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'author': "author_example", // String | Filter accepts `*` as wildcard
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getRequestForQuotationsOfDocument(documentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **_number** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **statusId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **_date** | **String**| Expected date format is YYYY-MM-DD | [optional] 
 **dateFrom** | **String**| Expected date format is YYYY-MM-DD | [optional] 
 **dateTo** | **String**| Expected date format is YYYY-MM-DD | [optional] 
 **senderId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **receiverId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **author** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**RequestForQuotationsResponse**](RequestForQuotationsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="removeCategoriesFromDocument"></a>
# **removeCategoriesFromDocument**
> removeCategoriesFromDocument(bodydocumentId)

Remove categories from a document

Remove one or more categories from a document.

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

let apiInstance = new NetilionApiDocumentation.DocumentApi();
let body = new NetilionApiDocumentation.CategoryIDs(); // CategoryIDs | Resources that shall be removed.
let documentId = 789; // Number | Id of the document from which the categories will be removed

apiInstance.removeCategoriesFromDocument(bodydocumentId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CategoryIDs**](CategoryIDs.md)| Resources that shall be removed. | 
 **documentId** | **Number**| Id of the document from which the categories will be removed | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceCategoriesOfDocument"></a>
# **replaceCategoriesOfDocument**
> replaceCategoriesOfDocument(bodydocumentId)

Replace the categories of a document

Replaces all categories belonging to a document. You can send a list of resoucres that will replace all previous values.

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

let apiInstance = new NetilionApiDocumentation.DocumentApi();
let body = new NetilionApiDocumentation.CategoryIDs(); // CategoryIDs | Resources that shall be replaced
let documentId = 789; // Number | Id of the document of which the categories will be replaced

apiInstance.replaceCategoriesOfDocument(bodydocumentId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CategoryIDs**](CategoryIDs.md)| Resources that shall be replaced | 
 **documentId** | **Number**| Id of the document of which the categories will be replaced | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDocument"></a>
# **updateDocument**
> updateDocument(bodyid, opts)

Update a document

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

let apiInstance = new NetilionApiDocumentation.DocumentApi();
let body = new NetilionApiDocumentation.DocumentRequest(); // DocumentRequest | Parameters that shall be updated.
let id = 789; // Number | Id of the document to update
let opts = { 
  'contentLanguage': "contentLanguage_example" // String | language of the content
};
apiInstance.updateDocument(bodyid, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DocumentRequest**](DocumentRequest.md)| Parameters that shall be updated. | 
 **id** | **Number**| Id of the document to update | 
 **contentLanguage** | **String**| language of the content | [optional] 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

