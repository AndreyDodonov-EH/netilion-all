# NetilionApiDocumentation.DataExportResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **Number** |  | 
**type** | **String** | can be complete or measurements | 
**startDate** | **String** |  | [optional] 
**endDate** | **String** |  | [optional] 
**createdAt** | **String** |  | 
**finishedAt** | **String** |  | [optional] 
**exportFileName** | **String** |  | [optional] 
**exportContentType** | **String** |  | [optional] 
**exportFileSize** | **String** |  | [optional] 
**exportUpdatedAt** | **String** |  | [optional] 
**exportFingerprint** | **String** |  | [optional] 
**user** | [**NestedIDHref**](NestedIDHref.md) |  | 
**instrumentation** | [**NestedIDHrefTag**](NestedIDHrefTag.md) |  | [optional] 
**downloadHref** | **String** | download link | [optional] 
**availableUntil** | **String** | date until the download is available, after that the download will automatically removed | [optional] 
