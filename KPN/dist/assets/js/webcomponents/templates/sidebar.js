import {css, html, LitElement} from "lit";
import {Router} from '@vaadin/router';
import KPNLogo from "../../../images/kpnLogo.svg";

import './homepage.js';
import './boost.js';
import './flex.js';
import './cao.js';
import './votingAdvice.js';
import './caoInformation.js';

export class Sidebar extends LitElement {

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener("vaadin-router-location-changed", this._onRouteChanged.bind(this));
    }

    disconnectedCallback() {
        window.removeEventListener("vaadin-router-location-changed", this._onRouteChanged.bind(this));
    }

    firstUpdated(_changedProperties) {
        this._setupRoutes();

        const theme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', theme);

        const themeDD = this.shadowRoot.querySelector('.theme-dropdown');
        if (themeDD) {
            themeDD.value = theme;
        }

        const savedState = localStorage.getItem("sidebarState");
        const aside = this.shadowRoot.querySelector('.sidebar');
        const showButton = this.shadowRoot.querySelector('.show-button');
        const content = this.shadowRoot.querySelector('.content');

        if (savedState === 'hidden') {
            aside.style.left = '-200px';
            content.style.marginLeft = '-200px';
            showButton.classList.remove('hidden');
        } else {
            aside.style.left = '0';
            content.style.marginLeft = '0';
            showButton.classList.add('hidden');
        }
    }

    _setupRoutes() {
        const outlet = this.shadowRoot.querySelector('#outlet');
        if (outlet) {
            const router = new Router(outlet);

            router.setRoutes([
                {
                    path: '/',
                    component: 'kpn-home',
                },
                {
                    path: '/boost',
                    component: 'kpn-boost',
                },
                {
                    path: '/flex',
                    component: 'kpn-flex',
                },
                {
                    path: '/voting-advice',
                    component: 'kpn-voting-advice',
                },
                {
                    path: '/cao',
                    component: 'kpn-cao-information',
                },
            ]);
        } else {
            console.error('Router outlet not found...')
        }
    }

    _onRouteChanged(event) {
        const currentPath = event.detail.location.pathname;
        const links = this.shadowRoot.querySelectorAll("a[data-route]");

        links.forEach(link => {
            const route = link.getAttribute("data-route");
            if (route === currentPath) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    render() {
        return html`
            <div class="layout">
                <aside class="sidebar">
                    <button @click=${this._closeAside} class="close-button"><</button>
                    <button @click=${this._showAside} class="show-button hidden">></button>
                    <img src="${KPNLogo}" alt="KPN Logo">

                    <a @click="${(e) => this._navigate(e)}" data-route="/" href="">
                        Home
                    </a>
                    <a @click="${(e) => this._navigate(e)}" data-route="/boost" href="">
                        Boost
                    </a>
                    <a @click="${(e) => this._navigate(e)}" data-route="/flex" href="">
                        Flex
                    </a>
                    <a @click="${(e) => this._navigate(e)}" data-route="/voting-advice" href="">
                        Voting Advice
                    </a>
                    <a @click="${(e) => this._navigate(e)}" data-route="/cao" href="">
                        CAO
                    </a>

                    <div class="MijnKPN">
                        <a href="#">Taal</a>
                        <a href="#">Wachtwoord wijzigen</a>
                        <select @change=${this._onThemeChange} class="theme-dropdown">
                            <option value=light">Light</option>
                            <option value="dark">Dark</option>
                        </select>
                        <button @click=${this._onLogout} type="button" class="logout-button">Uitloggen
                        </button>
                    </div>
                </aside>

                <div id="outlet" class="content"></div>
            </div>
        `
    }

    _navigate(event) {
        event.preventDefault();
        const route = event.target.getAttribute('data-route');
        Router.go(route);
    }

    _onLogout() {
        localStorage.removeItem('user');
        window.location.reload();
    }

    _hideLinks() {
        const allAsideLinks = this.shadowRoot.querySelectorAll('.sidebar a');
        allAsideLinks.forEach(link => {
            link.classList.add("hidden");
        });

        const allAsideButtons = this.shadowRoot.querySelectorAll('.sidebar button');
        allAsideButtons.forEach(button => {
            button.classList.add("hidden");
        });
    }

    _showLinks() {
        const allAsideLinks = this.shadowRoot.querySelectorAll('.sidebar a');
        allAsideLinks.forEach(link => {
            link.classList.remove("hidden");
        });

        const allAsideButtons = this.shadowRoot.querySelectorAll('.sidebar button');
        allAsideButtons.forEach(button => {
            button.classList.remove("hidden");
        });
    }

    _closeAside() {
        const aside = this.shadowRoot.querySelector('.sidebar');
        aside.style.left = '-200px';
        localStorage.setItem('sidebarState', 'hidden');

        this._hideLinks();

        const showButton = this.shadowRoot.querySelector('.show-button');
        showButton.classList.remove('hidden');

        const content = this.shadowRoot.querySelector('.content');
        content.style.marginLeft = '-200px';
    }

    _showAside() {
        const aside = this.shadowRoot.querySelector('.sidebar');
        aside.style.left = '0';
        localStorage.setItem('sidebarState', 'shown');

        this._showLinks();

        const showButton = this.shadowRoot.querySelector('.show-button');
        showButton.classList.add('hidden');

        const content = this.shadowRoot.querySelector('.content');
        content.style.marginLeft = '0';
    }

    _onThemeChange(event) {
        const theme = event.target.value;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    static get styles() {
        return css`
            * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }

            .layout {
                display: flex;
                height: 100vh;
                overflow: hidden;
            }

            .sidebar {
                position: relative;
                left: 0;
                width: 200px;
                min-width: 200px;
                max-width: 200px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
                gap: 10px;
                padding: 20px 10px;
                background-color: var(--kpn-white);
                box-shadow: 0 8px 10px rgba(0, 0, 0, 0.4);
                transition: left 0.3s ease;
                overflow: visible;
            }

            .sidebar .hidden {
                display: none;
                transition: margin-left 0.3s ease;
            }

            .content {
                flex-grow: 1;
                display: flex;
                justify-content: center;
                overflow: auto;
                box-sizing: border-box;
                transition: margin-left 0.3s ease;
            }

            .sidebar .close-button, .sidebar .show-button {
                position: absolute;
                right: -20px;
                top: 0;
                color: var(--kpn-black);
                background-color: var(--kpn-white);
                border: none;
                font-size: 20px;
                font-weight: bold;
                cursor: pointer;
                padding: 5px;
                border-bottom-right-radius: 7px;
                max-width: 40px;
            }

            .sidebar a {
                color: var(--kpn-black);
                width: 100%;
                text-decoration: none;
                font-size: 25px;
                display: block;
                font-weight: bold;
                margin-bottom: 5px;
            }

            .sidebar a:hover {
                cursor: pointer;
                color: var(--kpn-green);
            }

            .sidebar a:focus {
                color: var(--kpn-green);
                outline: 2px solid var(--kpn-green);
                border-radius: 7px;
            }

            .sidebar a.active {
                color: var(--kpn-green);
            }

            .sidebar img {
                width: 100%;
                height: auto;
                margin-bottom: 15px;
            }

            .sidebar .MijnKPN {
                display: flex;
                flex-direction: column;
                gap: 10px;
                margin-top: auto;
                padding-bottom: 20px;
            }

            .sidebar .MijnKPN a {
                text-decoration: underline;
                font-size: 15px;
            }

            .theme-dropdown {
                font-size: 15px;
                border: 2px solid var(--kpn-blue);
                border-radius: 5px;
                cursor: pointer;
                transition: background-color 0.3s ease, color 0.3s ease;
            }

            .theme-dropdown:focus {
                outline: 2px solid var(--kpn-green);
            }

            .theme-dropdown:hover {
                border-color: var(--kpn-green-hover);
            }

            .sidebar .MijnKPN button {
                margin: 10px;
                padding: 5px;
                background-color: var(--kpn-blue);
                color: white;
                font-size: 15px;
                border-radius: 10px;
                width: 100%;
                border: none;
            }

            .sidebar .MijnKPN button:hover {
                background-color: var(--kpn-blue-hover);
                cursor: pointer;
            }

            .sidebar .MijnKPN button:focus {
                outline: 2px solid var(--kpn-green);
                border-radius: 7px;
                color: var(--kpn-black);
                background-color: var(--kpn-blue-hover);
            }
        `
    }
}

window.customElements.define('kpn-sidebar', Sidebar);