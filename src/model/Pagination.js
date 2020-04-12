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
* The Pagination model module.
* @module model/Pagination
* @version 01.00.00
*/
export default class Pagination {
    /**
    * Constructs a new <code>Pagination</code>.
    * @alias module:model/Pagination
    * @class
    * @param totalCount {Number} items in the result
    * @param pageCount {Number} number of pages
    * @param perPage {Number} items per page
    * @param page {Number} current page
    */

    constructor(totalCount, pageCount, perPage, page) {
        
        
        this['total_count'] = totalCount;
        this['page_count'] = pageCount;
        this['per_page'] = perPage;
        this['page'] = page;
        
    }

    /**
    * Constructs a <code>Pagination</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Pagination} obj Optional instance to populate.
    * @return {module:model/Pagination} The populated <code>Pagination</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Pagination();
                        
            
            if (data.hasOwnProperty('total_count')) {
                obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
            }
            if (data.hasOwnProperty('page_count')) {
                obj['page_count'] = ApiClient.convertToType(data['page_count'], 'Number');
            }
            if (data.hasOwnProperty('per_page')) {
                obj['per_page'] = ApiClient.convertToType(data['per_page'], 'Number');
            }
            if (data.hasOwnProperty('page')) {
                obj['page'] = ApiClient.convertToType(data['page'], 'Number');
            }
            if (data.hasOwnProperty('prev')) {
                obj['prev'] = ApiClient.convertToType(data['prev'], 'String');
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
            if (data.hasOwnProperty('first')) {
                obj['first'] = ApiClient.convertToType(data['first'], 'String');
            }
            if (data.hasOwnProperty('last')) {
                obj['last'] = ApiClient.convertToType(data['last'], 'String');
            }
        }
        return obj;
    }

    /**
    * items in the result
    * @member {Number} total_count
    */
    total_count = undefined;
    /**
    * number of pages
    * @member {Number} page_count
    */
    page_count = undefined;
    /**
    * items per page
    * @member {Number} per_page
    */
    per_page = undefined;
    /**
    * current page
    * @member {Number} page
    */
    page = undefined;
    /**
    * The link for the immediate previous page of results.
    * @member {String} prev
    */
    prev = undefined;
    /**
    * The link for the immediate next page of results.
    * @member {String} next
    */
    next = undefined;
    /**
    * The link for the first page of results.
    * @member {String} first
    */
    first = undefined;
    /**
    * The link for the last page of results.
    * @member {String} last
    */
    last = undefined;




}
