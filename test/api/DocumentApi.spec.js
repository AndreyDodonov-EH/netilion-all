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
    instance = new NetilionApiDocumentation.DocumentApi();
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

  describe('DocumentApi', function() {
    describe('addCategoriesToDocument', function() {
      it('should call addCategoriesToDocument successfully', function(done) {
        //uncomment below and update the code to test addCategoriesToDocument
        //instance.addCategoriesToDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createDocument', function() {
      it('should call createDocument successfully', function(done) {
        //uncomment below and update the code to test createDocument
        //instance.createDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteDocument', function() {
      it('should call deleteDocument successfully', function(done) {
        //uncomment below and update the code to test deleteDocument
        //instance.deleteDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('downloadDocument', function() {
      it('should call downloadDocument successfully', function(done) {
        //uncomment below and update the code to test downloadDocument
        //instance.downloadDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAssetsOfDocument', function() {
      it('should call getAssetsOfDocument successfully', function(done) {
        //uncomment below and update the code to test getAssetsOfDocument
        //instance.getAssetsOfDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAttachmentsOfDocument', function() {
      it('should call getAttachmentsOfDocument successfully', function(done) {
        //uncomment below and update the code to test getAttachmentsOfDocument
        //instance.getAttachmentsOfDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBillOfMaterialsOfDocument', function() {
      it('should call getBillOfMaterialsOfDocument successfully', function(done) {
        //uncomment below and update the code to test getBillOfMaterialsOfDocument
        //instance.getBillOfMaterialsOfDocument(function(error) {
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
    describe('getDeliveriesOfDocument', function() {
      it('should call getDeliveriesOfDocument successfully', function(done) {
        //uncomment below and update the code to test getDeliveriesOfDocument
        //instance.getDeliveriesOfDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDocumentById', function() {
      it('should call getDocumentById successfully', function(done) {
        //uncomment below and update the code to test getDocumentById
        //instance.getDocumentById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDocumentClassificationsOptions', function() {
      it('should call getDocumentClassificationsOptions successfully', function(done) {
        //uncomment below and update the code to test getDocumentClassificationsOptions
        //instance.getDocumentClassificationsOptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDocumentIdClassification', function() {
      it('should call getDocumentIdClassification successfully', function(done) {
        //uncomment below and update the code to test getDocumentIdClassification
        //instance.getDocumentIdClassification(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDocumentIdStatus', function() {
      it('should call getDocumentIdStatus successfully', function(done) {
        //uncomment below and update the code to test getDocumentIdStatus
        //instance.getDocumentIdStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDocumentStatusesOptions', function() {
      it('should call getDocumentStatusesOptions successfully', function(done) {
        //uncomment below and update the code to test getDocumentStatusesOptions
        //instance.getDocumentStatusesOptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDocuments', function() {
      it('should call getDocuments successfully', function(done) {
        //uncomment below and update the code to test getDocuments
        //instance.getDocuments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEventsOfDocument', function() {
      it('should call getEventsOfDocument successfully', function(done) {
        //uncomment below and update the code to test getEventsOfDocument
        //instance.getEventsOfDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInstrumentationsOfDocument', function() {
      it('should call getInstrumentationsOfDocument successfully', function(done) {
        //uncomment below and update the code to test getInstrumentationsOfDocument
        //instance.getInstrumentationsOfDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNodesOfDocument', function() {
      it('should call getNodesOfDocument successfully', function(done) {
        //uncomment below and update the code to test getNodesOfDocument
        //instance.getNodesOfDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductsOfDocument', function() {
      it('should call getProductsOfDocument successfully', function(done) {
        //uncomment below and update the code to test getProductsOfDocument
        //instance.getProductsOfDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPurchaseOrdersOfDocument', function() {
      it('should call getPurchaseOrdersOfDocument successfully', function(done) {
        //uncomment below and update the code to test getPurchaseOrdersOfDocument
        //instance.getPurchaseOrdersOfDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getQuotationsOfDocument', function() {
      it('should call getQuotationsOfDocument successfully', function(done) {
        //uncomment below and update the code to test getQuotationsOfDocument
        //instance.getQuotationsOfDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRequestForQuotationsOfDocument', function() {
      it('should call getRequestForQuotationsOfDocument successfully', function(done) {
        //uncomment below and update the code to test getRequestForQuotationsOfDocument
        //instance.getRequestForQuotationsOfDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeCategoriesFromDocument', function() {
      it('should call removeCategoriesFromDocument successfully', function(done) {
        //uncomment below and update the code to test removeCategoriesFromDocument
        //instance.removeCategoriesFromDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceCategoriesOfDocument', function() {
      it('should call replaceCategoriesOfDocument successfully', function(done) {
        //uncomment below and update the code to test replaceCategoriesOfDocument
        //instance.replaceCategoriesOfDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateDocument', function() {
      it('should call updateDocument successfully', function(done) {
        //uncomment below and update the code to test updateDocument
        //instance.updateDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
