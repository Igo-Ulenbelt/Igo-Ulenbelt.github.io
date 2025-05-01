import {css, html, LitElement} from 'lit';

export class CAOInformation extends LitElement {
    _textToggle(e) {
        const button = e.target;
        const caoBox = button.closest('.cao-information');
        const caoInformationText = caoBox.querySelector('.cao-information-text');

        caoInformationText.classList.toggle('show');

        button.innerHTML = caoInformationText.classList.contains('show') ? 'Lees minder' : 'Lees meer';
    }

    render() {
        return html`
            <div class="container">
                <main>
                    <h1>CAO</h1>
                    <p class="last-updated">Laatst bijgewerkt op: 01-01-2024</p>
                    <section class="cao-information">
                        <h2>Algemeen</h2>
                        <p class="cao-information-text">
                            <b>Artikel 1.1 | Begrippen</b><br>

                            De begrippen in deze cao betekenen:
                            <br><br>
                            <b>A</b><br>
                            <b>Aanvullende uitkering</b><br>
                            uitkering bovenop de werkloosheidsuitkering;<br><br>
                            <b>AAC-DO</b><br>
                            Advies- en Arbitragecommissie Decentrale Overheden;<br>
                            <b>ABP</b><br>
                            Algemeen Burgerlijk Pensioenfonds;<br><br>
                            <b>AOW-gerechtigde leeftijd</b><br>
                            leeftijd waarop de AOW-uitkering ingaat volgens de Algemene Ouderdomswet;<br><br>
                            <b>arbeidsverleden</b><br>
                            arbeidsverleden volgens de Werkloosheidswet;<br>
                            <br><br>

                            <b>Artikel 1.2 | Toepassing Cao Gemeenten</b><br>
                            1. Deze cao geldt voor gemeenten in artikel 123 Grondwet, die zijn gelegen in het Europese deel van het Koninkrijk der Nederlanden.
                            <br>
                            2. Deze cao geldt voor de werknemer die met de werkgever een arbeidsovereenkomst is overeengekomen.
                        </p>
                        <div class="section-buttons">
                            <button class="read-more" @click="${this._textToggle}">
                                Lees meer
                            </button>
                            <button class="get-started">
                                Aan de slag
                            </button>
                        </div>
                    </section>
                    <section class="cao-information">
                        <h2>Arbeidsovereenkomst</h2>
                        <p class="cao-information-text">
                            <b>Artikel 2.1 | Sluiten van een arbeidsovereenkomst</b><br>
                            De werkgever en de werknemer gaan de arbeidsovereenkomst schriftelijk aan.
                            <br><br>
                            <b>Artikel 2.2 | Vacaturevervulling</b><br>
                            1. De werkgever vervult een vacature bij voorkeur met een interne kandidaat, tenzij
                            bedrijfs- of dienstbelangen zich daartegen verzetten.
                            <br>
                            2. Dit geldt ook voor oud-werknemers die een uitkering op grond van hoofdstuk 10 krijgen
                            voor rekening van de werkgever.
                            <br><br>
                            <b>Artikel 2.3 | Kosten medische keuring</b><br>

                            Als een medische keuring voor een bepaalde functie noodzakelijk is, betaalt de werkgever de
                            kosten.
                        </p>
                        <div class="section-buttons">
                            <button class="read-more" @click="${this._textToggle}">
                                Lees meer
                            </button>
                            <button class="get-started">
                                Aan de slag
                            </button>
                        </div>
                    </section>
                    <section class="cao-information">
                        <h2>Salaris, salaristoeslagen en vergoedingen</h2>
                        <p class="cao-information-text">
                            <b>Artikel 3.1 | Salaris</b><br>
                            1. De werknemer ontvangt een salaris volgens de salarisschaal die bij zijn functie hoort.
                            <br>
                            2. De werkgever betaalt het salaris maandelijks uit.
                            <br><br>
                            <b>Artikel 3.2 | Salaristoeslagen</b><br>
                            1. De werknemer kan in aanmerking komen voor een salaristoeslag.
                            <br>
                            2. De werkgever betaalt de salaristoeslag maandelijks uit.
                            <br><br>
                            <b>Artikel 3.3 | Vergoedingen</b><br>
                            1. De werknemer kan in aanmerking komen voor een vergoeding.
                            <br>
                            2. De werkgever betaalt de vergoeding maandelijks uit.
                        </p>
                        <div class="section-buttons">
                            <button class="read-more" @click="${this._textToggle}">
                                Lees meer
                            </button>
                            <button class="get-started">
                                Aan de slag
                            </button>
                        </div>
                    </section>
                    <section class="cao-information">
                        <h2>Werktijden en verlof</h2>
                        <p class="cao-information-text">
                            <b>Artikel 4.1 | Werktijden</b><br>
                            1. De werknemer werkt volgens de werktijdenregeling van de werkgever.
                            <br>
                            2. De werkgever kan de werktijdenregeling wijzigen.
                            <br><br>
                            <b>Artikel 4.2 | Verlof</b><br>
                            1. De werknemer heeft recht op verlof volgens de verlofregeling van de werkgever.
                            <br>
                            2. De werkgever kan de verlofregeling wijzigen.
                            <br><br>
                            <b>Artikel 4.3 | Ziekteverlof</b><br>
                            1. De werknemer meldt zich ziek bij de werkgever.
                            <br>
                            2. De werkgever betaalt het ziekteverlof uit.
                        </p>
                        <div class="section-buttons">
                            <button class="read-more" @click="${this._textToggle}">
                                Lees meer
                            </button>
                            <button class="get-started">
                                Aan de slag
                            </button>
                        </div>
                    </section>
                    <section class="cao-information">
                        <h2>Ontslag</h2>
                        <p class="cao-information-text">
                            <b>Artikel 5.1 | Ontslag</b><br>
                            1. De werkgever kan de werknemer ontslaan.
                            <br>
                            2. De werknemer kan de werkgever ontslaan.
                            <br><br>
                            <b>Artikel 5.2 | Ontslagvergoeding</b><br>
                            1. De werknemer heeft recht op een ontslagvergoeding.
                            <br>
                            2. De werkgever betaalt de ontslagvergoeding uit.
                            <br><br>
                            <b>Artikel 5.3 | Ontslagprocedure</b><br>
                            1. De werkgever volgt de ontslagprocedure.
                            <br>
                        </p>
                        <div class="section-buttons">
                            <button class="read-more" @click="${this._textToggle}">
                                Lees meer
                            </button>
                            <button class="get-started">
                                Aan de slag
                            </button>
                        </div>
                    </section>
                    <section class="cao-information">
                        <h2>Overige bepalingen</h2>
                        <p class="cao-information-text">
                            <b>Artikel 6.1 | Geheimhouding</b><br>
                            1. De werknemer houdt geheim wat hem in vertrouwen is toevertrouwd.
                            <br>
                            2. De werknemer houdt geheim wat hem in vertrouwen is toevertrouwd.
                            <br><br>
                            <b>Artikel 6.2 | Nevenwerkzaamheden</b><br>
                            1. De werknemer verricht geen nevenwerkzaamheden zonder toestemming van de werkgever.
                            <br>
                            2. De werknemer verricht geen nevenwerkzaamheden zonder toestemming van de werkgever.
                            <br><br>
                            <b>Artikel 6.3 | Gebruik van eigendommen</b><br>
                            1. De werknemer gebruikt de eigendommen van de werkgever zorgvuldig.
                            <br>
                            2. De werknemer gebruikt de eigendommen van de werkgever zorgvuldig.
                        </p>
                        <div class="section-buttons">
                            <button class="read-more" @click="${this._textToggle}">
                                Lees meer
                            </button>
                            <button class="get-started">
                                Aan de slag
                            </button>
                        </div>
                    </section>
                    <section class="cao-information">
                        <h2>Overige informatie</h2>
                        <p class="cao-information-text">
                            <b>Artikel 7.1 | Wijziging van de cao</b><br>
                            1. De werkgever kan de cao wijzigen.
                            <br>
                            2. De werknemer kan de cao wijzigen.
                            <br><br>
                            <b>Artikel 7.2 | Geschillen</b><br>
                            1. De werkgever en de werknemer proberen een geschil in onderling overleg op te lossen.
                            <br>
                            2. De werkgever en de werknemer proberen een geschil in onderling overleg op te lossen.
                            <br><br>
                            <b>Artikel 7.3 | Slotbepaling</b><br>
                            Deze cao treedt in werking op 1 januari 2024.
                        </p>
                        <div class="section-buttons">
                            <button class="read-more" @click="${this._textToggle}">
                                Lees meer
                            </button>
                            <button class="get-started">
                                Aan de slag
                            </button>
                        </div>
                    </section>
                </main>
            </div>
        `;
    }

    static styles = css`
        .container {
            width: 90%;
            margin: 50px;
        }

        body {
            align-items: normal;
        }

        main {
            line-height: 1.4;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 100%;
            background-color: var(--kpn-light-gray);
            padding: 50px 30px 10px 30px;
            color: var(--kpn-black);
        }

        h1 {
            color: var(--kpn-green);
        }

        .last-updated {
            color: var(--kpn-gray);
            font-size: 0.8em;
            margin-bottom: 20px;
        }

        section {
            margin-bottom: 40px;
            padding-left: 20px;
        }

        .cao-information-text {
            margin: 0 15px;
            max-height: 80px;
            overflow: hidden;
        }

        .cao-information-text.show {
            max-height: fit-content;
        }

        .section-buttons {
            display: flex;
        }

        .section-buttons button {
            color: var(--kpn-blue);
            background-color: var(--kpn-white);
            border: 2px solid var(--kpn-blue);
            padding: 10px 20px;
            margin: 20px 10px 0 0;
            border-radius: 9999px;
            font-weight: bold;
        }

        .section-buttons button:first-of-type {
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

        @media only screen and (max-width: 500px) {
            .cao-information-text {
                margin: 0;
            }
        }
    `;
}

window.customElements.define('kpn-cao-information', CAOInformation);