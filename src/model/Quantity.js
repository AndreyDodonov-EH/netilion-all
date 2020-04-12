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
* The Quantity model module.
* @module model/Quantity
* @version 01.00.00
*/
export default class Quantity {
    /**
    * Constructs a new <code>Quantity</code>.
    * @alias module:model/Quantity
    * @class
    * @param id {Number} Id of the nested resource
    * @param quantity {Number} Quantity of the nested resource
    */

    constructor(id, quantity) {
        
        
        this['id'] = id;
        this['quantity'] = quantity;
        
    }

    /**
    * Constructs a <code>Quantity</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Quantity} obj Optional instance to populate.
    * @return {module:model/Quantity} The populated <code>Quantity</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Quantity();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
        }
        return obj;
    }

    /**
    * Id of the nested resource
    * @member {Number} id
    */
    id = undefined;
    /**
    * Quantity of the nested resource
    * @member {Number} quantity
    */
    quantity = undefined;




}
