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
    instance = new NetilionApiDocumentation.AccessRightsResponse();
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

  describe('AccessRightsResponse', function() {
    it('should create an instance of AccessRightsResponse', function() {
      // uncomment below and update the code to test AccessRightsResponse
      //var instance = new NetilionApiDocumentation.AccessRightsResponse();
      //expect(instance).to.be.a(NetilionApiDocumentation.AccessRightsResponse);
    });

    it('should have the property canRead (base name: "can_read")', function() {
      // uncomment below and update the code to test the property canRead
      //var instance = new NetilionApiDocumentation.AccessRightsResponse();
      //expect(instance).to.be();
    });

    it('should have the property canUpdate (base name: "can_update")', function() {
      // uncomment below and update the code to test the property canUpdate
      //var instance = new NetilionApiDocumentation.AccessRightsResponse();
      //expect(instance).to.be();
    });

    it('should have the property canDelete (base name: "can_delete")', function() {
      // uncomment below and update the code to test the property canDelete
      //var instance = new NetilionApiDocumentation.AccessRightsResponse();
      //expect(instance).to.be();
    });

    it('should have the property canPermit (base name: "can_permit")', function() {
      // uncomment below and update the code to test the property canPermit
      //var instance = new NetilionApiDocumentation.AccessRightsResponse();
      //expect(instance).to.be();
    });

  });

}));
