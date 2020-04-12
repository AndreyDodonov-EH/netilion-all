/**
 * Netilion API Documentation
 * Welcome to the Netilion API Documentation, which provides interactive access and documentation to our REST API. Please visit our developer portal for further instructions and information: https://developer.netilion.endress.com/ 
 *
 * OpenAPI spec version: 01.00.00
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NetilionApiDocumentation);
  }
}(this, function(expect, NetilionApiDocumentation) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NetilionApiDocumentation.EdgeDeviceBase();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('EdgeDeviceBase', function() {
    it('should create an instance of EdgeDeviceBase', function() {
      // uncomment below and update the code to test EdgeDeviceBase
      //var instane = new NetilionApiDocumentation.EdgeDeviceBase();
      //expect(instance).to.be.a(NetilionApiDocumentation.EdgeDeviceBase);
    });

    it('should have the property serialNumber (base name: "serial_number")', function() {
      // uncomment below and update the code to test the property serialNumber
      //var instane = new NetilionApiDocumentation.EdgeDeviceBase();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new NetilionApiDocumentation.EdgeDeviceBase();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new NetilionApiDocumentation.EdgeDeviceBase();
      //expect(instance).to.be();
    });

    it('should have the property logLevel (base name: "log_level")', function() {
      // uncomment below and update the code to test the property logLevel
      //var instane = new NetilionApiDocumentation.EdgeDeviceBase();
      //expect(instance).to.be();
    });

    it('should have the property applyTimestamp (base name: "apply_timestamp")', function() {
      // uncomment below and update the code to test the property applyTimestamp
      //var instane = new NetilionApiDocumentation.EdgeDeviceBase();
      //expect(instance).to.be();
    });

  });

}));
