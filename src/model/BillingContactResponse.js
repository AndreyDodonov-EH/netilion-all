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
import AddressBase from './AddressBase';

/**
* The BillingContactResponse model module.
* @module model/BillingContactResponse
* @version 01.00.00
*/
export default class BillingContactResponse {
    /**
    * Constructs a new <code>BillingContactResponse</code>.
    * @alias module:model/BillingContactResponse
    * @class
    * @extends module:model/AddressBase
    * @param street {} streetname
    * @param zipCode {} zip code of the city
    * @param city {} city name
    * @param countryCode {} abbreviation of the country conform to ISO-3166
    */

    constructor(street, zipCode, city, countryCode) {
        AddressBase.call(this, street, zipCode, city, countryCode);
        
        
    }

    /**
    * Constructs a <code>BillingContactResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BillingContactResponse} obj Optional instance to populate.
    * @return {module:model/BillingContactResponse} The populated <code>BillingContactResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingContactResponse();
            
            AddressBase.constructFromObject(data, obj);
            
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('country_name')) {
                obj['country_name'] = ApiClient.convertToType(data['country_name'], 'String');
            }
        }
        return obj;
    }

    /**
    * first_name
    * @member {String} first_name
    */
    first_name = undefined;
    /**
    * last_name
    * @member {String} last_name
    */
    last_name = undefined;
    /**
    * email
    * @member {String} email
    */
    email = undefined;
    /**
    * name of the country
    * @member {String} country_name
    */
    country_name = undefined;




}
