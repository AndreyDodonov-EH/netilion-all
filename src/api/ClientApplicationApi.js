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
import ClientApplicationIDs from '../model/ClientApplicationIDs';
import ClientApplicationPublicResponse from '../model/ClientApplicationPublicResponse';
import ClientApplicationRequest from '../model/ClientApplicationRequest';
import ClientApplicationResponse from '../model/ClientApplicationResponse';
import ClientApplicationsResponse from '../model/ClientApplicationsResponse';
import EdgeDeviceApplicationsResponse from '../model/EdgeDeviceApplicationsResponse';
import ErrorResponse from '../model/ErrorResponse';
import UserIDs from '../model/UserIDs';
import UsersPublicResponse from '../model/UsersPublicResponse';

/**
* ClientApplication service.
* @module api/ClientApplicationApi
* @version 01.00.00
*/
export default class ClientApplicationApi {

    /**
    * Constructs a new ClientApplicationApi. 
    * @alias module:api/ClientApplicationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add client applications to an edge device application
     * Add one or more client applications to an edge device application. This action requires the edge device admin role.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    addClientApplicationsToEdgeApplicationWithHttpInfo(body, edgeDeviceApplicationId) {
      let postBody = body;

      let pathParams = {
        'edge_device_application_id': edgeDeviceApplicationId
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
        '/edge_device/applications/{edge_device_application_id}/client_applications', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add client applications to an edge device application
     * Add one or more client applications to an edge device application. This action requires the edge device admin role.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    addClientApplicationsToEdgeApplication(body, edgeDeviceApplicationId) {
      return this.addClientApplicationsToEdgeApplicationWithHttpInfo(body, edgeDeviceApplicationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Add users to a client application user role
     * Add one or more users to a user role.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    addUsersToClientApplicationUserRoleWithHttpInfo(body, clientApplicationId, userroleId) {
      let postBody = body;

      let pathParams = {
        'client_application_id': clientApplicationId,
        'userrole_id': userroleId
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
        '/client_applications/{client_application_id}/roles/{userrole_id}/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add users to a client application user role
     * Add one or more users to a user role.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    addUsersToClientApplicationUserRole(body, clientApplicationId, userroleId) {
      return this.addUsersToClientApplicationUserRoleWithHttpInfo(body, clientApplicationId, userroleId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a new client_application
     * Create a new client_application.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ClientApplicationResponse} and HTTP response
     */
    createClientApplicationWithHttpInfo(body) {
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
      let returnType = ClientApplicationResponse;

      return this.apiClient.callApi(
        '/client_applications', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a new client_application
     * Create a new client_application.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ClientApplicationResponse}
     */
    createClientApplication(body) {
      return this.createClientApplicationWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an client_application
     * Delete a specific resource in your accessible scope, identified by the id in the URL.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteClientApplicationWithHttpInfo(id) {
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
        '/client_applications/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an client_application
     * Delete a specific resource in your accessible scope, identified by the id in the URL.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteClientApplication(id) {
      return this.deleteClientApplicationWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove users from a client application user role
     * Remove one or more users from an user role. To work with roles, admin role is required.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteUsersFromClientApplicationUserRoleWithHttpInfo(body, clientApplicationId, userroleId) {
      let postBody = body;

      let pathParams = {
        'client_application_id': clientApplicationId,
        'userrole_id': userroleId
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
        '/client_applications/{client_application_id}/roles/{userrole_id}/users', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove users from a client application user role
     * Remove one or more users from an user role. To work with roles, admin role is required.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteUsersFromClientApplicationUserRole(body, clientApplicationId, userroleId) {
      return this.deleteUsersFromClientApplicationUserRoleWithHttpInfo(body, clientApplicationId, userroleId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GetAPI Keys of Client Application
     * Returns a list of api_keys of an client application. If the query has no matches, the response is an empty list. Only api_keys on which the user has the can_read permission are loaded.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ClientApplicationResponse} and HTTP response
     */
    getAPIKeysOfClientApplicationWithHttpInfo(clientApplicationId, opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'client_application_id': clientApplicationId
      };
      let queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'api_key': opts['apiKey'],
        'valid_from': opts['validFrom'],
        'valid_from_from': opts['validFromFrom'],
        'valid_from_to': opts['validFromTo'],
        'valid_until': opts['validUntil'],
        'valid_until_from': opts['validUntilFrom'],
        'valid_until_to': opts['validUntilTo'],
        'order_by': opts['orderBy']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API-Key', 'Authentication'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ClientApplicationResponse;

      return this.apiClient.callApi(
        '/client_applications/{client_application_id}/api_keys', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GetAPI Keys of Client Application
     * Returns a list of api_keys of an client application. If the query has no matches, the response is an empty list. Only api_keys on which the user has the can_read permission are loaded.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ClientApplicationResponse}
     */
    getAPIKeysOfClientApplication(clientApplicationId, opts) {
      return this.getAPIKeysOfClientApplicationWithHttpInfo(clientApplicationId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single client_application
     * Get a specific client_application in your accessible scope, identified by the id in the URL.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ClientApplicationResponse} and HTTP response
     */
    getClientApplicationByIdWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'include': opts['include']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API-Key', 'Authentication'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ClientApplicationResponse;

      return this.apiClient.callApi(
        '/client_applications/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single client_application
     * Get a specific client_application in your accessible scope, identified by the id in the URL.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ClientApplicationResponse}
     */
    getClientApplicationById(id, opts) {
      return this.getClientApplicationByIdWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a range of client_applications
     * Returns a list of client_applications in your accessible scope. If the query has no matches, the response is an empty list. Only client_applications on which the user has the can_read permission are loaded. Possible include values: &#x60;&#x60;&#x60;technical_user&#x60;&#x60;&#x60;
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ClientApplicationsResponse} and HTTP response
     */
    getClientApplicationsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'include': opts['include'],
        'name': opts['name'],
        'contact_person_id': opts['contactPersonId'],
        'order_by': opts['orderBy']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API-Key', 'Authentication'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ClientApplicationsResponse;

      return this.apiClient.callApi(
        '/client_applications', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a range of client_applications
     * Returns a list of client_applications in your accessible scope. If the query has no matches, the response is an empty list. Only client_applications on which the user has the can_read permission are loaded. Possible include values: &#x60;&#x60;&#x60;technical_user&#x60;&#x60;&#x60;
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ClientApplicationsResponse}
     */
    getClientApplications(opts) {
      return this.getClientApplicationsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all client applications of one edge device application
     * Returns a list of all client applications associated with the selected edge device application. Possible include values: &#x60;&#x60;&#x60;technical_user&#x60;&#x60;&#x60; You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ClientApplicationsResponse} and HTTP response
     */
    getClientApplicationsOfEdgeDeviceApplicationWithHttpInfo(edgeDeviceApplicationId, opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'edge_device_application_id': edgeDeviceApplicationId
      };
      let queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'include': opts['include'],
        'name': opts['name'],
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
      let returnType = ClientApplicationsResponse;

      return this.apiClient.callApi(
        '/edge_device/applications/{edge_device_application_id}/client_applications', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all client applications of one edge device application
     * Returns a list of all client applications associated with the selected edge device application. Possible include values: &#x60;&#x60;&#x60;technical_user&#x60;&#x60;&#x60; You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ClientApplicationsResponse}
     */
    getClientApplicationsOfEdgeDeviceApplication(edgeDeviceApplicationId, opts) {
      return this.getClientApplicationsOfEdgeDeviceApplicationWithHttpInfo(edgeDeviceApplicationId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get current client_application
     * Returns current client application used to access the api.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ClientApplicationPublicResponse} and HTTP response
     */
    getCurrentClientApplicationWithHttpInfo() {
      let postBody = null;

      let pathParams = {
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
      let returnType = ClientApplicationPublicResponse;

      return this.apiClient.callApi(
        '/client_applications/current', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get current client_application
     * Returns current client application used to access the api.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ClientApplicationPublicResponse}
     */
    getCurrentClientApplication() {
      return this.getCurrentClientApplicationWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all edge devices applications for an client application
     * Returns a list of all edge devices applications of an client application. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EdgeDeviceApplicationsResponse} and HTTP response
     */
    getEdgeDeviceApplicationsOfClientApplicationWithHttpInfo(clientApplicationId, opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'client_application_id': clientApplicationId
      };
      let queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'name': opts['name'],
        'code': opts['code'],
        'edge_device_type_id': opts['edgeDeviceTypeId'],
        'software_version_id': opts['softwareVersionId'],
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
      let returnType = EdgeDeviceApplicationsResponse;

      return this.apiClient.callApi(
        '/client_applications/{client_application_id}/edge_device/applications', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all edge devices applications for an client application
     * Returns a list of all edge devices applications of an client application. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EdgeDeviceApplicationsResponse}
     */
    getEdgeDeviceApplicationsOfClientApplication(clientApplicationId, opts) {
      return this.getEdgeDeviceApplicationsOfClientApplicationWithHttpInfo(clientApplicationId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all users of a user role assigned to a client application
     * Returns a list of all users that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UsersPublicResponse} and HTTP response
     */
    getUsersOfClientApplicationUserRoleWithHttpInfo(clientApplicationId, userroleId, opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'client_application_id': clientApplicationId,
        'userrole_id': userroleId
      };
      let queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'first_name': opts['firstName'],
        'last_name': opts['lastName'],
        'order_by': opts['orderBy']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API-Key', 'Authentication'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UsersPublicResponse;

      return this.apiClient.callApi(
        '/client_applications/{client_application_id}/roles/{userrole_id}/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all users of a user role assigned to a client application
     * Returns a list of all users that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UsersPublicResponse}
     */
    getUsersOfClientApplicationUserRole(clientApplicationId, userroleId, opts) {
      return this.getUsersOfClientApplicationUserRoleWithHttpInfo(clientApplicationId, userroleId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove client applications from an edge device application
     * Remove one or more client applications from an edge device application. This action requires the edge device admin role.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    removeClientApplicationsOfEdgeDeviceApplicationWithHttpInfo(body, edgeDeviceApplicationId) {
      let postBody = body;

      let pathParams = {
        'edge_device_application_id': edgeDeviceApplicationId
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
        '/edge_device/applications/{edge_device_application_id}/client_applications', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove client applications from an edge device application
     * Remove one or more client applications from an edge device application. This action requires the edge device admin role.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    removeClientApplicationsOfEdgeDeviceApplication(body, edgeDeviceApplicationId) {
      return this.removeClientApplicationsOfEdgeDeviceApplicationWithHttpInfo(body, edgeDeviceApplicationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Replace the client applications of an edge device application
     * Replaces all client applications belonging to an edge device application. You can send a list of resources that will replace all previous values. This action requires the edge device admin role.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    replaceClientApplicationsOfEdgeDeviceApplicationWithHttpInfo(body, edgeDeviceApplicationId) {
      let postBody = body;

      let pathParams = {
        'edge_device_application_id': edgeDeviceApplicationId
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
        '/edge_device/applications/{edge_device_application_id}/client_applications', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Replace the client applications of an edge device application
     * Replaces all client applications belonging to an edge device application. You can send a list of resources that will replace all previous values. This action requires the edge device admin role.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    replaceClientApplicationsOfEdgeDeviceApplication(body, edgeDeviceApplicationId) {
      return this.replaceClientApplicationsOfEdgeDeviceApplicationWithHttpInfo(body, edgeDeviceApplicationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an client_application
     * Update accessible parameters of the requested resource in your accessible scope.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updateClientApplicationWithHttpInfo(body, id) {
      let postBody = body;

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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/client_applications/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an client_application
     * Update accessible parameters of the requested resource in your accessible scope.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateClientApplication(body, id) {
      return this.updateClientApplicationWithHttpInfo(body, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}
