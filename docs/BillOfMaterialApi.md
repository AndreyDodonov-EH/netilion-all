# NetilionApiDocumentation.BillOfMaterialApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDocumentsToBillOfMaterial**](BillOfMaterialApi.md#addDocumentsToBillOfMaterial) | **POST** /bill_of_materials/{bill_of_material_id}/documents | Add documents to a bill of material
[**addInstrumentationsToBillOfMaterial**](BillOfMaterialApi.md#addInstrumentationsToBillOfMaterial) | **POST** /bill_of_materials/{bill_of_material_id}/instrumentations | Add instrumentations to a bill of material
[**addRequestForQuotationsToBillOfMaterial**](BillOfMaterialApi.md#addRequestForQuotationsToBillOfMaterial) | **POST** /bill_of_materials/{bill_of_material_id}/request_for_quotations | Add request for quotations to a bill of material
[**createBillOfMaterial**](BillOfMaterialApi.md#createBillOfMaterial) | **POST** /bill_of_materials | Create a new bill of material
[**deleteBillOfMaterial**](BillOfMaterialApi.md#deleteBillOfMaterial) | **DELETE** /bill_of_materials/{id} | Delete a bill of material
[**getBillOfMaterialById**](BillOfMaterialApi.md#getBillOfMaterialById) | **GET** /bill_of_materials/{id} | Get a single bill of material
[**getBillOfMaterials**](BillOfMaterialApi.md#getBillOfMaterials) | **GET** /bill_of_materials | Get a range of bill of materials
[**getDocumentsOfBillOfMaterial**](BillOfMaterialApi.md#getDocumentsOfBillOfMaterial) | **GET** /bill_of_materials/{bill_of_material_id}/documents | Get all documents of a bill of material
[**getInstrumentationsOfBillOfMaterial**](BillOfMaterialApi.md#getInstrumentationsOfBillOfMaterial) | **GET** /bill_of_materials/{bill_of_material_id}/instrumentations | Get all instrumentations of a bill of material
[**getRequestForQuotationsOfBillOfMaterial**](BillOfMaterialApi.md#getRequestForQuotationsOfBillOfMaterial) | **GET** /bill_of_materials/{bill_of_material_id}/request_for_quotations | Get all request for quotations of a bill of material
[**removeDocumentsFromBillOfMaterial**](BillOfMaterialApi.md#removeDocumentsFromBillOfMaterial) | **DELETE** /bill_of_materials/{bill_of_material_id}/documents | Remove documents from a bill of material
[**removeInstrumentationsFromBillOfMaterial**](BillOfMaterialApi.md#removeInstrumentationsFromBillOfMaterial) | **DELETE** /bill_of_materials/{bill_of_material_id}/instrumentations | Remove instrumentations from a bill of material
[**removeRequestForQuotationsOfBillOfMaterial**](BillOfMaterialApi.md#removeRequestForQuotationsOfBillOfMaterial) | **DELETE** /bill_of_materials/{bill_of_material_id}/request_for_quotations | Remove request for quotations from a bill of material
[**replaceDocumentsOfBillOfMaterial**](BillOfMaterialApi.md#replaceDocumentsOfBillOfMaterial) | **PATCH** /bill_of_materials/{bill_of_material_id}/documents | Replace the documents of a bill of material
[**replaceInstrumentationsOfBillOfMaterial**](BillOfMaterialApi.md#replaceInstrumentationsOfBillOfMaterial) | **PATCH** /bill_of_materials/{bill_of_material_id}/instrumentations | Replace the instrumentations of a bill of material
[**replaceRequestForQuotationsOfBillOfMaterial**](BillOfMaterialApi.md#replaceRequestForQuotationsOfBillOfMaterial) | **PATCH** /bill_of_materials/{bill_of_material_id}/request_for_quotations | Replace the request for quotations of a bill of material
[**updateBillOfMaterial**](BillOfMaterialApi.md#updateBillOfMaterial) | **PATCH** /bill_of_materials/{id} | Update a bill of material


<a name="addDocumentsToBillOfMaterial"></a>
# **addDocumentsToBillOfMaterial**
> addDocumentsToBillOfMaterial(billOfMaterialId, body)

Add documents to a bill of material

Add one or more documents to a bill of material.

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

var apiInstance = new NetilionApiDocumentation.BillOfMaterialApi();

var billOfMaterialId = 789; // Number | Id of the bill of material to which the documents will be added

var body = new NetilionApiDocumentation.DocumentIDs(); // DocumentIDs | Resources that shall be added.

apiInstance.addDocumentsToBillOfMaterial(billOfMaterialId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billOfMaterialId** | **Number**| Id of the bill of material to which the documents will be added | 
 **body** | [**DocumentIDs**](DocumentIDs.md)| Resources that shall be added. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addInstrumentationsToBillOfMaterial"></a>
# **addInstrumentationsToBillOfMaterial**
> addInstrumentationsToBillOfMaterial(billOfMaterialId, body)

Add instrumentations to a bill of material

Add one or more instrumentations to a bill of material.

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

var apiInstance = new NetilionApiDocumentation.BillOfMaterialApi();

var billOfMaterialId = 789; // Number | Id of the bill of material to which the instrumentations will be added

var body = new NetilionApiDocumentation.InstrumentationIDs(); // InstrumentationIDs | Resources that shall be added.

apiInstance.addInstrumentationsToBillOfMaterial(billOfMaterialId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billOfMaterialId** | **Number**| Id of the bill of material to which the instrumentations will be added | 
 **body** | [**InstrumentationIDs**](InstrumentationIDs.md)| Resources that shall be added. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addRequestForQuotationsToBillOfMaterial"></a>
# **addRequestForQuotationsToBillOfMaterial**
> addRequestForQuotationsToBillOfMaterial(billOfMaterialId, body)

Add request for quotations to a bill of material

Add one or more request for quotations to a bill of material.

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

var apiInstance = new NetilionApiDocumentation.BillOfMaterialApi();

var billOfMaterialId = 789; // Number | Id of the bill of material to which the request for quotations will be added

var body = new NetilionApiDocumentation.RequestForQuotationIDs(); // RequestForQuotationIDs | Resources that shall be added.

apiInstance.addRequestForQuotationsToBillOfMaterial(billOfMaterialId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billOfMaterialId** | **Number**| Id of the bill of material to which the request for quotations will be added | 
 **body** | [**RequestForQuotationIDs**](RequestForQuotationIDs.md)| Resources that shall be added. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createBillOfMaterial"></a>
# **createBillOfMaterial**
> BillOfMaterialResponse createBillOfMaterial(body)

Create a new bill of material

Create a new bill of material

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

var apiInstance = new NetilionApiDocumentation.BillOfMaterialApi();

var body = new NetilionApiDocumentation.BillOfMaterialRequest(); // BillOfMaterialRequest | Object body that will be created.

apiInstance.createBillOfMaterial(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BillOfMaterialRequest**](BillOfMaterialRequest.md)| Object body that will be created. | 

### Return type

[**BillOfMaterialResponse**](BillOfMaterialResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteBillOfMaterial"></a>
# **deleteBillOfMaterial**
> deleteBillOfMaterial(id)

Delete a bill of material

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

var apiInstance = new NetilionApiDocumentation.BillOfMaterialApi();

var id = 789; // Number | Id of the bill of material to delete

apiInstance.deleteBillOfMaterial(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the bill of material to delete | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBillOfMaterialById"></a>
# **getBillOfMaterialById**
> BillOfMaterialResponse getBillOfMaterialById(id)

Get a single bill of material

Get a specific bill of material identified by the id in the URL.

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

var apiInstance = new NetilionApiDocumentation.BillOfMaterialApi();

var id = 789; // Number | Id of the bill of material to fetch

apiInstance.getBillOfMaterialById(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the bill of material to fetch | 

### Return type

[**BillOfMaterialResponse**](BillOfMaterialResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBillOfMaterials"></a>
# **getBillOfMaterials**
> BillOfMaterialsResponse getBillOfMaterials(opts)

Get a range of bill of materials

Returns a list of bill of materials. If the query has no matches, the response is an empty list.

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

var apiInstance = new NetilionApiDocumentation.BillOfMaterialApi();

var opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'author': "author_example", // String | Filter accepts `*` as wildcard
  '_date': "_date_example", // String | Expected date format is YYYY-MM-DD
  'dateFrom': "dateFrom_example", // String | Expected date format is YYYY-MM-DD
  'dateTo': "dateTo_example", // String | Expected date format is YYYY-MM-DD
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getBillOfMaterials(opts).then(function(data) {
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentsOfBillOfMaterial"></a>
# **getDocumentsOfBillOfMaterial**
> DocumentsResponse getDocumentsOfBillOfMaterial(billOfMaterialId, opts)

Get all documents of a bill of material

Returns a list of documents. If the query has no matches, the response is an empty list.  Possible include values: &#x60;&#x60;&#x60;status, tenant, classification, categories, categories.parent, attachments&#x60;&#x60;&#x60;

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

var apiInstance = new NetilionApiDocumentation.BillOfMaterialApi();

var billOfMaterialId = 789; // Number | The resource defined in the URL

var opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'documentVersion': "documentVersion_example", // String | Filter accepts `*` as wildcard
  '_number': "_number_example", // String | Filter accepts `*` as wildcard
  'statusId': "statusId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'classificationId': "classificationId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'categoryId': "categoryId_example", // String | One or multiple ids (comma list). By adding `+` after the id, the filter considers the given category and all its children (e.g. 3+).
  'validFrom': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'validUntil': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'validAt': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD or YYYY-MM or YYYY
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getDocumentsOfBillOfMaterial(billOfMaterialId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billOfMaterialId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **documentVersion** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **_number** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **statusId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **classificationId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **categoryId** | **String**| One or multiple ids (comma list). By adding &#x60;+&#x60; after the id, the filter considers the given category and all its children (e.g. 3+). | [optional] 
 **validFrom** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **validUntil** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **validAt** | **Date**| Expected date format is YYYY-MM-DD or YYYY-MM or YYYY | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 
 **acceptLanguage** | **String**| The client&#39;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**DocumentsResponse**](DocumentsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInstrumentationsOfBillOfMaterial"></a>
# **getInstrumentationsOfBillOfMaterial**
> InstrumentationsResponse getInstrumentationsOfBillOfMaterial(billOfMaterialId, opts)

Get all instrumentations of a bill of material

Returns a list of all instrumentations that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.  Possible include values: &#x60;&#x60;&#x60;specifications, specifications[key1,key2], pictures, tenant, parent, status, type&#x60;&#x60;&#x60;

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

var apiInstance = new NetilionApiDocumentation.BillOfMaterialApi();

var billOfMaterialId = 789; // Number | The resource defined in the URL

var opts = { 
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
apiInstance.getInstrumentationsOfBillOfMaterial(billOfMaterialId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billOfMaterialId** | **Number**| The resource defined in the URL | 
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRequestForQuotationsOfBillOfMaterial"></a>
# **getRequestForQuotationsOfBillOfMaterial**
> RequestForQuotationsResponse getRequestForQuotationsOfBillOfMaterial(billOfMaterialId, opts)

Get all request for quotations of a bill of material

Returns a list of all request for quotations that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.

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

var apiInstance = new NetilionApiDocumentation.BillOfMaterialApi();

var billOfMaterialId = 789; // Number | The resource defined in the URL

var opts = { 
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
apiInstance.getRequestForQuotationsOfBillOfMaterial(billOfMaterialId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billOfMaterialId** | **Number**| The resource defined in the URL | 
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeDocumentsFromBillOfMaterial"></a>
# **removeDocumentsFromBillOfMaterial**
> removeDocumentsFromBillOfMaterial(billOfMaterialId, body)

Remove documents from a bill of material

Remove one or more documents from a bill of material.

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

var apiInstance = new NetilionApiDocumentation.BillOfMaterialApi();

var billOfMaterialId = 789; // Number | Id of the bill of material from which the documents will be removed

var body = new NetilionApiDocumentation.DocumentIDs(); // DocumentIDs | Resources that shall be removed.

apiInstance.removeDocumentsFromBillOfMaterial(billOfMaterialId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billOfMaterialId** | **Number**| Id of the bill of material from which the documents will be removed | 
 **body** | [**DocumentIDs**](DocumentIDs.md)| Resources that shall be removed. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeInstrumentationsFromBillOfMaterial"></a>
# **removeInstrumentationsFromBillOfMaterial**
> removeInstrumentationsFromBillOfMaterial(billOfMaterialId, body)

Remove instrumentations from a bill of material

Remove one or more instrumentations from a bill of material.

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

var apiInstance = new NetilionApiDocumentation.BillOfMaterialApi();

var billOfMaterialId = 789; // Number | Id of the bill of material from which the instrumentations will be removed

var body = new NetilionApiDocumentation.InstrumentationIDs(); // InstrumentationIDs | Resources that shall be removed.

apiInstance.removeInstrumentationsFromBillOfMaterial(billOfMaterialId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billOfMaterialId** | **Number**| Id of the bill of material from which the instrumentations will be removed | 
 **body** | [**InstrumentationIDs**](InstrumentationIDs.md)| Resources that shall be removed. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeRequestForQuotationsOfBillOfMaterial"></a>
# **removeRequestForQuotationsOfBillOfMaterial**
> removeRequestForQuotationsOfBillOfMaterial(billOfMaterialId, body)

Remove request for quotations from a bill of material

Remove one or more request for quotations from a bill of material.

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

var apiInstance = new NetilionApiDocumentation.BillOfMaterialApi();

var billOfMaterialId = 789; // Number | Id of the bill of material from which the request for quotations will be removed

var body = new NetilionApiDocumentation.RequestForQuotationIDs(); // RequestForQuotationIDs | Resources that shall be removed.

apiInstance.removeRequestForQuotationsOfBillOfMaterial(billOfMaterialId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billOfMaterialId** | **Number**| Id of the bill of material from which the request for quotations will be removed | 
 **body** | [**RequestForQuotationIDs**](RequestForQuotationIDs.md)| Resources that shall be removed. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceDocumentsOfBillOfMaterial"></a>
# **replaceDocumentsOfBillOfMaterial**
> replaceDocumentsOfBillOfMaterial(billOfMaterialId, body)

Replace the documents of a bill of material

Replaces all documents belonging to a bill of material. You can send a list of resources that will replace all previous values.

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

var apiInstance = new NetilionApiDocumentation.BillOfMaterialApi();

var billOfMaterialId = 789; // Number | Id of the bill of material of which the documents will be replaced

var body = new NetilionApiDocumentation.DocumentIDs(); // DocumentIDs | Resources that shall be replaced

apiInstance.replaceDocumentsOfBillOfMaterial(billOfMaterialId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billOfMaterialId** | **Number**| Id of the bill of material of which the documents will be replaced | 
 **body** | [**DocumentIDs**](DocumentIDs.md)| Resources that shall be replaced | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceInstrumentationsOfBillOfMaterial"></a>
# **replaceInstrumentationsOfBillOfMaterial**
> replaceInstrumentationsOfBillOfMaterial(billOfMaterialId, body)

Replace the instrumentations of a bill of material

Replaces all instrumentations belonging to a bill of material. You can send a list of resources that will replace all previous values.

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

var apiInstance = new NetilionApiDocumentation.BillOfMaterialApi();

var billOfMaterialId = 789; // Number | Id of the bill of material of which the instrumentations will be replaced

var body = new NetilionApiDocumentation.InstrumentationIDs(); // InstrumentationIDs | Resources that shall be replaced

apiInstance.replaceInstrumentationsOfBillOfMaterial(billOfMaterialId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billOfMaterialId** | **Number**| Id of the bill of material of which the instrumentations will be replaced | 
 **body** | [**InstrumentationIDs**](InstrumentationIDs.md)| Resources that shall be replaced | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceRequestForQuotationsOfBillOfMaterial"></a>
# **replaceRequestForQuotationsOfBillOfMaterial**
> replaceRequestForQuotationsOfBillOfMaterial(billOfMaterialId, body)

Replace the request for quotations of a bill of material

Replaces all request for quotations belonging to a bill of material. You can send a list of resources that will replace all previous values.

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

var apiInstance = new NetilionApiDocumentation.BillOfMaterialApi();

var billOfMaterialId = 789; // Number | Id of the bill of material of which the request for quotations will be replaced

var body = new NetilionApiDocumentation.RequestForQuotationIDs(); // RequestForQuotationIDs | Resources that shall be replaced

apiInstance.replaceRequestForQuotationsOfBillOfMaterial(billOfMaterialId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billOfMaterialId** | **Number**| Id of the bill of material of which the request for quotations will be replaced | 
 **body** | [**RequestForQuotationIDs**](RequestForQuotationIDs.md)| Resources that shall be replaced | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateBillOfMaterial"></a>
# **updateBillOfMaterial**
> updateBillOfMaterial(id, body)

Update a bill of material

Update accessible parameters of the requested resource.

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

var apiInstance = new NetilionApiDocumentation.BillOfMaterialApi();

var id = 789; // Number | Id of the bill of material to update

var body = new NetilionApiDocumentation.BillOfMaterialRequest(); // BillOfMaterialRequest | Parameters that shall be updated.

apiInstance.updateBillOfMaterial(id, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the bill of material to update | 
 **body** | [**BillOfMaterialRequest**](BillOfMaterialRequest.md)| Parameters that shall be updated. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

