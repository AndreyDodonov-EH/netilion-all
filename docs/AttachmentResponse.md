# NetilionApiDocumentation.AttachmentResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Id of object | 
**type** | **String** | type of attachment, can be &#39;file&#39; or &#39;link&#39; | 
**fileName** | **String** | the original filename of the attachment | [optional] 
**fingerprint** | **String** | SHA256 checksum of the file | [optional] 
**contentAuthor** | **String** | the file authors name | [optional] 
**contentVersion** | **String** | the version of the attachment | [optional] 
**contentDate** | **String** | last edit date of the file | [optional] 
**remarks** | **String** | remarks of the attachment | [optional] 
**document** | [**NestedIDHref**](NestedIDHref.md) |  | 
**languages** | **[String]** | the languages of the files content | [optional] 
**downloadHref** | **String** | the download link to the file of the attachment | 


