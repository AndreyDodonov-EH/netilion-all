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
* The SpecificationsDelete model module.
* @module model/SpecificationsDelete
* @version 01.00.00
*/
export default class SpecificationsDelete extends Array {
    /**
    * Constructs a new <code>SpecificationsDelete</code>.
    * An array that contains the keys to delete entirely from the specification object
    * @alias module:model/SpecificationsDelete
    * @class
    * @extends Array
    */

    constructor() {
        super();
        
        
        return this;
    }

    /**
    * Constructs a <code>SpecificationsDelete</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SpecificationsDelete} obj Optional instance to populate.
    * @return {module:model/SpecificationsDelete} The populated <code>SpecificationsDelete</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SpecificationsDelete();
            ApiClient.constructFromObject(data, obj, 'String');
            
            
        }
        return obj;
    }





}
