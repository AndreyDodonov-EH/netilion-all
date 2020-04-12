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
* The DocumentIDs model module.
* @module model/DocumentIDs
* @version 01.00.00
*/
export default class DocumentIDs {
    /**
    * Constructs a new <code>DocumentIDs</code>.
    * @alias module:model/DocumentIDs
    * @class
    * @param documents {Array.<module:model/NestedID>} 
    */

    constructor(documents) {
        
        
        this['documents'] = documents;
        
    }

    /**
    * Constructs a <code>DocumentIDs</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/DocumentIDs} obj Optional instance to populate.
    * @return {module:model/DocumentIDs} The populated <code>DocumentIDs</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentIDs();
                        
            
            if (data.hasOwnProperty('documents')) {
                obj['documents'] = ApiClient.convertToType(data['documents'], [NestedID]);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/NestedID>} documents
    */
    documents = undefined;




}
