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
* The NotificationBase model module.
* @module model/NotificationBase
* @version 01.00.00
*/
export default class NotificationBase {
    /**
    * Constructs a new <code>NotificationBase</code>.
    * @alias module:model/NotificationBase
    * @class
    * @param name {String} The name of the notification
    * @param content {String} Supports translations.
    * @param startDatetime {String} start date/time of the notification: format example: 2016-01-01T18:30:00
    */

    constructor(name, content, startDatetime) {
        
        
        this['name'] = name;
        this['content'] = content;
        this['start_datetime'] = startDatetime;
        
    }

    /**
    * Constructs a <code>NotificationBase</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NotificationBase} obj Optional instance to populate.
    * @return {module:model/NotificationBase} The populated <code>NotificationBase</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotificationBase();
                        
            
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('start_datetime')) {
                obj['start_datetime'] = ApiClient.convertToType(data['start_datetime'], 'String');
            }
            if (data.hasOwnProperty('end_datetime')) {
                obj['end_datetime'] = ApiClient.convertToType(data['end_datetime'], 'String');
            }
        }
        return obj;
    }

    /**
    * The name of the notification
    * @member {String} name
    */
    name = undefined;
    /**
    * Supports translations.
    * @member {String} content
    */
    content = undefined;
    /**
    * start date/time of the notification: format example: 2016-01-01T18:30:00
    * @member {String} start_datetime
    */
    start_datetime = undefined;
    /**
    * end date/time of the notification: format example: 2016-01-01T18:30:00
    * @member {String} end_datetime
    */
    end_datetime = undefined;




}
