import { css, html, LitElement } from "lit";
import { Router as VaadinRouter } from '@vaadin/router';
import KPNLogo from "../../../images/kpnLogo.svg";
import { languageHandler } from "../languageHandler";

export class Sidebar extends LitElement {
    static properties = {
        isMobileMenuOpen: { type: Boolean },
    };

    constructor() {
        super();
        this.isMobileMenuOpen = false;
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated();

        const theme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', theme);

        this.shadowRoot.querySelectorAll('.theme-dropdown').forEach(dd => {
            dd.value = theme;
        });

        this.shadowRoot.querySelectorAll('.language-dropdown').forEach(dd => {
            dd.value = languageHandler.language;
        });

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

    highlightActiveLink(path) {
        const links = this.shadowRoot.querySelectorAll("a[data-route]");
        links.forEach(link => {
            const route = link.getAttribute("data-route");
            if (route === path) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    _toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
        if (this.isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    render() {
        return html`
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">

            <div class="layout">
                <button @click=${this._toggleMobileMenu} class="mobile-menu-button" aria-label="Toggle mobile menu">
                    <i class="fa-solid fa-bars"></i>
                </button>

                <aside class="mobile-sidebar ${this.isMobileMenuOpen ? 'open' : ''}">
                    <button @click=${this._toggleMobileMenu} class="mobile-close-button" aria-label="Close mobile menu">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                    <div class="mobile-sidebar-content">
                        <img src="${KPNLogo}" alt="KPN Logo">
                        <nav class="mobile-nav">
                            <a @click="${(e) => this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/" href="">
                                <span class="icon-text">
                                    <i class="fas fa-house"></i> Home
                                </span>
                            </a>
                            <a @click="${(e) => this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/flexBoost" href="">
                                <span class="icon-text">
                                    <i class="fa-solid fa-book"></i> Uitleg
                                </span>
                            </a>
                            <a @click="${(e) => this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/boost" href="">
                                <span class="icon-text">
                                    <i class="fa-solid fa-rocket"></i> Boost
                                </span>
                            </a>
                            <a @click="${(e) => this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/flex" href="">
                                <span class="icon-text">
                                    <i class="fa-solid fa-handshake"></i> Flex
                                </span>
                            </a>
                            <a @click="${(e) => this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/voting-advice" href="">
                                <span class="icon-text">
                                    <i class="fa-solid fa-table-list"></i> Vragenlijst
                                </span>
                            </a>
                            <a @click="${(e) => this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/cao" href="">
                                <span class="icon-text">
                                    <i class="fa-solid fa-file-invoice"></i> CAO
                                </span>
                            </a>
                            <a @click="${(e) => this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/myKpn" href="">
                                <span class="icon-text">
                                    <i class="fa-solid fa-circle-user"></i> Mijn KPN
                                </span>
                            </a>
                            <a @click="${(e) => this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/admin/requestBoost" href="">
                                <span class="icon-text">
                                    <i class="fa-solid fa-lock"></i> Admin
                                </span>
                            </a>
                        </nav>
                        <div class="mobile-footer">
                            <div class="dropdowns-container">
                                <div class="dropdown-with-icon">
                                    <i class="fa-solid fa-language"></i>
                                    <select @change=${this._onLanguageChange} class="language-dropdown" aria-label="Kies een taal">
                                        <option value="nl">Nederlands</option>
                                        <option value="en">Engels</option>
                                    </select>
                                </div>

                                <div class="dropdown-with-icon">
                                    <i class="fa-solid fa-circle-half-stroke"></i>
                                    <select @change=${this._onThemeChange} class="theme-dropdown" aria-label="Kies een thema">
                                        <option value="light" selected>Light</option>
                                        <option value="dark">Dark</option>
                                    </select>
                                </div>
                            </div>

                            <button @click=${this._onLogout} type="button" class="logout-button">
                                <span class="icon-text">
                                    <i class="fa-solid fa-right-from-bracket"></i> Uitloggen
                                </span>
                            </button>
                        </div>
                    </div>
                </aside>

                <aside class="sidebar">
                    <button @click=${this._closeAside} class="close-button" aria-label="Sluit menu">
                        <i class="fa-solid fa-caret-left"></i>
                    </button>
                    <button @click=${this._showAside} class="show-button hidden" aria-label="Open menu">
                        <i class="fa-solid fa-caret-right"></i>
                    </button>
                    <img src="${KPNLogo}" alt="KPN Logo">

                    <a @click="${(e) => this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/" href="">
                        <span class="icon-text">
                            <i class="fas fa-house"></i> Home
                        </span>
                    </a>
                    <a @click="${(e) => this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/flexBoost" href="">
                        <span class="icon-text">
                            <i class="fa-solid fa-book"></i> Uitleg
                        </span>
                    </a>
                    <a @click="${(e) => this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/boost" href="">
                        <span class="icon-text">
                            <i class="fa-solid fa-rocket"></i> Boost
                        </span>
                    </a>
                    <a @click="${(e) => this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/flex" href="">
                        <span class="icon-text">
                            <i class="fa-solid fa-handshake"></i> Flex
                        </span>
                    </a>
                    <a @click="${(e) => this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/voting-advice" href="">
                        <span class="icon-text">
                            <i class="fa-solid fa-table-list"></i> Vragenlijst
                        </span>
                    </a>
                    <a @click="${(e) => this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/cao" href="">
                        <span class="icon-text">
                            <i class="fa-solid fa-file-invoice"></i> CAO
                        </span>
                    </a>
                    <a @click="${(e) => this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/myKpn" href="">
                        <span class="icon-text">
                            <i class="fa-solid fa-circle-user"></i> Mijn KPN
                        </span>
                    </a>
                    <a @click="${(e) => this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/admin/requestBoost" href="">
                        <span class="icon-text">
                            <i class="fa-solid fa-lock"></i> Admin
                        </span>
                    </a>

                    <div class="MijnKPN">
                        <div class="dropdown-with-icon">
                            <i class="fa-solid fa-language"></i>
                            <select @change=${this._onLanguageChange} class="language-dropdown" aria-label="Kies een taal">
                                <option value="nl">Nederlands</option>
                                <option value="en">Engels</option>
                            </select>
                        </div>

                        <div class="dropdown-with-icon">
                            <i class="fa-solid fa-circle-half-stroke"></i>
                            <select @change=${this._onThemeChange} class="theme-dropdown" aria-label="Kies een thema">
                                <option value="light" selected>Light</option>
                                <option value="dark">Dark</option>
                            </select>
                        </div>

                        <button @click=${this._onLogout} type="button" class="logout-button">
                            <span class="icon-text">
                                <i class="fa-solid fa-right-from-bracket"></i> Uitloggen
                            </span>
                        </button>
                    </div>

                    <div aria-live="polite" aria-atomic="true" id="live-region"
                       style="position: absolute; left: -9999px;"></div>
                </aside>
                
                <div id="outlet" class="content"></div>
            </div>
        `;
    }

    _navigate(event) {
        event.preventDefault();
        const route = event.currentTarget.getAttribute('data-route');
        VaadinRouter.go(route);
        
        this.highlightActiveLink(route);
        
        if (this.isMobileMenuOpen) {
            this._toggleMobileMenu();
        }

        const liveRegion = this.shadowRoot.querySelector('#live-region');
        if (liveRegion) {
            let message = '';
            switch (route) {
                case '/frontend-project-v2b_letsgo/':
                    message = 'op de home pagina';
                    break;
                case '/frontend-project-v2b_letsgo/flexBoost':
                    message = 'op de flex en boest pagina';
                    break;
                case '/frontend-project-v2b_letsgo/boost':
                    message = 'op de boest pagina';
                    break;
                case '/frontend-project-v2b_letsgo/flex':
                    message = 'op de flex pagina';
                    break;
                case '/frontend-project-v2b_letsgo/voting-advice':
                    message = 'op het vragenlijst pagina';
                    break;
                case '/frontend-project-v2b_letsgo/cao':
                    message = 'op de CAO pagina';
                    break;
                case '/frontend-project-v2b_letsgo/myKpn':
                    message = 'op mijn KPN pagina';
                    break;
                default:
                    message = 'op een pagina';
            }
            liveRegion.textContent = message;
        }
    }

    _onLogout() {
        localStorage.removeItem('userId');
        window.location.reload();
    }

    _hideLinks() {
        const allAsideLinks = this.shadowRoot.querySelectorAll('.sidebar a');
        allAsideLinks.forEach(link => link.classList.add('hidden'));
        const allAsideButtons = this.shadowRoot.querySelectorAll('.sidebar button');
        allAsideButtons.forEach(button => button.classList.add('hidden'));
    }

    _showLinks() {
        const allAsideLinks = this.shadowRoot.querySelectorAll('.sidebar a');
        allAsideLinks.forEach(link => link.classList.remove('hidden'));
        const allAsideButtons = this.shadowRoot.querySelectorAll('.sidebar button');
        allAsideButtons.forEach(button => button.classList.remove('hidden'));
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

    _onLanguageChange(event) {
        const newLanguage = event.target.value;
        languageHandler.setLanguage(newLanguage);
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
                min-height: 100vh;
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
                background-color: var(--kpn-light-gray);
                box-shadow: 0 8px 10px rgba(0, 0, 0, 0.4);
                transition: left 0.3s ease;
                overflow: visible;
                z-index: 999;
            }

            .sidebar .hidden {
                display: none;
                transition: margin-left 0.3s ease;
            }

            .content {
                flex-grow: 1;
                overflow: auto;
                box-sizing: border-box;
                transition: margin-left 0.3s ease;
            }

            .close-button,
            .show-button {
                position: absolute;
                right: -20px;
                top: 4px;
                color: var(--kpn-black);
                background-color: var(--kpn-white);
                border: none;
                font-size: 20px;
                font-weight: bold;
                cursor: pointer;
                padding: 5px;
                border-bottom-right-radius: 7px;
                border-top-right-radius: 7px;
                max-width: 40px;
            }

            .sidebar a {
                color: var(--kpn-black);
                width: 100%;
                text-decoration: none;
                font-size: 25px;
                display: flex;
                align-items: center;
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

            .sidebar a i {
                min-width: 30px;
                text-align: center;
                margin-right: 1px;
            }

            .MijnKPN {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 15px;
                margin-top: auto;
            }

            .MijnKPN a {
                text-decoration: underline;
                font-size: 15px;
            }

            .theme-dropdown,
            .language-dropdown,
            .MijnKPN button {
                width: 180px;
                margin: 0 auto;
                text-align: center;
            }

            .theme-dropdown,
            .language-dropdown {
                font-size: 15px;
                border: 2px solid var(--kpn-blue);
                border-radius: 5px;
                padding: 5px;
                cursor: pointer;
                transition: background-color 0.3s ease, color 0.3s ease;
                margin: 0;
            }

            .theme-dropdown:focus,
            .language-dropdown:focus {
                outline: 2px solid var(--kpn-green);
            }

            .theme-dropdown:hover,
            .language-dropdown:hover {
                border-color: var(--kpn-green-hover);
            }

            .MijnKPN button {
                margin: 0px;
                padding: 10px 24px;
                background-color: var(--kpn-blue);
                color: white;
                font-size: 16px;
                font-weight: bold;
                border-radius: 8px;
                border: none;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .MijnKPN button:hover {
                background-color: var(--kpn-blue-hover);
                cursor: pointer;
            }

            .MijnKPN button:focus {
                outline: 2px solid var(--kpn-green);
                border-radius: 8px;
                color: var(--kpn-black);
                background-color: var(--kpn-blue-hover);
            }
            
            .dropdown-with-icon {
                display: flex;
                align-items: center;
                gap: 5px;          
                width: 180px;      
                margin: 0 auto;
            }

            .dropdown-with-icon i {
                min-width: 30px;    
                text-align: center;
                margin-right: 1px;  
                font-size: 20px;
                color: var(--kpn-black);
            }

            .dropdown-with-icon select {
                margin: 0;
                width: 100%;      
            }

            .mobile-menu-button {
                display: none;
                position: fixed;
                top: 1rem;
                left: 1rem;
                z-index: 1000;
                background: var(--kpn-light-gray);
                color: var(--kpn-black);
                border: none;
                border-radius: 0.5rem;
                padding: 0.6rem;
                font-size: 1.25rem;
                cursor: pointer;
                transition: background-color 0.3s ease;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }

            .mobile-menu-button:hover {
                background: #e0e0e0;
            }

            .mobile-sidebar {
                display: none;
                position: fixed;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: var(--kpn-light-gray);
                z-index: 1001;
                transition: left 0.3s ease;
                overflow-y: auto;
                -webkit-overflow-scrolling: touch;
            }

            .mobile-sidebar.open {
                left: 0;
            }

            .mobile-close-button {
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: transparent;
                border: none;
                color: var(--kpn-black);
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0.5rem;
            }

            .mobile-sidebar-content {
                padding: 1.5rem;
                display: flex;
                flex-direction: column;
                min-height: 100%;
                max-height: 100%;
                box-sizing: border-box;
                align-items: center;
                overflow-y: auto;
            }

            .mobile-sidebar-content img {
                width: 160px;
                height: auto;
                margin: 0 auto 1.5rem;
            }

            .mobile-nav {
                margin-top: 1rem;
                display: flex;
                flex-direction: column;
                gap: 0.75rem;
                width: 100%;
                align-items: center;
                flex: 1;
                overflow-y: auto;
            }

            .mobile-nav a {
                color: var(--kpn-black);
                text-decoration: none;
                font-size: 1.6rem;
                font-weight: bold;
                padding: 0.75rem;
                border-radius: 0.5rem;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                max-width: 300px;
                text-align: center;
            }

            .mobile-nav a:hover {
                color: var(--kpn-green);
                background: transparent;
            }

            .mobile-nav a.active {
                color: var(--kpn-green);
            }

            .mobile-nav a i {
                margin-right: 12px;
                font-size: 1.4rem;
            }

            .mobile-footer {
                margin-top: auto;
                padding: 0.75rem 0;
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 0.75rem;
                align-items: center;
            }

            .mobile-footer .dropdown-with-icon {
                width: 48%;
            }

            .mobile-footer .dropdown-with-icon i {
                font-size: 1rem;
            }

            .mobile-footer .dropdown-with-icon select {
                width: 100%;
                font-size: 0.9rem;
                padding: 0.3rem;
                border: 2px solid var(--kpn-blue);
                border-radius: 5px;
            }

            .mobile-footer button {
                width: 100%;
                max-width: 300px;
                padding: 8px 16px;
                background-color: var(--kpn-blue);
                color: white;
                font-size: 0.95rem;
                font-weight: bold;
                border-radius: 8px;
                border: none;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 0.25rem;
                cursor: pointer;
            }

            .mobile-footer .dropdowns-container {
                display: flex;
                justify-content: space-between;
                width: 100%;
                max-width: 300px;
                padding: 0 0.5rem;
            }

            @media (max-width: 700px) {
                .sidebar {
                    display: none;
                }

                .mobile-menu-button {
                    display: block;
                }

                .mobile-sidebar {
                    display: block;
                }

                .content {
                    margin-left: 0 !important;
                    padding-top: 4rem;
                }
            }

            @media (max-height: 700px) {
                .mobile-nav {
                    gap: 0.5rem;
                }
                
                .mobile-nav a {
                    padding: 0.5rem;
                    font-size: 1.4rem;
                }

                .mobile-sidebar-content img {
                    width: 140px;
                    margin-bottom: 1rem;
                }

                .mobile-footer {
                    padding: 0.5rem 0;
                }
            }
        `;
    }
}

window.customElements.define('kpn-sidebar', Sidebar);
