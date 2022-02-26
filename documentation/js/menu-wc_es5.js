'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">fingerprint-v2 documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AppModule-1fd45bb8e448963122a7eac606a1aceae90c6909df98009bfd278e4a66abed9caca22abc2b872f6a48c91358f86ac33f8437fdb956291a7d1711cd94a78d1271"' : 'data-target="#xs-components-links-module-AppModule-1fd45bb8e448963122a7eac606a1aceae90c6909df98009bfd278e4a66abed9caca22abc2b872f6a48c91358f86ac33f8437fdb956291a7d1711cd94a78d1271"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-1fd45bb8e448963122a7eac606a1aceae90c6909df98009bfd278e4a66abed9caca22abc2b872f6a48c91358f86ac33f8437fdb956291a7d1711cd94a78d1271"' : 'id="xs-components-links-module-AppModule-1fd45bb8e448963122a7eac606a1aceae90c6909df98009bfd278e4a66abed9caca22abc2b872f6a48c91358f86ac33f8437fdb956291a7d1711cd94a78d1271"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AuthenticationModule.html\" data-type=\"entity-link\" >AuthenticationModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AuthenticationModule-e39ceb8b079f717754837e3f806e0ef66e3172adf8a5b14c87dcd484be7f0bceac66cb298ccbdf531a8f2bbb3363ec55cd21fde6fbd927a1e066011e722b5db7"' : 'data-target="#xs-components-links-module-AuthenticationModule-e39ceb8b079f717754837e3f806e0ef66e3172adf8a5b14c87dcd484be7f0bceac66cb298ccbdf531a8f2bbb3363ec55cd21fde6fbd927a1e066011e722b5db7"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AuthenticationModule-e39ceb8b079f717754837e3f806e0ef66e3172adf8a5b14c87dcd484be7f0bceac66cb298ccbdf531a8f2bbb3363ec55cd21fde6fbd927a1e066011e722b5db7"' : 'id="xs-components-links-module-AuthenticationModule-e39ceb8b079f717754837e3f806e0ef66e3172adf8a5b14c87dcd484be7f0bceac66cb298ccbdf531a8f2bbb3363ec55cd21fde6fbd927a1e066011e722b5db7"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AuthCardComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AuthCardComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ConfirmPasswordComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ConfirmPasswordComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/LoginComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LoginComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/LoginPageComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LoginPageComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ResetPhoneComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ResetPhoneComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ResetPinComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ResetPinComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AuthenticationRoutingModule.html\" data-type=\"entity-link\" >AuthenticationRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/DashboardModule.html\" data-type=\"entity-link\" >DashboardModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/DashboardModule.html\" data-type=\"entity-link\" >DashboardModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-DashboardModule-97c0a6961b78eafd3dda2890016d96f6bfc2f333aa9c0187ae6bd015d4f06cdf9dd3068a35bd1373da18abe2cd8d923c0acca2eae2dd0461f3adbfb9547fc7a5-1"' : 'data-target="#xs-components-links-module-DashboardModule-97c0a6961b78eafd3dda2890016d96f6bfc2f333aa9c0187ae6bd015d4f06cdf9dd3068a35bd1373da18abe2cd8d923c0acca2eae2dd0461f3adbfb9547fc7a5-1"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-DashboardModule-97c0a6961b78eafd3dda2890016d96f6bfc2f333aa9c0187ae6bd015d4f06cdf9dd3068a35bd1373da18abe2cd8d923c0acca2eae2dd0461f3adbfb9547fc7a5-1"' : 'id="xs-components-links-module-DashboardModule-97c0a6961b78eafd3dda2890016d96f6bfc2f333aa9c0187ae6bd015d4f06cdf9dd3068a35bd1373da18abe2cd8d923c0acca2eae2dd0461f3adbfb9547fc7a5-1"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/DashboardComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DashboardComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/LatestOrdersComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LatestOrdersComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/SalesStatusComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SalesStatusComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/DashboardRoutingModule.html\" data-type=\"entity-link\" >DashboardRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/DashboardRoutingModule.html\" data-type=\"entity-link\" >DashboardRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/HomeModule.html\" data-type=\"entity-link\" >HomeModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-HomeModule-e8db01df567b0c309388dcb11889de8863654661f78a3a1b5976ad2f97eb152fc354b52623324e244ce17d69dfb6414722bb2ed34a944e1aa8a491d95c2f1831"' : 'data-target="#xs-components-links-module-HomeModule-e8db01df567b0c309388dcb11889de8863654661f78a3a1b5976ad2f97eb152fc354b52623324e244ce17d69dfb6414722bb2ed34a944e1aa8a491d95c2f1831"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-HomeModule-e8db01df567b0c309388dcb11889de8863654661f78a3a1b5976ad2f97eb152fc354b52623324e244ce17d69dfb6414722bb2ed34a944e1aa8a491d95c2f1831"' : 'id="xs-components-links-module-HomeModule-e8db01df567b0c309388dcb11889de8863654661f78a3a1b5976ad2f97eb152fc354b52623324e244ce17d69dfb6414722bb2ed34a944e1aa8a491d95c2f1831"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/DeviceComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DeviceComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/FooterComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FooterComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/HomeComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HomeComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/HomePageComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HomePageComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/NavbarComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >NavbarComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#pipes-links-module-HomeModule-e8db01df567b0c309388dcb11889de8863654661f78a3a1b5976ad2f97eb152fc354b52623324e244ce17d69dfb6414722bb2ed34a944e1aa8a491d95c2f1831"' : 'data-target="#xs-pipes-links-module-HomeModule-e8db01df567b0c309388dcb11889de8863654661f78a3a1b5976ad2f97eb152fc354b52623324e244ce17d69dfb6414722bb2ed34a944e1aa8a491d95c2f1831"', ">\n                                            <span class=\"icon ion-md-add\"></span>\n                                            <span>Pipes</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="pipes-links-module-HomeModule-e8db01df567b0c309388dcb11889de8863654661f78a3a1b5976ad2f97eb152fc354b52623324e244ce17d69dfb6414722bb2ed34a944e1aa8a491d95c2f1831"' : 'id="xs-pipes-links-module-HomeModule-e8db01df567b0c309388dcb11889de8863654661f78a3a1b5976ad2f97eb152fc354b52623324e244ce17d69dfb6414722bb2ed34a944e1aa8a491d95c2f1831"', ">\n                                            <li class=\"link\">\n                                                <a href=\"pipes/FilterPipe.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FilterPipe</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/HomeRoutingModule.html\" data-type=\"entity-link\" >HomeRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ManagementModule.html\" data-type=\"entity-link\" >ManagementModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ManagementRoutingModule.html\" data-type=\"entity-link\" >ManagementRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/UsersModule.html\" data-type=\"entity-link\" >UsersModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-UsersModule-1fd2b447693da4171514bae47483c28270cb436bf54c880ebfdee5d5a68ec9098d8c625c932cb4e71e296b76c42ab13b9ff0f3e5b234a7992c77a46a93df311d"' : 'data-target="#xs-components-links-module-UsersModule-1fd2b447693da4171514bae47483c28270cb436bf54c880ebfdee5d5a68ec9098d8c625c932cb4e71e296b76c42ab13b9ff0f3e5b234a7992c77a46a93df311d"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-UsersModule-1fd2b447693da4171514bae47483c28270cb436bf54c880ebfdee5d5a68ec9098d8c625c932cb4e71e296b76c42ab13b9ff0f3e5b234a7992c77a46a93df311d"' : 'id="xs-components-links-module-UsersModule-1fd2b447693da4171514bae47483c28270cb436bf54c880ebfdee5d5a68ec9098d8c625c932cb4e71e296b76c42ab13b9ff0f3e5b234a7992c77a46a93df311d"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AccountComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AccountComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ContactComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ContactComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/CreateUserComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CreateUserComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/EditProfileComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >EditProfileComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PermissionComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PermissionComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ProfileComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ProfileComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/SettingsComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SettingsComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/UsersListComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UsersListComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/UsersRoutingModule.html\" data-type=\"entity-link\" >UsersRoutingModule</a>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links"' : 'data-target="#xs-components-links"', ">\n                            <span class=\"icon ion-md-cog\"></span>\n                            <span>Components</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="components-links"' : 'id="xs-components-links"', ">\n                            <li class=\"link\">\n                                <a href=\"components/HeaderComponent.html\" data-type=\"entity-link\" >HeaderComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/PageNotFoundComponent.html\" data-type=\"entity-link\" >PageNotFoundComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/SidebarComponent.html\" data-type=\"entity-link\" >SidebarComponent</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/User.html\" data-type=\"entity-link\" >User</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UserData.html\" data-type=\"entity-link\" >UserData</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/AdminService.html\" data-type=\"entity-link\" >AdminService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/AuthenticationService.html\" data-type=\"entity-link\" >AuthenticationService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/AuthService.html\" data-type=\"entity-link\" >AuthService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/ManagementService.html\" data-type=\"entity-link\" >ManagementService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/SearchService.html\" data-type=\"entity-link\" >SearchService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/UserService.html\" data-type=\"entity-link\" >UserService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/UsersService.html\" data-type=\"entity-link\" >UsersService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interceptors-links"' : 'data-target="#xs-interceptors-links"', ">\n                            <span class=\"icon ion-ios-swap\"></span>\n                            <span>Interceptors</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interceptors/TokenIntercepterService.html\" data-type=\"entity-link\" >TokenIntercepterService</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"', ">\n                            <span class=\"icon ion-ios-lock\"></span>\n                            <span>Guards</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"', ">\n                            <li class=\"link\">\n                                <a href=\"guards/AdminGuard.html\" data-type=\"entity-link\" >AdminGuard</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"guards/AuthGuard.html\" data-type=\"entity-link\" >AuthGuard</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"guards/FormGuardGuard.html\" data-type=\"entity-link\" >FormGuardGuard</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"guards/UserGuard.html\" data-type=\"entity-link\" >UserGuard</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/city.html\" data-type=\"entity-link\" >city</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Dirty.html\" data-type=\"entity-link\" >Dirty</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));