'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">fingerprint-v2 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-1fd45bb8e448963122a7eac606a1aceae90c6909df98009bfd278e4a66abed9caca22abc2b872f6a48c91358f86ac33f8437fdb956291a7d1711cd94a78d1271"' : 'data-target="#xs-components-links-module-AppModule-1fd45bb8e448963122a7eac606a1aceae90c6909df98009bfd278e4a66abed9caca22abc2b872f6a48c91358f86ac33f8437fdb956291a7d1711cd94a78d1271"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-1fd45bb8e448963122a7eac606a1aceae90c6909df98009bfd278e4a66abed9caca22abc2b872f6a48c91358f86ac33f8437fdb956291a7d1711cd94a78d1271"' :
                                            'id="xs-components-links-module-AppModule-1fd45bb8e448963122a7eac606a1aceae90c6909df98009bfd278e4a66abed9caca22abc2b872f6a48c91358f86ac33f8437fdb956291a7d1711cd94a78d1271"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationModule.html" data-type="entity-link" >AuthenticationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthenticationModule-e39ceb8b079f717754837e3f806e0ef66e3172adf8a5b14c87dcd484be7f0bceac66cb298ccbdf531a8f2bbb3363ec55cd21fde6fbd927a1e066011e722b5db7"' : 'data-target="#xs-components-links-module-AuthenticationModule-e39ceb8b079f717754837e3f806e0ef66e3172adf8a5b14c87dcd484be7f0bceac66cb298ccbdf531a8f2bbb3363ec55cd21fde6fbd927a1e066011e722b5db7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthenticationModule-e39ceb8b079f717754837e3f806e0ef66e3172adf8a5b14c87dcd484be7f0bceac66cb298ccbdf531a8f2bbb3363ec55cd21fde6fbd927a1e066011e722b5db7"' :
                                            'id="xs-components-links-module-AuthenticationModule-e39ceb8b079f717754837e3f806e0ef66e3172adf8a5b14c87dcd484be7f0bceac66cb298ccbdf531a8f2bbb3363ec55cd21fde6fbd927a1e066011e722b5db7"' }>
                                            <li class="link">
                                                <a href="components/AuthCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfirmPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResetPhoneComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResetPhoneComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResetPinComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResetPinComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationRoutingModule.html" data-type="entity-link" >AuthenticationRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-97c0a6961b78eafd3dda2890016d96f6bfc2f333aa9c0187ae6bd015d4f06cdf9dd3068a35bd1373da18abe2cd8d923c0acca2eae2dd0461f3adbfb9547fc7a5-1"' : 'data-target="#xs-components-links-module-DashboardModule-97c0a6961b78eafd3dda2890016d96f6bfc2f333aa9c0187ae6bd015d4f06cdf9dd3068a35bd1373da18abe2cd8d923c0acca2eae2dd0461f3adbfb9547fc7a5-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-97c0a6961b78eafd3dda2890016d96f6bfc2f333aa9c0187ae6bd015d4f06cdf9dd3068a35bd1373da18abe2cd8d923c0acca2eae2dd0461f3adbfb9547fc7a5-1"' :
                                            'id="xs-components-links-module-DashboardModule-97c0a6961b78eafd3dda2890016d96f6bfc2f333aa9c0187ae6bd015d4f06cdf9dd3068a35bd1373da18abe2cd8d923c0acca2eae2dd0461f3adbfb9547fc7a5-1"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LatestOrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LatestOrdersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SalesStatusComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SalesStatusComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link" >DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link" >DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-e8db01df567b0c309388dcb11889de8863654661f78a3a1b5976ad2f97eb152fc354b52623324e244ce17d69dfb6414722bb2ed34a944e1aa8a491d95c2f1831"' : 'data-target="#xs-components-links-module-HomeModule-e8db01df567b0c309388dcb11889de8863654661f78a3a1b5976ad2f97eb152fc354b52623324e244ce17d69dfb6414722bb2ed34a944e1aa8a491d95c2f1831"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-e8db01df567b0c309388dcb11889de8863654661f78a3a1b5976ad2f97eb152fc354b52623324e244ce17d69dfb6414722bb2ed34a944e1aa8a491d95c2f1831"' :
                                            'id="xs-components-links-module-HomeModule-e8db01df567b0c309388dcb11889de8863654661f78a3a1b5976ad2f97eb152fc354b52623324e244ce17d69dfb6414722bb2ed34a944e1aa8a491d95c2f1831"' }>
                                            <li class="link">
                                                <a href="components/DeviceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeviceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-HomeModule-e8db01df567b0c309388dcb11889de8863654661f78a3a1b5976ad2f97eb152fc354b52623324e244ce17d69dfb6414722bb2ed34a944e1aa8a491d95c2f1831"' : 'data-target="#xs-pipes-links-module-HomeModule-e8db01df567b0c309388dcb11889de8863654661f78a3a1b5976ad2f97eb152fc354b52623324e244ce17d69dfb6414722bb2ed34a944e1aa8a491d95c2f1831"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-HomeModule-e8db01df567b0c309388dcb11889de8863654661f78a3a1b5976ad2f97eb152fc354b52623324e244ce17d69dfb6414722bb2ed34a944e1aa8a491d95c2f1831"' :
                                            'id="xs-pipes-links-module-HomeModule-e8db01df567b0c309388dcb11889de8863654661f78a3a1b5976ad2f97eb152fc354b52623324e244ce17d69dfb6414722bb2ed34a944e1aa8a491d95c2f1831"' }>
                                            <li class="link">
                                                <a href="pipes/FilterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ManagementModule.html" data-type="entity-link" >ManagementModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ManagementRoutingModule.html" data-type="entity-link" >ManagementRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UsersModule-1fd2b447693da4171514bae47483c28270cb436bf54c880ebfdee5d5a68ec9098d8c625c932cb4e71e296b76c42ab13b9ff0f3e5b234a7992c77a46a93df311d"' : 'data-target="#xs-components-links-module-UsersModule-1fd2b447693da4171514bae47483c28270cb436bf54c880ebfdee5d5a68ec9098d8c625c932cb4e71e296b76c42ab13b9ff0f3e5b234a7992c77a46a93df311d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UsersModule-1fd2b447693da4171514bae47483c28270cb436bf54c880ebfdee5d5a68ec9098d8c625c932cb4e71e296b76c42ab13b9ff0f3e5b234a7992c77a46a93df311d"' :
                                            'id="xs-components-links-module-UsersModule-1fd2b447693da4171514bae47483c28270cb436bf54c880ebfdee5d5a68ec9098d8c625c932cb4e71e296b76c42ab13b9ff0f3e5b234a7992c77a46a93df311d"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PermissionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsersListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersRoutingModule.html" data-type="entity-link" >UsersRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/HeaderComponent.html" data-type="entity-link" >HeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" >PageNotFoundComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SidebarComponent.html" data-type="entity-link" >SidebarComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserData.html" data-type="entity-link" >UserData</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AdminService.html" data-type="entity-link" >AdminService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link" >AuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ManagementService.html" data-type="entity-link" >ManagementService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SearchService.html" data-type="entity-link" >SearchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/TokenIntercepterService.html" data-type="entity-link" >TokenIntercepterService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AdminGuard.html" data-type="entity-link" >AdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/FormGuardGuard.html" data-type="entity-link" >FormGuardGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/UserGuard.html" data-type="entity-link" >UserGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/city.html" data-type="entity-link" >city</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Dirty.html" data-type="entity-link" >Dirty</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});