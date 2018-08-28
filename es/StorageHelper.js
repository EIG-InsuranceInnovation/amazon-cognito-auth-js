'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*!
 * Amazon Cognito Auth SDK for JavaScript
 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *         http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file.
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
 * OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions
 * and limitations under the License.
 */
var dataMemory = {};

/** @class */

var MemoryStorage = function () {
  function MemoryStorage() {
    _classCallCheck(this, MemoryStorage);
  }

  _createClass(MemoryStorage, null, [{
    key: 'setItem',


    /**
     * This is used to set a specific item in storage
     * @param {string} key - the key for the item
     * @param {object} value - the value
     * @returns {string} value that was set
     */
    value: function setItem(key, value) {
      dataMemory[key] = value;
      return dataMemory[key];
    }

    /**
     * This is used to get a specific key from storage
     * @param {string} key - the key for the item
     * This is used to clear the storage
     * @returns {string} the data item
     */

  }, {
    key: 'getItem',
    value: function getItem(key) {
      return Object.prototype.hasOwnProperty.call(dataMemory, key) ? dataMemory[key] : undefined;
    }

    /**
     * This is used to remove an item from storage
     * @param {string} key - the key being set
     * @returns {string} value - value that was deleted
     */

  }, {
    key: 'removeItem',
    value: function removeItem(key) {
      return delete dataMemory[key];
    }

    /**
     * This is used to clear the storage
     * @returns {string} nothing
     */

  }, {
    key: 'clear',
    value: function clear() {
      dataMemory = {};
      return dataMemory;
    }
  }]);

  return MemoryStorage;
}();

/** @class */


var StorageHelper = function () {

  /**
   * This is used to get a storage object
   * @returns {object} the storage
   */
  function StorageHelper() {
    _classCallCheck(this, StorageHelper);

    try {
      this.storageWindow = window.localStorage;
      this.storageWindow.setItem('aws.cognito.test-ls', 1);
      this.storageWindow.removeItem('aws.cognito.test-ls');
    } catch (exception) {
      this.storageWindow = MemoryStorage;
    }
  }

  /**
   * This is used to return the storage
   * @returns {object} the storage
   */


  _createClass(StorageHelper, [{
    key: 'getStorage',
    value: function getStorage() {
      return this.storageWindow;
    }
  }]);

  return StorageHelper;
}();

exports.default = StorageHelper;