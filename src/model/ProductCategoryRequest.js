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
import ProductCategoryBase from './ProductCategoryBase';

/**
* The ProductCategoryRequest model module.
* @module model/ProductCategoryRequest
* @version 01.00.00
*/
export default class ProductCategoryRequest {
    /**
    * Constructs a new <code>ProductCategoryRequest</code>.
    * @alias module:model/ProductCategoryRequest
    * @class
    * @extends module:model/ProductCategoryBase
    * @param name {} Supports translations. Whitespaces are trimmed.
    */

    constructor(name) {
        ProductCategoryBase.call(this, name);
        
        
    }

    /**
    * Constructs a <code>ProductCategoryRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProductCategoryRequest} obj Optional instance to populate.
    * @return {module:model/ProductCategoryRequest} The populated <code>ProductCategoryRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductCategoryRequest();
            
            ProductCategoryBase.constructFromObject(data, obj);
            
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = NestedID.constructFromObject(data['parent']);
            }
            if (data.hasOwnProperty('tenant')) {
                obj['tenant'] = NestedID.constructFromObject(data['tenant']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/NestedID} parent
    */
    parent = undefined;
    /**
    * @member {module:model/NestedID} tenant
    */
    tenant = undefined;




}
