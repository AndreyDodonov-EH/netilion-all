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
import TenantBase from './TenantBase';

/**
* The TenantResponse model module.
* @module model/TenantResponse
* @version 01.00.00
*/
export default class TenantResponse {
    /**
    * Constructs a new <code>TenantResponse</code>.
    * @alias module:model/TenantResponse
    * @class
    * @extends module:model/TenantBase
    */

    constructor() {
        TenantBase.call(this);
        
        
    }

    /**
    * Constructs a <code>TenantResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TenantResponse} obj Optional instance to populate.
    * @return {module:model/TenantResponse} The populated <code>TenantResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TenantResponse();
            
            TenantBase.constructFromObject(data, obj);
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('public')) {
                obj['public'] = ApiClient.convertToType(data['public'], 'Boolean');
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
    * Indicates if the tenant is public
    * @member {Boolean} public
    */
    public = undefined;




}
