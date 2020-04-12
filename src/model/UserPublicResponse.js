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
* The UserPublicResponse model module.
* @module model/UserPublicResponse
* @version 01.00.00
*/
export default class UserPublicResponse {
    /**
    * Constructs a new <code>UserPublicResponse</code>.
    * @alias module:model/UserPublicResponse
    * @class
    * @param id {Number} Id of object
    */

    constructor(id) {
        
        
        this['id'] = id;
        
    }

    /**
    * Constructs a <code>UserPublicResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/UserPublicResponse} obj Optional instance to populate.
    * @return {module:model/UserPublicResponse} The populated <code>UserPublicResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserPublicResponse();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
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
    * @member {String} first_name
    */
    first_name = undefined;
    /**
    * @member {String} last_name
    */
    last_name = undefined;
    /**
    * @member {Object} links
    */
    links = undefined;




}
