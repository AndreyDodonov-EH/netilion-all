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
    instance = new NetilionApiDocumentation.ThresholdApi();
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

  describe('ThresholdApi', function() {
    describe('createInstrumentationThreshold', function() {
      it('should call createInstrumentationThreshold successfully', function(done) {
        //uncomment below and update the code to test createInstrumentationThreshold
        //instance.createInstrumentationThreshold(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteInstrumentationThreshold', function() {
      it('should call deleteInstrumentationThreshold successfully', function(done) {
        //uncomment below and update the code to test deleteInstrumentationThreshold
        //instance.deleteInstrumentationThreshold(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInstrumentationThreshold', function() {
      it('should call getInstrumentationThreshold successfully', function(done) {
        //uncomment below and update the code to test getInstrumentationThreshold
        //instance.getInstrumentationThreshold(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInstrumentationThresholds', function() {
      it('should call getInstrumentationThresholds successfully', function(done) {
        //uncomment below and update the code to test getInstrumentationThresholds
        //instance.getInstrumentationThresholds(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateInstrumentationThreshold', function() {
      it('should call updateInstrumentationThreshold successfully', function(done) {
        //uncomment below and update the code to test updateInstrumentationThreshold
        //instance.updateInstrumentationThreshold(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
