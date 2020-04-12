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
import NotificationBase from './NotificationBase';

/**
* The NotificationResponse model module.
* @module model/NotificationResponse
* @version 01.00.00
*/
export default class NotificationResponse {
    /**
    * Constructs a new <code>NotificationResponse</code>.
    * @alias module:model/NotificationResponse
    * @class
    * @extends module:model/NotificationBase
    * @param name {} The name of the notification
    * @param content {} Supports translations.
    * @param startDatetime {} start date/time of the notification: format example: 2016-01-01T18:30:00
    */

    constructor(name, content, startDatetime) {
        NotificationBase.call(this, name, content, startDatetime);
        
        
    }

    /**
    * Constructs a <code>NotificationResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NotificationResponse} obj Optional instance to populate.
    * @return {module:model/NotificationResponse} The populated <code>NotificationResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotificationResponse();
            
            NotificationBase.constructFromObject(data, obj);
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], Object);
            }
        }
        return obj;
    }

    /**
    * Id of object
    * @member {Number} id
    */
    id = undefined;
    /**
    * @member {Object} links
    */
    links = undefined;




}
