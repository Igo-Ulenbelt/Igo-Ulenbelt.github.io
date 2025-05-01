import {css, html, LitElement} from 'lit';
import {Router as VaadinRouter} from '@vaadin/router';
import {routes} from './routes/routes.js';

import './templates/sidebar.js';
import './templates/login.js';
import './templates/homepage.js';
import './templates/boost.js';
import './templates/flex.js';
import './templates/votingAdvice.js';
import './templates/myKpn.js';
import './templates/admin/requestBoost.js';
import './templates/admin/home.js';
import './templates/informationSection/view/caoInformationView.js';
import './templates/informationSection/view/flexBoostInformationView.js';

export class KpnRouter extends LitElement {
    static get properties() {
        return {
            currentPath: {type: String},
        };
    }

    constructor() {
        super();
        this.currentPath = '';
    }

    firstUpdated() {
        if (window.localStorage.getItem('userId')) {
            let outlet = this.shadowRoot.querySelector('router-outlet');
            const router = new VaadinRouter(outlet);
            router.setRoutes(routes);

            window.addEventListener('vaadin-router-location-changed', (e) => {
                this.currentPath = e.detail.location.pathname;
                localStorage.setItem('currentPath', this.currentPath);
                this._highlightActiveLink(this.currentPath);
            });

            const savedPath = localStorage.getItem('currentPath');
            if (savedPath && window.location.pathname === '/') {
                VaadinRouter.go(savedPath);
            }
        }
    }

    _highlightActiveLink(path) {
        const links = this.renderRoot.querySelector('kpn-sidebar')
            || document.querySelector('kpn-sidebar');
        if (links && typeof links.highlightActiveLink === 'function') {
            links.highlightActiveLink(path);
        }
    }

    render() {
        const loggedIn = localStorage.getItem('userId');
        if (!loggedIn) {
            return html`
                <kpn-login></kpn-login>
            `;
        }

        return html`
            <div class="layout">
                <div id="sidebar" class="sidebar">
                    <kpn-sidebar></kpn-sidebar>
                </div>
                <div id="content" class="content">
                    <router-outlet></router-outlet>
                </div>
            </div>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: block;
                width: 100%;
                height: 100vh;
            }

            .layout {
                position: relative;
                display: flex;
                width: 100%;
                height: 100%;
                overflow: hidden;
            }

            .sidebar-wrapper {
                position: relative;
                width: 200px;
                flex-shrink: 0;
                z-index: 999;
            }

            .content {
                flex-grow: 1;
                height: 100%;
                overflow-y: auto;
            }
        `;
    }
}

window.customElements.define('kpn-router', KpnRouter);