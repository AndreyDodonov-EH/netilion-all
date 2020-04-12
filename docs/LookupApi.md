# NetilionApiDocumentation.LookupApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ehExtendedOrderCodeLookup**](LookupApi.md#ehExtendedOrderCodeLookup) | **GET** /endress/extended_order_code_lookup | lookup for the extended order code for Endress+Hauser products
[**ehProductLookup**](LookupApi.md#ehProductLookup) | **GET** /endress/product_lookup | lookup for Endress+Hauser products with asset specific search criterias
[**ehSuccessorLookup**](LookupApi.md#ehSuccessorLookup) | **GET** /endress/successor_lookup | lookup for Endress+Hauser successor products

<a name="ehExtendedOrderCodeLookup"></a>
# **ehExtendedOrderCodeLookup**
> ExtendedOrderCode ehExtendedOrderCodeLookup(orderCode)

lookup for the extended order code for Endress+Hauser products

Returns an extended order code for Endress+Hauser products when the given order code is existing

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

let apiInstance = new NetilionApiDocumentation.LookupApi();
let orderCode = "orderCode_example"; // String | any Endress+Hauser order code

apiInstance.ehExtendedOrderCodeLookup(orderCode).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderCode** | **String**| any Endress+Hauser order code | 

### Return type

[**ExtendedOrderCode**](ExtendedOrderCode.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="ehProductLookup"></a>
# **ehProductLookup**
> ProductResponse ehProductLookup(serialNumber)

lookup for Endress+Hauser products with asset specific search criterias

Returns an Endress+Hauser product, matching the serial number. The serial number is at least 4 characters long and may include letters, numbers, dashes (-), underscores (_) and backslashes (\\\\).

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

let apiInstance = new NetilionApiDocumentation.LookupApi();
let serialNumber = "serialNumber_example"; // String | Any Endress+Hauser serial number

apiInstance.ehProductLookup(serialNumber).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serialNumber** | **String**| Any Endress+Hauser serial number | 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="ehSuccessorLookup"></a>
# **ehSuccessorLookup**
> SuccessorsResponse ehSuccessorLookup(opts)

lookup for Endress+Hauser successor products

Returns successor information, if a serial_number or order code was provided, the order code transformer is used, for product_code the successor comes from the Product Status List r Possible include values: &#x60;&#x60;&#x60;product, product.pictures,product.status, product.parent&#x60;&#x60;&#x60; The serial number is at least 4 characters long and may include letters, numbers, dashes (-), underscores (_) and backslashes (\\\\).

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

let apiInstance = new NetilionApiDocumentation.LookupApi();
let opts = { 
  'include': "include_example", // String | Comma separated list of objects to include in response
  'serialNumber': "serialNumber_example", // String | Any Endress+Hauser serial number
  'orderCode': "orderCode_example", // String | an Endress+Hauser order code
  'productCode': "productCode_example" // String | an Endress+Hauser product_code
};
apiInstance.ehSuccessorLookup(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **include** | **String**| Comma separated list of objects to include in response | [optional] 
 **serialNumber** | **String**| Any Endress+Hauser serial number | [optional] 
 **orderCode** | **String**| an Endress+Hauser order code | [optional] 
 **productCode** | **String**| an Endress+Hauser product_code | [optional] 

### Return type

[**SuccessorsResponse**](SuccessorsResponse.md)

### Authorization

[API-Key](../README.md#API-Key), [Authentication](../README.md#Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

