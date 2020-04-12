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
import Pagination from './Pagination';
import ProductResponse from './ProductResponse';

/**
* The ProductsResponse model module.
* @module model/ProductsResponse
* @version 01.00.00
*/
export default class ProductsResponse {
    /**
    * Constructs a new <code>ProductsResponse</code>.
    * @alias module:model/ProductsResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ProductsResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProductsResponse} obj Optional instance to populate.
    * @return {module:model/ProductsResponse} The populated <code>ProductsResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductsResponse();
                        
            
            if (data.hasOwnProperty('products')) {
                obj['products'] = ApiClient.convertToType(data['products'], [ProductResponse]);
            }
            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = Pagination.constructFromObject(data['pagination']);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/ProductResponse>} products
    */
    products = undefined;
    /**
    * @member {module:model/Pagination} pagination
    */
    pagination = undefined;




}
