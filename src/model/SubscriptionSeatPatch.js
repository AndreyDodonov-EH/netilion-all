/**
 * Netilion API Documentation
 * Welcome to the Netilion API Documentation, which provides interactive access and documentation to our REST API. Please visit our developer portal for further instructions and information: https://developer.netilion.endress.com/ 
 *
 * OpenAPI spec version: 01.00.00
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The SubscriptionSeatPatch model module.
* @module model/SubscriptionSeatPatch
* @version 01.00.00
*/
export default class SubscriptionSeatPatch {
    /**
    * Constructs a new <code>SubscriptionSeatPatch</code>.
    * @alias module:model/SubscriptionSeatPatch
    * @class
    * @param status {String} status of the subscription seat, can be invited, pending, accepted
    */

    constructor(status) {
        
        
        this['status'] = status;
        
    }

    /**
    * Constructs a <code>SubscriptionSeatPatch</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SubscriptionSeatPatch} obj Optional instance to populate.
    * @return {module:model/SubscriptionSeatPatch} The populated <code>SubscriptionSeatPatch</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubscriptionSeatPatch();
                        
            
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    /**
    * status of the subscription seat, can be invited, pending, accepted
    * @member {String} status
    */
    status = undefined;




}
