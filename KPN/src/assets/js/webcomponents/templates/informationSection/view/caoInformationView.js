import {css, html, LitElement} from 'lit';
import './informationSectionView.js';
import {InformationController} from '../controller/informationController.js';

export class CaoInformationView extends LitElement {
    static properties = {
        caoData: { type: Array },
    };

    constructor() {
        super();
        this.caoData = [];
        this.controller = new InformationController('cao');
    }

    async connectedCallback() {
        super.connectedCallback();
        await this._loadData();
    }

    async _loadData() {
        try {
            this.caoData = await this.controller.loadInfo();
        } catch (error) {
            console.error('Error loading CAO data:', error);
        }
    }

    _renderSection(items) {
        return items.map(
            (item) => html`
                <information-section .sectionData="${item}"></information-section>`
        );
    }

    _calculateLastUpdated() {
        let date;
        if (this.caoData.lastUpdated) {
            const formattedDate = this.caoData.lastUpdated.replace(/-/g, '/').replace(/T.+/, '');
            date = new Date(formattedDate);
        }

        if (isNaN(date)) {
            return 'Invalid date';
        }

        return date.toLocaleDateString('nl-NL', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    }


    render() {
        return html`
            <div class="container">
                <main>
                    <h1>${this.caoData.title}</h1>
                    <p class="last-updated">Laatst bijgewerkt op: <span class="date">${this._calculateLastUpdated()}</span></p>
                    ${this._renderSection(this.caoData.items)}
                </main>
            </div>
        `;
    }

    static styles = css`
        .container {
            max-width: 100%;
            margin: 50px;
        }

        body {
            align-items: normal;
        }

        main {
            line-height: 1.4;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            background-color: var(--kpn-light-gray);
            padding: 50px 30px 10px 30px;
            color: var(--kpn-black);
        }

        h1 {
            color: var(--kpn-green);
        }

        .last-updated {
            color: var(--kpn-gray);
            margin-bottom: 20px;
        }

        section {
            margin-bottom: 40px;
            padding-left: 20px;
        }

        .cao-information-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .cao-information-text {
            margin: 0;
            max-height: 0;
            overflow: hidden;
            max-width: 100%;
        }

        .cao-information-text.show {
            max-height: fit-content;
            margin-bottom: 20px;
        }

        .section-buttons {
            display: flex;
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

        .section-buttons .read-more {
            background-color: var(--kpn-blue);
            color: var(--kpn-white);
        }

        .section-buttons button:hover {
            background-color: var(--kpn-blue-hover);
            border: 2px solid var(--kpn-blue-hover);
            color: var(--kpn-white);
        }

        .section-buttons button:focus {
            outline: 2px dashed var(--kpn-blue);
            outline-offset: 2px;
        }

        @media only screen and (max-width: 800px) {
            .container {
                margin: 30px 15px;
            }

            main {
                padding: 30px 15px 10px 15px;
            }

            .section-buttons {
                flex-direction: column;
            }

            .section-buttons button {
                margin: 10px 0 0 0;
            }
        }

        @media only screen and (max-width: 700px) {
            .cao-information-header {
                flex-direction: column;
                margin-bottom: 20px;
            }

            .section-buttons {
                width: 90%;
            }

            .section-buttons a, .section-buttons button {
                width: 100%;
            }
        }

        @media only screen and (max-width: 500px) {
            .date {
                display: block;
            }
            .cao-information-text {
                margin: 0;
            }
        }
    `;
}

window.customElements.define('cao-information', CaoInformationView);
