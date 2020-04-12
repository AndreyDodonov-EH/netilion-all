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
    define(['ApiClient', 'model/EventTypeBase', 'model/NestedIDHref'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EventTypeBase'), require('./NestedIDHref'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.EventTypeResponse = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.EventTypeBase, root.NetilionApiDocumentation.NestedIDHref);
  }
}(this, function(ApiClient, EventTypeBase, NestedIDHref) {
  'use strict';




  /**
   * The EventTypeResponse model module.
   * @module model/EventTypeResponse
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>EventTypeResponse</code>.
   * @alias module:model/EventTypeResponse
   * @class
   * @extends module:model/EventTypeBase
   * @param name {String} Supports translations. Whitespaces are trimmed.
   */
  var exports = function(name) {
    var _this = this;
    EventTypeBase.call(_this, name);


  };

  /**
   * Constructs a <code>EventTypeResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EventTypeResponse} obj Optional instance to populate.
   * @return {module:model/EventTypeResponse} The populated <code>EventTypeResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      EventTypeBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('tenant')) {
        obj['tenant'] = NestedIDHref.constructFromObject(data['tenant']);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(EventTypeBase.prototype);
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



  return exports;
}));


