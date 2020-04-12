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
    define(['ApiClient', 'model/Pagination', 'model/ThresholdResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Pagination'), require('./ThresholdResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.ThresholdsResponse = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.Pagination, root.NetilionApiDocumentation.ThresholdResponse);
  }
}(this, function(ApiClient, Pagination, ThresholdResponse) {
  'use strict';




  /**
   * The ThresholdsResponse model module.
   * @module model/ThresholdsResponse
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>ThresholdsResponse</code>.
   * @alias module:model/ThresholdsResponse
   * @class
   * @param thresholds {Array.<module:model/ThresholdResponse>} 
   * @param pagination {module:model/Pagination} 
   */
  var exports = function(thresholds, pagination) {
    var _this = this;

    _this['thresholds'] = thresholds;
    _this['pagination'] = pagination;
  };

  /**
   * Constructs a <code>ThresholdsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ThresholdsResponse} obj Optional instance to populate.
   * @return {module:model/ThresholdsResponse} The populated <code>ThresholdsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('thresholds')) {
        obj['thresholds'] = ApiClient.convertToType(data['thresholds'], [ThresholdResponse]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ThresholdResponse>} thresholds
   */
  exports.prototype['thresholds'] = undefined;
  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;



  return exports;
}));


