'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*!
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

var _CognitoTokenScopes = require('./CognitoTokenScopes');

var _CognitoTokenScopes2 = _interopRequireDefault(_CognitoTokenScopes);

var _CognitoAccessToken = require('./CognitoAccessToken');

var _CognitoAccessToken2 = _interopRequireDefault(_CognitoAccessToken);

var _CognitoIdToken = require('./CognitoIdToken');

var _CognitoIdToken2 = _interopRequireDefault(_CognitoIdToken);

var _CognitoRefreshToken = require('./CognitoRefreshToken');

var _CognitoRefreshToken2 = _interopRequireDefault(_CognitoRefreshToken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @class */
var CognitoAuthSession = function () {
  /**
   * Constructs a new CognitoUserSession object
   * @param {CognitoIdToken} IdToken The session's Id token.
   * @param {CognitoRefreshToken} RefreshToken The session's refresh token.
   * @param {CognitoAccessToken} AccessToken The session's access token.
   * @param {array}  TokenScopes  The session's token scopes.
    * @param {string} State The session's state. 
   */
  function CognitoAuthSession() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        IdToken = _ref.IdToken,
        RefreshToken = _ref.RefreshToken,
        AccessToken = _ref.AccessToken,
        TokenScopes = _ref.TokenScopes,
        State = _ref.State;

    _classCallCheck(this, CognitoAuthSession);

    if (IdToken) {
      this.idToken = IdToken;
    } else {
      this.idToken = new _CognitoIdToken2.default();
    }
    if (RefreshToken) {
      this.refreshToken = RefreshToken;
    } else {
      this.refreshToken = new _CognitoRefreshToken2.default();
    }
    if (AccessToken) {
      this.accessToken = AccessToken;
    } else {
      this.accessToken = new _CognitoAccessToken2.default();
    }
    if (TokenScopes) {
      this.tokenScopes = TokenScopes;
    } else {
      this.tokenScopes = new _CognitoTokenScopes2.default();
    }
    if (State) {
      this.state = State;
    } else {
      this.state = null;
    }
  }

  /**
   * @returns {CognitoIdToken} the session's Id token
   */


  _createClass(CognitoAuthSession, [{
    key: 'getIdToken',
    value: function getIdToken() {
      return this.idToken;
    }

    /**
     * Set a new Id token
     * @param {CognitoIdToken} IdToken The session's Id token.
     * @returns {void}
     */

  }, {
    key: 'setIdToken',
    value: function setIdToken(IdToken) {
      this.idToken = IdToken;
    }

    /**
     * @returns {CognitoRefreshToken} the session's refresh token
     */

  }, {
    key: 'getRefreshToken',
    value: function getRefreshToken() {
      return this.refreshToken;
    }

    /**
     * Set a new Refresh token
     * @param {CognitoRefreshToken} RefreshToken The session's refresh token.
     * @returns {void}
     */

  }, {
    key: 'setRefreshToken',
    value: function setRefreshToken(RefreshToken) {
      this.refreshToken = RefreshToken;
    }

    /**
     * @returns {CognitoAccessToken} the session's access token
     */

  }, {
    key: 'getAccessToken',
    value: function getAccessToken() {
      return this.accessToken;
    }

    /**
     * Set a new Access token
     * @param {CognitoAccessToken} AccessToken The session's access token.
     * @returns {void}
     */

  }, {
    key: 'setAccessToken',
    value: function setAccessToken(AccessToken) {
      this.accessToken = AccessToken;
    }

    /**
     * @returns {CognitoTokenScopes} the session's token scopes
     */

  }, {
    key: 'getTokenScopes',
    value: function getTokenScopes() {
      return this.tokenScopes;
    }

    /**
     * Set new token scopes
     * @param {array}  tokenScopes  The session's token scopes.
     * @returns {void}
     */

  }, {
    key: 'setTokenScopes',
    value: function setTokenScopes(tokenScopes) {
      this.tokenScopes = tokenScopes;
    }

    /**
     * @returns {string} the session's state
     */

  }, {
    key: 'getState',
    value: function getState() {
      return this.state;
    }

    /**
     * Set new state
     * @param {string}  state  The session's state.
     * @returns {void}
     */

  }, {
    key: 'setState',
    value: function setState(State) {
      this.state = State;
    }

    /**
     * Checks to see if the session is still valid based on session expiry information found
     * in Access and Id Tokens and the current time
     * @returns {boolean} if the session is still valid
     */

  }, {
    key: 'isValid',
    value: function isValid() {
      var now = Math.floor(new Date() / 1000);
      try {
        if (this.accessToken != null) {
          return now < this.accessToken.getExpiration();
        }
        if (this.idToken != null) {
          return now < this.idToken.getExpiration();
        }
        return false;
      } catch (e) {
        return false;
      }
    }
  }]);

  return CognitoAuthSession;
}();

exports.default = CognitoAuthSession;