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
import DataExportResponse from './DataExportResponse';

/**
* The DataExportsResponse model module.
* @module model/DataExportsResponse
* @version 01.00.00
*/
export default class DataExportsResponse {
    /**
    * Constructs a new <code>DataExportsResponse</code>.
    * @alias module:model/DataExportsResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>DataExportsResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/DataExportsResponse} obj Optional instance to populate.
    * @return {module:model/DataExportsResponse} The populated <code>DataExportsResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DataExportsResponse();
                        
            
            if (data.hasOwnProperty('data_exports')) {
                obj['data_exports'] = ApiClient.convertToType(data['data_exports'], [DataExportResponse]);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/DataExportResponse>} data_exports
    */
    data_exports = undefined;




}
