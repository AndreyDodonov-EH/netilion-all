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
* The EdgeDeviceBase model module.
* @module model/EdgeDeviceBase
* @version 01.00.00
*/
export default class EdgeDeviceBase {
    /**
    * Constructs a new <code>EdgeDeviceBase</code>.
    * @alias module:model/EdgeDeviceBase
    * @class
    * @param serialNumber {String} serial number of the edge device
    */

    constructor(serialNumber) {
        
        
        this['serial_number'] = serialNumber;
        
    }

    /**
    * Constructs a <code>EdgeDeviceBase</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/EdgeDeviceBase} obj Optional instance to populate.
    * @return {module:model/EdgeDeviceBase} The populated <code>EdgeDeviceBase</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EdgeDeviceBase();
                        
            
            if (data.hasOwnProperty('serial_number')) {
                obj['serial_number'] = ApiClient.convertToType(data['serial_number'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('log_level')) {
                obj['log_level'] = ApiClient.convertToType(data['log_level'], 'String');
            }
            if (data.hasOwnProperty('apply_timestamp')) {
                obj['apply_timestamp'] = ApiClient.convertToType(data['apply_timestamp'], 'String');
            }
        }
        return obj;
    }

    /**
    * serial number of the edge device
    * @member {String} serial_number
    */
    serial_number = undefined;
    /**
    * name of the edge device
    * @member {String} name
    */
    name = undefined;
    /**
    * description of the edge device
    * @member {String} description
    */
    description = undefined;
    /**
    * log level the edge device should use (allowed values: trace, debug, info, warning, error, critical, off)
    * @member {String} log_level
    */
    log_level = undefined;
    /**
    * timestamp when the current settings have been applied at in the edge device. Expected date format is YYYY-MM-DDThh:mm:ss
    * @member {String} apply_timestamp
    */
    apply_timestamp = undefined;




}
