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
* The BillOfMaterialIDs model module.
* @module model/BillOfMaterialIDs
* @version 01.00.00
*/
export default class BillOfMaterialIDs {
    /**
    * Constructs a new <code>BillOfMaterialIDs</code>.
    * @alias module:model/BillOfMaterialIDs
    * @class
    * @param billOfMaterials {Array.<module:model/NestedID>} 
    */

    constructor(billOfMaterials) {
        
        
        this['billOfMaterials'] = billOfMaterials;
        
    }

    /**
    * Constructs a <code>BillOfMaterialIDs</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BillOfMaterialIDs} obj Optional instance to populate.
    * @return {module:model/BillOfMaterialIDs} The populated <code>BillOfMaterialIDs</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillOfMaterialIDs();
                        
            
            if (data.hasOwnProperty('billOfMaterials')) {
                obj['billOfMaterials'] = ApiClient.convertToType(data['billOfMaterials'], [NestedID]);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/NestedID>} billOfMaterials
    */
    billOfMaterials = undefined;




}
