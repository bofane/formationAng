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
                    <a href="index.html" data-type="index-link">sauron documentation</a>
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
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-c33a751f130572bd265113cceefd8ea3"' : 'data-target="#xs-components-links-module-AppModule-c33a751f130572bd265113cceefd8ea3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-c33a751f130572bd265113cceefd8ea3"' :
                                            'id="xs-components-links-module-AppModule-c33a751f130572bd265113cceefd8ea3"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClientsModule.html" data-type="entity-link">ClientsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClientsModule-e23656896289f0406bfbc6d5ad8523c4"' : 'data-target="#xs-components-links-module-ClientsModule-e23656896289f0406bfbc6d5ad8523c4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClientsModule-e23656896289f0406bfbc6d5ad8523c4"' :
                                            'id="xs-components-links-module-ClientsModule-e23656896289f0406bfbc6d5ad8523c4"' }>
                                            <li class="link">
                                                <a href="components/ClientsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClientsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListClientComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListClientComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientsRoutingModule.html" data-type="entity-link">ClientsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-ac83d10cb74a913fc038493440ffcd55"' : 'data-target="#xs-components-links-module-LoginModule-ac83d10cb74a913fc038493440ffcd55"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-ac83d10cb74a913fc038493440ffcd55"' :
                                            'id="xs-components-links-module-LoginModule-ac83d10cb74a913fc038493440ffcd55"' }>
                                            <li class="link">
                                                <a href="components/PageLoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageLoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageNoteFoundRoutingModule.html" data-type="entity-link">PageNoteFoundRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundModule.html" data-type="entity-link">PageNotFoundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageNotFoundModule-7c9e2a1e5c597167c2ee80e6e1481682"' : 'data-target="#xs-components-links-module-PageNotFoundModule-7c9e2a1e5c597167c2ee80e6e1481682"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageNotFoundModule-7c9e2a1e5c597167c2ee80e6e1481682"' :
                                            'id="xs-components-links-module-PageNotFoundModule-7c9e2a1e5c597167c2ee80e6e1481682"' }>
                                            <li class="link">
                                                <a href="components/PagenotfoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PagenotfoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrestationRoutingModule.html" data-type="entity-link">PrestationRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PrestationsModule.html" data-type="entity-link">PrestationsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PrestationsModule-0c300ed2a5190b91265699eaa6c5cefc"' : 'data-target="#xs-components-links-module-PrestationsModule-0c300ed2a5190b91265699eaa6c5cefc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PrestationsModule-0c300ed2a5190b91265699eaa6c5cefc"' :
                                            'id="xs-components-links-module-PrestationsModule-0c300ed2a5190b91265699eaa6c5cefc"' }>
                                            <li class="link">
                                                <a href="components/AddPrestationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddPrestationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormPrestationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormPrestationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormPrestationRectiveComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormPrestationRectiveComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItemPrestationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ItemPrestationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListClientComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListPrestationsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListPrestationsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageAddPrestationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageAddPrestationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrestationsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrestationsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-8c91ec991ca70a672ae9e4f63a2c4870"' : 'data-target="#xs-directives-links-module-SharedModule-8c91ec991ca70a672ae9e4f63a2c4870"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-8c91ec991ca70a672ae9e4f63a2c4870"' :
                                        'id="xs-directives-links-module-SharedModule-8c91ec991ca70a672ae9e4f63a2c4870"' }>
                                        <li class="link">
                                            <a href="directives/AppStateDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppStateDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-8c91ec991ca70a672ae9e4f63a2c4870"' : 'data-target="#xs-pipes-links-module-SharedModule-8c91ec991ca70a672ae9e4f63a2c4870"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-8c91ec991ca70a672ae9e4f63a2c4870"' :
                                            'id="xs-pipes-links-module-SharedModule-8c91ec991ca70a672ae9e4f63a2c4870"' }>
                                            <li class="link">
                                                <a href="pipes/TotalPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TotalPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TemplatesModule.html" data-type="entity-link">TemplatesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TemplatesModule-f9957bc9576730dc22cc34adcf40563d"' : 'data-target="#xs-components-links-module-TemplatesModule-f9957bc9576730dc22cc34adcf40563d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TemplatesModule-f9957bc9576730dc22cc34adcf40563d"' :
                                            'id="xs-components-links-module-TemplatesModule-f9957bc9576730dc22cc34adcf40563d"' }>
                                            <li class="link">
                                                <a href="components/TemplateAComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TemplateAComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TemplateBComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TemplateBComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link">UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiModule-c975d27d443b221e1796768c462679d9"' : 'data-target="#xs-components-links-module-UiModule-c975d27d443b221e1796768c462679d9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-c975d27d443b221e1796768c462679d9"' :
                                            'id="xs-components-links-module-UiModule-c975d27d443b221e1796768c462679d9"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UiComponent</a>
                                            </li>
                                        </ul>
                                    </li>
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
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Client.html" data-type="entity-link">Client</a>
                            </li>
                            <li class="link">
                                <a href="classes/Prestation.html" data-type="entity-link">Prestation</a>
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
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ClientServiceService.html" data-type="entity-link">ClientServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrestationService.html" data-type="entity-link">PrestationService</a>
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
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IClient.html" data-type="entity-link">IClient</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPrestations.html" data-type="entity-link">IPrestations</a>
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
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
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