import { LitElement, html, css } from 'lit';
import { TranslationMixin } from '../languageHandler';

export class ShareModal extends TranslationMixin(LitElement) {
    static get properties() {
        return {
            isOpen: { type: Boolean },
            currentPrice: { type: Number },
            ownedShares: { type: Number },
            availableFunds: { type: Number }
        };
    }

    constructor() {
        super();
        this.isOpen = false;
        this.currentPrice = 11.24; 
        this.ownedShares = 150; 
        this.availableFunds = 5000; 
    }

    get translationPage() {
        return 'shareManagement';
    }

    _openModal() {
        this.isOpen = true;
    }

    _closeModal() {
        this.isOpen = false;
    }

    _handlePurchase(e) {
        e.preventDefault();
        const amount = this.shadowRoot.querySelector('#shareAmount').value;
        alert(`Purchase request for ${amount} shares submitted`);
        this._closeModal();
    }

    _renderGraph() {
        return html`
            <svg class="graph" viewBox="0 0 300 100">
                <polyline
                    fill="none"
                    stroke="var(--kpn-green)"
                    stroke-width="2"
                    points="
                        0,80
                        50,70
                        100,90
                        150,50
                        200,60
                        250,30
                        300,40
                    "
                />
                
                ${[0, 1, 2, 3, 4].map(i => html`
                    <line
                        x1="0"
                        y1="${i * 25}"
                        x2="300"
                        y2="${i * 25}"
                        stroke="#e0e0e0"
                        stroke-width="0.5"
                    />
                `)}
            </svg>
        `;
    }

    render() {
        if (!this.isOpen) return html``;

        return html`
            <div class="modal-overlay" @click="${this._closeModal}">
                <div class="modal-content" @click="${e => e.stopPropagation()}">
                    <button class="close-button" @click="${this._closeModal}">&times;</button>
                    
                    <h1>${this.translations?.title || 'Aandelen Beheren'}</h1>
                    <p class="last-updated">
                        ${this.translations?.lastUpdated || 'Laatst bijgewerkt:'} ${new Date().toLocaleDateString()}
                    </p>

                    <div class="content-wrapper">
                        <section class="market-overview">
                            <h2>${this.translations?.marketOverview?.title || 'Markt Overzicht'}</h2>
                            <div class="stock-info">
                                <div class="price-info">
                                    <div class="current-price">
                                        <span class="label">${this.translations?.marketOverview?.currentPrice || 'Huidige Koers'}</span>
                                        <span class="value">€${this.currentPrice}</span>
                                    </div>
                                    <div class="price-change positive">
                                        <span>+0.45 (4.17%)</span>
                                    </div>
                                </div>
                                <div class="chart-container">
                                    ${this._renderGraph()}
                                </div>
                            </div>
                        </section>

                        <div class="info-sections">
                            <section class="portfolio">
                                <h2>${this.translations?.portfolio?.title || 'Mijn Portfolio'}</h2>
                                <div class="portfolio-info">
                                    <div class="info-item">
                                        <span>Aantal aandelen:</span>
                                        <span>${this.ownedShares}</span>
                                    </div>
                                    <div class="info-item">
                                        <span>Waarde:</span>
                                        <span>€${(this.ownedShares * this.currentPrice).toFixed(2)}</span>
                                    </div>
                                    <div class="info-item">
                                        <span>Beschikbaar:</span>
                                        <span>€${this.availableFunds}</span>
                                    </div>
                                </div>
                            </section>

                            <section class="trade">
                                <h2>${this.translations?.trade?.title || 'Aandelen Kopen'}</h2>
                                <form class="trade-form" @submit="${this._handlePurchase}">
                                    <div class="form-group">
                                        <label for="shareAmount">Aantal aandelen:</label>
                                        <input type="number" id="shareAmount" class="share-input" min="1" required>
                                    </div>
                                    <div class="total-cost">
                                        Totaal: €0.00
                                    </div>
                                    <button type="submit" class="purchase-button">
                                        ${this.translations?.trade?.buy || 'Kopen'}
                                    </button>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    static styles = css`
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }

        .modal-content {
            background-color: var(--kpn-light-gray);
            border-radius: 10px;
            padding: 30px;
            position: relative;
            width: 90%;
            max-width: 1200px;
            max-height: 90vh;
            overflow-y: auto;
        }

        .close-button {
            position: absolute;
            right: 20px;
            top: 20px;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: var(--kpn-black);
        }

        h1 {
            color: var(--kpn-green);
            text-align: center;
            margin-bottom: 10px;
        }

        h2 {
            color: var(--kpn-green);
            font-size: 20px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid var(--kpn-green);
        }

        .last-updated {
            text-align: center;
            color: var(--kpn-gray);
            font-size: 0.8em;
            margin-bottom: 30px;
        }

        .content-wrapper {
            display: flex;
            gap: 30px;
        }

        .market-overview {
            flex: 1;
            background: var(--kpn-white);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .info-sections {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .portfolio, .trade {
            background: var(--kpn-white);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .price-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            color: var(--kpn-black);
        }

        .current-price {
            font-size: 24px;
            font-weight: bold;
            color: var(--kpn-black);
        }

        .current-price .label {
            font-size: 16px;
            color: var(--kpn-gray);
            display: block;
            margin-bottom: 5px;
        }

        .price-change {
            font-weight: bold;
        }

        .price-change.positive {
            color: var(--kpn-green);
        }

        .info-item {
            display: flex;
            justify-content: space-between;
            padding: 12px;
            background: var(--kpn-light-gray);
            border-radius: 6px;
            margin-bottom: 10px;
            color: var(--kpn-black);
        }

        .trade-form {
            display: flex;
            flex-direction: column;
            gap: 15px;
            color: var(--kpn-black);
        }

        .form-group label {
            color: var(--kpn-black);
            margin-bottom: 5px;
            display: block;
        }

        .share-input {
            width: 100%;
            padding: 10px;
            border: 2px solid var(--kpn-green);
            border-radius: 6px;
            font-size: 16px;
            background: var(--kpn-white);
            color: var(--kpn-black);
        }

        .share-input:focus {
            outline: none;
            border-color: var(--kpn-blue);
            box-shadow: 0 0 5px rgba(0, 0, 255, 0.2);
        }

        .total-cost {
            font-size: 20px;
            font-weight: bold;
            color: var(--kpn-green);
            padding: 12px;
            background: var(--kpn-light-gray);
            border-radius: 6px;
        }

        .purchase-button {
            background-color: var(--kpn-green);
            color: var(--kpn-white);
            border: none;
            padding: 12px 20px;
            border-radius: 9999px;
            font-weight: bold;
            cursor: pointer;
            width: 100%;
        }

        .purchase-button:hover {
            background-color: var(--kpn-green-hover);
        }

        .chart-container {
            margin-top: 20px;
            background: var(--kpn-light-gray);
            padding: 15px;
            border-radius: 8px;
            height: 200px;
        }

        @media (max-width: 900px) {
            .content-wrapper {
                flex-direction: column;
            }

            .modal-content {
                margin: 20px;
                padding: 20px;
                max-height: 85vh;
            }

            .market-overview, .info-sections {
                width: 100%;
            }
        }

        @media (max-width: 600px) {
            .modal-content {
                margin: 10px;
                padding: 15px;
            }

            .price-info {
                flex-direction: column;
                align-items: flex-start;
            }

            .chart-container {
                height: 150px;
            }
        }
    `;
}

window.customElements.define('share-modal', ShareModal); 