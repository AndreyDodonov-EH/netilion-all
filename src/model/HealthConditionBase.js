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
    root.NetilionApiDocumentation.HealthConditionBase = factory(root.NetilionApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The HealthConditionBase model module.
   * @module model/HealthConditionBase
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>HealthConditionBase</code>.
   * @alias module:model/HealthConditionBase
   * @class
   * @param diagnosisCode {String} Diagnosis code of the health condition. Whitespaces are trimmed
   */
  var exports = function(diagnosisCode) {
    var _this = this;

    _this['diagnosis_code'] = diagnosisCode;
  };

  /**
   * Constructs a <code>HealthConditionBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HealthConditionBase} obj Optional instance to populate.
   * @return {module:model/HealthConditionBase} The populated <code>HealthConditionBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('diagnosis_code')) {
        obj['diagnosis_code'] = ApiClient.convertToType(data['diagnosis_code'], 'String');
      }
    }
    return obj;
  }

  /**
   * Diagnosis code of the health condition. Whitespaces are trimmed
   * @member {String} diagnosis_code
   */
  exports.prototype['diagnosis_code'] = undefined;



  return exports;
}));


