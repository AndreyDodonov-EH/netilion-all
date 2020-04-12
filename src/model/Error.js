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
    root.NetilionApiDocumentation.Error = factory(root.NetilionApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Error model module.
   * @module model/Error
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>Error</code>.
   * @alias module:model/Error
   * @class
   * @param type {String} The type of the error that occured. Possible types are * access_denied - access to the required resource denied * api_lockout - action would lead to an api lockout * assigned - resources has assigned resource * assigned_restriction - resource can't be deleted because of dependents * association_blank - mandatory association was blank * association_not_found - invalid reference used for relation field * association_tenant_conflict - tenant association mismatch * association_conflict - association mismatch * associations_already_added - duplicate association * associations_not_found - invalid references used for relation field * blank - mandatory field was not set * boolean_format - value is not a boolean * date_format - invalid date format for field * date_range - invalid date range * date_time_format - invalid date time format for field * date_year_month_format - invalid date/year month/year format * greater_than - value to high for numeric field * id_format - invalid format of an ID field * internal_server_error - unexpected error on server * invalid - format not allowed * invalid_input - invalid input data caused an error * invalid_enum_value - the given value is not a valid enum value * key_format - invalid key format * lockout - action would lead to a resource lockout * less_than - value to low for numeric field * missing_header - a mandatory request header is missing * missing_parameter - a mandatory request parameter is missing * not_a_number - for numerical fields * not_unique_in_scope - resource not unique in corresponding scope * number_format - wrong input for number * parameter_missing - required parameter for resource is missing * parent - resource can not be deleted cause its a parent to other resources * present - field that should not be set * quota_exceeded - file, image or asset could not be created because the subscription quota has exceeded * service_unavailable - service is currently not available * specification_not_found - specification for given key not found * specifications_not_found - specifications for given keys not found * taken - unique field is already taken * tenant_on_child - tenant parent/child conflict * too_long - length not in valid range * too_short - length not in valid range * unconfirmed - user is unconfirmed * wrong_format - invalid date format for field * wrong_length - does not match exact length
   * @param message {String} readable message about the error
   */
  var exports = function(type, message) {
    var _this = this;

    _this['type'] = type;
    _this['message'] = message;

  };

  /**
   * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Error} obj Optional instance to populate.
   * @return {module:model/Error} The populated <code>Error</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('attribute')) {
        obj['attribute'] = ApiClient.convertToType(data['attribute'], 'String');
      }
    }
    return obj;
  }

  /**
   * The type of the error that occured. Possible types are * access_denied - access to the required resource denied * api_lockout - action would lead to an api lockout * assigned - resources has assigned resource * assigned_restriction - resource can't be deleted because of dependents * association_blank - mandatory association was blank * association_not_found - invalid reference used for relation field * association_tenant_conflict - tenant association mismatch * association_conflict - association mismatch * associations_already_added - duplicate association * associations_not_found - invalid references used for relation field * blank - mandatory field was not set * boolean_format - value is not a boolean * date_format - invalid date format for field * date_range - invalid date range * date_time_format - invalid date time format for field * date_year_month_format - invalid date/year month/year format * greater_than - value to high for numeric field * id_format - invalid format of an ID field * internal_server_error - unexpected error on server * invalid - format not allowed * invalid_input - invalid input data caused an error * invalid_enum_value - the given value is not a valid enum value * key_format - invalid key format * lockout - action would lead to a resource lockout * less_than - value to low for numeric field * missing_header - a mandatory request header is missing * missing_parameter - a mandatory request parameter is missing * not_a_number - for numerical fields * not_unique_in_scope - resource not unique in corresponding scope * number_format - wrong input for number * parameter_missing - required parameter for resource is missing * parent - resource can not be deleted cause its a parent to other resources * present - field that should not be set * quota_exceeded - file, image or asset could not be created because the subscription quota has exceeded * service_unavailable - service is currently not available * specification_not_found - specification for given key not found * specifications_not_found - specifications for given keys not found * taken - unique field is already taken * tenant_on_child - tenant parent/child conflict * too_long - length not in valid range * too_short - length not in valid range * unconfirmed - user is unconfirmed * wrong_format - invalid date format for field * wrong_length - does not match exact length
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * readable message about the error
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * the attribute on which the error occured. This could be used to figure out which field was invalid. Is also set for relation attributes with faulty references
   * @member {String} attribute
   */
  exports.prototype['attribute'] = undefined;



  return exports;
}));


