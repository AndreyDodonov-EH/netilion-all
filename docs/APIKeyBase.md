# NetilionApiDocumentation.APIKeyBase

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**validFrom** | **String** | Date must be in format &#x27;2016-01-01&#x27;, cannot be set by non-admin users | [optional] 
**validUntil** | **String** | Date must be in format &#x27;2016-01-01&#x27;, cannot be set by non-admin users | [optional] 
**disabled** | **Boolean** | disabled api keys cannot be used for requests | [optional] [default to false]
**authenticationType** | **String** | possible values are: any, oauth, basic_auth. Oauth is assigned per default | [optional] 
**description** | **String** | Description of the APIKey | [optional] 
