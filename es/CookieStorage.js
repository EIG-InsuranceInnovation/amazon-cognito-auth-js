'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsCookie = require('js-cookie');

var Cookies = _interopRequireWildcard(_jsCookie);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @class */
var CookieStorage = function () {

  /**
   * Constructs a new CookieStorage object
   * @param {object} data Creation options.
   * @param {string} data.domain Cookies domain (mandatory).
   * @param {string} data.path Cookies path (default: '/')
   * @param {integer} data.expires Cookie expiration (in days, default: 365)
   * @param {boolean} data.secure Cookie secure flag (default: true)
   */
  function CookieStorage(data) {
    _classCallCheck(this, CookieStorage);

    this.domain = data.domain;
    if (data.path) {
      this.path = data.path;
    } else {
      this.path = '/';
    }
    if (Object.prototype.hasOwnProperty.call(data, 'expires')) {
      this.expires = data.expires;
    } else {
      this.expires = 365;
    }
    if (Object.prototype.hasOwnProperty.call(data, 'secure')) {
      this.secure = data.secure;
    } else {
      this.secure = true;
    }
  }

  /**
   * This is used to set a specific item in storage
   * @param {string} key - the key for the item
   * @param {object} value - the value
   * @returns {string} value that was set
   */


  _createClass(CookieStorage, [{
    key: 'setItem',
    value: function setItem(key, value) {
      Cookies.set(key, value, {
        path: this.path,
        expires: this.expires,
        domain: this.domain,
        secure: this.secure
      });
      return Cookies.get(key);
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
      return Cookies.get(key);
    }

    /**
     * This is used to remove an item from storage
     * @param {string} key - the key being set
     * @returns {string} value - value that was deleted
     */

  }, {
    key: 'removeItem',
    value: function removeItem(key) {
      return Cookies.remove(key, {
        path: this.path,
        domain: this.domain,
        secure: this.secure
      });
    }

    /**
     * This is used to clear the storage
     * @returns {string} nothing
     */

  }, {
    key: 'clear',
    value: function clear() {
      var cookies = Cookies.get();
      var index = void 0;
      for (index = 0; index < cookies.length; ++index) {
        Cookies.remove(cookies[index]);
      }
      return {};
    }
  }]);

  return CookieStorage;
}();

exports.default = CookieStorage;