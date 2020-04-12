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
import NestedIDHref from './NestedIDHref';
import RequestForQuotationBase from './RequestForQuotationBase';

/**
* The RequestForQuotationResponse model module.
* @module model/RequestForQuotationResponse
* @version 01.00.00
*/
export default class RequestForQuotationResponse {
    /**
    * Constructs a new <code>RequestForQuotationResponse</code>.
    * @alias module:model/RequestForQuotationResponse
    * @class
    * @extends module:model/RequestForQuotationBase
    */

    constructor() {
        RequestForQuotationBase.call(this);
        
        
    }

    /**
    * Constructs a <code>RequestForQuotationResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RequestForQuotationResponse} obj Optional instance to populate.
    * @return {module:model/RequestForQuotationResponse} The populated <code>RequestForQuotationResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestForQuotationResponse();
            
            RequestForQuotationBase.constructFromObject(data, obj);
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = NestedIDHref.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('sender')) {
                obj['sender'] = NestedIDHref.constructFromObject(data['sender']);
            }
            if (data.hasOwnProperty('receiver')) {
                obj['receiver'] = NestedIDHref.constructFromObject(data['receiver']);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], Object);
            }
        }
        return obj;
    }

    /**
    * Id of object
    * @member {Number} id
    */
    id = undefined;
    /**
    * @member {module:model/NestedIDHref} status
    */
    status = undefined;
    /**
    * @member {module:model/NestedIDHref} sender
    */
    sender = undefined;
    /**
    * @member {module:model/NestedIDHref} receiver
    */
    receiver = undefined;
    /**
    * @member {Object} links
    */
    links = undefined;




}
