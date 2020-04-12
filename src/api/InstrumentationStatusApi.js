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
import InstrumentationStatusRequest from '../model/InstrumentationStatusRequest';
import InstrumentationStatusResponse from '../model/InstrumentationStatusResponse';

/**
* InstrumentationStatus service.
* @module api/InstrumentationStatusApi
* @version 01.00.00
*/
export default class InstrumentationStatusApi {

    /**
    * Constructs a new InstrumentationStatusApi. 
    * @alias module:api/InstrumentationStatusApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a new instrumentation status
     * Code must be unique. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. POST sets values in default language: en.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InstrumentationStatusResponse} and HTTP response
     */
    createInstrumentationStatusWithHttpInfo(body) {
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
      let returnType = InstrumentationStatusResponse;

      return this.apiClient.callApi(
        '/instrumentation/statuses', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a new instrumentation status
     * Code must be unique. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. POST sets values in default language: en.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InstrumentationStatusResponse}
     */
    createInstrumentationStatus(body) {
      return this.createInstrumentationStatusWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an instrumentation status
     * Delete a specific resource identified by the id in the URL.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteInstrumentationStatusWithHttpInfo(id) {
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
        '/instrumentation/statuses/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an instrumentation status
     * Delete a specific resource identified by the id in the URL.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteInstrumentationStatus(id) {
      return this.deleteInstrumentationStatusWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the status of the specific instrumentation
     * Returns the status of the instrumentation. Needed if only permission on instrumentation but not on tenant. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InstrumentationStatusResponse} and HTTP response
     */
    getInstrumentationIdStatusWithHttpInfo(instrumentationId, opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'instrumentation_id': instrumentationId
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
      let returnType = InstrumentationStatusResponse;

      return this.apiClient.callApi(
        '/instrumentations/{instrumentation_id}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the status of the specific instrumentation
     * Returns the status of the instrumentation. Needed if only permission on instrumentation but not on tenant. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InstrumentationStatusResponse}
     */
    getInstrumentationIdStatus(instrumentationId, opts) {
      return this.getInstrumentationIdStatusWithHttpInfo(instrumentationId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single instrumentation status
     * Get a specific instrumentation status identified by the id in the URL. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InstrumentationStatusResponse} and HTTP response
     */
    getInstrumentationStatusByIdWithHttpInfo(id, opts) {
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
      let returnType = InstrumentationStatusResponse;

      return this.apiClient.callApi(
        '/instrumentation/statuses/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single instrumentation status
     * Get a specific instrumentation status identified by the id in the URL. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InstrumentationStatusResponse}
     */
    getInstrumentationStatusById(id, opts) {
      return this.getInstrumentationStatusByIdWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a range of instrumentation statuses
     * Returns a list of all event statuses that are available in your scope. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    getInstrumentationStatusesWithHttpInfo(opts) {
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
        '/instrumentation/statuses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a range of instrumentation statuses
     * Returns a list of all event statuses that are available in your scope. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    getInstrumentationStatuses(opts) {
      return this.getInstrumentationStatusesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all possible statuses of the specified instrumentation
     * Returns a list of all possible instrumentation statuses for the specified instrument. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    getInstrumentationStatusesOptionsWithHttpInfo(instrumentationId, opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'instrumentation_id': instrumentationId
      };
      let queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'tenant_id': opts['tenantId'],
        'name': opts['name'],
        'code': opts['code']
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
        '/instrumentations/{instrumentation_id}/status-options', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all possible statuses of the specified instrumentation
     * Returns a list of all possible instrumentation statuses for the specified instrument. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    getInstrumentationStatusesOptions(instrumentationId, opts) {
      return this.getInstrumentationStatusesOptionsWithHttpInfo(instrumentationId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an instrumentation status
     * Update accessible parameters of the requested resource. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To add a translation set Content-Language.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updateInstrumentationStatusWithHttpInfo(body, id, opts) {
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
        '/instrumentation/statuses/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an instrumentation status
     * Update accessible parameters of the requested resource. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To add a translation set Content-Language.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateInstrumentationStatus(body, id, opts) {
      return this.updateInstrumentationStatusWithHttpInfo(body, id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}
