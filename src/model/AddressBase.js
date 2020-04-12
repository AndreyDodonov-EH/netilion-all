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
* The AddressBase model module.
* @module model/AddressBase
* @version 01.00.00
*/
export default class AddressBase {
    /**
    * Constructs a new <code>AddressBase</code>.
    * @alias module:model/AddressBase
    * @class
    * @param street {String} streetname
    * @param zipCode {String} zip code of the city
    * @param city {String} city name
    * @param countryCode {String} abbreviation of the country conform to ISO-3166
    */

    constructor(street, zipCode, city, countryCode) {
        
        
        this['street'] = street;
        this['zip_code'] = zipCode;
        this['city'] = city;
        this['country_code'] = countryCode;
        
    }

    /**
    * Constructs a <code>AddressBase</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AddressBase} obj Optional instance to populate.
    * @return {module:model/AddressBase} The populated <code>AddressBase</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressBase();
                        
            
            if (data.hasOwnProperty('street')) {
                obj['street'] = ApiClient.convertToType(data['street'], 'String');
            }
            if (data.hasOwnProperty('street_number')) {
                obj['street_number'] = ApiClient.convertToType(data['street_number'], 'String');
            }
            if (data.hasOwnProperty('zip_code')) {
                obj['zip_code'] = ApiClient.convertToType(data['zip_code'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('region_code')) {
                obj['region_code'] = ApiClient.convertToType(data['region_code'], 'String');
            }
            if (data.hasOwnProperty('country_code')) {
                obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('company_name')) {
                obj['company_name'] = ApiClient.convertToType(data['company_name'], 'String');
            }
        }
        return obj;
    }

    /**
    * streetname
    * @member {String} street
    */
    street = undefined;
    /**
    * street number
    * @member {String} street_number
    */
    street_number = undefined;
    /**
    * zip code of the city
    * @member {String} zip_code
    */
    zip_code = undefined;
    /**
    * city name
    * @member {String} city
    */
    city = undefined;
    /**
    * code of the region
    * @member {String} region_code
    */
    region_code = undefined;
    /**
    * abbreviation of the country conform to ISO-3166
    * @member {String} country_code
    */
    country_code = undefined;
    /**
    * phone number
    * @member {String} phone
    */
    phone = undefined;
    /**
    * company name
    * @member {String} company_name
    */
    company_name = undefined;




}
