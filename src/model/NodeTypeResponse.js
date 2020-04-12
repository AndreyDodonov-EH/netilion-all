/**
 * Netilion API Documentation
 * Welcome to the Netilion API Documentation, which provides interactive access and documentation to our REST API. Please visit our developer portal for further instructions and information: https://developer.netilion.endress.com/ 
 *
 * OpenAPI spec version: 01.00.00
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.7
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/NestedIDHref', 'model/NodeTypeBase'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NestedIDHref'), require('./NodeTypeBase'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.NodeTypeResponse = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.NestedIDHref, root.NetilionApiDocumentation.NodeTypeBase);
  }
}(this, function(ApiClient, NestedIDHref, NodeTypeBase) {
  'use strict';




  /**
   * The NodeTypeResponse model module.
   * @module model/NodeTypeResponse
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>NodeTypeResponse</code>.
   * @alias module:model/NodeTypeResponse
   * @class
   * @extends module:model/NodeTypeBase
   * @param name {String} Supports translations. Whitespaces are trimmed.
   */
  var exports = function(name) {
    var _this = this;
    NodeTypeBase.call(_this, name);



  };

  /**
   * Constructs a <code>NodeTypeResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeTypeResponse} obj Optional instance to populate.
   * @return {module:model/NodeTypeResponse} The populated <code>NodeTypeResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      NodeTypeBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('tenant')) {
        obj['tenant'] = NestedIDHref.constructFromObject(data['tenant']);
      }
      if (data.hasOwnProperty('parent')) {
        obj['parent'] = NestedIDHref.constructFromObject(data['parent']);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(NodeTypeBase.prototype);
  exports.prototype.constructor = exports;

  /**
   * Id of object
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/NestedIDHref} tenant
   */
  exports.prototype['tenant'] = undefined;
  /**
   * @member {module:model/NestedIDHref} parent
   */
  exports.prototype['parent'] = undefined;



  return exports;
}));


