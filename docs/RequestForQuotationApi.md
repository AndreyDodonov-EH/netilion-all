# NetilionApiDocumentation.RequestForQuotationApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addBillOfMaterialsToRequestForQuotation**](RequestForQuotationApi.md#addBillOfMaterialsToRequestForQuotation) | **POST** /request_for_quotations/{request_for_quotation_id}/bill_of_materials | Add bill of materials to a request for quotation
[**addDocumentsToRequestForQuotation**](RequestForQuotationApi.md#addDocumentsToRequestForQuotation) | **POST** /request_for_quotations/{request_for_quotation_id}/documents | Add documents to a request for quotation
[**addQuotationsToRequestForQuotation**](RequestForQuotationApi.md#addQuotationsToRequestForQuotation) | **POST** /request_for_quotations/{request_for_quotation_id}/quotations | Add quotations to a request for quotation
[**createRequestForQuotation**](RequestForQuotationApi.md#createRequestForQuotation) | **POST** /request_for_quotations | Create a new request for quotation
[**deleteBillOfMaterialsFromRequestForQuotation**](RequestForQuotationApi.md#deleteBillOfMaterialsFromRequestForQuotation) | **DELETE** /request_for_quotations/{request_for_quotation_id}/bill_of_materials | Remove bill of materials from a request for quotation
[**deleteDocumentsOfRequestForQuotation**](RequestForQuotationApi.md#deleteDocumentsOfRequestForQuotation) | **DELETE** /request_for_quotations/{request_for_quotation_id}/documents | Remove documents from a request for quotation
[**deleteQuotationsFromRequestForQuotation**](RequestForQuotationApi.md#deleteQuotationsFromRequestForQuotation) | **DELETE** /request_for_quotations/{request_for_quotation_id}/quotations | Remove quotations from a request for quotation
[**deleteRequestForQuotation**](RequestForQuotationApi.md#deleteRequestForQuotation) | **DELETE** /request_for_quotations/{id} | Delete a request for quotation
[**getBillOfMaterialsOfRequestForQuotation**](RequestForQuotationApi.md#getBillOfMaterialsOfRequestForQuotation) | **GET** /request_for_quotations/{request_for_quotation_id}/bill_of_materials | Get all bill of materials of one request for quotation
[**getDocumentsOfRequestForQuotation**](RequestForQuotationApi.md#getDocumentsOfRequestForQuotation) | **GET** /request_for_quotations/{request_for_quotation_id}/documents | Get all documents of one request for quotation
[**getQuotationsOfRequestForQuotation**](RequestForQuotationApi.md#getQuotationsOfRequestForQuotation) | **GET** /request_for_quotations/{request_for_quotation_id}/quotations | Get all quotations of one request for quotation
[**getRequestForQuotationById**](RequestForQuotationApi.md#getRequestForQuotationById) | **GET** /request_for_quotations/{id} | Get a single request for quotation
[**getRequestForQuotationIdStatus**](RequestForQuotationApi.md#getRequestForQuotationIdStatus) | **GET** /request_for_quotations/{request_for_quotation_id}/status | Get the status of the specific request for quotation
[**getRequestForQuotations**](RequestForQuotationApi.md#getRequestForQuotations) | **GET** /request_for_quotations | Get a range of request for quotations
[**replaceBillOfMaterialsOfRequestForQuotation**](RequestForQuotationApi.md#replaceBillOfMaterialsOfRequestForQuotation) | **PATCH** /request_for_quotations/{request_for_quotation_id}/bill_of_materials | Replace the bill of materials of a request for quotation
[**replaceDocumentsOfRequestForQuotation**](RequestForQuotationApi.md#replaceDocumentsOfRequestForQuotation) | **PATCH** /request_for_quotations/{request_for_quotation_id}/documents | Replace the documents of a request for quotation
[**replaceQuotationsOfRequestForQuotation**](RequestForQuotationApi.md#replaceQuotationsOfRequestForQuotation) | **PATCH** /request_for_quotations/{request_for_quotation_id}/quotations | Replace the quotations of a request for quotation
[**updateRequestForQuotation**](RequestForQuotationApi.md#updateRequestForQuotation) | **PATCH** /request_for_quotations/{id} | Update a request for quotation

<a name="addBillOfMaterialsToRequestForQuotation"></a>
# **addBillOfMaterialsToRequestForQuotation**
> addBillOfMaterialsToRequestForQuotation(bodyrequestForQuotationId)

Add bill of materials to a request for quotation

Add one or more bill of materials to a request for quotation.

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

let apiInstance = new NetilionApiDocumentation.RequestForQuotationApi();
let body = new NetilionApiDocumentation.BillOfMaterialIDs(); // BillOfMaterialIDs | Resources that shall be added.
let requestForQuotationId = 789; // Number | Id of the request for quotation to which the bill of materials will be added

apiInstance.addBillOfMaterialsToRequestForQuotation(bodyrequestForQuotationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BillOfMaterialIDs**](BillOfMaterialIDs.md)| Resources that shall be added. | 
 **requestForQuotationId** | **Number**| Id of the request for quotation to which the bill of materials will be added | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addDocumentsToRequestForQuotation"></a>
# **addDocumentsToRequestForQuotation**
> addDocumentsToRequestForQuotation(bodyrequestForQuotationId)

Add documents to a request for quotation

Add one or more documents to a request for quotation.

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

let apiInstance = new NetilionApiDocumentation.RequestForQuotationApi();
let body = new NetilionApiDocumentation.DocumentIDs(); // DocumentIDs | Resources that shall be added.
let requestForQuotationId = 789; // Number | Id of the request for quotation to which the documents will be added

apiInstance.addDocumentsToRequestForQuotation(bodyrequestForQuotationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DocumentIDs**](DocumentIDs.md)| Resources that shall be added. | 
 **requestForQuotationId** | **Number**| Id of the request for quotation to which the documents will be added | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addQuotationsToRequestForQuotation"></a>
# **addQuotationsToRequestForQuotation**
> addQuotationsToRequestForQuotation(bodyrequestForQuotationId)

Add quotations to a request for quotation

Add one or more quotations to a request for quotation.

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

let apiInstance = new NetilionApiDocumentation.RequestForQuotationApi();
let body = new NetilionApiDocumentation.QuotationIDs(); // QuotationIDs | Resources that shall be added.
let requestForQuotationId = 789; // Number | Id of the request for quotation to which the quotations will be added

apiInstance.addQuotationsToRequestForQuotation(bodyrequestForQuotationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**QuotationIDs**](QuotationIDs.md)| Resources that shall be added. | 
 **requestForQuotationId** | **Number**| Id of the request for quotation to which the quotations will be added | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRequestForQuotation"></a>
# **createRequestForQuotation**
> RequestForQuotationResponse createRequestForQuotation(body)

Create a new request for quotation

Create a new request for quotation.

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

let apiInstance = new NetilionApiDocumentation.RequestForQuotationApi();
let body = new NetilionApiDocumentation.RequestForQuotationRequest(); // RequestForQuotationRequest | Object body that will be created

apiInstance.createRequestForQuotation(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RequestForQuotationRequest**](RequestForQuotationRequest.md)| Object body that will be created | 

### Return type

[**RequestForQuotationResponse**](RequestForQuotationResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteBillOfMaterialsFromRequestForQuotation"></a>
# **deleteBillOfMaterialsFromRequestForQuotation**
> deleteBillOfMaterialsFromRequestForQuotation(bodyrequestForQuotationId)

Remove bill of materials from a request for quotation

Remove one or more bill of materials from a request for quotation.

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

let apiInstance = new NetilionApiDocumentation.RequestForQuotationApi();
let body = new NetilionApiDocumentation.BillOfMaterialIDs(); // BillOfMaterialIDs | Resources that shall be removed.
let requestForQuotationId = 789; // Number | Id of the request for quotation from which the bill of materials will be removed

apiInstance.deleteBillOfMaterialsFromRequestForQuotation(bodyrequestForQuotationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BillOfMaterialIDs**](BillOfMaterialIDs.md)| Resources that shall be removed. | 
 **requestForQuotationId** | **Number**| Id of the request for quotation from which the bill of materials will be removed | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDocumentsOfRequestForQuotation"></a>
# **deleteDocumentsOfRequestForQuotation**
> deleteDocumentsOfRequestForQuotation(bodyrequestForQuotationId)

Remove documents from a request for quotation

Remove one or more documents from a request for quotation.

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

let apiInstance = new NetilionApiDocumentation.RequestForQuotationApi();
let body = new NetilionApiDocumentation.DocumentIDs(); // DocumentIDs | Resources that shall be removed.
let requestForQuotationId = 789; // Number | Id of the request for quotation from which the documents will be removed

apiInstance.deleteDocumentsOfRequestForQuotation(bodyrequestForQuotationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DocumentIDs**](DocumentIDs.md)| Resources that shall be removed. | 
 **requestForQuotationId** | **Number**| Id of the request for quotation from which the documents will be removed | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteQuotationsFromRequestForQuotation"></a>
# **deleteQuotationsFromRequestForQuotation**
> deleteQuotationsFromRequestForQuotation(bodyrequestForQuotationId)

Remove quotations from a request for quotation

Remove one or more quotations from a request for quotation.

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

let apiInstance = new NetilionApiDocumentation.RequestForQuotationApi();
let body = new NetilionApiDocumentation.QuotationIDs(); // QuotationIDs | Resources that shall be removed.
let requestForQuotationId = 789; // Number | Id of the request for quotation from which the quotations will be removed

apiInstance.deleteQuotationsFromRequestForQuotation(bodyrequestForQuotationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**QuotationIDs**](QuotationIDs.md)| Resources that shall be removed. | 
 **requestForQuotationId** | **Number**| Id of the request for quotation from which the quotations will be removed | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRequestForQuotation"></a>
# **deleteRequestForQuotation**
> deleteRequestForQuotation(id)

Delete a request for quotation

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

let apiInstance = new NetilionApiDocumentation.RequestForQuotationApi();
let id = 789; // Number | Id of the request for quotation to delete

apiInstance.deleteRequestForQuotation(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the request for quotation to delete | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBillOfMaterialsOfRequestForQuotation"></a>
# **getBillOfMaterialsOfRequestForQuotation**
> BillOfMaterialsResponse getBillOfMaterialsOfRequestForQuotation(requestForQuotationId, opts)

Get all bill of materials of one request for quotation

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

let apiInstance = new NetilionApiDocumentation.RequestForQuotationApi();
let requestForQuotationId = 789; // Number | The resource defined in the URL
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
apiInstance.getBillOfMaterialsOfRequestForQuotation(requestForQuotationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestForQuotationId** | **Number**| The resource defined in the URL | 
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

<a name="getDocumentsOfRequestForQuotation"></a>
# **getDocumentsOfRequestForQuotation**
> DocumentsResponse getDocumentsOfRequestForQuotation(requestForQuotationId, opts)

Get all documents of one request for quotation

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

let apiInstance = new NetilionApiDocumentation.RequestForQuotationApi();
let requestForQuotationId = 789; // Number | The resource defined in the URL
let opts = { 
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
  'orderBy': "orderBy_example", // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getDocumentsOfRequestForQuotation(requestForQuotationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestForQuotationId** | **Number**| The resource defined in the URL | 
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
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**DocumentsResponse**](DocumentsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getQuotationsOfRequestForQuotation"></a>
# **getQuotationsOfRequestForQuotation**
> QuotationsResponse getQuotationsOfRequestForQuotation(requestForQuotationId, opts)

Get all quotations of one request for quotation

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

let apiInstance = new NetilionApiDocumentation.RequestForQuotationApi();
let requestForQuotationId = 789; // Number | The resource defined in the URL
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
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getQuotationsOfRequestForQuotation(requestForQuotationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestForQuotationId** | **Number**| The resource defined in the URL | 
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
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**QuotationsResponse**](QuotationsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRequestForQuotationById"></a>
# **getRequestForQuotationById**
> RequestForQuotationResponse getRequestForQuotationById(id)

Get a single request for quotation

Get a specific request for quotation identified by the id in the URL.

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

let apiInstance = new NetilionApiDocumentation.RequestForQuotationApi();
let id = 789; // Number | Id of the request for quotation to fetch

apiInstance.getRequestForQuotationById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the request for quotation to fetch | 

### Return type

[**RequestForQuotationResponse**](RequestForQuotationResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRequestForQuotationIdStatus"></a>
# **getRequestForQuotationIdStatus**
> RequestForQuotationStatusResponse getRequestForQuotationIdStatus(requestForQuotationId, opts)

Get the status of the specific request for quotation

Returns the status of the request for quotation. Needed if only permission on request for quotation but not on tenant. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language. Possible include value: &#x60;&#x60;&#x60;tenant&#x60;&#x60;&#x60;

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

let apiInstance = new NetilionApiDocumentation.RequestForQuotationApi();
let requestForQuotationId = 789; // Number | Id of the specified request for quotation
let opts = { 
  'include': "include_example", // String | Comma separated list of objects to include in response
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getRequestForQuotationIdStatus(requestForQuotationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestForQuotationId** | **Number**| Id of the specified request for quotation | 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**RequestForQuotationStatusResponse**](RequestForQuotationStatusResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRequestForQuotations"></a>
# **getRequestForQuotations**
> RequestForQuotationsResponse getRequestForQuotations(opts)

Get a range of request for quotations

Returns a list of request for quotations. If the query has no matches, the response is an empty list.

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

let apiInstance = new NetilionApiDocumentation.RequestForQuotationApi();
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
apiInstance.getRequestForQuotations(opts).then((data) => {
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

<a name="replaceBillOfMaterialsOfRequestForQuotation"></a>
# **replaceBillOfMaterialsOfRequestForQuotation**
> replaceBillOfMaterialsOfRequestForQuotation(bodyrequestForQuotationId)

Replace the bill of materials of a request for quotation

Replaces all bill of materials belonging to a request for quotation. You can send a list of resources that will replace all previous values.

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

let apiInstance = new NetilionApiDocumentation.RequestForQuotationApi();
let body = new NetilionApiDocumentation.BillOfMaterialIDs(); // BillOfMaterialIDs | Resources that shall be replaced
let requestForQuotationId = 789; // Number | Id of the request for quotation of which the bill of materials will be replaced

apiInstance.replaceBillOfMaterialsOfRequestForQuotation(bodyrequestForQuotationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BillOfMaterialIDs**](BillOfMaterialIDs.md)| Resources that shall be replaced | 
 **requestForQuotationId** | **Number**| Id of the request for quotation of which the bill of materials will be replaced | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceDocumentsOfRequestForQuotation"></a>
# **replaceDocumentsOfRequestForQuotation**
> replaceDocumentsOfRequestForQuotation(bodyrequestForQuotationId)

Replace the documents of a request for quotation

Replaces all documents belonging to a request for quotation. You can send a list of resources that will replace all previous values.

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

let apiInstance = new NetilionApiDocumentation.RequestForQuotationApi();
let body = new NetilionApiDocumentation.DocumentIDs(); // DocumentIDs | Resources that shall be replaced
let requestForQuotationId = 789; // Number | Id of the request for quotation of which the documents will be replaced

apiInstance.replaceDocumentsOfRequestForQuotation(bodyrequestForQuotationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DocumentIDs**](DocumentIDs.md)| Resources that shall be replaced | 
 **requestForQuotationId** | **Number**| Id of the request for quotation of which the documents will be replaced | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceQuotationsOfRequestForQuotation"></a>
# **replaceQuotationsOfRequestForQuotation**
> replaceQuotationsOfRequestForQuotation(bodyrequestForQuotationId)

Replace the quotations of a request for quotation

Replaces all quotations belonging to a request for quotation. You can send a list of resources that will replace all previous values.

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

let apiInstance = new NetilionApiDocumentation.RequestForQuotationApi();
let body = new NetilionApiDocumentation.QuotationIDs(); // QuotationIDs | Resources that shall be replaced
let requestForQuotationId = 789; // Number | Id of the request for quotation of which the quotations will be replaced

apiInstance.replaceQuotationsOfRequestForQuotation(bodyrequestForQuotationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**QuotationIDs**](QuotationIDs.md)| Resources that shall be replaced | 
 **requestForQuotationId** | **Number**| Id of the request for quotation of which the quotations will be replaced | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateRequestForQuotation"></a>
# **updateRequestForQuotation**
> updateRequestForQuotation(bodyid)

Update a request for quotation

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

let apiInstance = new NetilionApiDocumentation.RequestForQuotationApi();
let body = new NetilionApiDocumentation.RequestForQuotationRequest(); // RequestForQuotationRequest | Parameters that shall be updated.
let id = 789; // Number | Id of the request for quotation to update

apiInstance.updateRequestForQuotation(bodyid).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RequestForQuotationRequest**](RequestForQuotationRequest.md)| Parameters that shall be updated. | 
 **id** | **Number**| Id of the request for quotation to update | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

