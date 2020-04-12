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

import ApiClient from "../ApiClient";
import AssetKeyValuesResponse from '../model/AssetKeyValuesResponse';
import AssetValuesRequest from '../model/AssetValuesRequest';
import AssetValuesResponse from '../model/AssetValuesResponse';
import ErrorResponse from '../model/ErrorResponse';

/**
* AssetValues service.
* @module api/AssetValuesApi
* @version 01.00.00
*/
export default class AssetValuesApi {

    /**
    * Constructs a new AssetValuesApi. 
    * @alias module:api/AssetValuesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create asset values
     * Store values measured by an asset. For performance reasons, this endpoint behaves somewhat differently than normal endpoints:  * The data passed to this endpoint is processed asynchronously. * This endpoint always returns an empty response with status 204 No Content. * The data will be validated during processing. Invalid data will be dropped silently. * The request size is limited to 500kb, requests larger then 500kb will get an \&quot;413 Payload Too Large\&quot; error.  Data validations and manipultation:    * Keys and groups can only consist of the charaters [a-z A-Z 0-9 . - _ ].   * Keys and groups will be converted to lower case strings.   * Keys and groups must be between 1 and 128 characters long.   * Units can be passed as id or code. See the units endpoint for all available units.   * The timestamp is not mandatory and will be set to the time the value was transmitted to the server (This only works if the values get transfered one at a time, if you send multiple values without timestamp at once, all values will get the same timestamp and there for only the last one will be stored)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    createAssetValuesWithHttpInfo(body, assetId) {
      let postBody = body;

      let pathParams = {
        'asset_id': assetId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API-Key', 'Authentication'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/assets/{asset_id}/values', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create asset values
     * Store values measured by an asset. For performance reasons, this endpoint behaves somewhat differently than normal endpoints:  * The data passed to this endpoint is processed asynchronously. * This endpoint always returns an empty response with status 204 No Content. * The data will be validated during processing. Invalid data will be dropped silently. * The request size is limited to 500kb, requests larger then 500kb will get an \&quot;413 Payload Too Large\&quot; error.  Data validations and manipultation:    * Keys and groups can only consist of the charaters [a-z A-Z 0-9 . - _ ].   * Keys and groups will be converted to lower case strings.   * Keys and groups must be between 1 and 128 characters long.   * Units can be passed as id or code. See the units endpoint for all available units.   * The timestamp is not mandatory and will be set to the time the value was transmitted to the server (This only works if the values get transfered one at a time, if you send multiple values without timestamp at once, all values will get the same timestamp and there for only the last one will be stored)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    createAssetValues(body, assetId) {
      return this.createAssetValuesWithHttpInfo(body, assetId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get latest values for the asset.
     * Returns a collection of the latest values for all keys of the asset. Possible include values: &#x60;&#x60;&#x60;unit&#x60;&#x60;&#x60;
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AssetValuesResponse} and HTTP response
     */
    getAssetValuesWithHttpInfo(assetId, opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'asset_id': assetId
      };
      let queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'include': opts['include'],
        'key': opts['key'],
        'key_unit_id': opts['keyUnitId'],
        'group': opts['group']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API-Key', 'Authentication'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AssetValuesResponse;

      return this.apiClient.callApi(
        '/assets/{asset_id}/values', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get latest values for the asset.
     * Returns a collection of the latest values for all keys of the asset. Possible include values: &#x60;&#x60;&#x60;unit&#x60;&#x60;&#x60;
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AssetValuesResponse}
     */
    getAssetValues(assetId, opts) {
      return this.getAssetValuesWithHttpInfo(assetId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get asset values for a specific key.
     * Returns a collection of the history values of an values for the specified key. For a aggregated result of the values the filter parameters aggregation and interval are mandatory. Receiving the result in a specific unit please use the filter parameter unit. The allowed units can be found in the intro section. With the filter parameters from to it is possible to receive the history of a defined time period. Possible include values: &#x60;&#x60;&#x60;unit&#x60;&#x60;&#x60;
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AssetKeyValuesResponse} and HTTP response
     */
    getAssetValuesForKeyWithHttpInfo(assetId, key, opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'asset_id': assetId,
        'key': key
      };
      let queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'include': opts['include'],
        'from': opts['from'],
        'to': opts['to'],
        'unit_id': opts['unitId'],
        'aggregation': opts['aggregation'],
        'interval': opts['interval'],
        'order_by': opts['orderBy']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API-Key', 'Authentication'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AssetKeyValuesResponse;

      return this.apiClient.callApi(
        '/assets/{asset_id}/values/{key}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get asset values for a specific key.
     * Returns a collection of the history values of an values for the specified key. For a aggregated result of the values the filter parameters aggregation and interval are mandatory. Receiving the result in a specific unit please use the filter parameter unit. The allowed units can be found in the intro section. With the filter parameters from to it is possible to receive the history of a defined time period. Possible include values: &#x60;&#x60;&#x60;unit&#x60;&#x60;&#x60;
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AssetKeyValuesResponse}
     */
    getAssetValuesForKey(assetId, key, opts) {
      return this.getAssetValuesForKeyWithHttpInfo(assetId, key, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}
