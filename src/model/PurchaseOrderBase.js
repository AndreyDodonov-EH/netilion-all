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
* The PurchaseOrderBase model module.
* @module model/PurchaseOrderBase
* @version 01.00.00
*/
export default class PurchaseOrderBase {
    /**
    * Constructs a new <code>PurchaseOrderBase</code>.
    * @alias module:model/PurchaseOrderBase
    * @class
    * @param _number {String} 
    * @param name {String} 
    * @param sender {module:model/NestedID} 
    * @param receiver {module:model/NestedID} 
    */

    constructor(_number, name, sender, receiver) {
        
        
        this['number'] = _number;
        this['name'] = name;
        this['sender'] = sender;
        this['receiver'] = receiver;
        
    }

    /**
    * Constructs a <code>PurchaseOrderBase</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PurchaseOrderBase} obj Optional instance to populate.
    * @return {module:model/PurchaseOrderBase} The populated <code>PurchaseOrderBase</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PurchaseOrderBase();
                        
            
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
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
            if (data.hasOwnProperty('quotation')) {
                obj['quotation'] = NestedID.constructFromObject(data['quotation']);
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
    /**
    * @member {module:model/NestedID} quotation
    */
    quotation = undefined;




}
