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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.NotificationBase = factory(root.NetilionApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The NotificationBase model module.
   * @module model/NotificationBase
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>NotificationBase</code>.
   * @alias module:model/NotificationBase
   * @class
   * @param name {String} The name of the notification
   * @param content {String} Supports translations.
   * @param startDatetime {String} start date/time of the notification: format example: 2016-01-01T18:30:00
   */
  var exports = function(name, content, startDatetime) {
    var _this = this;

    _this['name'] = name;
    _this['content'] = content;
    _this['start_datetime'] = startDatetime;

  };

  /**
   * Constructs a <code>NotificationBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotificationBase} obj Optional instance to populate.
   * @return {module:model/NotificationBase} The populated <code>NotificationBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('start_datetime')) {
        obj['start_datetime'] = ApiClient.convertToType(data['start_datetime'], 'String');
      }
      if (data.hasOwnProperty('end_datetime')) {
        obj['end_datetime'] = ApiClient.convertToType(data['end_datetime'], 'String');
      }
    }
    return obj;
  }

  /**
   * The name of the notification
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Supports translations.
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
  /**
   * start date/time of the notification: format example: 2016-01-01T18:30:00
   * @member {String} start_datetime
   */
  exports.prototype['start_datetime'] = undefined;
  /**
   * end date/time of the notification: format example: 2016-01-01T18:30:00
   * @member {String} end_datetime
   */
  exports.prototype['end_datetime'] = undefined;



  return exports;
}));


