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
import ProductLineItem from './ProductLineItem';
import QuotationBase from './QuotationBase';

/**
* The QuotationResponse model module.
* @module model/QuotationResponse
* @version 01.00.00
*/
export default class QuotationResponse {
    /**
    * Constructs a new <code>QuotationResponse</code>.
    * @alias module:model/QuotationResponse
    * @class
    * @extends module:model/QuotationBase
    * @param _number {} 
    * @param name {} 
    */

    constructor(_number, name) {
        QuotationBase.call(this, _number, name);
        
        
    }

    /**
    * Constructs a <code>QuotationResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/QuotationResponse} obj Optional instance to populate.
    * @return {module:model/QuotationResponse} The populated <code>QuotationResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuotationResponse();
            
            QuotationBase.constructFromObject(data, obj);
            
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
            if (data.hasOwnProperty('line_items')) {
                obj['line_items'] = ApiClient.convertToType(data['line_items'], [ProductLineItem]);
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
    * @member {Array.<module:model/ProductLineItem>} line_items
    */
    line_items = undefined;
    /**
    * @member {Object} links
    */
    links = undefined;




}
