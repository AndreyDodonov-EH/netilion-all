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
    define(['ApiClient', 'model/AssetHealthConditionTimemachine', 'model/Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AssetHealthConditionTimemachine'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.AssetHealthConditionsTimemachineResponse = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.AssetHealthConditionTimemachine, root.NetilionApiDocumentation.Pagination);
  }
}(this, function(ApiClient, AssetHealthConditionTimemachine, Pagination) {
  'use strict';




  /**
   * The AssetHealthConditionsTimemachineResponse model module.
   * @module model/AssetHealthConditionsTimemachineResponse
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>AssetHealthConditionsTimemachineResponse</code>.
   * @alias module:model/AssetHealthConditionsTimemachineResponse
   * @class
   * @param assetHealthConditionTimemachine {Array.<module:model/AssetHealthConditionTimemachine>} 
   * @param pagination {module:model/Pagination} 
   */
  var exports = function(assetHealthConditionTimemachine, pagination) {
    var _this = this;

    _this['asset_health_condition_timemachine'] = assetHealthConditionTimemachine;
    _this['pagination'] = pagination;
  };

  /**
   * Constructs a <code>AssetHealthConditionsTimemachineResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AssetHealthConditionsTimemachineResponse} obj Optional instance to populate.
   * @return {module:model/AssetHealthConditionsTimemachineResponse} The populated <code>AssetHealthConditionsTimemachineResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('asset_health_condition_timemachine')) {
        obj['asset_health_condition_timemachine'] = ApiClient.convertToType(data['asset_health_condition_timemachine'], [AssetHealthConditionTimemachine]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/AssetHealthConditionTimemachine>} asset_health_condition_timemachine
   */
  exports.prototype['asset_health_condition_timemachine'] = undefined;
  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;



  return exports;
}));


