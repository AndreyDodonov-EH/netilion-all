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
* The NestedIDCode model module.
* @module model/NestedIDCode
* @version 01.00.00
*/
export default class NestedIDCode {
    /**
    * Constructs a new <code>NestedIDCode</code>.
    * @alias module:model/NestedIDCode
    * @class
    * @param id {Number} ID of the nested resources
    * @param code {String} code of the nested resource
    */

    constructor(id, code) {
        
        
        this['id'] = id;
        this['code'] = code;
        
    }

    /**
    * Constructs a <code>NestedIDCode</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NestedIDCode} obj Optional instance to populate.
    * @return {module:model/NestedIDCode} The populated <code>NestedIDCode</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NestedIDCode();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
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
    * code of the nested resource
    * @member {String} code
    */
    code = undefined;




}
