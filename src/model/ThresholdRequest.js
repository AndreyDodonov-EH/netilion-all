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
import ThresholdBase from './ThresholdBase';

/**
* The ThresholdRequest model module.
* @module model/ThresholdRequest
* @version 01.00.00
*/
export default class ThresholdRequest {
    /**
    * Constructs a new <code>ThresholdRequest</code>.
    * @alias module:model/ThresholdRequest
    * @class
    * @extends module:model/ThresholdBase
    */

    constructor() {
        ThresholdBase.call(this);
        
        
    }

    /**
    * Constructs a <code>ThresholdRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ThresholdRequest} obj Optional instance to populate.
    * @return {module:model/ThresholdRequest} The populated <code>ThresholdRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ThresholdRequest();
            
            ThresholdBase.constructFromObject(data, obj);
            
        }
        return obj;
    }





}
