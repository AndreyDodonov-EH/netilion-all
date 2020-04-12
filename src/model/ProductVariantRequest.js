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
import ProductVariantBase from './ProductVariantBase';

/**
* The ProductVariantRequest model module.
* @module model/ProductVariantRequest
* @version 01.00.00
*/
export default class ProductVariantRequest {
    /**
    * Constructs a new <code>ProductVariantRequest</code>.
    * @alias module:model/ProductVariantRequest
    * @class
    * @extends module:model/ProductVariantBase
    */

    constructor() {
        ProductVariantBase.call(this);
        
        
    }

    /**
    * Constructs a <code>ProductVariantRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProductVariantRequest} obj Optional instance to populate.
    * @return {module:model/ProductVariantRequest} The populated <code>ProductVariantRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductVariantRequest();
            
            ProductVariantBase.constructFromObject(data, obj);
            
            if (data.hasOwnProperty('product')) {
                obj['product'] = NestedID.constructFromObject(data['product']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/NestedID} product
    */
    product = undefined;




}
