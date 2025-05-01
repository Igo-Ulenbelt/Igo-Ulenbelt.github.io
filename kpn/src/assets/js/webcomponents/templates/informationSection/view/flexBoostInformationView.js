import {LitElement, html, css} from 'lit';
import './informationSectionView.js';
import {InformationController} from '../controller/informationController.js';

export class FlexBoostInformationView extends LitElement {
    static properties = {
        flexData: {type: Array},
        boostData: {type: Array},
    };

    constructor() {
        super();
        this.flexData = [];
        this.boostData = [];
        this.flexDataController = new InformationController('flex');
        this.boostDataController = new InformationController('boost');
    }

    async connectedCallback() {
        super.connectedCallback();
        await this._loadData();
    }

    async _loadData() {
        try {
            const flexSection = await this.flexDataController.loadInfo();
            const boostSection = await this.boostDataController.loadInfo();

            this.flexData = flexSection;
            this.boostData = boostSection;
        } catch (error) {
            console.error('Error loading Flex & Boost data:', error);
        }
    }

    _renderSection(items) {
        return items.map(
            (item) => html`
                <information-section .sectionData="${item}"></information-section>`
        );
    }

    _parseDate(dateString) {
        if (!dateString) return null;
        const formattedDate = dateString.replace(/-/g, '/').replace(/T.+/, '');
        const parsedDate = new Date(formattedDate);

        return isNaN(parsedDate) ? null : parsedDate;
    }

    _calculateLastUpdated() {
        const flexLastUpdated = this._parseDate(this.flexData.lastUpdated);
        const boostLastUpdated = this._parseDate(this.boostData.lastUpdated);

        let lastUpdated;

        if (flexLastUpdated && boostLastUpdated) {
            lastUpdated = flexLastUpdated > boostLastUpdated ? flexLastUpdated : boostLastUpdated;
        } else if (flexLastUpdated) {
            lastUpdated = flexLastUpdated;
        } else if (boostLastUpdated) {
            lastUpdated = boostLastUpdated;
        } else {
            return 'Invalid date';
        }

        return lastUpdated.toLocaleDateString('nl-NL', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    }


    render() {
        return html`
            <div class="container">
                <main>
                    <h1>Flex & Boost Uitleg</h1>
                    <p class="last-updated">Laatst bijgewerkt op: <span
                            class="date">${this._calculateLastUpdated()}</span></p>
                    <div class="content">
                        <section class="flex-boost">
                            <h2>Flex</h2>
                            <div class="flex-boost-content" id="flex">
                                ${this._renderSection(this.flexData.items)}
                            </div>
                        </section>

                        <section class="flex-boost">
                            <h2>Boost</h2>
                            <div class="flex-boost-content" id="boost">
                                ${this._renderSection(this.boostData.items)}
                            </div>
                        </section>
                    </div>
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
            padding: 30px;
            color: var(--kpn-black);
            margin-bottom: 20px;
        }

        h1 {
            color: var(--kpn-green);
        }

        h2 {
            color: var(--kpn-green);
        }

        .last-updated {
            color: var(--kpn-gray);
        }

        .content {
            display: flex;
            gap: 100px;
        }

        .flex-boost {
            width: 50%;
        }

        .flex-boost-information-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .flex-boost-information-text {
            margin: 0;
            max-height: 0;
            overflow: hidden;
            max-width: 100%;
        }

        .flex-boost-information-text.show {
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

        @media only screen and (max-width: 1020px) {
            .content {
                display: block;
            }

            .flex-boost {
                width: 100%;
            }
        }

        @media only screen and (max-width: 870px) {
            .container {
                margin: 30px 15px;
            }

            main {
                padding: 30px 15px 10px 15px;
            }

            .content {
                display: block;
            }

            .flex-boost {
                width: 100%;
            }
        }
        @media only screen and (max-width: 700px) {
            .date {
                display: block;
            }

            .flex-boost-information-header {
                flex-direction: column;
            }
        }
        @media only screen and (max-width: 500px) {
            .flex-boost-information-text .boost-information-text {
                margin: 0;
            }
        }
    `;
}

window.customElements.define('flex-boost-information', FlexBoostInformationView);
