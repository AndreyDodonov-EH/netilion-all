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
    define(['ApiClient', 'model/NestedID'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NestedID'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.CategoryIDs = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.NestedID);
  }
}(this, function(ApiClient, NestedID) {
  'use strict';




  /**
   * The CategoryIDs model module.
   * @module model/CategoryIDs
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>CategoryIDs</code>.
   * @alias module:model/CategoryIDs
   * @class
   * @param categories {Array.<module:model/NestedID>} 
   */
  var exports = function(categories) {
    var _this = this;

    _this['categories'] = categories;
  };

  /**
   * Constructs a <code>CategoryIDs</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CategoryIDs} obj Optional instance to populate.
   * @return {module:model/CategoryIDs} The populated <code>CategoryIDs</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('categories')) {
        obj['categories'] = ApiClient.convertToType(data['categories'], [NestedID]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/NestedID>} categories
   */
  exports.prototype['categories'] = undefined;



  return exports;
}));


