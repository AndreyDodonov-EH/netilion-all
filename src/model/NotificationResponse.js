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
    define(['ApiClient', 'model/Links14', 'model/NotificationBase'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Links14'), require('./NotificationBase'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.NotificationResponse = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.Links14, root.NetilionApiDocumentation.NotificationBase);
  }
}(this, function(ApiClient, Links14, NotificationBase) {
  'use strict';




  /**
   * The NotificationResponse model module.
   * @module model/NotificationResponse
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>NotificationResponse</code>.
   * @alias module:model/NotificationResponse
   * @class
   * @extends module:model/NotificationBase
   * @param name {String} The name of the notification
   * @param content {String} Supports translations.
   * @param startDatetime {String} start date/time of the notification: format example: 2016-01-01T18:30:00
   */
  var exports = function(name, content, startDatetime) {
    var _this = this;
    NotificationBase.call(_this, name, content, startDatetime);


  };

  /**
   * Constructs a <code>NotificationResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotificationResponse} obj Optional instance to populate.
   * @return {module:model/NotificationResponse} The populated <code>NotificationResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      NotificationBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = Links14.constructFromObject(data['links']);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(NotificationBase.prototype);
  exports.prototype.constructor = exports;

  /**
   * Id of object
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/Links14} links
   */
  exports.prototype['links'] = undefined;



  return exports;
}));


