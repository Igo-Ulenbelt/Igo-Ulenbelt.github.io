import {css, html, LitElement} from "lit";

export class VotingAdvice extends LitElement {
    render() {
        return html`
            <div class="container">
                <main>
                    <div class="kieswijzer-parent">
                        <div class="kieswijzer">
                            <h1>Algemene vragen</h1>
                            <p class="kieswijzer-question">Ik vind duurzaamheid belangerijk.</p>
                            <div class="kieswijzer-answers">
                                <button>Ja</button>
                                <button>Nee</button>
                                <button>Overslaan</button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>`;
    }

    static get styles() {
        return css`
            .kieswijzer-parent {
                color: var(--kpn-white);
                padding: 20px 40px;
            }

            .kieswijzer h1 {
                font-style: italic;
            }

            .kieswijzer-question {
                font-weight: bold;
                font-size: 2.5em;
            }

            .kieswijzer-answers {
                display: flex;
                flex-wrap: nowrap;
                justify-content: center;
            }

            .kieswijzer-answers button {
                width: 100%;
                background-color: var(--kpn-yellow);
                color: var(--kpn-black);
                border: none;
                padding: 10px 20px;
                margin: 10px;
                cursor: pointer;
                border-radius: 9999px;
            }

            .kieswijzer-answers button:hover {
                background-color: var(--kpn-yellow-hover);
            }

            @media (max-width: 768px) {
                .kieswijzer-answers {
                    flex-wrap: wrap;
                }

                .kieswijzer-answers button {
                    width: 45%;
                }
            }

            @media (max-width: 480px) {
                .kieswijzer-answers button {
                    width: 100%;
                }
            }
        `;
    }
}

window.customElements.define('kpn-voting-advice', VotingAdvice);