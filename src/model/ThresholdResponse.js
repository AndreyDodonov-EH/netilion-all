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
* The ThresholdResponse model module.
* @module model/ThresholdResponse
* @version 01.00.00
*/
export default class ThresholdResponse {
    /**
    * Constructs a new <code>ThresholdResponse</code>.
    * @alias module:model/ThresholdResponse
    * @class
    * @param id {Number} Id of object
    * @param key {String} key of the threshold. This key is related to the keys set in asset values.
    */

    constructor(id, key) {
        
        
        this['id'] = id;
        this['key'] = key;
        
    }

    /**
    * Constructs a <code>ThresholdResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ThresholdResponse} obj Optional instance to populate.
    * @return {module:model/ThresholdResponse} The populated <code>ThresholdResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ThresholdResponse();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('low')) {
                obj['low'] = ApiClient.convertToType(data['low'], 'Number');
            }
            if (data.hasOwnProperty('low_low')) {
                obj['low_low'] = ApiClient.convertToType(data['low_low'], 'Number');
            }
            if (data.hasOwnProperty('high')) {
                obj['high'] = ApiClient.convertToType(data['high'], 'Number');
            }
            if (data.hasOwnProperty('high_high')) {
                obj['high_high'] = ApiClient.convertToType(data['high_high'], 'Number');
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
    * key of the threshold. This key is related to the keys set in asset values.
    * @member {String} key
    */
    key = undefined;
    /**
    * the lowest warning limit
    * @member {Number} low
    */
    low = undefined;
    /**
    * the lowest critical limit
    * @member {Number} low_low
    */
    low_low = undefined;
    /**
    * the highest warning limit
    * @member {Number} high
    */
    high = undefined;
    /**
    * the highest critical limit
    * @member {Number} high_high
    */
    high_high = undefined;




}
