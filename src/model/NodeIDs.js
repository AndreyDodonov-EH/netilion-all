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
* The NodeIDs model module.
* @module model/NodeIDs
* @version 01.00.00
*/
export default class NodeIDs {
    /**
    * Constructs a new <code>NodeIDs</code>.
    * @alias module:model/NodeIDs
    * @class
    * @param nodes {Array.<module:model/NestedID>} 
    */

    constructor(nodes) {
        
        
        this['nodes'] = nodes;
        
    }

    /**
    * Constructs a <code>NodeIDs</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NodeIDs} obj Optional instance to populate.
    * @return {module:model/NodeIDs} The populated <code>NodeIDs</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NodeIDs();
                        
            
            if (data.hasOwnProperty('nodes')) {
                obj['nodes'] = ApiClient.convertToType(data['nodes'], [NestedID]);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/NestedID>} nodes
    */
    nodes = undefined;




}
