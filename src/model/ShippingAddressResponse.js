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
import ShippingAddressRequest from './ShippingAddressRequest';

/**
* The ShippingAddressResponse model module.
* @module model/ShippingAddressResponse
* @version 01.00.00
*/
export default class ShippingAddressResponse {
    /**
    * Constructs a new <code>ShippingAddressResponse</code>.
    * @alias module:model/ShippingAddressResponse
    * @class
    * @extends module:model/ShippingAddressRequest
    */

    constructor() {
        ShippingAddressRequest.call(this, street, zipCode, city, countryCode);
        
        
    }

    /**
    * Constructs a <code>ShippingAddressResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ShippingAddressResponse} obj Optional instance to populate.
    * @return {module:model/ShippingAddressResponse} The populated <code>ShippingAddressResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShippingAddressResponse();
            
            ShippingAddressRequest.constructFromObject(data, obj);
            
            if (data.hasOwnProperty('country_name')) {
                obj['country_name'] = ApiClient.convertToType(data['country_name'], 'String');
            }
        }
        return obj;
    }

    /**
    * name of the country
    * @member {String} country_name
    */
    country_name = undefined;




}
