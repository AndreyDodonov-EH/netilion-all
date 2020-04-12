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
* The CompanyNested model module.
* @module model/CompanyNested
* @version 01.00.00
*/
export default class CompanyNested {
    /**
    * Constructs a new <code>CompanyNested</code>.
    * Company is part of queries
    * @alias module:model/CompanyNested
    * @class
    * @param id {Number} The Company Id will be included in the answer of query products / assets. For create products / assets it will be ignored.
    * @param href {String} Link to get company information
    */

    constructor(id, href) {
        
        
        this['id'] = id;
        this['href'] = href;
        
    }

    /**
    * Constructs a <code>CompanyNested</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CompanyNested} obj Optional instance to populate.
    * @return {module:model/CompanyNested} The populated <code>CompanyNested</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompanyNested();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('href')) {
                obj['href'] = ApiClient.convertToType(data['href'], 'String');
            }
        }
        return obj;
    }

    /**
    * The Company Id will be included in the answer of query products / assets. For create products / assets it will be ignored.
    * @member {Number} id
    */
    id = undefined;
    /**
    * company name
    * @member {String} name
    */
    name = undefined;
    /**
    * Link to get company information
    * @member {String} href
    */
    href = undefined;




}
