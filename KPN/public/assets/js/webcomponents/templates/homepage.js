import {LitElement, css, html} from 'lit'

export class Homepage extends LitElement {
    render() {
        return html`
            <div class="container">
                <main class="homepage">
                    <section class="homepage-section">
                        <div class="header-title">
                            <h1>Mijn CAO</h1>
                        </div>
                        <div class="header-description">
                            <p class="description-text">
                                Hier vind je meer informatie over de introductie van de nieuwe CAO en de keuzes die je
                                kunt maken binnen de KPN Flex- en Boost-plannen.
                            </p>
                        </div>
                        <div class="cards">
                            <article class="card">
                                <h2 class="card-title">FLEX</h2>
                                <ul class="card-list">
                                    <li>
                                        Maandelijkse uitbetaling van vakantiegeld (8%)en dertiende maand (2%, vanaf
                                        januari 2025
                                        6,33%)
                                    </li>
                                    <br>
                                    <li>
                                        Deelname van KPN plan of KPN salesplan/retail plan
                                    </li>
                                    <br>
                                    <li>
                                        Aanschaf virtuele aandelen
                                    </li>
                                    <br>
                                    <li>
                                        Extra pensioenbijdrage (vanaf 2026)
                                    </li>
                                </ul>
                                <div class="card-button">
                                    <a href="flex.html" class="button">Lees meer</a>
                                </div>
                            </article>
                            <article class="card">
                                <h2 class="card-title">BOOST</h2>
                                <ul class="card-list">
                                    <li>
                                        Investeer €1250 in fysiek en mentaal welzijn (per jaar)
                                    </li>
                                    <br>
                                    <li>
                                        Investeer €5000 in verduurzaming van je woning (per 3 jaar)
                                    </li>
                                    <br>
                                    <li>
                                        Los tot €5000 van je studieschuld af (per 2 jaar)
                                    </li>
                                    <br>
                                    <li>
                                        Spaar voor sabbatical van 2 maanden (per 5 jaar)
                                    </li>
                                    <br>
                                    <li>
                                        Vakbondcontributie
                                    </li>
                                </ul>
                                <div class="card-button">
                                    <a href="boost.html" class="button">Lees meer</a>
                                </div>
                            </article>
                        </div>
                    </section>

                    <section class="tips-section">
                        <div>
                            <h2 class="tip-title">
                                <i class="fa-solid fa-circle-info"></i>
                                Quick tip
                            </h2>
                            <div class="tip-description">
                                <p class="tip-text">
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut
                                    labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        `;
    }

    static get styles() {
        return css`
            .container {
                width: 90%;
                margin: 50px auto;
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
                padding: 20px 0;
            }

            .header-title {
                display: flex;
                justify-content: center;
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
                padding: 10px 0;
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
                padding-top: 20px;
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
                justify-content: center;
                background: var(--kpn-light-gray);

            }

            .tip-title {
                text-align: center;
                margin: 0 15px;
            }

            .tip-text {
                text-align: center;
                max-width: 515px;
                margin: 0 15px;
            }

            @media only screen and (max-width: 800px) {
                body {
                    height: auto;
                }

                .container {
                    width: 100%;
                    margin: 0 auto;
                }

                .homepage-section {
                    padding: 20px 0;
                }

                .cards {
                    justify-content: center;
                    flex-wrap: wrap;
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
