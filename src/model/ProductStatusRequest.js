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
import ProductStatusBase from './ProductStatusBase';

/**
* The ProductStatusRequest model module.
* @module model/ProductStatusRequest
* @version 01.00.00
*/
export default class ProductStatusRequest {
    /**
    * Constructs a new <code>ProductStatusRequest</code>.
    * @alias module:model/ProductStatusRequest
    * @class
    * @extends module:model/ProductStatusBase
    * @param code {} The value must be unique. Whitespaces are trimmed.
    * @param name {} Supports translations. Whitespaces are trimmed.
    */

    constructor(code, name) {
        ProductStatusBase.call(this, code, name);
        
        
    }

    /**
    * Constructs a <code>ProductStatusRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProductStatusRequest} obj Optional instance to populate.
    * @return {module:model/ProductStatusRequest} The populated <code>ProductStatusRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductStatusRequest();
            
            ProductStatusBase.constructFromObject(data, obj);
            
            if (data.hasOwnProperty('tenant')) {
                obj['tenant'] = NestedID.constructFromObject(data['tenant']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/NestedID} tenant
    */
    tenant = undefined;




}
