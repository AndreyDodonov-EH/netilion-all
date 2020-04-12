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
* The NestedIDUserNameHref model module.
* @module model/NestedIDUserNameHref
* @version 01.00.00
*/
export default class NestedIDUserNameHref {
    /**
    * Constructs a new <code>NestedIDUserNameHref</code>.
    * @alias module:model/NestedIDUserNameHref
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>NestedIDUserNameHref</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NestedIDUserNameHref} obj Optional instance to populate.
    * @return {module:model/NestedIDUserNameHref} The populated <code>NestedIDUserNameHref</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NestedIDUserNameHref();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('href')) {
                obj['href'] = ApiClient.convertToType(data['href'], 'String');
            }
        }
        return obj;
    }

    /**
    * ID of the nested resources
    * @member {Number} id
    */
    id = undefined;
    /**
    * email to the user
    * @member {String} first_name
    */
    first_name = undefined;
    /**
    * email to the user
    * @member {String} last_name
    */
    last_name = undefined;
    /**
    * href to the nested resource
    * @member {String} href
    */
    href = undefined;




}
