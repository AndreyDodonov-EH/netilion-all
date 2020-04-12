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
* The InstrumentationBase model module.
* @module model/InstrumentationBase
* @version 01.00.00
*/
export default class InstrumentationBase {
    /**
    * Constructs a new <code>InstrumentationBase</code>.
    * @alias module:model/InstrumentationBase
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>InstrumentationBase</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InstrumentationBase} obj Optional instance to populate.
    * @return {module:model/InstrumentationBase} The populated <code>InstrumentationBase</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstrumentationBase();
                        
            
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('criticality')) {
                obj['criticality'] = ApiClient.convertToType(data['criticality'], 'String');
            }
            if (data.hasOwnProperty('accessibility')) {
                obj['accessibility'] = ApiClient.convertToType(data['accessibility'], 'String');
            }
        }
        return obj;
    }

    /**
    * Instrumentation tag. The value must be unique if under a parent instrumentation
    * @member {String} tag
    */
    tag = undefined;
    /**
    * description text of the Instrumentation
    * @member {String} description
    */
    description = undefined;
    /**
    * possible values are: undefined, low, medium and high. Undefined is assigned per default
    * @member {String} criticality
    */
    criticality = undefined;
    /**
    * possible values are: undefined, easy, moderate and difficult. Undefined is assigned per default
    * @member {String} accessibility
    */
    accessibility = undefined;




}
