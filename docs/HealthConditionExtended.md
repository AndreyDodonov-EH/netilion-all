# NetilionApiDocumentation.HealthConditionExtended

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**protocol** | **String** | Possible values are: &#x27;PROFIBUS&#x27;, &#x27;HART&#x27; and &#x27;MODBUS&#x27;. | [optional] 
**protocolVersion** | **String** | version number of the protocol | [optional] 
**deviceIdent** | **String** | protocol specific device_ident | [optional] 
**hidden** | **Boolean** | should be hidden in frontend | [optional] [default to false]
**rules** | **[Object]** | Health condition rules. | [optional] 
