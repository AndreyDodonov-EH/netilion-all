# NetilionApiDocumentation.SubscriptionBase

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayName** | **String** | Name of the subscription | [optional] 
**description** | **String** | Description of the subscription | [optional] 
**externalReference** | **String** | can be used to store id of external subscription managment system | [optional] 
**status** | **String** | status of the subscription, can be  open, payment_required, confirmed, cancelled, scheduled_update and non_renewing | [optional] 
**notificationStatus** | **String** | status of the mail notification for the subscription, can be no_notification, first_notification, second_notification or alert_notification | [optional] 
**customerPurchaseOrder** | **String** | reference for customer system | [optional] 
**startDate** | **String** | start date of the subscription | [optional] 
**endDate** | **String** | end date of the subscription | [optional] 
**billedUntil** | **String** | end date of the subscription | [optional] 
**externalUserReference** | **String** | can be used to store user id of external subscription managment system | [optional] 
**externalPlanVariantReference** | **String** | can be used to store paln variant of external subscription managment system | [optional] 
**assetQuota** | **Number** | number of bought assets | [optional] 
**storageQuota** | **Number** | number of bought storage (in bytes) | [optional] 
**seatQuota** | **Number** | number of bought seats | [optional] 
