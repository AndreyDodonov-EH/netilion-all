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
import AssetHealthConditionNested from './AssetHealthConditionNested';

/**
* The AssetHealthConditionTimemachine model module.
* @module model/AssetHealthConditionTimemachine
* @version 01.00.00
*/
export default class AssetHealthConditionTimemachine {
    /**
    * Constructs a new <code>AssetHealthConditionTimemachine</code>.
    * @alias module:model/AssetHealthConditionTimemachine
    * @class
    * @param healthCondition {module:model/AssetHealthConditionNested} 
    * @param createdDatetime {Date} Date of the Create Event
    * @param deletedDatetime {Date} Date of the Destroy Event
    */

    constructor(healthCondition, createdDatetime, deletedDatetime) {
        
        
        this['health_condition'] = healthCondition;
        this['created_datetime'] = createdDatetime;
        this['deleted_datetime'] = deletedDatetime;
        
    }

    /**
    * Constructs a <code>AssetHealthConditionTimemachine</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AssetHealthConditionTimemachine} obj Optional instance to populate.
    * @return {module:model/AssetHealthConditionTimemachine} The populated <code>AssetHealthConditionTimemachine</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssetHealthConditionTimemachine();
                        
            
            if (data.hasOwnProperty('health_condition')) {
                obj['health_condition'] = AssetHealthConditionNested.constructFromObject(data['health_condition']);
            }
            if (data.hasOwnProperty('created_datetime')) {
                obj['created_datetime'] = ApiClient.convertToType(data['created_datetime'], 'Date');
            }
            if (data.hasOwnProperty('deleted_datetime')) {
                obj['deleted_datetime'] = ApiClient.convertToType(data['deleted_datetime'], 'Date');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/AssetHealthConditionNested} health_condition
    */
    health_condition = undefined;
    /**
    * Date of the Create Event
    * @member {Date} created_datetime
    */
    created_datetime = undefined;
    /**
    * Date of the Destroy Event
    * @member {Date} deleted_datetime
    */
    deleted_datetime = undefined;




}
