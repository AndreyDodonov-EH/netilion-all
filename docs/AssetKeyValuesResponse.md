# NetilionApiDocumentation.AssetKeyValuesResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **String** | key of the asset values | 
**unit** | [**NestedID**](NestedID.md) |  | [optional] 
**group** | **String** | group of the asset value. No wildcard-filter supported. | [optional] 
**latest** | **String** | the last written asset value | [optional] 
**max** | **String** | the maximum value for the requested time slot | [optional] 
**min** | **String** | the minimum value for the requested time slot | [optional] 
**mean** | **String** | the mean (average) value for the requested time slot | [optional] 
**data** | [**[AssetKeyValuesData]**](AssetKeyValuesData.md) |  | [optional] 
**pagination** | [**AssetValuesPagination**](AssetValuesPagination.md) |  | 


