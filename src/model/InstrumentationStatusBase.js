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
* The InstrumentationStatusBase model module.
* @module model/InstrumentationStatusBase
* @version 01.00.00
*/
export default class InstrumentationStatusBase {
    /**
    * Constructs a new <code>InstrumentationStatusBase</code>.
    * @alias module:model/InstrumentationStatusBase
    * @class
    * @param name {String} Supports translations. Whitespaces are trimmed.
    */

    constructor(name) {
        
        
        this['name'] = name;
        
    }

    /**
    * Constructs a <code>InstrumentationStatusBase</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InstrumentationStatusBase} obj Optional instance to populate.
    * @return {module:model/InstrumentationStatusBase} The populated <code>InstrumentationStatusBase</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstrumentationStatusBase();
                        
            
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }

    /**
    * The value must be unique. Whitespaces are trimmed.
    * @member {String} code
    */
    code = undefined;
    /**
    * Supports translations. Whitespaces are trimmed.
    * @member {String} name
    */
    name = undefined;
    /**
    * Supports translations.
    * @member {String} description
    */
    description = undefined;




}
