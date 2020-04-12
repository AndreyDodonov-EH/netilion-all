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
import AssetBase from './AssetBase';
import NestedIDHref from './NestedIDHref';

/**
* The AssetResponse model module.
* @module model/AssetResponse
* @version 01.00.00
*/
export default class AssetResponse {
    /**
    * Constructs a new <code>AssetResponse</code>.
    * @alias module:model/AssetResponse
    * @class
    * @extends module:model/AssetBase
    * @param serialNumber {} at least 4 characters long and unique within the manufacturers scope. Whitespaces are trimmed
    */

    constructor(serialNumber) {
        AssetBase.call(this, serialNumber);
        
        
    }

    /**
    * Constructs a <code>AssetResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AssetResponse} obj Optional instance to populate.
    * @return {module:model/AssetResponse} The populated <code>AssetResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssetResponse();
            
            AssetBase.constructFromObject(data, obj);
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('product')) {
                obj['product'] = NestedIDHref.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = NestedIDHref.constructFromObject(data['parent']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = NestedIDHref.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('tenant')) {
                obj['tenant'] = NestedIDHref.constructFromObject(data['tenant']);
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
    * @member {module:model/NestedIDHref} product
    */
    product = undefined;
    /**
    * @member {module:model/NestedIDHref} parent
    */
    parent = undefined;
    /**
    * @member {module:model/NestedIDHref} status
    */
    status = undefined;
    /**
    * @member {module:model/NestedIDHref} tenant
    */
    tenant = undefined;
    /**
    * @member {Object} links
    */
    links = undefined;




}
