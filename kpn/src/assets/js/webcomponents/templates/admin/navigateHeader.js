import { css, html, LitElement } from "lit";
import { Router as VaadinRouter } from '@vaadin/router';

export class navigateHeader extends LitElement {
    static properties = {
        title: { type: String },
    };

    constructor() {
        super();
        this.headerText = 'Default Header';
    }

    firstUpdated() {
        this.writeHeaderText();
    }

    writeHeaderText() {
        this.headerText = this.getAttribute('header-title') || 'Default Header';
        this.shadowRoot.querySelector('#headerText').innerText = this.headerText;
    }

    render() {
        return html`
            <header class="header">
                <div class="header-text">
                    <h1 id="headerText"></h1>
                </div>
                <div class="card-button">
                    <a @click="${(e) => this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/admin/home" href="" class="button">Home</a>
                </div>
                <div class="card-button">
                    <a @click="${(e) => this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/admin/requestBoost" href="" class="button">Boost aanvragingen</a>
                </div>
            </header>
        `;
    }

    _navigate(event) {
        event.preventDefault();
        const route = event.currentTarget.getAttribute('data-route');
        VaadinRouter.go(route);
    }

    static styles = css`
        h1 {
            color: var(--kpn-green);
        }
        
        .header{
            border: 1px solid var(--kpn-border-gray);
            border-radius: 10px;
            padding: 10px;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
        }

        .header-text {
            margin-right: 30px;
        }

        .card-button {
            margin: 10px;
        }

        .card-button a {
            width: 100%;
            background-color: var(--kpn-green);
            color: var(--kpn-white);
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 9999px;
            max-width: 200px;
            text-align: center;
            text-decoration: none;
        }

        .card-button a:hover {
            background-color: var(--kpn-green-hover);
        }
    `;
}

window.customElements.define('kpn-navigate-header', navigateHeader);