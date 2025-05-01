import {LitElement, html, css} from 'lit';
import './shareModal.js';
import flexData from '../../../../assets/json/flexData.json';

export class FlexPage extends LitElement {
    static get properties() {
        return {
            monthlySalary: {type: Number},
            holidayAllowance: {type: Number},
            thirteenthMonth: {type: Number},
            savedAmount: {type: Number},
            payoutOption: {type: String},
            data: {type: Object},
            isParticipating: {type: Boolean},
            nextPayoutDate: {type: String}
        };
    }

    constructor() {
        super();
        this.monthlySalary = 0;
        this.holidayAllowance = 0;
        this.thirteenthMonth = 0;
        this.savedAmount = 0;
        this.amount_spent = 0;
        this.isParticipating = false;
        this.payoutOption = 'monthly';
        this.data = flexData;
        this.nextPayoutDate = '01/06/2024';
        this.loadUsers()
    }

    async loadUsers() {
        const response = await fetch('./src/assets/json/flex.json');
        const data = await response.json()
        const user = data[0]
        if (user) {
            this.monthlySalary = user.salary / 12;
            this.holidayAllowance = this.monthlySalary * 0.08;
            this.thirteenthMonth = this.monthlySalary * 0.02;
            this.savedAmount = user.shares.amountWaiting;
            this.nextPayoutDate = user.shares.payoutDate;
            this.amount_spent = user.shares.amountSpent;
        } else {
            console.log("Error loading user")
        }
    }

    _handlePayoutOptionChange(e) {
        this.payoutOption = e.target.checked ? 'save' : 'monthly';
        this.requestUpdate();
    }

    _handlePayout() {
        this.savedAmount = 0;
        this._showNotification('Je spaargeld is uitbetaald');
    }

    _toggleParticipation() {
        this.isParticipating = !this.isParticipating;
        const message = this.isParticipating ?
            'Je neemt nu deel aan het KPN Salesplan' :
            'Je neemt niet meer deel aan het KPN Salesplan';
        this._showNotification(message);
    }

    _showNotification(message) {
        const notification = html`
            <div class="notification ${this.isParticipating ? 'success' : 'info'}">
                ${message}
            </div>
        `;
        this.shadowRoot.querySelector('.salesplan').appendChild(notification);
        setTimeout(() => {
            const notif = this.shadowRoot.querySelector('.notification');
            if (notif) notif.remove();
        }, 3000);
    }

    _ensureOneOptionSelected() {
        if (!this.payoutMonthly && !this.saveForLater) {
            this.payoutMonthly = true;
        }
    }

    _calculateMonthlyPayout() {
        return this.payoutMonthly ? (this.holidayAllowance + this.thirteenthMonth).toFixed(2) : 0;
    }

    _calculateSavedAmount() {
        const monthsSaved = 12;
        return this.saveForLater ? ((this.holidayAllowance + this.thirteenthMonth) * monthsSaved).toFixed(2) : 0;
    }

    _handlePayoutChange(e) {
        this.payoutMonthly = e.target.checked;
        this.saveForLater = !this.payoutMonthly;
        this.requestUpdate();
    }

    _handleSaveChange(e) {
        this.saveForLater = e.target.checked;
        this.payoutMonthly = !this.saveForLater;
        this.requestUpdate();
    }

    render() {
        return html`
            ${this._renderMainContent()}
        `;
    }

    _renderMainContent() {
        return html`
            <share-modal id="shareModal"></share-modal>
            <div class="container">
                <main class="content">
                    <h1>${this.data.title}</h1>
                    <p class="description">${this.data.description}</p>
                    <div class="status-money">
                        <h3 class="remaining-amount">Resterende bedrag: ${this.savedAmount}</h3>
                        <h3 class="spent-amount">Uitgegeven bedrag: ${this.amount_spent}</h3>
                    </div>

                    <div class="flex-content">
                        <section class="box aandelen">
                            <h2>${this.data.shares.title}</h2>
                            <p>Volgende uitbetaling: ${this.nextPayoutDate}</p>
                            <p>Huidige jaar: ${this.data.shares.currentYear}</p>
                            <button @click="${this._openShareModal}">${this.data.shares.buttonText}</button>
                        </section>

                        <section class="box vakantiegeld">
                            <h2>${this.data.holiday.title}</h2>
                            ${this._renderHolidayAllowanceContent()}
                        </section>

                        <section class="box salesplan">
                            <h2>${this.data.salesplan.title}</h2>
                            <p>${this.data.salesplan.description}</p>
                            <button @click="${this._toggleParticipation}"
                                    class="participation-button ${this.isParticipating ? 'participating' : ''}">
                                ${this.isParticipating ? 'Deelname stopzetten' : this.data.salesplan.buttonText}
                            </button>
                        </section>

                        <section class="box pensioenbijdrage disabled">
                            <h2>${this.data.pension.title}</h2>
                            <p>${this.data.pension.description}</p>
                            <label for="pensioen">${this.data.pension.inputLabel}</label>
                            <input type="number" id="pensioen" name="pensioen" min="0" step="1" value="0" disabled>
                            <button disabled>${this.data.pension.buttonText}</button>
                        </section>
                    </div>
                </main>
            </div>
        `;
    }

    _openShareModal() {
        const modal = this.shadowRoot.querySelector('#shareModal');
        modal._openModal();
    }

    static styles = css`
        .container {
            max-width: 100%;
            margin: 50px;
        }

        main {
            line-height: 1.4;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            background-color: var(--kpn-light-gray);
            padding: 30px;
            color: var(--kpn-black);
        }

        h1 {
            color: var(--kpn-green);
            text-align: center;
            margin-bottom: 20px;
        }

        .description {
            text-align: center;
            max-width: 600px;
            margin: 0 auto 30px;
            color: var(--kpn-black);
        }

        .status-money {
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;
            padding: 0 20px;
        }

        .remaining-amount {
            color: var(--kpn-blue);
            font-size: 16px;
        }

        .spent-amount {
            color: var(--kpn-green);
            font-size: 16px;
        }

        .flex-content {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 20px;
            grid-template-areas:
        "mijn-aandelen vakantiegeld pensioenbijdrage"
        "mijn-aandelen mijn-salesplan pensioenbijdrage";
        }

        .box {
            background: var(--kpn-white);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            font-size: 16px;
            color: var(--kpn-black);
            text-align: center;
            width: 100%;
            box-sizing: border-box;
        }

        .box h2 {
            color: var(--kpn-green);
            font-size: 22px;
            font-weight: bold;
            margin-bottom: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid var(--kpn-green);
            width: 100%;
        }

        .box button {
            background-color: var(--kpn-green);
            color: var(--kpn-white);
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 9999px;
            font-weight: bold;
            margin-top: auto;
            min-width: 125px;
        }

        .box button:hover {
            background-color: var(--kpn-green-hover);
        }

        .aandelen {
            grid-area: mijn-aandelen;
        }

        .vakantiegeld {
            grid-area: vakantiegeld;
            margin: 0;
            padding: 20px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .salesplan {
            grid-area: mijn-salesplan;
        }

        .pensioenbijdrage {
            grid-area: pensioenbijdrage;
        }

        .vakantiegeld {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .amounts {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .checkbox-group {
            display: flex;
            gap: 20px;
            margin-top: auto;
            padding-top: 10px;
        }

        .checkbox-label {
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            user-select: none;
            padding: 8px 16px;
            border-radius: 6px;
            background: var(--kpn-light-gray);
            transition: background-color 0.2s;
        }

        .checkbox-label:hover {
            background: var(--kpn-gray-admin);
        }

        .checkbox-input {
            appearance: none;
            width: 20px;
            height: 20px;
            border: 2px solid var(--kpn-green);
            border-radius: 4px;
            cursor: pointer;
            position: relative;
            transition: all 0.2s;
        }

        .checkbox-input:checked {
            background-color: var(--kpn-green);
        }

        .checkbox-input:checked::after {
            content: "✓";
            color: white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 14px;
        }

        .checkbox-input:focus {
            outline: 2px solid var(--kpn-blue);
            outline-offset: 2px;
        }

        .checkbox-text {
            font-weight: bold;
            color: var(--kpn-black);
        }

        @media (max-width: 1400px) {
            .flex-content {
                grid-template-columns: 1fr 1fr;
                gap: 25px;
                grid-template-areas:
            "mijn-aandelen vakantiegeld"
            "mijn-salesplan pensioenbijdrage";
            }
        }

        @media (max-width: 900px) {
            .container {
                margin: 30px 20px;
            }

            .flex-content {
                grid-template-columns: 1fr;
                grid-template-areas:
            "mijn-aandelen"
            "vakantiegeld"
            "mijn-salesplan"
            "pensioenbijdrage";
            }

            .status-money {
                flex-direction: column;
                gap: 10px;
                align-items: center;
            }
        }

        @media (max-width: 600px) {
            .container {
                margin: 20px 10px;
            }

            main {
                padding: 20px 15px;
            }

            .amount-info {
                flex-direction: column;
                gap: 8px;
            }

            .checkbox-group {
                flex-direction: column;
                gap: 12px;
            }

            .checkbox-label {
                width: 100%;
            }
        }

        .disabled {
            opacity: 0.6;
            cursor: not-allowed;
            position: relative;
        }

        .disabled::after {
            content: "Beschikbaar vanaf 2026";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 14px;
            opacity: 0;
            transition: opacity 0.3s;
        }

        .disabled:hover::after {
            opacity: 1;
        }

        .disabled input,
        .disabled button {
            cursor: not-allowed;
        }

        .disabled button {
            background-color: var(--kpn-gray);
        }

        .vakantiegeld {
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 25px;
        }

        .amounts {
            display: flex;
            flex-direction: column;
            gap: 12px;
            background: var(--kpn-white);
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .amount-item {
            background: var(--kpn-white);
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .amount-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
        }

        .amount-label {
            color: var(--kpn-black);
            font-size: 0.95em;
        }

        .amount-value {
            font-weight: bold;
            color: var(--kpn-green);
            white-space: nowrap;
        }

        .result-item {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 15px;
            background: var(--kpn-light-gray);
            border-radius: 8px;
        }

        .result-content {
            display: flex;
            flex-direction: column;
            gap: 5px;
            flex-grow: 1;
        }

        .result-label {
            color: var(--kpn-black);
            font-size: 0.9em;
        }

        .result-value {
            color: var(--kpn-green);
            font-weight: bold;
            font-size: 1.1em;
        }

        .hidden {
            display: none;
        }

        .switch {
            position: relative;
            display: inline-block;
            max-width: 60px;
            width: 100%;
            height: 34px;
        }

        .switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            transition: .4s;
            border-radius: 34px;
        }

        .slider:before {
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
        }

        input:checked + .slider {
            background-color: var(--kpn-green);
        }

        input:checked + .slider:before {
            transform: translateX(100%);
        }

        .switch-label {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 10px 0;
            padding: 5px;
        }

        .switch-text {
            margin-right: 15px;
        }

        .participation-button {
            background-color: var(--kpn-green);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .participation-button.participating {
            background-color: var(--kpn-error-red);
        }

        .participation-button.participating:hover {
            background-color: var(--kpn-error-red-hover);
        }

        .notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 8px;
            color: white;
            animation: slideIn 0.3s ease-out;
        }

        .notification.success {
            background-color: var(--kpn-green);
        }

        .notification.info {
            background-color: var(--kpn-blue);
        }

        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        .switch-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 20px;
            background: var(--kpn-light-gray);
            border-radius: 25px;
            margin: 15px 0;
        }

        .switch-label-left, .switch-label-right {
            font-weight: 500;
            padding: 0 15px;
        }

        .switch-label-left.active, .switch-label-right.active {
            color: var(--kpn-green);
        }

        .saved-amount {
            text-align: center;
            margin-top: 15px;
            padding: 15px;
            background: var(--kpn-light-gray);
            border-radius: 8px;
        }

        .next-payout {
            text-align: center;
            margin-top: 15px;
            color: var(--kpn-black);
        }

        /* Modal responsiveness fixes */

        .modal-content {
            max-width: 90vw;
            max-height: 90vh;
            overflow-y: auto;
            padding: 20px;
        }

        .modal-content > * {
            max-width: 100%;
        }

        .chart-container {
            width: 100%;
            overflow: hidden;
        }

        @media (max-width: 600px) {
            .switch-container {
                padding: 8px 15px;
            }

            .switch-label-left, .switch-label-right {
                padding: 0 10px;
                font-size: 0.9em;
            }
        }

        @media (min-width: 320px) and (max-width: 360px),
        (min-width: 601px) and (max-width: 645px),
        (min-width: 901px) and (max-width: 1097px),
        (min-width: 1400px) and (max-width: 1447px) {
            .switch-container {
                flex-direction: column;
                gap: 10px;
            }
        }

    `;

    _renderSalesPlanContent() {
        return html`
            <div class="salesplan-content">
                <p>Huidige deelname: ${this.isParticipating ? 'Actief' : 'Inactief'}</p>
                <p>Percentage: ${this.isParticipating ? '16.33%' : '0%'}</p>
                <p>Volgende uitbetaling: ${this.nextPayoutDate}</p>
                <p>Opgebouwd bedrag: €${this.isParticipating ? '2449.50' : '0'}</p>
                <button @click="${this._toggleParticipation}"
                        class="participation-button ${this.isParticipating ? 'participating' : ''}">
                    ${this.isParticipating ? 'Uitschrijven' : this.data.salesplan.buttonText}
                </button>
            </div>
        `;
    }

    _renderHolidayAllowanceContent() {
        return html`
            <div class="amounts">
                <div class="amount-item">
                    <div class="amount-info">
                        <span class="amount-label">Maandelijks vakantiegeld (8%):</span>
                        <span class="amount-value">€${this.holidayAllowance.toFixed(2)}</span>
                    </div>
                </div>
                <div class="amount-item">
                    <div class="amount-info">
                        <span class="amount-label">13e maand (2%):</span>
                        <span class="amount-value">€${this.thirteenthMonth.toFixed(2)}</span>
                    </div>
                </div>
            </div>

            <div class="options-container">
                <div class="switch-container">
                    <span class="switch-label-left ${this.payoutOption === 'monthly' ? 'active' : ''}">
                        ${this.data.holiday.options.payout}
                    </span>
                    <label class="switch">
                        <input type="checkbox"
                               ?checked="${this.payoutOption === 'save'}"
                               @change="${this._handlePayoutOptionChange}">
                        <span class="slider"></span>
                    </label>
                    <span class="switch-label-right ${this.payoutOption === 'save' ? 'active' : ''}">
                        ${this.data.holiday.options.save}
                    </span>
                </div>

                ${this.payoutOption === 'monthly' ? html`
                    <p class="next-payout">Volgende uitbetaling: ${this.nextPayoutDate}</p>
                ` : ''}

                ${this.payoutOption === 'save' ? html`
                    <div class="saved-amount">
                        <p>Gespaard bedrag: €${this._calculateSavedAmount()}</p>
                        <button class="payout-button" @click="${this._handlePayout}">
                            Nu uitbetalen
                        </button>
                    </div>
                ` : ''}
            </div>
        `;
    }
}

window.customElements.define('kpn-flex', FlexPage);
