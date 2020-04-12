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
import HealthConditionCauseIDs from '../model/HealthConditionCauseIDs';
import HealthConditionsRequest from '../model/HealthConditionsRequest';
import HealthConditionsResponse from '../model/HealthConditionsResponse';

/**
* ProductHealthCondition service.
* @module api/ProductHealthConditionApi
* @version 01.00.00
*/
export default class ProductHealthConditionApi {

    /**
    * Constructs a new ProductHealthConditionApi. 
    * @alias module:api/ProductHealthConditionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add health conditions to an product
     * Add one or more health conditions to an product.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    addHealthConditionsToProductWithHttpInfo(body, productId) {
      let postBody = body;

      let pathParams = {
        'product_id': productId
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
        '/products/{product_id}/health_conditions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add health conditions to an product
     * Add one or more health conditions to an product.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    addHealthConditionsToProduct(body, productId) {
      return this.addHealthConditionsToProductWithHttpInfo(body, productId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all health conditions assigned to an product
     * Returns a list of health conditions of an product.  Possible include value: &#x60;&#x60;asset_status, causes, causes.remedies&#x60;&#x60;
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/HealthConditionsResponse} and HTTP response
     */
    getProductHealthConditionsWithHttpInfo(productId, opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'product_id': productId
      };
      let queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'include': opts['include'],
        'health_condition_id': opts['healthConditionId'],
        'diagnosis_code': opts['diagnosisCode'],
        'device_ident': opts['deviceIdent'],
        'protocol': opts['protocol'],
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
      let returnType = HealthConditionsResponse;

      return this.apiClient.callApi(
        '/products/{product_id}/health_conditions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all health conditions assigned to an product
     * Returns a list of health conditions of an product.  Possible include value: &#x60;&#x60;asset_status, causes, causes.remedies&#x60;&#x60;
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/HealthConditionsResponse}
     */
    getProductHealthConditions(productId, opts) {
      return this.getProductHealthConditionsWithHttpInfo(productId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Replace health conditions of an product
     * Replaces all health conditions belonging to an product. You can send a list of resources that will replace all previous values.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    reaplaceHealthConditionsOfProductWithHttpInfo(body, productId) {
      let postBody = body;

      let pathParams = {
        'product_id': productId
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
        '/products/{product_id}/health_conditions', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Replace health conditions of an product
     * Replaces all health conditions belonging to an product. You can send a list of resources that will replace all previous values.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    reaplaceHealthConditionsOfProduct(body, productId) {
      return this.reaplaceHealthConditionsOfProductWithHttpInfo(body, productId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove health conditions of an product
     * Remove one or more health conditions from an product.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    removeHealthConditionsOfProductWithHttpInfo(body, productId) {
      let postBody = body;

      let pathParams = {
        'product_id': productId
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
        '/products/{product_id}/health_conditions', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove health conditions of an product
     * Remove one or more health conditions from an product.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    removeHealthConditionsOfProduct(body, productId) {
      return this.removeHealthConditionsOfProductWithHttpInfo(body, productId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}
