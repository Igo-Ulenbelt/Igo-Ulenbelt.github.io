import {css, html, LitElement} from "lit";
import { BoostController } from '../controller/boostModalController.js';
import { BoostService } from "../service/boostModalService.js";

export class BoostModalView extends LitElement {
    constructor() {
        super();
        this.controller = new BoostController(new BoostService());
        this.selectedType = '';
        this.remainingAmount = 0;
        this.errorMessages = {};
    }

    setSelectedType(type) {
        this.selectedType = type;
        this.requestUpdate();
    }

    setRemainingAmount(amount) {
        this.remainingAmount = amount;
        this.requestUpdate();
    }

    displayErrors(errors) {
        this.errorMessages = errors;
        this.requestUpdate();
    }

    clearAllErrors() {
        this.errorMessages = {};
        this.requestUpdate();
    }

    clearError(error) {
        this.errorMessages[error] = '';
        this.requestUpdate();
    }

    openModal(type, remainingAmount) {
        const modal = this.shadowRoot.querySelector('#myModal');
        modal.style.display = 'flex';

        if (isNaN(remainingAmount)) {
            remainingAmount = 0;
        }

        this.setRemainingAmount(remainingAmount);
        this.setSelectedType(type);
    }

    closeModal() {
        const modal = this.shadowRoot.querySelector('#myModal');
        modal.style.display = 'none';

        this.resetForm();
        this.clearAllErrors();
        this.setSelectedType('');
        this.setRemainingAmount(0);
    }

    resetForm() {
        const form = this.shadowRoot.getElementById('request');
        if (form) {
            form.reset();
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(this.shadowRoot.getElementById('request'));
        const data = Object.fromEntries(formData.entries());
        const userId = parseInt(localStorage.getItem('userId'));

        this.controller.handleFormSubmit(this, data, userId);
    }

    render() {
        return html`
            <dialog id="myModal" class="modal" @click="${this.closeModal}">
                <div class="modal-content" @click="${e => e.stopPropagation()}">
                    <div class="modal-header">
                        <p>Boost aanvragen</p>
                        <a @click="${this.closeModal}" class="close">&times;</a>
                    </div>
                    <div class="modal-body">
                        <form class="form" id="request" enctype="multipart/form-data">
                            <div class="form-inputs">
                                <div class="form-group">
                                    <div class="form-content">
                                        <label for="type">Type*</label><br>
                                        <select id="type" name="boostTypeId" .value="${this.selectedType}" style="pointer-events: none; background-color: #e9ecef;">
                                            <option value="1" ?selected="${this.selectedType === 'wellness'}">
                                                Fysiek en mentaal welzijn
                                            </option>
                                            <option value="2" ?selected="${this.selectedType === 'homeSustainability'}">
                                                Verduurzaming van je woning
                                            </option>
                                            <option value="3" ?selected="${this.selectedType === 'studentDebtRepayment'}">
                                                Aflossing studieschuld
                                            </option>
                                            <option value="4" ?selected="${this.selectedType === 'unionContribution'}">
                                                Vakbondscontributie
                                            </option>
                                        </select>
                                    </div>
                                    <div class="form-content">
                                        <label for="amount">Bedrag ${this.remainingAmount > 0 ? html`(max: ${this.remainingAmount})` : ''}*</label><br>
                                        <input type="number" id="amount" name="inlay" min="0" max="${this.remainingAmount}" @input="${() => this.clearError('amount')}">
                                        <div id="error-message-amount" class="error-text">
                                            ${this.errorMessages.amount || ''}
                                        </div>
                                    </div>
                                    <div class="form-content">
                                        <label for="proof">Bewijs (PDF)*</label><br>
                                        <input type="file" id="proof" name="proof" accept="application/pdf" @change="${() => this.clearError('proof')}">
                                        <div id="error-message-proof" class="error-text">
                                            ${this.errorMessages.proof || ''}
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="form-content">
                                        <label for="description">Beschrijving (max 255 tekens)</label><br>
                                        <textarea id="description" name="description" rows="5"></textarea>
                                        <div id="error-message-proof" class="error-text">
                                            ${this.errorMessages.description || ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="button-content">
                                <button type="submit" class="button" @click="${this.handleSubmit}">Aanvragen</button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        `;
    }

    static get styles() {

        return css`
            .modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                display: none;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                overflow: auto;
                background-color: rgb(0,0,0);
                background-color: rgba(0,0,0,0.4);
                z-index: 1000;
            }

            .modal-content {
                background-color: var(--kpn-light-gray);
                color: var(--kpn-black);
                margin: 15% auto;
                border: 1px solid #888;
                border-radius: 15px;
                width: 60%;
            }

            .modal-header {
                background-color: var(--kpn-green);
                padding: 0 20px;
                color: white;
                font-size: 28px;
                font-weight: bold;
                border-radius: 15px 15px 0 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .modal-body {
                color: var(--kpn-black);
                padding: 10px 10px;
            }

            .form-inputs {
                display: flex;
                justify-content: space-between;
            }

            .form-group {
                width: 50%;
                padding: 0 10px;
            }

            .form-content{
                margin: 10px 0;
            }

            .form label {
                font-weight: bold;
                color: var(--kpn-black);
                padding: 10px 0;
            }

            .form select,
            .form input:not([type="checkbox"]),
            .form input[type="file"],
            .form textarea {
                width: 100%;
                padding: 10px;
                border: 1px solid var(--kpn-black);
                border-radius: 5px;
                background-color: var(--kpn-white);
                font-size: 16px;
                color: var(--kpn-black);
                box-sizing: border-box;
                margin-top: 5px;
            }

            .form select,
            .form input[type="file"] {
                appearance: none;
                cursor: pointer;
                background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><polygon points="0,0 20,0 10,10" fill="%23333"/></svg>');
                background-repeat: no-repeat;
                background-position: right 10px center;
                background-size: 12px;
            }

            .form select:hover,
            .form input[type="file"]:hover,
            .form textarea:hover {
                border-color: #888;
            }

            .form select:focus,
            .form input[type="file"]:focus,
            .form textarea:focus {
                outline: none;
                border-color: var(--kpn-blue);
                box-shadow: 0 0 5px rgba(0, 0, 255, 0.2);
            }

            .form input[type="file"]::-webkit-file-upload-button {
                background-color: var(--kpn-blue);
                color: white;
                padding: 8px 12px;
                border: none;
                border-radius: 5px;
                font-size: 16px;
                cursor: pointer;
                font-weight: bold;
            }

            .form input[type="file"]::-webkit-file-upload-button:hover {
                background-color: var(--kpn-blue-hover);
            }

            .form textarea {
                resize: vertical;
                min-height: 213px;
            }

            .error-text {
                color: var(--kpn-error-red);
            }

            .is-invalid {
                border-color: var(--kpn-error-red)!important;
            }

            .button-content{
                display: flex;
                justify-content: center;
            }

            .button {
                background-color: var(--kpn-green);
                color: var(--kpn-white);
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
                font-size: 16px;
                margin: 10px 0;
                width: 100%;
                max-width: 400px;
            }

            .button:hover {
                background-color: var(--kpn-green-hover);
            }

            .close:hover,
            .close:focus {
                color: black;
                text-decoration: none;
                cursor: pointer;
            }

            @media (max-width: 850px) {
                .modal{
                    width: 95%;
                }
                .modal-content {
                    width: 100%;
                    margin: 15% auto;
                }
            }
        `;
    }
}

window.customElements.define('boost-modal', BoostModalView);
