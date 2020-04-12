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
* The RequestForQuotationBase model module.
* @module model/RequestForQuotationBase
* @version 01.00.00
*/
export default class RequestForQuotationBase {
    /**
    * Constructs a new <code>RequestForQuotationBase</code>.
    * @alias module:model/RequestForQuotationBase
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>RequestForQuotationBase</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RequestForQuotationBase} obj Optional instance to populate.
    * @return {module:model/RequestForQuotationBase} The populated <code>RequestForQuotationBase</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestForQuotationBase();
                        
            
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('author')) {
                obj['author'] = ApiClient.convertToType(data['author'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = NestedID.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('sender')) {
                obj['sender'] = NestedID.constructFromObject(data['sender']);
            }
            if (data.hasOwnProperty('receiver')) {
                obj['receiver'] = NestedID.constructFromObject(data['receiver']);
            }
        }
        return obj;
    }

    /**
    * @member {String} number
    */
    number = undefined;
    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * Date must be in format '2016-01-01'
    * @member {String} date
    */
    date = undefined;
    /**
    * Author Author who created the request for quotation
    * @member {String} author
    */
    author = undefined;
    /**
    * Description
    * @member {String} description
    */
    description = undefined;
    /**
    * @member {module:model/NestedID} status
    */
    status = undefined;
    /**
    * @member {module:model/NestedID} sender
    */
    sender = undefined;
    /**
    * @member {module:model/NestedID} receiver
    */
    receiver = undefined;




}
