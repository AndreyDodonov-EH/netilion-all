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
    define(['ApiClient', 'model/HealthConditionRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./HealthConditionRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.HealthConditionResponse = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.HealthConditionRequest);
  }
}(this, function(ApiClient, HealthConditionRequest) {
  'use strict';




  /**
   * The HealthConditionResponse model module.
   * @module model/HealthConditionResponse
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>HealthConditionResponse</code>.
   * @alias module:model/HealthConditionResponse
   * @class
   * @extends module:model/HealthConditionRequest
   * @param diagnosisCode {String} Diagnosis code of the health condition. Whitespaces are trimmed
   */
  var exports = function(diagnosisCode) {
    var _this = this;
    HealthConditionRequest.call(_this, diagnosisCode);
  };

  /**
   * Constructs a <code>HealthConditionResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HealthConditionResponse} obj Optional instance to populate.
   * @return {module:model/HealthConditionResponse} The populated <code>HealthConditionResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      HealthConditionRequest.constructFromObject(data, obj);
    }
    return obj;
  }

  exports.prototype = Object.create(HealthConditionRequest.prototype);
  exports.prototype.constructor = exports;




  return exports;
}));


