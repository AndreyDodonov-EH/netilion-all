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
    root.NetilionApiDocumentation.BillOfMaterialBase = factory(root.NetilionApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BillOfMaterialBase model module.
   * @module model/BillOfMaterialBase
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>BillOfMaterialBase</code>.
   * @alias module:model/BillOfMaterialBase
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>BillOfMaterialBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BillOfMaterialBase} obj Optional instance to populate.
   * @return {module:model/BillOfMaterialBase} The populated <code>BillOfMaterialBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'String');
      }
      if (data.hasOwnProperty('author')) {
        obj['author'] = ApiClient.convertToType(data['author'], 'String');
      }
    }
    return obj;
  }

  /**
   * Bill of material name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * description text of the Instrumentation
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Date must be in format '2016-01-01'
   * @member {String} date
   */
  exports.prototype['date'] = undefined;
  /**
   * Author who created the bill of material
   * @member {String} author
   */
  exports.prototype['author'] = undefined;



  return exports;
}));


