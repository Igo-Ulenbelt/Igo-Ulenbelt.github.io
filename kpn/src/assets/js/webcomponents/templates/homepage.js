import {LitElement, css, html} from 'lit'
import { TranslationMixin } from '../languageHandler.js';
import { Router as VaadinRouter } from '@vaadin/router';
import './quickTips.js';

export class Homepage extends TranslationMixin(LitElement) {
    get translationPage() {
        return 'homepage';
    }

    render() {
        return html`
            <div class="container">
                <main class="homepage">
                    <section class="homepage-section">
                        <div class="header-title">
                            <h1>${this.translations?.title || 'Mijn CAO'}</h1>
                        </div>
                        <div class="header-description">
                            <p class="description-text">
                                ${this.translations?.description || 'Hier vind je meer informatie over de introductie van de nieuwe CAO en de keuzes die je kunt maken binnen de KPN Flex- en Boost-plannen.'}
                            </p>
                        </div>
                        <div class="cards">
                            <article class="card">
                                <h2 class="card-title">${this.translations?.sections?.flex?.title || 'FLEX'}</h2>
                                <ul class="card-list">
                                    ${(this.translations?.sections?.flex?.listItems || [
                                        "Maandelijkse uitbetaling van vakantiegeld (8%)en dertiende maand (2%, vanaf januari 2025 6,33%)",
                                        "Deelname van KPN plan of KPN salesplan/retail plan",
                                        "Aanschaf virtuele aandelen",
                                        "Extra pensioenbijdrage (vanaf 2026)"
                                    ]).map(item => html`
                                        <li>${item}</li>
                                        <br>
                                    `)}
                                </ul>
                                <div class="card-button">
                                    <a @click="${(e) => {e.preventDefault(); VaadinRouter.go('/frontend-project-v2b_letsgo/flexBoost'); }}" class="button">${this.translations?.sections?.flex?.button || 'Lees meer'}</a>
                                </div>
                            </article>
                            <article class="card">
                                <h2 class="card-title">${this.translations?.sections?.boost?.title || 'BOOST'}</h2>
                                <ul class="card-list">
                                    ${(this.translations?.sections?.boost?.listItems || [
                                        "Investeer €1250 in fysiek en mentaal welzijn (per jaar)",
                                        "Investeer €5000 in verduurzaming van je woning (per 3 jaar)",
                                        "Los tot €5000 van je studieschuld af (per 2 jaar)",
                                        "Spaar voor sabbatical van 2 maanden (per 5 jaar)",
                                        "Vakbondcontributie"
                                    ]).map(item => html`
                                        <li>${item}</li>
                                        <br>
                                    `)}
                                </ul>
                                <div class="card-button">
                                    <a @click="${(e) => {e.preventDefault(); VaadinRouter.go('/frontend-project-v2b_letsgo/flexBoost'); }}" class="button">${this.translations?.sections?.boost?.button || 'Lees meer'}</a>
                                </div>
                            </article>
                        </div>
                        <div class="questionnaire">
                            <h2>${this.translations?.questionnaire || 'Hulp bij je keuze nodig? Doe deze vragenlijst!'}</h2>
                            <div class="card-button">
                                <a @click="${(e) => {e.preventDefault(); VaadinRouter.go('/frontend-project-v2b_letsgo/voting-advice'); }}" class="button">${this.translations?.questionnaireButton || 'Vragenlijst invullen'}</a>
                            </div>
                        </div>
                    </section>

                    <section class="tips-section">
                        <div class="quick-tips-content">
                            <quick-tips></quick-tips>
                        </div>
                    </section>
                </main>
            </div>
        `;
    }

    static get styles() {
        return css`
            .container {
                max-width: 100%;
                margin: 50px;
            }

            .homepage {
                line-height: 1.4;
            }

            .homepage h1 {
                color: var(--kpn-green);
            }

            .homepage h2 {
                color: var(--kpn-green);
            }

            .homepage p {
                color: var(--kpn-black);
            }

            .homepage-section {
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                width: 100%;
                background-color: var(--kpn-light-gray);
                padding-top: 10px;
                padding-bottom: 20px;
            }

            .header-title {
                text-align: center;
            }

            .header-description {
                display: flex;
                justify-content: center;
            }

            .description-text {
                text-align: center;
                max-width: 515px;
                margin: 0 15px;
            }

            .cards {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                margin-top: 20px;
            }

            .card {
                display: flex;
                background-color: var(--kpn-white);
                color: var(--kpn-black);
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                margin: 15px;
                width: 100%;
                max-width: 375px;
                flex-direction: column;
            }

            .card-title {
                display: flex;
                justify-content: center;
            }

            .card-list {
                padding: 0 25px;
                flex-grow: 1;
                line-height: 1.4;
            }

            .card-button {
                display: flex;
                justify-content: center;
                margin-top: auto;
            }

            .card-button a {
                width: 100%;
                background-color: var(--kpn-green);
                color: var(--kpn-black);
                border: none;
                padding: 10px 20px;
                margin: 10px;
                cursor: pointer;
                border-radius: 9999px;
                max-width: 200px;
                text-align: center;
                text-decoration: none;
            }

            .card-button a:hover {
                background-color: var(--kpn-green-hover);
            }

             .tips-section {
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                background-color: var(--kpn-light-gray);
                margin: 50px 0 20px 0;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .tip-title {
                text-align: center;
                margin: 0 0 15px 0;
                color: var(--kpn-green);
                font-size: 1.2rem;
                width: 100%;
            }

            .quick-tips-content {
                max-width: 600px;
                width: 100%;
            }

            .tip-text {
                text-align: center;
                margin: 15px 0;
                color: var(--kpn-black);
            }

            .progress-bar {
                height: 4px;
                background: #e0e0e0;
                border-radius: 2px;
                margin-top: 15px;
            }

            .progress-fill {
                height: 100%;
                background: var(--kpn-green);
                width: 0;
                transition: width 0.3s ease;
                border-radius: 2px;
            }

            .questionnaire{
                text-align: center;
                margin-top: 20px;
            }
        }

        @media only screen and (max-width: 800px) {
            body {
                height: auto;
            }

            .container {
                margin: 30px 15px;
            }

            .homepage-section {
                padding: 20px 0;
            }

            .cards {
                justify-content: center;
                margin-top: 20px;
            }

            .card {
                width: 100%;
            }

            .tip-title {
                text-align: center;
            }

            .tip-text {
                text-align: center;
            }
        `
    }
}

window.customElements.define('kpn-home', Homepage)
