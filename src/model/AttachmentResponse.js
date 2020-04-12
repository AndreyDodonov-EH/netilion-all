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

/**
* The AttachmentResponse model module.
* @module model/AttachmentResponse
* @version 01.00.00
*/
export default class AttachmentResponse {
    /**
    * Constructs a new <code>AttachmentResponse</code>.
    * @alias module:model/AttachmentResponse
    * @class
    * @param id {Number} Id of object
    * @param type {String} type of attachment, can be 'file' or 'link'
    * @param document {module:model/NestedIDHref} 
    * @param downloadHref {String} the download link to the file of the attachment
    */

    constructor(id, type, document, downloadHref) {
        
        
        this['id'] = id;
        this['type'] = type;
        this['document'] = document;
        this['download_href'] = downloadHref;
        
    }

    /**
    * Constructs a <code>AttachmentResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AttachmentResponse} obj Optional instance to populate.
    * @return {module:model/AttachmentResponse} The populated <code>AttachmentResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttachmentResponse();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('file_name')) {
                obj['file_name'] = ApiClient.convertToType(data['file_name'], 'String');
            }
            if (data.hasOwnProperty('fingerprint')) {
                obj['fingerprint'] = ApiClient.convertToType(data['fingerprint'], 'String');
            }
            if (data.hasOwnProperty('content_author')) {
                obj['content_author'] = ApiClient.convertToType(data['content_author'], 'String');
            }
            if (data.hasOwnProperty('content_version')) {
                obj['content_version'] = ApiClient.convertToType(data['content_version'], 'String');
            }
            if (data.hasOwnProperty('content_date')) {
                obj['content_date'] = ApiClient.convertToType(data['content_date'], 'String');
            }
            if (data.hasOwnProperty('remarks')) {
                obj['remarks'] = ApiClient.convertToType(data['remarks'], 'String');
            }
            if (data.hasOwnProperty('document')) {
                obj['document'] = NestedIDHref.constructFromObject(data['document']);
            }
            if (data.hasOwnProperty('languages')) {
                obj['languages'] = ApiClient.convertToType(data['languages'], ['String']);
            }
            if (data.hasOwnProperty('download_href')) {
                obj['download_href'] = ApiClient.convertToType(data['download_href'], 'String');
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
    * type of attachment, can be 'file' or 'link'
    * @member {String} type
    */
    type = undefined;
    /**
    * the original filename of the attachment
    * @member {String} file_name
    */
    file_name = undefined;
    /**
    * SHA256 checksum of the file
    * @member {String} fingerprint
    */
    fingerprint = undefined;
    /**
    * the file authors name
    * @member {String} content_author
    */
    content_author = undefined;
    /**
    * the version of the attachment
    * @member {String} content_version
    */
    content_version = undefined;
    /**
    * last edit date of the file
    * @member {String} content_date
    */
    content_date = undefined;
    /**
    * remarks of the attachment
    * @member {String} remarks
    */
    remarks = undefined;
    /**
    * @member {module:model/NestedIDHref} document
    */
    document = undefined;
    /**
    * the languages of the files content
    * @member {Array.<String>} languages
    */
    languages = undefined;
    /**
    * the download link to the file of the attachment
    * @member {String} download_href
    */
    download_href = undefined;




}
