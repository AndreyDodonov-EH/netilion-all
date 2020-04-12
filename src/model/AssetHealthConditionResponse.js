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
import HealthConditionBase from './HealthConditionBase';
import NestedIDHref from './NestedIDHref';

/**
* The AssetHealthConditionResponse model module.
* @module model/AssetHealthConditionResponse
* @version 01.00.00
*/
export default class AssetHealthConditionResponse {
    /**
    * Constructs a new <code>AssetHealthConditionResponse</code>.
    * @alias module:model/AssetHealthConditionResponse
    * @class
    * @extends module:model/HealthConditionBase
    * @param diagnosisCode {} Diagnosis code of the health condition. Whitespaces are trimmed
    */

    constructor(diagnosisCode) {
        HealthConditionBase.call(this, diagnosisCode);
        
        
    }

    /**
    * Constructs a <code>AssetHealthConditionResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AssetHealthConditionResponse} obj Optional instance to populate.
    * @return {module:model/AssetHealthConditionResponse} The populated <code>AssetHealthConditionResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssetHealthConditionResponse();
            
            HealthConditionBase.constructFromObject(data, obj);
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('asset_status')) {
                obj['asset_status'] = NestedIDHref.constructFromObject(data['asset_status']);
            }
            if (data.hasOwnProperty('channel')) {
                obj['channel'] = ApiClient.convertToType(data['channel'], 'String');
            }
            if (data.hasOwnProperty('module')) {
                obj['module'] = ApiClient.convertToType(data['module'], 'String');
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
    * @member {module:model/NestedIDHref} asset_status
    */
    asset_status = undefined;
    /**
    * channel for the cause
    * @member {String} channel
    */
    channel = undefined;
    /**
    * module for the cause
    * @member {String} module
    */
    module = undefined;
    /**
    * @member {Object} links
    */
    links = undefined;




}
