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
* The ProductCategoryBase model module.
* @module model/ProductCategoryBase
* @version 01.00.00
*/
export default class ProductCategoryBase {
    /**
    * Constructs a new <code>ProductCategoryBase</code>.
    * @alias module:model/ProductCategoryBase
    * @class
    * @param name {String} Supports translations. Whitespaces are trimmed.
    */

    constructor(name) {
        
        
        this['name'] = name;
        
    }

    /**
    * Constructs a <code>ProductCategoryBase</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProductCategoryBase} obj Optional instance to populate.
    * @return {module:model/ProductCategoryBase} The populated <code>ProductCategoryBase</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductCategoryBase();
                        
            
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('source_ref')) {
                obj['source_ref'] = ApiClient.convertToType(data['source_ref'], 'String');
            }
        }
        return obj;
    }

    /**
    * The value must be unique. Whitespaces are trimmed.
    * @member {String} code
    */
    code = undefined;
    /**
    * Supports translations. Whitespaces are trimmed.
    * @member {String} name
    */
    name = undefined;
    /**
    * Supports translations.
    * @member {String} description
    */
    description = undefined;
    /**
    * Source_ref of the product category
    * @member {String} source_ref
    */
    source_ref = undefined;




}
