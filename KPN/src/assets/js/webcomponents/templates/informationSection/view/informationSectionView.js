import { css, html, LitElement } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { Router as VaadinRouter } from '@vaadin/router';

export class InformationSectionView extends LitElement {
    static properties = {
        sectionData: { type: Object },
        expanded: { type: Boolean },
    };

    constructor() {
        super();
        this.sectionData = {};
        this.expanded = false;
        this._onHashChange = this._onHashChange.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('load', this._onHashChange);
        window.addEventListener('hashchange', this._onHashChange);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('hashchange', this._onHashChange);
    }

    _onHashChange() {
        let hash = window.location.hash.replace('#', '').toLowerCase();
        const sectionTitle = this.sectionData.title.toLowerCase().replace(/ /g, '-');
        if (hash === sectionTitle) {
            console.log('Hash matches section title:', hash);
            this.expanded = true;
            const section = this.shadowRoot.querySelector('.information-section');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                window.scrollBy(0, -20);
            }
        }
    }

    _textToggle() {
        this.expanded = !this.expanded;
    }

    render() {
        let actionButtonHtml = html`
            <div class="no-action"></div>
        `;
        if (this.sectionData.action) {
            actionButtonHtml = html`
                <a @click="${(e) => {e.preventDefault(); VaadinRouter.go('/frontend-project-v2b_letsgo/' + this.sectionData.action.url); }}">
                    <button class="get-started" tabindex="-1">
                        ${this.sectionData.action.label}
                    </button>
                </a>
            `;
        }
        return html`
            <section class="information-section" id="${this.sectionData.title.toLowerCase().replace(/ /g, '-')}">
                <div class="information-header">
                    <h3>${this.sectionData.title}</h3>
                    <div class="section-buttons">
                        <button class="read-more" @click="${this._textToggle}">
                            ${this.expanded ? 'Lees minder' : 'Lees meer'}
                        </button>
                        ${actionButtonHtml}
                    </div>
                </div>
                <p class="information-text ${this.expanded ? 'show' : ''}">
                    ${unsafeHTML(this.sectionData.text)}
                </p>
            </section>
        `;
    }

    static styles = css`
        section {
            margin-bottom: 40px;
            padding-left: 20px;
        }

        .information-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }
        
        .information-header h3 {
            font-size: 1.5em;
            font-weight: bolder;
            max-width: 40%;
        }

        .information-text {
            margin: 0;
            max-height: 0;
            overflow: hidden;
            max-width: 100%;
            font-size: 1.1em;
        }

        .information-text.show {
            max-height: fit-content;
            margin-bottom: 20px;
        }

        .section-buttons {
            display: flex;
            min-width: fit-content;
        }

        .section-buttons button {
            color: var(--kpn-blue);
            background-color: var(--kpn-white);
            border: 2px solid var(--kpn-blue);
            padding: 10px 20px;
            height: fit-content;
            min-width: 125px;
            margin: 0 10px 0 0;
            border-radius: 9999px;
            font-weight: bold;
            cursor: pointer;
        }
        
        .section-buttons a {
            text-decoration: none;
            border-radius: 9999px;
            width: fit-content;
        }
        
        .section-buttons a button {
            margin: 0;
        }

        .section-buttons .read-more {
            background-color: var(--kpn-blue);
            color: var(--kpn-white);
        }

        .section-buttons button:hover {
            background-color: var(--kpn-blue-hover);
            border: 2px solid var(--kpn-blue-hover);
            color: var(--kpn-white);
        }

        .section-buttons button:focus, .section-buttons a:focus {
            outline: 2px dashed var(--kpn-blue);
            outline-offset: 2px;
        }
        
        .no-action {
            width: 125px;
        }

        @media only screen and (max-width: 909px) {
            .information-header h3 {
                text-align: center;
                max-width: 100%;
            }
            section {
                padding-left: 0;
            }
            .information-header {
                flex-direction: column;
                margin-bottom: 20px;
            }
            
            .no-action {
                display: none;
            }

            .section-buttons {
                width: 90%;
            }

            .section-buttons a, .section-buttons button {
                width: 100%;
            }
        }
    `;
}

window.customElements.define('information-section', InformationSectionView);
