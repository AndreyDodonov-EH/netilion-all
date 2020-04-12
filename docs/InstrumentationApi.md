# NetilionApiDocumentation.InstrumentationApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAssetsToInstrumentation**](InstrumentationApi.md#addAssetsToInstrumentation) | **POST** /instrumentations/{instrumentation_id}/assets | Add assets to an instrumentation
[**addBillOfMaterialsToInstrumentation**](InstrumentationApi.md#addBillOfMaterialsToInstrumentation) | **POST** /instrumentations/{instrumentation_id}/bill_of_materials | Add bill of materials to an instrumentation
[**addDocumentsToInstrumentation**](InstrumentationApi.md#addDocumentsToInstrumentation) | **POST** /instrumentations/{instrumentation_id}/documents | Add documents to an instrumentation
[**addInstrumentationPictureLink**](InstrumentationApi.md#addInstrumentationPictureLink) | **POST** /instrumentations/{id}/pictures/links | Add a link as instrumentation picture
[**addNodesToInstrumentation**](InstrumentationApi.md#addNodesToInstrumentation) | **POST** /instrumentations/{instrumentation_id}/nodes | Add nodes to an instrumentation
[**createEventForInstrumentation**](InstrumentationApi.md#createEventForInstrumentation) | **POST** /instrumentations/{instrumentation_id}/events | Create a new event for an instrumentation
[**createInstrumentation**](InstrumentationApi.md#createInstrumentation) | **POST** /instrumentations | Create a new instrumentation
[**createInstrumentationThreshold**](InstrumentationApi.md#createInstrumentationThreshold) | **POST** /instrumentations/{instrumentation_id}/thresholds | Create an instrumentation threshold
[**deleteInstrumentation**](InstrumentationApi.md#deleteInstrumentation) | **DELETE** /instrumentations/{id} | Delete an instrumentation
[**deleteInstrumentationPicture**](InstrumentationApi.md#deleteInstrumentationPicture) | **DELETE** /instrumentations/{instrumentation_id}/pictures/{id} | Delete an instrumentation picture
[**deleteInstrumentationThreshold**](InstrumentationApi.md#deleteInstrumentationThreshold) | **DELETE** /instrumentations/{instrumentation_id}/thresholds/{id} | Delete an instrumentation threshold
[**downloadInstrumentationPicture**](InstrumentationApi.md#downloadInstrumentationPicture) | **GET** /instrumentations/{instrumentation_id}/pictures/{id}/download | Download an instrumentation picture
[**getAssetsOfInstrumentation**](InstrumentationApi.md#getAssetsOfInstrumentation) | **GET** /instrumentations/{instrumentation_id}/assets | Get all assets of one instrumentation
[**getAssetsOfInstrumentationHistory**](InstrumentationApi.md#getAssetsOfInstrumentationHistory) | **GET** /instrumentations/{instrumentation_id}/assets/history | Get all assets an instrumentation was assigned to
[**getBillOfMaterialsOfInstrumentation**](InstrumentationApi.md#getBillOfMaterialsOfInstrumentation) | **GET** /instrumentations/{instrumentation_id}/bill_of_materials | Get all bill of materials of an instrumentation
[**getDocumentsOfInstrumentation**](InstrumentationApi.md#getDocumentsOfInstrumentation) | **GET** /instrumentations/{instrumentation_id}/documents | Get all documents of an instrumentation
[**getEventsOfInstrumentation**](InstrumentationApi.md#getEventsOfInstrumentation) | **GET** /instrumentations/{instrumentation_id}/events | Get all events of one instrumentation
[**getInstrumentationById**](InstrumentationApi.md#getInstrumentationById) | **GET** /instrumentations/{id} | Get a single instrumentation
[**getInstrumentationIdStatus**](InstrumentationApi.md#getInstrumentationIdStatus) | **GET** /instrumentations/{instrumentation_id}/status | Get the status of the specific instrumentation
[**getInstrumentationIdType**](InstrumentationApi.md#getInstrumentationIdType) | **GET** /instrumentations/{instrumentation_id}/type | Get the type of the specific instrumentation
[**getInstrumentationPicture**](InstrumentationApi.md#getInstrumentationPicture) | **GET** /instrumentations/{instrumentation_id}/pictures/{id} | Get an instrumentation picture
[**getInstrumentationPictures**](InstrumentationApi.md#getInstrumentationPictures) | **GET** /instrumentations/{id}/pictures | Get instrumentation pictures
[**getInstrumentationStatusesOptions**](InstrumentationApi.md#getInstrumentationStatusesOptions) | **GET** /instrumentations/{instrumentation_id}/status-options | Get all possible statuses of the specified instrumentation
[**getInstrumentationThreshold**](InstrumentationApi.md#getInstrumentationThreshold) | **GET** /instrumentations/{instrumentation_id}/thresholds/{id} | Get an instrumentation threshold
[**getInstrumentationThresholds**](InstrumentationApi.md#getInstrumentationThresholds) | **GET** /instrumentations/{instrumentation_id}/thresholds | Get instrumentation thresholds
[**getInstrumentationTypesOptions**](InstrumentationApi.md#getInstrumentationTypesOptions) | **GET** /instrumentations/{instrumentation_id}/type-options | Get all possible types of the specified instrumentation
[**getInstrumentations**](InstrumentationApi.md#getInstrumentations) | **GET** /instrumentations | Get a range of instrumentations
[**getNodesOfInstrumentation**](InstrumentationApi.md#getNodesOfInstrumentation) | **GET** /instrumentations/{instrumentation_id}/nodes | Get all nodes of one Instrumentation
[**getSpecificationHistoryOfInstrumentation**](InstrumentationApi.md#getSpecificationHistoryOfInstrumentation) | **GET** /instrumentations/{instrumentation_id}/specifications/{key}/history | Get the history of one specification attribute of an instrumentation.
[**getSpecificationsOfInstrumentation**](InstrumentationApi.md#getSpecificationsOfInstrumentation) | **GET** /instrumentations/{instrumentation_id}/specifications | Get specifications of an instrumentation
[**removeAssetsFromInstrumentation**](InstrumentationApi.md#removeAssetsFromInstrumentation) | **DELETE** /instrumentations/{instrumentation_id}/assets | Remove assets from an instrumentation
[**removeBillOfMaterialsFromInstrumentation**](InstrumentationApi.md#removeBillOfMaterialsFromInstrumentation) | **DELETE** /instrumentations/{instrumentation_id}/bill_of_materials | Remove bill of materials from an instrumentation
[**removeDocumentsFromInstrumentation**](InstrumentationApi.md#removeDocumentsFromInstrumentation) | **DELETE** /instrumentations/{instrumentation_id}/documents | Remove documents from an instrumentation
[**removeEventFromInstrumentation**](InstrumentationApi.md#removeEventFromInstrumentation) | **DELETE** /instrumentations/{instrumentation_id}/events | Remove events from an instrumentation
[**removeNodesFromInstrumentation**](InstrumentationApi.md#removeNodesFromInstrumentation) | **DELETE** /instrumentations/{instrumentation_id}/nodes | Remove nodes from an instrumentation
[**removeSpecificationsFromInstrumentation**](InstrumentationApi.md#removeSpecificationsFromInstrumentation) | **DELETE** /instrumentations/{instrumentation_id}/specifications | Delete specifications of an instrumentation
[**renameSpecificationsOfInstrumentation**](InstrumentationApi.md#renameSpecificationsOfInstrumentation) | **PATCH** /instrumentations/{instrumentation_id}/specifications/rename | Rename a specification key
[**replaceAssetsOfInstrumentation**](InstrumentationApi.md#replaceAssetsOfInstrumentation) | **PATCH** /instrumentations/{instrumentation_id}/assets | Replace the assets of an instrumentation
[**replaceBillOfMaterialsOfInstrumentation**](InstrumentationApi.md#replaceBillOfMaterialsOfInstrumentation) | **PATCH** /instrumentations/{instrumentation_id}/bill_of_materials | Replace the bill of materials of an instrumentation
[**replaceDocumentsOfInstrumentation**](InstrumentationApi.md#replaceDocumentsOfInstrumentation) | **PATCH** /instrumentations/{instrumentation_id}/documents | Replace the documents of an instrumentation
[**replaceNodesOfInstrumentation**](InstrumentationApi.md#replaceNodesOfInstrumentation) | **PATCH** /instrumentations/{instrumentation_id}/nodes | Replace the nodes of an instrumentation
[**updateInstrumentation**](InstrumentationApi.md#updateInstrumentation) | **PATCH** /instrumentations/{id} | Update an instrumentation
[**updateInstrumentationPicture**](InstrumentationApi.md#updateInstrumentationPicture) | **PATCH** /instrumentations/{instrumentation_id}/pictures/{id} | Update an instrumentation picture
[**updateInstrumentationPictureLink**](InstrumentationApi.md#updateInstrumentationPictureLink) | **PATCH** /instrumentations/{instrumentation_id}/pictures/links/{id} | Update an instrumentation picture link
[**updateInstrumentationThreshold**](InstrumentationApi.md#updateInstrumentationThreshold) | **PATCH** /instrumentations/{instrumentation_id}/thresholds/{id} | Update an instrumentation threshold
[**updateSpecificationsOfInstrumentation**](InstrumentationApi.md#updateSpecificationsOfInstrumentation) | **PATCH** /instrumentations/{instrumentation_id}/specifications | Update specifications of an instrumentation
[**uploadInstrumentationPicture**](InstrumentationApi.md#uploadInstrumentationPicture) | **POST** /instrumentations/{id}/pictures | Upload an instrumentation picture

<a name="addAssetsToInstrumentation"></a>
# **addAssetsToInstrumentation**
> addAssetsToInstrumentation(bodyinstrumentationId)

Add assets to an instrumentation

Add one or more assets to an instrumentation. This action requires &#x60;can_permit&#x60; permission on the instrumentation and on the asset.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let body = new NetilionApiDocumentation.AssetIDs(); // AssetIDs | Resources that shall be added.
let instrumentationId = 789; // Number | Id of the instrumentation to which the assets will be added

apiInstance.addAssetsToInstrumentation(bodyinstrumentationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetIDs**](AssetIDs.md)| Resources that shall be added. | 
 **instrumentationId** | **Number**| Id of the instrumentation to which the assets will be added | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addBillOfMaterialsToInstrumentation"></a>
# **addBillOfMaterialsToInstrumentation**
> addBillOfMaterialsToInstrumentation(bodyinstrumentationId)

Add bill of materials to an instrumentation

Add one or more bill of materials to an instrumentation.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let body = new NetilionApiDocumentation.BillOfMaterialIDs(); // BillOfMaterialIDs | Resources that shall be added.
let instrumentationId = 789; // Number | Id of the instrumentation to which the bill of materials will be added

apiInstance.addBillOfMaterialsToInstrumentation(bodyinstrumentationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BillOfMaterialIDs**](BillOfMaterialIDs.md)| Resources that shall be added. | 
 **instrumentationId** | **Number**| Id of the instrumentation to which the bill of materials will be added | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addDocumentsToInstrumentation"></a>
# **addDocumentsToInstrumentation**
> addDocumentsToInstrumentation(bodyinstrumentationId)

Add documents to an instrumentation

Add one or more documents to an instrumentation. This action requires &#x60;can_update&#x60; permission on the instrumentation and &#x60;can_read&#x60; permission on the document.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let body = new NetilionApiDocumentation.DocumentIDs(); // DocumentIDs | Resources that shall be added.
let instrumentationId = 789; // Number | Id of the instrumentation to which the documents will be added

apiInstance.addDocumentsToInstrumentation(bodyinstrumentationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DocumentIDs**](DocumentIDs.md)| Resources that shall be added. | 
 **instrumentationId** | **Number**| Id of the instrumentation to which the documents will be added | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addInstrumentationPictureLink"></a>
# **addInstrumentationPictureLink**
> PictureResponse addInstrumentationPictureLink(bodyid)

Add a link as instrumentation picture

Add an external resource as instrumentation picture.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let body = new NetilionApiDocumentation.PictureLinkRequest(); // PictureLinkRequest | Picture link object to be created
let id = 789; // Number | Id of the instrumentation

apiInstance.addInstrumentationPictureLink(bodyid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PictureLinkRequest**](PictureLinkRequest.md)| Picture link object to be created | 
 **id** | **Number**| Id of the instrumentation | 

### Return type

[**PictureResponse**](PictureResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addNodesToInstrumentation"></a>
# **addNodesToInstrumentation**
> addNodesToInstrumentation(bodyinstrumentationId)

Add nodes to an instrumentation

Add one or more nodes to an instrumentation in your accessible scope. This action requires &#x60;can_permit&#x60; permission on the instrumentation and on the node.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let body = new NetilionApiDocumentation.NodeIDs(); // NodeIDs | Resources that shall be added.
let instrumentationId = 789; // Number | Id of the instrumentation to which the nodes will be added

apiInstance.addNodesToInstrumentation(bodyinstrumentationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NodeIDs**](NodeIDs.md)| Resources that shall be added. | 
 **instrumentationId** | **Number**| Id of the instrumentation to which the nodes will be added | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createEventForInstrumentation"></a>
# **createEventForInstrumentation**
> EventResponse createEventForInstrumentation(bodyinstrumentationId)

Create a new event for an instrumentation

Events must have a name, and can have a start_datetime (if not provided, the date of creation will be used as default value), end_datetime, event_type, event_status, description and responsible

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let body = new NetilionApiDocumentation.EventRequestNoInstrumentations(); // EventRequestNoInstrumentations | Object to be created.
let instrumentationId = 789; // Number | Id of the instrumentation

apiInstance.createEventForInstrumentation(bodyinstrumentationId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EventRequestNoInstrumentations**](EventRequestNoInstrumentations.md)| Object to be created. | 
 **instrumentationId** | **Number**| Id of the instrumentation | 

### Return type

[**EventResponse**](EventResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createInstrumentation"></a>
# **createInstrumentation**
> InstrumentationResponse createInstrumentation(body)

Create a new instrumentation

Create a new instrumentation. The tag of the given instrumentation needs to be unique within its parent. The instrumentation will not be created when this constraint is violated.  To assign a parent instrumentation the user needs &#x60;can_permit&#x60; permission on the parent.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let body = new NetilionApiDocumentation.InstrumentationRequest(); // InstrumentationRequest | Instrumentation object that needs to be created. tag, instrumentation status and instrumentation type are required

apiInstance.createInstrumentation(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InstrumentationRequest**](InstrumentationRequest.md)| Instrumentation object that needs to be created. tag, instrumentation status and instrumentation type are required | 

### Return type

[**InstrumentationResponse**](InstrumentationResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createInstrumentationThreshold"></a>
# **createInstrumentationThreshold**
> ThresholdResponse createInstrumentationThreshold(bodyinstrumentationId)

Create an instrumentation threshold

Create a new instrumentation threshold. Thresholds value order must be &#x60;&#x60;&#x60;low_low &lt; low &lt; high &lt; high_high&#x60;&#x60;&#x60;. This action requires &#x60;&#x60;&#x60;can_udpate&#x60;&#x60;&#x60; permission on the instrumentation.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let body = new NetilionApiDocumentation.ThresholdRequest(); // ThresholdRequest | Object body that will be created.
let instrumentationId = 789; // Number | Id of the specified instrumentation

apiInstance.createInstrumentationThreshold(bodyinstrumentationId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ThresholdRequest**](ThresholdRequest.md)| Object body that will be created. | 
 **instrumentationId** | **Number**| Id of the specified instrumentation | 

### Return type

[**ThresholdResponse**](ThresholdResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteInstrumentation"></a>
# **deleteInstrumentation**
> deleteInstrumentation(id)

Delete an instrumentation

Delete a specific resource in your accessible scope, identified by the id in the URL.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let id = 789; // Number | Id of the instrumentation to delete

apiInstance.deleteInstrumentation(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the instrumentation to delete | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteInstrumentationPicture"></a>
# **deleteInstrumentationPicture**
> deleteInstrumentationPicture(instrumentationId, id)

Delete an instrumentation picture

Delete an instrumentation picture.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let instrumentationId = 789; // Number | Id of the instrumentation
let id = 789; // Number | Id of the instrumentation picture

apiInstance.deleteInstrumentationPicture(instrumentationId, id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation | 
 **id** | **Number**| Id of the instrumentation picture | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteInstrumentationThreshold"></a>
# **deleteInstrumentationThreshold**
> deleteInstrumentationThreshold(instrumentationId, id)

Delete an instrumentation threshold

Delete an instrumentation threshold.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let instrumentationId = 789; // Number | Id of the instrumentation
let id = 789; // Number | Id of the instrumentation threshold

apiInstance.deleteInstrumentationThreshold(instrumentationId, id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation | 
 **id** | **Number**| Id of the instrumentation threshold | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="downloadInstrumentationPicture"></a>
# **downloadInstrumentationPicture**
> downloadInstrumentationPicture(instrumentationId, id)

Download an instrumentation picture

Download an instrumentation picture.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let instrumentationId = 789; // Number | Id of the instrumentation
let id = 789; // Number | Id of the instrumentation picture

apiInstance.downloadInstrumentationPicture(instrumentationId, id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation | 
 **id** | **Number**| Id of the instrumentation picture | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAssetsOfInstrumentation"></a>
# **getAssetsOfInstrumentation**
> AssetsResponse getAssetsOfInstrumentation(instrumentationId, opts)

Get all assets of one instrumentation

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let instrumentationId = 789; // Number | The resource defined in the URL
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
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'productionDate': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'productionDateFrom': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'productionDateTo': new Date("2013-10-20"), // Date | Expected date format is YYYY-MM-DD
  'specificationsKey': "specificationsKey_example", // String | Filter accepts `*` as wildcard (if used as single specifications filter), supports comma list of keys in connection with specifications_value filter
  'specificationsValue': "specificationsValue_example", // String | Filter accepts `*` as wildcard, supports comma list of values in connection with specifications_key filter. Does not work for vectors
  'nodeId': "nodeId_example", // String | One or multiple ids (comma list). Filter acccepts \"null\" for all objects with no nodes assigned or \"!null\" for any assigned node
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `serial_number`, `created_at` or `updated_at`, `last_seen_at`, add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getAssetsOfInstrumentation(instrumentationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| The resource defined in the URL | 
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
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **productionDate** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **productionDateFrom** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **productionDateTo** | **Date**| Expected date format is YYYY-MM-DD | [optional] 
 **specificationsKey** | **String**| Filter accepts &#x60;*&#x60; as wildcard (if used as single specifications filter), supports comma list of keys in connection with specifications_value filter | [optional] 
 **specificationsValue** | **String**| Filter accepts &#x60;*&#x60; as wildcard, supports comma list of values in connection with specifications_key filter. Does not work for vectors | [optional] 
 **nodeId** | **String**| One or multiple ids (comma list). Filter acccepts \&quot;null\&quot; for all objects with no nodes assigned or \&quot;!null\&quot; for any assigned node | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;serial_number&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;, &#x60;last_seen_at&#x60;, add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**AssetsResponse**](AssetsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAssetsOfInstrumentationHistory"></a>
# **getAssetsOfInstrumentationHistory**
> InstrumentationAssetsHistoryResponse getAssetsOfInstrumentationHistory(instrumentationId, opts)

Get all assets an instrumentation was assigned to

Returns a list of all assets history available in your scope which have been assigned to the specified instrumentation. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let instrumentationId = 789; // Number | The resource defined in the URL
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'assetId': "assetId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'event': "event_example", // String | Filter accepts `create` or `destroy`
  'eventDatetimeFrom': new Date("2013-10-20"), // Date | Starting with + will include the previous value as well. Expected date format is YYYY-MM-DDThh:mm:ss
  'eventDatetimeTo': new Date("2013-10-20"), // Date | Ending with + will include the next value as well. Expected date format is YYYY-MM-DDThh:mm:ss
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `event` or `event_datetime`, add `-` as a prefix for descending order.
};
apiInstance.getAssetsOfInstrumentationHistory(instrumentationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **assetId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **event** | **String**| Filter accepts &#x60;create&#x60; or &#x60;destroy&#x60; | [optional] 
 **eventDatetimeFrom** | **Date**| Starting with + will include the previous value as well. Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **eventDatetimeTo** | **Date**| Ending with + will include the next value as well. Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;event&#x60; or &#x60;event_datetime&#x60;, add &#x60;-&#x60; as a prefix for descending order. | [optional] 

### Return type

[**InstrumentationAssetsHistoryResponse**](InstrumentationAssetsHistoryResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBillOfMaterialsOfInstrumentation"></a>
# **getBillOfMaterialsOfInstrumentation**
> BillOfMaterialsResponse getBillOfMaterialsOfInstrumentation(instrumentationId, opts)

Get all bill of materials of an instrumentation

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let instrumentationId = 789; // Number | The resource defined in the URL
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'author': "author_example", // String | Filter accepts `*` as wildcard
  '_date': "_date_example", // String | Expected date format is YYYY-MM-DD
  'dateFrom': "dateFrom_example", // String | Expected date format is YYYY-MM-DD
  'dateTo': "dateTo_example" // String | Expected date format is YYYY-MM-DD
};
apiInstance.getBillOfMaterialsOfInstrumentation(instrumentationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **author** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **_date** | **String**| Expected date format is YYYY-MM-DD | [optional] 
 **dateFrom** | **String**| Expected date format is YYYY-MM-DD | [optional] 
 **dateTo** | **String**| Expected date format is YYYY-MM-DD | [optional] 

### Return type

[**BillOfMaterialsResponse**](BillOfMaterialsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDocumentsOfInstrumentation"></a>
# **getDocumentsOfInstrumentation**
> DocumentsResponse getDocumentsOfInstrumentation(instrumentationId, opts)

Get all documents of an instrumentation

Returns a list of documents. If the query has no matches, the response is an empty list.  Possible include values: &#x60;&#x60;&#x60;status, tenant, classification, categories, categories.parent, attachments&#x60;&#x60;&#x60;

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let instrumentationId = 789; // Number | The resource defined in the URL
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
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getDocumentsOfInstrumentation(instrumentationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| The resource defined in the URL | 
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
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**DocumentsResponse**](DocumentsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEventsOfInstrumentation"></a>
# **getEventsOfInstrumentation**
> EventsResponse getEventsOfInstrumentation(instrumentationId, opts)

Get all events of one instrumentation

Returns a list of all events belonging to an instrumentation in your accessible scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.  Possible include values: &#x60;&#x60;assets, instrumentations, status, type&#x60;&#x60;

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let instrumentationId = 789; // Number | The resource defined in the URL
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'include': "include_example", // String | Comma separated list of objects to include in response
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
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `start_datetime`, `end_datetime`, `id`, `created_at` or `updated_at`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getEventsOfInstrumentation(instrumentationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| The resource defined in the URL | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 
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
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;start_datetime&#x60;, &#x60;end_datetime&#x60;, &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**EventsResponse**](EventsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInstrumentationById"></a>
# **getInstrumentationById**
> InstrumentationResponse getInstrumentationById(id, opts)

Get a single instrumentation

Get a specific instrumentation in your accessible scope, identified by the id in the URL.  Possible include values: &#x60;&#x60;&#x60;specifications, specifications[key1,key2], pictures, tenant, parent, status, worst_asset_status, type, type.parent, type.tenant, values, values.unit, values.asset &#x60;&#x60;&#x60; 

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let id = 789; // Number | Id of the instrumentation to fetch
let opts = { 
  'include': "include_example" // String | Comma separated list of objects to include in response
};
apiInstance.getInstrumentationById(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the instrumentation to fetch | 
 **include** | **String**| Comma separated list of objects to include in response | [optional] 

### Return type

[**InstrumentationResponse**](InstrumentationResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInstrumentationIdStatus"></a>
# **getInstrumentationIdStatus**
> InstrumentationStatusResponse getInstrumentationIdStatus(instrumentationId, opts)

Get the status of the specific instrumentation

Returns the status of the instrumentation. Needed if only permission on instrumentation but not on tenant. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let instrumentationId = 789; // Number | Id of the instrumentation
let opts = { 
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getInstrumentationIdStatus(instrumentationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation | 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**InstrumentationStatusResponse**](InstrumentationStatusResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInstrumentationIdType"></a>
# **getInstrumentationIdType**
> InstrumentationTypeResponse getInstrumentationIdType(instrumentationId, opts)

Get the type of the specific instrumentation

Returns the type of the instrumentation. Needed if only permission on instrumentation but not on tenant. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language. Possible include values: &#x60;&#x60;&#x60;parent&#x60;&#x60;&#x60;

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let instrumentationId = 789; // Number | Id of the instrumentation
let opts = { 
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getInstrumentationIdType(instrumentationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation | 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

[**InstrumentationTypeResponse**](InstrumentationTypeResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInstrumentationPicture"></a>
# **getInstrumentationPicture**
> PictureResponse getInstrumentationPicture(instrumentationId, id)

Get an instrumentation picture

Get a single picture of an instrumentation.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let instrumentationId = 789; // Number | Id of the instrumentation
let id = 789; // Number | Id of the instrumentation picture

apiInstance.getInstrumentationPicture(instrumentationId, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation | 
 **id** | **Number**| Id of the instrumentation picture | 

### Return type

[**PictureResponse**](PictureResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInstrumentationPictures"></a>
# **getInstrumentationPictures**
> PicturesResponse getInstrumentationPictures(id, opts)

Get instrumentation pictures

Get all pictures of an instrumentation.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let id = 789; // Number | Id of the instrumentation
let opts = { 
  'width': 56, // Number | filter by width
  'widthFrom': 56, // Number | filter by width_from
  'widthTo': 56, // Number | filter by width_to
  'height': 56, // Number | filter by height
  'heightFrom': 56, // Number | filter by height_from
  'heightTo': 56 // Number | filter by height_to
};
apiInstance.getInstrumentationPictures(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the instrumentation | 
 **width** | **Number**| filter by width | [optional] 
 **widthFrom** | **Number**| filter by width_from | [optional] 
 **widthTo** | **Number**| filter by width_to | [optional] 
 **height** | **Number**| filter by height | [optional] 
 **heightFrom** | **Number**| filter by height_from | [optional] 
 **heightTo** | **Number**| filter by height_to | [optional] 

### Return type

[**PicturesResponse**](PicturesResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInstrumentationStatusesOptions"></a>
# **getInstrumentationStatusesOptions**
> Object getInstrumentationStatusesOptions(instrumentationId, opts)

Get all possible statuses of the specified instrumentation

Returns a list of all possible instrumentation statuses for the specified instrument. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let instrumentationId = 789; // Number | Id of the instrumentation
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'code': "code_example", // String | Filter accepts `*` as wildcard
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getInstrumentationStatusesOptions(instrumentationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **code** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

**Object**

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInstrumentationThreshold"></a>
# **getInstrumentationThreshold**
> ThresholdResponse getInstrumentationThreshold(instrumentationId, id)

Get an instrumentation threshold

Get a single threshold of an instrumentation.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let instrumentationId = 789; // Number | Id of the instrumentation
let id = 789; // Number | Id of the instrumentation threshold

apiInstance.getInstrumentationThreshold(instrumentationId, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation | 
 **id** | **Number**| Id of the instrumentation threshold | 

### Return type

[**ThresholdResponse**](ThresholdResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInstrumentationThresholds"></a>
# **getInstrumentationThresholds**
> ThresholdsResponse getInstrumentationThresholds(instrumentationId, opts)

Get instrumentation thresholds

Get all thresholds of an instrumentation.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let instrumentationId = 789; // Number | Id of the instrumentation
let opts = { 
  'key': "key_example", // String | filter by key
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `key`. Add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getInstrumentationThresholds(instrumentationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation | 
 **key** | **String**| filter by key | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;key&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**ThresholdsResponse**](ThresholdsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInstrumentationTypesOptions"></a>
# **getInstrumentationTypesOptions**
> Object getInstrumentationTypesOptions(instrumentationId, opts)

Get all possible types of the specified instrumentation

Returns a list of all possible instrumentation types for the specified instrument. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let instrumentationId = 789; // Number | Id of the instrumentation
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'tenantId': "tenantId_example", // String | One or multiple ids (comma list). Expected id format is integer
  'name': "name_example", // String | Filter accepts `*` as wildcard
  'code': "code_example", // String | Filter accepts `*` as wildcard
  'acceptLanguage': "acceptLanguage_example" // String | The client's accepted languages. One or several (e.g. fr,de,en)
};
apiInstance.getInstrumentationTypesOptions(instrumentationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the instrumentation | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **name** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **code** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **acceptLanguage** | **String**| The client&#x27;s accepted languages. One or several (e.g. fr,de,en) | [optional] 

### Return type

**Object**

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInstrumentations"></a>
# **getInstrumentations**
> InstrumentationsResponse getInstrumentations(opts)

Get a range of instrumentations

Returns a list of instrumentations in your accessible scope. If the query has no matches, the response is an empty list.  Possible include values: &#x60;&#x60;&#x60;specifications, specifications[key1,key2], pictures, tenant, parent, status, worst_asset_status, type, type.tenant, type.parent, values, values.unit&#x60;&#x60;&#x60; 

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
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
  'nodeId': "nodeId_example", // String | One or multiple ids (comma list). Filter acccepts \"null\" for all objects with no nodes assigned or \"!null\" for any assigned node
  'assetId': "assetId_example", // String | One or multiple ids (comma list). Filter acccepts \"null\" for all objects with no nodes assigned or \"!null\" for any assigned node
  'assetStatusId': "assetStatusId_example", // String | One or multiple ids (comma list). Expected id format is integer. This retrieves all Instrumentations where at least one of its assets has one of the given statuses.
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `id`, `tag`, `created_at` or `updated_at`, add `-` as a prefix for descending order. Default value is `id`
};
apiInstance.getInstrumentations(opts).then((data) => {
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
 **tag** | **String**| Filter accepts &#x60;*&#x60; as wildcard | [optional] 
 **statusId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **typeId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **parentId** | **String**| One or multiple ids (comma list). \&quot;null\&quot; to retrieve all objects without parent, \&quot;!null\&quot; for all objects with parent. | [optional] 
 **tenantId** | **String**| One or multiple ids (comma list). Expected id format is integer | [optional] 
 **specificationsKey** | **String**| Filter accepts &#x60;*&#x60; as wildcard (if used as single specifications filter), supports comma list of keys in connection with specifications_value filter | [optional] 
 **specificationsValue** | **String**| Filter accepts &#x60;*&#x60; as wildcard, supports comma list of values in connection with specifications_key filter. Does not work for vectors | [optional] 
 **criticality** | **String**| Filter accepts undefined, low, medium or high | [optional] 
 **accessibility** | **String**| Filter accepts undefined, easy, moderate or difficult | [optional] 
 **nodeId** | **String**| One or multiple ids (comma list). Filter acccepts \&quot;null\&quot; for all objects with no nodes assigned or \&quot;!null\&quot; for any assigned node | [optional] 
 **assetId** | **String**| One or multiple ids (comma list). Filter acccepts \&quot;null\&quot; for all objects with no nodes assigned or \&quot;!null\&quot; for any assigned node | [optional] 
 **assetStatusId** | **String**| One or multiple ids (comma list). Expected id format is integer. This retrieves all Instrumentations where at least one of its assets has one of the given statuses. | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;id&#x60;, &#x60;tag&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;, add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60; | [optional] 

### Return type

[**InstrumentationsResponse**](InstrumentationsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNodesOfInstrumentation"></a>
# **getNodesOfInstrumentation**
> NodesResponse getNodesOfInstrumentation(instrumentationId, opts)

Get all nodes of one Instrumentation

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let instrumentationId = 789; // Number | The resource defined in the URL
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
apiInstance.getNodesOfInstrumentation(instrumentationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| The resource defined in the URL | 
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

<a name="getSpecificationHistoryOfInstrumentation"></a>
# **getSpecificationHistoryOfInstrumentation**
> SpecificationHistoryResponse getSpecificationHistoryOfInstrumentation(instrumentationId, key, opts)

Get the history of one specification attribute of an instrumentation.

This might be useful for history data. The response contains a collection of historic values and when they&#x60;ve been updated. Since this can be a lot of data the service uses pagination. The history can be filtered by using a date range of source_timestamp and/or updated_at. Please consider that source_timestamp is not required and update on the attribute without giving a source_timestamp wont be included in the resulting response

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let instrumentationId = 789; // Number | Id of the specified instrumentation
let key = "key_example"; // String | the exact key
let opts = { 
  'page': 56, // Number | Page number to load
  'perPage': 56, // Number | Number of items to load per page
  'sourceTimestampFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | source_timestamp filter from. Starting with + will include the previous value as well. Expected date format is YYYY-MM-DDThh:mm:ss
  'sourceTimestampTo': new Date("2013-10-20T19:20:30+01:00"), // Date | source_timestamp filter to. Ending with + will include the next value as well. Expected date format is YYYY-MM-DDThh:mm:ss
  'updatedAtFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | updated_at filter from. Starting with + will include the previous value as well. Expected date format is YYYY-MM-DDThh:mm:ss
  'updatedAtTo': new Date("2013-10-20T19:20:30+01:00"), // Date | updated_at filter to. Ending with + will include the next value as well. Expected date format is YYYY-MM-DDThh:mm:ss
  'orderBy': "orderBy_example" // String | Order result by attribute value, accepts `source_timestamp` or `updated_at`, add `-` as a prefix for descending order.
};
apiInstance.getSpecificationHistoryOfInstrumentation(instrumentationId, key, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the specified instrumentation | 
 **key** | **String**| the exact key | 
 **page** | **Number**| Page number to load | [optional] 
 **perPage** | **Number**| Number of items to load per page | [optional] 
 **sourceTimestampFrom** | **Date**| source_timestamp filter from. Starting with + will include the previous value as well. Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **sourceTimestampTo** | **Date**| source_timestamp filter to. Ending with + will include the next value as well. Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **updatedAtFrom** | **Date**| updated_at filter from. Starting with + will include the previous value as well. Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **updatedAtTo** | **Date**| updated_at filter to. Ending with + will include the next value as well. Expected date format is YYYY-MM-DDThh:mm:ss | [optional] 
 **orderBy** | **String**| Order result by attribute value, accepts &#x60;source_timestamp&#x60; or &#x60;updated_at&#x60;, add &#x60;-&#x60; as a prefix for descending order. | [optional] 

### Return type

[**SpecificationHistoryResponse**](SpecificationHistoryResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSpecificationsOfInstrumentation"></a>
# **getSpecificationsOfInstrumentation**
> SpecificationsResponse getSpecificationsOfInstrumentation(instrumentationId, opts)

Get specifications of an instrumentation

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let instrumentationId = 789; // Number | Id of the specified instrumentation
let opts = { 
  'key': "key_example" // String | Filter accepts '*' as wildcard
};
apiInstance.getSpecificationsOfInstrumentation(instrumentationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentationId** | **Number**| Id of the specified instrumentation | 
 **key** | **String**| Filter accepts &#x27;*&#x27; as wildcard | [optional] 

### Return type

[**SpecificationsResponse**](SpecificationsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="removeAssetsFromInstrumentation"></a>
# **removeAssetsFromInstrumentation**
> removeAssetsFromInstrumentation(bodyinstrumentationId)

Remove assets from an instrumentation

Remove one or more assets from an instrumentation in your accessible scope. This action requires &#x60;can_permit&#x60; permission on the instrumentation and on the asset.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let body = new NetilionApiDocumentation.AssetIDs(); // AssetIDs | Resources that shall be removed.
let instrumentationId = 789; // Number | Id of the instrumentation from which the assets will be removed

apiInstance.removeAssetsFromInstrumentation(bodyinstrumentationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetIDs**](AssetIDs.md)| Resources that shall be removed. | 
 **instrumentationId** | **Number**| Id of the instrumentation from which the assets will be removed | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeBillOfMaterialsFromInstrumentation"></a>
# **removeBillOfMaterialsFromInstrumentation**
> removeBillOfMaterialsFromInstrumentation(bodyinstrumentationId)

Remove bill of materials from an instrumentation

Remove one or more bill of materials from an instrumentation in your accessible scope.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let body = new NetilionApiDocumentation.BillOfMaterialIDs(); // BillOfMaterialIDs | Resources that shall be removed.
let instrumentationId = 789; // Number | Id of the instrumentation from which the bill of materials will be removed

apiInstance.removeBillOfMaterialsFromInstrumentation(bodyinstrumentationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BillOfMaterialIDs**](BillOfMaterialIDs.md)| Resources that shall be removed. | 
 **instrumentationId** | **Number**| Id of the instrumentation from which the bill of materials will be removed | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeDocumentsFromInstrumentation"></a>
# **removeDocumentsFromInstrumentation**
> removeDocumentsFromInstrumentation(bodyinstrumentationId)

Remove documents from an instrumentation

Remove one or more documents from an instrumentation. This action requires &#x60;can_update&#x60; permission on the instrumentation and &#x60;can_read&#x60; permission on the document.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let body = new NetilionApiDocumentation.DocumentIDs(); // DocumentIDs | Resources that shall be removed.
let instrumentationId = 789; // Number | Id of the instrumentation from which the documents will be removed

apiInstance.removeDocumentsFromInstrumentation(bodyinstrumentationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DocumentIDs**](DocumentIDs.md)| Resources that shall be removed. | 
 **instrumentationId** | **Number**| Id of the instrumentation from which the documents will be removed | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeEventFromInstrumentation"></a>
# **removeEventFromInstrumentation**
> removeEventFromInstrumentation(bodyinstrumentationId)

Remove events from an instrumentation

Remove one or more events from an instrumentation in your accessible scope. If the event has no more related instrumentations, the event will be deleted

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let body = null; // Object | Resources that shall be removed.
let instrumentationId = 789; // Number | Id of the instrumentation from which the events will removed.

apiInstance.removeEventFromInstrumentation(bodyinstrumentationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Object**](Object.md)| Resources that shall be removed. | 
 **instrumentationId** | **Number**| Id of the instrumentation from which the events will removed. | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeNodesFromInstrumentation"></a>
# **removeNodesFromInstrumentation**
> removeNodesFromInstrumentation(bodyinstrumentationId)

Remove nodes from an instrumentation

Remove one or more nodes from an instrumentation in your accessible scope. This action requires &#x60;can_permit&#x60; permission on the instrumentation and on the node.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let body = new NetilionApiDocumentation.NodeIDs(); // NodeIDs | Resources that shall be removed.
let instrumentationId = 789; // Number | Id of the instrumentation from which the nodes will be removed

apiInstance.removeNodesFromInstrumentation(bodyinstrumentationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NodeIDs**](NodeIDs.md)| Resources that shall be removed. | 
 **instrumentationId** | **Number**| Id of the instrumentation from which the nodes will be removed | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeSpecificationsFromInstrumentation"></a>
# **removeSpecificationsFromInstrumentation**
> removeSpecificationsFromInstrumentation(bodyinstrumentationId)

Delete specifications of an instrumentation

The specification keys in the body will be removed of the object in your accessible scope. Multiple specification keys can be sent in the same request. If a key does not exist it will be ignored.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let body = ["body_example"]; // [String] | Array of keys to delete from specifications
let instrumentationId = 789; // Number | Id of the specified instrumentation

apiInstance.removeSpecificationsFromInstrumentation(bodyinstrumentationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[String]**](String.md)| Array of keys to delete from specifications | 
 **instrumentationId** | **Number**| Id of the specified instrumentation | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="renameSpecificationsOfInstrumentation"></a>
# **renameSpecificationsOfInstrumentation**
> renameSpecificationsOfInstrumentation(bodyinstrumentationId)

Rename a specification key

Rename one specification key of an instrumentation in your accessible scope. The key name allows [a-z A-Z 0-9 . - _ ] all uppercase letters will be converted to lower-case.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let body = new NetilionApiDocumentation.SpecificationsRename(); // SpecificationsRename | The specifications object to patch.
let instrumentationId = 789; // Number | Id of the specified instrumentation

apiInstance.renameSpecificationsOfInstrumentation(bodyinstrumentationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SpecificationsRename**](SpecificationsRename.md)| The specifications object to patch. | 
 **instrumentationId** | **Number**| Id of the specified instrumentation | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceAssetsOfInstrumentation"></a>
# **replaceAssetsOfInstrumentation**
> replaceAssetsOfInstrumentation(bodyinstrumentationId)

Replace the assets of an instrumentation

Replaces all assets belonging to an instrumentation. You can send a list of resources that will replace all previous values. This action requires &#x60;can_permit&#x60; permission on the instrumentation and on the asset.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let body = new NetilionApiDocumentation.AssetIDs(); // AssetIDs | Resources that shall be replaced
let instrumentationId = 789; // Number | Id of the instrumentation of which the assets will be replaced

apiInstance.replaceAssetsOfInstrumentation(bodyinstrumentationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetIDs**](AssetIDs.md)| Resources that shall be replaced | 
 **instrumentationId** | **Number**| Id of the instrumentation of which the assets will be replaced | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceBillOfMaterialsOfInstrumentation"></a>
# **replaceBillOfMaterialsOfInstrumentation**
> replaceBillOfMaterialsOfInstrumentation(bodyinstrumentationId)

Replace the bill of materials of an instrumentation

Replaces all bill of materials belonging to an instrumentation. You can send a list of resources that will replace all previous values.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let body = new NetilionApiDocumentation.BillOfMaterialIDs(); // BillOfMaterialIDs | Resources that shall be replaced
let instrumentationId = 789; // Number | Id of the instrumentation of which the bill of materials will be replaced

apiInstance.replaceBillOfMaterialsOfInstrumentation(bodyinstrumentationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BillOfMaterialIDs**](BillOfMaterialIDs.md)| Resources that shall be replaced | 
 **instrumentationId** | **Number**| Id of the instrumentation of which the bill of materials will be replaced | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceDocumentsOfInstrumentation"></a>
# **replaceDocumentsOfInstrumentation**
> replaceDocumentsOfInstrumentation(bodyinstrumentationId)

Replace the documents of an instrumentation

Replaces all documents belonging to an instrumentation. You can send a list of resources that will replace all previous values. This action requires &#x60;can_udpate&#x60; permission on the instrumentation and &#x60;can_read&#x60; permission on the document.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let body = new NetilionApiDocumentation.DocumentIDs(); // DocumentIDs | Resources that shall be replaced
let instrumentationId = 789; // Number | Id of the instrumentation of which the documents will be replaced

apiInstance.replaceDocumentsOfInstrumentation(bodyinstrumentationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DocumentIDs**](DocumentIDs.md)| Resources that shall be replaced | 
 **instrumentationId** | **Number**| Id of the instrumentation of which the documents will be replaced | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceNodesOfInstrumentation"></a>
# **replaceNodesOfInstrumentation**
> replaceNodesOfInstrumentation(bodyinstrumentationId)

Replace the nodes of an instrumentation

Replaces all nodes belonging to an instrumentation in your accessible scope. You can send a list of resources that will replace all previous values. This action requires &#x60;can_permit&#x60; permission on the instrumentation and on the node.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let body = new NetilionApiDocumentation.NodeIDs(); // NodeIDs | Resources that shall be replaced
let instrumentationId = 789; // Number | Id of the instrumentation of which the nodes will be replaced

apiInstance.replaceNodesOfInstrumentation(bodyinstrumentationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NodeIDs**](NodeIDs.md)| Resources that shall be replaced | 
 **instrumentationId** | **Number**| Id of the instrumentation of which the nodes will be replaced | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateInstrumentation"></a>
# **updateInstrumentation**
> updateInstrumentation(bodyid)

Update an instrumentation

Update accessible parameters of the requested resource in your accessible scope. To assign a parent instrumentation the user needs &#x60;can_permit&#x60; permission on the parent and on the current instrumentation.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let body = new NetilionApiDocumentation.InstrumentationRequest(); // InstrumentationRequest | Parameters that shall be updated.
let id = 789; // Number | Id of the instrumentation to update

apiInstance.updateInstrumentation(bodyid).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InstrumentationRequest**](InstrumentationRequest.md)| Parameters that shall be updated. | 
 **id** | **Number**| Id of the instrumentation to update | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateInstrumentationPicture"></a>
# **updateInstrumentationPicture**
> PictureResponse updateInstrumentationPicture(imageinstrumentationIdid)

Update an instrumentation picture

Upload a new instrumentation picture. Check the file-storage quota. Allowed content-types are - image/gif - image/jpg - image/jpeg - image/png

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let image = image_example; // Blob | 
let instrumentationId = 789; // Number | Id of the instrumentation
let id = 789; // Number | Id of the instrumentation picture

apiInstance.updateInstrumentationPicture(imageinstrumentationIdid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **Blob**|  | 
 **instrumentationId** | **Number**| Id of the instrumentation | 
 **id** | **Number**| Id of the instrumentation picture | 

### Return type

[**PictureResponse**](PictureResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="updateInstrumentationPictureLink"></a>
# **updateInstrumentationPictureLink**
> PictureResponse updateInstrumentationPictureLink(bodyinstrumentationIdid)

Update an instrumentation picture link

Update an instrumentation picture link.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let body = new NetilionApiDocumentation.PictureLinkRequest(); // PictureLinkRequest | Picture link object to be updated
let instrumentationId = 789; // Number | Id of the instrumentation
let id = 789; // Number | Id of the instrumentation picture

apiInstance.updateInstrumentationPictureLink(bodyinstrumentationIdid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PictureLinkRequest**](PictureLinkRequest.md)| Picture link object to be updated | 
 **instrumentationId** | **Number**| Id of the instrumentation | 
 **id** | **Number**| Id of the instrumentation picture | 

### Return type

[**PictureResponse**](PictureResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateInstrumentationThreshold"></a>
# **updateInstrumentationThreshold**
> ThresholdResponse updateInstrumentationThreshold(bodyinstrumentationIdid)

Update an instrumentation threshold

Replaces the threshold belonging to an instrumentation. This action requires &#x60;can_udpate&#x60; permission on the instrumentation

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let body = new NetilionApiDocumentation.ThresholdRequest(); // ThresholdRequest | Object body that will be updated.
let instrumentationId = 789; // Number | Id of the instrumentation
let id = 789; // Number | Id of the instrumentation threshold

apiInstance.updateInstrumentationThreshold(bodyinstrumentationIdid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ThresholdRequest**](ThresholdRequest.md)| Object body that will be updated. | 
 **instrumentationId** | **Number**| Id of the instrumentation | 
 **id** | **Number**| Id of the instrumentation threshold | 

### Return type

[**ThresholdResponse**](ThresholdResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSpecificationsOfInstrumentation"></a>
# **updateSpecificationsOfInstrumentation**
> updateSpecificationsOfInstrumentation(bodyinstrumentationId)

Update specifications of an instrumentation

Update the specification object of an instrumentation in your accessible scope. To add specifications, just add the key and set the value object with value, unit and source_timestamp. To mark an existing specification to be unknown, the value could be set to null. To delete keys, use the delete method. Multiple specification objects can be sent in the same request. Keys inside a specification are unique and can only be added once. Keys can only consist of [a-z A-Z 0-9 . - _ ]. All uppercase A-Z are converted to lower-case a-z. For a key that is send multiple times in the request body, only the last key-value is saved.

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let body = null; // {String: SpecificationRequest} | The specifications objects to patch.
let instrumentationId = 789; // Number | Id of the specified instrumentation

apiInstance.updateSpecificationsOfInstrumentation(bodyinstrumentationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**{String: SpecificationRequest}**](Object.md)| The specifications objects to patch. | 
 **instrumentationId** | **Number**| Id of the specified instrumentation | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="uploadInstrumentationPicture"></a>
# **uploadInstrumentationPicture**
> PictureResponse uploadInstrumentationPicture(imageid)

Upload an instrumentation picture

Upload a new instrumentation picture. Checks the file-storage quota. Allowed content-types are - image/gif - image/jpg - image/jpeg - image/png

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

let apiInstance = new NetilionApiDocumentation.InstrumentationApi();
let image = image_example; // Blob | 
let id = 789; // Number | Id of the instrumentation

apiInstance.uploadInstrumentationPicture(imageid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **Blob**|  | 
 **id** | **Number**| Id of the instrumentation | 

### Return type

[**PictureResponse**](PictureResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

