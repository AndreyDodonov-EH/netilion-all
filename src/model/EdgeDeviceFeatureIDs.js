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
import NestedID from './NestedID';

/**
* The EdgeDeviceFeatureIDs model module.
* @module model/EdgeDeviceFeatureIDs
* @version 01.00.00
*/
export default class EdgeDeviceFeatureIDs {
    /**
    * Constructs a new <code>EdgeDeviceFeatureIDs</code>.
    * @alias module:model/EdgeDeviceFeatureIDs
    * @class
    * @param edgeDeviceFeatures {Array.<module:model/NestedID>} 
    */

    constructor(edgeDeviceFeatures) {
        
        
        this['edge_device_features'] = edgeDeviceFeatures;
        
    }

    /**
    * Constructs a <code>EdgeDeviceFeatureIDs</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/EdgeDeviceFeatureIDs} obj Optional instance to populate.
    * @return {module:model/EdgeDeviceFeatureIDs} The populated <code>EdgeDeviceFeatureIDs</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EdgeDeviceFeatureIDs();
                        
            
            if (data.hasOwnProperty('edge_device_features')) {
                obj['edge_device_features'] = ApiClient.convertToType(data['edge_device_features'], [NestedID]);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/NestedID>} edge_device_features
    */
    edge_device_features = undefined;




}
