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
* The ProductOptionBase model module.
* @module model/ProductOptionBase
* @version 01.00.00
*/
export default class ProductOptionBase {
    /**
    * Constructs a new <code>ProductOptionBase</code>.
    * @alias module:model/ProductOptionBase
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ProductOptionBase</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProductOptionBase} obj Optional instance to populate.
    * @return {module:model/ProductOptionBase} The populated <code>ProductOptionBase</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductOptionBase();
                        
            
            if (data.hasOwnProperty('option_key')) {
                obj['option_key'] = ApiClient.convertToType(data['option_key'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }

    /**
    * natural identifier of the product option (unique per product_feature)
    * @member {String} option_key
    */
    option_key = undefined;
    /**
    * description text of the product option
    * @member {String} description
    */
    description = undefined;




}
