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
    define(['ApiClient', 'model/Link'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Link'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.Links8 = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.Link);
  }
}(this, function(ApiClient, Link) {
  'use strict';




  /**
   * The Links8 model module.
   * @module model/Links8
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>Links8</code>.
   * @alias module:model/Links8
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Links8</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Links8} obj Optional instance to populate.
   * @return {module:model/Links8} The populated <code>Links8</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('products')) {
        obj['products'] = Link.constructFromObject(data['products']);
      }
      if (data.hasOwnProperty('software_versions')) {
        obj['software_versions'] = Link.constructFromObject(data['software_versions']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Link} products
   */
  exports.prototype['products'] = undefined;
  /**
   * @member {module:model/Link} software_versions
   */
  exports.prototype['software_versions'] = undefined;



  return exports;
}));


