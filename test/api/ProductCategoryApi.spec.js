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
    instance = new NetilionApiDocumentation.ProductCategoryApi();
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

  describe('ProductCategoryApi', function() {
    describe('addCategoriesToProduct', function() {
      it('should call addCategoriesToProduct successfully', function(done) {
        //uncomment below and update the code to test addCategoriesToProduct
        //instance.addCategoriesToProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addProductsToProductCategory', function() {
      it('should call addProductsToProductCategory successfully', function(done) {
        //uncomment below and update the code to test addProductsToProductCategory
        //instance.addProductsToProductCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createProductCategory', function() {
      it('should call createProductCategory successfully', function(done) {
        //uncomment below and update the code to test createProductCategory
        //instance.createProductCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createProductsOfProductCategory', function() {
      it('should call createProductsOfProductCategory successfully', function(done) {
        //uncomment below and update the code to test createProductsOfProductCategory
        //instance.createProductsOfProductCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCategoriesFromProduct', function() {
      it('should call deleteCategoriesFromProduct successfully', function(done) {
        //uncomment below and update the code to test deleteCategoriesFromProduct
        //instance.deleteCategoriesFromProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProductCategory', function() {
      it('should call deleteProductCategory successfully', function(done) {
        //uncomment below and update the code to test deleteProductCategory
        //instance.deleteProductCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCategoriesOfProduct', function() {
      it('should call getCategoriesOfProduct successfully', function(done) {
        //uncomment below and update the code to test getCategoriesOfProduct
        //instance.getCategoriesOfProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCategoriesOptionsOfProduct', function() {
      it('should call getCategoriesOptionsOfProduct successfully', function(done) {
        //uncomment below and update the code to test getCategoriesOptionsOfProduct
        //instance.getCategoriesOptionsOfProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductCategories', function() {
      it('should call getProductCategories successfully', function(done) {
        //uncomment below and update the code to test getProductCategories
        //instance.getProductCategories(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductCategoryById', function() {
      it('should call getProductCategoryById successfully', function(done) {
        //uncomment below and update the code to test getProductCategoryById
        //instance.getProductCategoryById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeProductsFromProductCategory', function() {
      it('should call removeProductsFromProductCategory successfully', function(done) {
        //uncomment below and update the code to test removeProductsFromProductCategory
        //instance.removeProductsFromProductCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceCategoriesOfProduct', function() {
      it('should call replaceCategoriesOfProduct successfully', function(done) {
        //uncomment below and update the code to test replaceCategoriesOfProduct
        //instance.replaceCategoriesOfProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceProductsOfProductCategory', function() {
      it('should call replaceProductsOfProductCategory successfully', function(done) {
        //uncomment below and update the code to test replaceProductsOfProductCategory
        //instance.replaceProductsOfProductCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateProductCategory', function() {
      it('should call updateProductCategory successfully', function(done) {
        //uncomment below and update the code to test updateProductCategory
        //instance.updateProductCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
