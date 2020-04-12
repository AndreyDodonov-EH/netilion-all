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
import RequestForQuotationResponse from './RequestForQuotationResponse';

/**
* The RequestForQuotationsResponse model module.
* @module model/RequestForQuotationsResponse
* @version 01.00.00
*/
export default class RequestForQuotationsResponse {
    /**
    * Constructs a new <code>RequestForQuotationsResponse</code>.
    * @alias module:model/RequestForQuotationsResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>RequestForQuotationsResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RequestForQuotationsResponse} obj Optional instance to populate.
    * @return {module:model/RequestForQuotationsResponse} The populated <code>RequestForQuotationsResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestForQuotationsResponse();
                        
            
            if (data.hasOwnProperty('request_for_quotations')) {
                obj['request_for_quotations'] = ApiClient.convertToType(data['request_for_quotations'], [RequestForQuotationResponse]);
            }
            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = Pagination.constructFromObject(data['pagination']);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/RequestForQuotationResponse>} request_for_quotations
    */
    request_for_quotations = undefined;
    /**
    * @member {module:model/Pagination} pagination
    */
    pagination = undefined;




}
