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
import Pagination from './Pagination';
import TechnicalUserResponse from './TechnicalUserResponse';

/**
* The TechnicalUsersResponse model module.
* @module model/TechnicalUsersResponse
* @version 01.00.00
*/
export default class TechnicalUsersResponse {
    /**
    * Constructs a new <code>TechnicalUsersResponse</code>.
    * @alias module:model/TechnicalUsersResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>TechnicalUsersResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TechnicalUsersResponse} obj Optional instance to populate.
    * @return {module:model/TechnicalUsersResponse} The populated <code>TechnicalUsersResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TechnicalUsersResponse();
                        
            
            if (data.hasOwnProperty('technical_users')) {
                obj['technical_users'] = ApiClient.convertToType(data['technical_users'], [TechnicalUserResponse]);
            }
            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = Pagination.constructFromObject(data['pagination']);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/TechnicalUserResponse>} technical_users
    */
    technical_users = undefined;
    /**
    * @member {module:model/Pagination} pagination
    */
    pagination = undefined;




}
