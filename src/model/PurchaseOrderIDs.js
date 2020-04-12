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
* The PurchaseOrderIDs model module.
* @module model/PurchaseOrderIDs
* @version 01.00.00
*/
export default class PurchaseOrderIDs {
    /**
    * Constructs a new <code>PurchaseOrderIDs</code>.
    * @alias module:model/PurchaseOrderIDs
    * @class
    * @param purchaseOrders {Array.<module:model/NestedID>} 
    */

    constructor(purchaseOrders) {
        
        
        this['purchase_orders'] = purchaseOrders;
        
    }

    /**
    * Constructs a <code>PurchaseOrderIDs</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PurchaseOrderIDs} obj Optional instance to populate.
    * @return {module:model/PurchaseOrderIDs} The populated <code>PurchaseOrderIDs</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PurchaseOrderIDs();
                        
            
            if (data.hasOwnProperty('purchase_orders')) {
                obj['purchase_orders'] = ApiClient.convertToType(data['purchase_orders'], [NestedID]);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/NestedID>} purchase_orders
    */
    purchase_orders = undefined;




}
