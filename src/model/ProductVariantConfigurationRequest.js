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
    define(['ApiClient', 'model/Features'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Features'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.ProductVariantConfigurationRequest = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.Features);
  }
}(this, function(ApiClient, Features) {
  'use strict';




  /**
   * The ProductVariantConfigurationRequest model module.
   * @module model/ProductVariantConfigurationRequest
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>ProductVariantConfigurationRequest</code>.
   * @alias module:model/ProductVariantConfigurationRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ProductVariantConfigurationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductVariantConfigurationRequest} obj Optional instance to populate.
   * @return {module:model/ProductVariantConfigurationRequest} The populated <code>ProductVariantConfigurationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('configurations')) {
        obj['configurations'] = ApiClient.convertToType(data['configurations'], [Features]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Features>} configurations
   */
  exports.prototype['configurations'] = undefined;



  return exports;
}));


