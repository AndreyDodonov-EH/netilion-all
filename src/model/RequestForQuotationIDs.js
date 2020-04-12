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

/**
* The RequestForQuotationIDs model module.
* @module model/RequestForQuotationIDs
* @version 01.00.00
*/
export default class RequestForQuotationIDs {
    /**
    * Constructs a new <code>RequestForQuotationIDs</code>.
    * @alias module:model/RequestForQuotationIDs
    * @class
    * @param requestForQuotations {Array.<module:model/NestedID>} 
    */

    constructor(requestForQuotations) {
        
        
        this['request_for_quotations'] = requestForQuotations;
        
    }

    /**
    * Constructs a <code>RequestForQuotationIDs</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RequestForQuotationIDs} obj Optional instance to populate.
    * @return {module:model/RequestForQuotationIDs} The populated <code>RequestForQuotationIDs</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestForQuotationIDs();
                        
            
            if (data.hasOwnProperty('request_for_quotations')) {
                obj['request_for_quotations'] = ApiClient.convertToType(data['request_for_quotations'], [NestedID]);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/NestedID>} request_for_quotations
    */
    request_for_quotations = undefined;




}
