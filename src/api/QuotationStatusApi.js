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
import ErrorResponse from '../model/ErrorResponse';
import QuotationStatusRequest from '../model/QuotationStatusRequest';
import QuotationStatusResponse from '../model/QuotationStatusResponse';

/**
* QuotationStatus service.
* @module api/QuotationStatusApi
* @version 01.00.00
*/
export default class QuotationStatusApi {

    /**
    * Constructs a new QuotationStatusApi. 
    * @alias module:api/QuotationStatusApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a new quotation status
     * Code must be unique. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. POST sets values in default language: en.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/QuotationStatusResponse} and HTTP response
     */
    createQuotationStatusWithHttpInfo(body) {
      let postBody = body;

      let pathParams = {
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
      let returnType = QuotationStatusResponse;

      return this.apiClient.callApi(
        '/quotation/statuses', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a new quotation status
     * Code must be unique. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. POST sets values in default language: en.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/QuotationStatusResponse}
     */
    createQuotationStatus(body) {
      return this.createQuotationStatusWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an quotation status
     * Delete a specific resource identified by the id in the URL.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteQuotationStatusWithHttpInfo(id) {
      let postBody = null;

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API-Key', 'Authentication'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/quotation/statuses/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an quotation status
     * Delete a specific resource identified by the id in the URL.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteQuotationStatus(id) {
      return this.deleteQuotationStatusWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the status of the specific quotation
     * Returns the status of the quotation. Needed if only permission on quotation but not on tenant. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language. Possible include value: &#x60;&#x60;&#x60;tenant&#x60;&#x60;&#x60;
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/QuotationStatusResponse} and HTTP response
     */
    getQuotationIdStatusWithHttpInfo(quotationId, opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'quotation_id': quotationId
      };
      let queryParams = {
        'include': opts['include']
      };
      let headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      let formParams = {
      };

      let authNames = ['API-Key', 'Authentication'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = QuotationStatusResponse;

      return this.apiClient.callApi(
        '/quotations/{quotation_id}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the status of the specific quotation
     * Returns the status of the quotation. Needed if only permission on quotation but not on tenant. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language. Possible include value: &#x60;&#x60;&#x60;tenant&#x60;&#x60;&#x60;
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/QuotationStatusResponse}
     */
    getQuotationIdStatus(quotationId, opts) {
      return this.getQuotationIdStatusWithHttpInfo(quotationId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single quotation status
     * Get a specific quotation status identified by the id in the URL. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/QuotationStatusResponse} and HTTP response
     */
    getQuotationStatusByIdWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      let formParams = {
      };

      let authNames = ['API-Key', 'Authentication'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = QuotationStatusResponse;

      return this.apiClient.callApi(
        '/quotation/statuses/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single quotation status
     * Get a specific quotation status identified by the id in the URL. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/QuotationStatusResponse}
     */
    getQuotationStatusById(id, opts) {
      return this.getQuotationStatusByIdWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a range of quotation statuses
     * Returns a list of all quotation statuses that are available in your scope. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    getQuotationStatusesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'name': opts['name'],
        'tenant_id': opts['tenantId'],
        'code': opts['code'],
        'order_by': opts['orderBy']
      };
      let headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      let formParams = {
      };

      let authNames = ['API-Key', 'Authentication'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/quotation/statuses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a range of quotation statuses
     * Returns a list of all quotation statuses that are available in your scope. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    getQuotationStatuses(opts) {
      return this.getQuotationStatusesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an quotation status
     * Update accessible parameters of the requested resource. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To add a translation set Content-Language.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updateQuotationStatusWithHttpInfo(body, id, opts) {
      opts = opts || {};
      let postBody = body;

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
        'Content-Language': opts['contentLanguage']
      };
      let formParams = {
      };

      let authNames = ['API-Key', 'Authentication'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/quotation/statuses/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an quotation status
     * Update accessible parameters of the requested resource. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To add a translation set Content-Language.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateQuotationStatus(body, id, opts) {
      return this.updateQuotationStatusWithHttpInfo(body, id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}
