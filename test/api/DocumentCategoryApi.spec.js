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
    instance = new NetilionApiDocumentation.DocumentCategoryApi();
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

  describe('DocumentCategoryApi', function() {
    describe('addDocumentsToDocumentCategory', function() {
      it('should call addDocumentsToDocumentCategory successfully', function(done) {
        //uncomment below and update the code to test addDocumentsToDocumentCategory
        //instance.addDocumentsToDocumentCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createDocumentCategory', function() {
      it('should call createDocumentCategory successfully', function(done) {
        //uncomment below and update the code to test createDocumentCategory
        //instance.createDocumentCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteDocumentCategory', function() {
      it('should call deleteDocumentCategory successfully', function(done) {
        //uncomment below and update the code to test deleteDocumentCategory
        //instance.deleteDocumentCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCategoriesOfDocument', function() {
      it('should call getCategoriesOfDocument successfully', function(done) {
        //uncomment below and update the code to test getCategoriesOfDocument
        //instance.getCategoriesOfDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCategoriesOptionsOfDocument', function() {
      it('should call getCategoriesOptionsOfDocument successfully', function(done) {
        //uncomment below and update the code to test getCategoriesOptionsOfDocument
        //instance.getCategoriesOptionsOfDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDocumentCategories', function() {
      it('should call getDocumentCategories successfully', function(done) {
        //uncomment below and update the code to test getDocumentCategories
        //instance.getDocumentCategories(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDocumentCategoryById', function() {
      it('should call getDocumentCategoryById successfully', function(done) {
        //uncomment below and update the code to test getDocumentCategoryById
        //instance.getDocumentCategoryById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDocumentsOfDocumentCategory', function() {
      it('should call getDocumentsOfDocumentCategory successfully', function(done) {
        //uncomment below and update the code to test getDocumentsOfDocumentCategory
        //instance.getDocumentsOfDocumentCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeDocumentsFromDocumentCategory', function() {
      it('should call removeDocumentsFromDocumentCategory successfully', function(done) {
        //uncomment below and update the code to test removeDocumentsFromDocumentCategory
        //instance.removeDocumentsFromDocumentCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceDocumentsOfDocumentCategory', function() {
      it('should call replaceDocumentsOfDocumentCategory successfully', function(done) {
        //uncomment below and update the code to test replaceDocumentsOfDocumentCategory
        //instance.replaceDocumentsOfDocumentCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateDocumentCategory', function() {
      it('should call updateDocumentCategory successfully', function(done) {
        //uncomment below and update the code to test updateDocumentCategory
        //instance.updateDocumentCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
