# NetilionApiDocumentation.APISubscriptionBase

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayName** | **String** | Name of the api subscription | [optional] 
**description** | **String** | Description of the api subscription | [optional] 
**externalReference** | **String** | can be used to store id of external api subscription managment system | [optional] 
**status** | **String** | status of the api subscription, can be open, confirmed, cancelled, non_renewing | [optional] 
**notificationStatus** | **String** | status of the mail notification for the api subscription, can be no_notification, first_notification, second_notification or alert_notification | [optional] 
**subscriptionType** | **String** | type of the api subscription, can be &#39;s&#39; or &#39;m&#39; | [optional] 
**customerPurchaseOrder** | **String** | reference for customer system | [optional] 
**startDate** | **String** | start date of the api subscription | [optional] 
**endDate** | **String** | end date of the api subscription | [optional] 
**billedUntil** | **String** | end date of the api subscription | [optional] 
**externalUserReference** | **String** | can be used to store user id of external api subscription managment system | [optional] 
**externalPlanVariantReference** | **String** | can be used to store paln variant of external api subscription managment system | [optional] 
**apiCallQuota** | **Number** | number of bought api calls | [optional] 
**storageQuota** | **Number** | number of bought storage (in bytes) | [optional] 
**uploadDownloadQuota** | **Number** | traffic for up- and download of data (in bytes) | [optional] 
**apiCallsUsed** | **Number** | number of api calls used | [optional] 
**storageUsed** | **Number** | number of storage used (in bytes) | [optional] 
**uploadDownloadUsed** | **Number** | data up- and download used (in bytes) | [optional] 


