import {css, html, LitElement} from "lit";

export class VotingAdvice extends LitElement {
    static properties = {
        questionIndex: { type: Number },
        answers: { type: Array },
        displayResults: { type: Boolean },
        isLoading: { type: Boolean }
    };
    constructor() {
        super();
        this.questions = []
        this.questionIndex = 0;
        this.answers = [];
        this.categories= []
        this.expanded=[false,false,false,false,false,false]
        if(this.answers===[]){
        this.displayResults = false;}
        else{this.displayResults=true;}
        this.isLoading = true;
        this.initData();
    }

    async initData() {
        this.questions = await this.loadQuestions();
        this.categories = await this.loadCategories();
        this.loadResults();
        this.categories.sort((a, b) => b.amount - a.amount);
        this.isLoading = false;
        this.requestUpdate();
    }
    async loadQuestions() {
        const response = await fetch('./src/assets/json/kieswijzerQuestions.json');
        return await response.json();
    }

    async loadCategories() {
        const response = await fetch('./src/assets/json/kieswijzerCategories.json');
        return await response.json();
    }
    recordAnswer(answer) {
        this.answers.push({
            question: this.questions[this.questionIndex],
            answer: answer
        });

        if (this.questionIndex < this.questions.length - 1) {
            this.questionIndex++;
        } else {
            this.displayResults = true;
            console.log(this.answers)
            this.calculateResults()
            this.shadowRoot.querySelector('#results').focus();
        }

        this.requestUpdate();
        this.shadowRoot.querySelector('.kieswijzer-question').focus();
    }
    calculateResults() {
        this.answers.forEach(answer => {
            if (answer.answer === "Ja") {
                const question = answer.question;
                const category= this.categories.find(c=> c.category === question.category);
                category.amount++;
                }
            if (answer.answer === "Nee") {
                const question = answer.question;
                const category= this.categories.find(c=> c.category === question.category);
                category.amount--;
            }
            });
        this.categories.sort((a, b) => b.amount - a.amount);
        this.saveResults();

        console.log(this.categories);
    }
    saveResults(){
        localStorage.setItem('answers', JSON.stringify(this.categories));
    }
    loadResults() {
        const savedAnswers = localStorage.getItem('answers');
        if (savedAnswers) {
            const savedCategories = JSON.parse(savedAnswers);
            savedCategories.forEach(savedCategory => {
                const category = this.categories.find(c => c.category === savedCategory.category);
                if (category) {
                    category.amount = savedCategory.amount
                }
            });
            this.displayResults = true;
        }
    }
    reset() {
        localStorage.removeItem('answers');
        this.answers = [];
        this.questionIndex = 0;
        this.categories.forEach(category => {
            category.amount = 0;
        });
        this.displayResults = false;
    }
    expandInfo(index) {
        this.expanded[index] = !this.expanded[index];
        this.requestUpdate();
    }

    render() {
        if (this.isLoading) {
            return html`<p>Loading...</p>`;
        }
        if (this.displayResults) {
            const top3 = this.categories.slice(0, 3);
            const interesting = this.categories.slice(3, 6);
            return html`
                <div class="container">
                    <main>
                        <div class="kieswijzer-parent">
                            <div class="kieswijzer-results">
                                <h1 id="results">Resultaten</h1>
                                                            <div class="kieswijzer-information">
                                <h2 tabindex="0">Nuttige informatie</h2>
                                ${top3.map((category, index) => html`
                                    <div class="kieswijzer-result" id="kieswijzer-${index + 1}" aria-live="polite" tabindex="0">
                                        <p>${category.category}</p>
                                        <button 
                                            class="result-button" 
                                            aria-label="${this.expanded[index] ? 'Minder informatie over' : 'Meer informatie over'} ${category.category}" 
                                            @click="${() => this.expandInfo(index)}">
                                            ${category.isExpanded ? 'Minder' : 'Meer'}
                                        </button>
                                        <button
                                                class="result-button"
                                                aria-label="Neem actie voor ${category.category}"
                                                @click="${() => window.open(category.link, '_blank')}">
                                            Actie
                                        </button>
                                        ${this.expanded[index] ? html`
                                            <div class="expanded-info">
                                                <p>${category.information}</p>
                                            </div>
                                        ` : ''}
                                    </div>
                                `)}
                            </div>
                                <div class="kieswijzer-interesting">
                                    <div class="kieswijzer-interesting">
                                        <h2 tabindex="0">Interessante informatie</h2>
                                        ${interesting.map((category, index) => {
                                            const fullIndex = index + 3;
                                            return html`
                                    <div class="kieswijzer-result" id="kieswijzer-${fullIndex + 1}" aria-live="polite" tabindex="0">
                                        <p>${category.category}</p>
                                        <button 
                                            class="result-button" 
                                            aria-label="${this.expanded[fullIndex] ? 'Minder informatie over' : 'Meer informatie over'} ${category.category}" 
                                            @click="${() => this.expandInfo(fullIndex)}">
                                            ${this.expanded[fullIndex] ? 'Minder' : 'Meer'}
                                        </button>
                                        <button
                                                class="result-button"
                                                aria-label="Neem actie voor ${category.category}"
                                                @click="${() => window.open(category.link, '_blank')}">
                                            Actie
                                        </button>
                                        ${this.expanded[fullIndex] ? html`
                                            <div class="expanded-info">
                                                <p tabindex="0">${category.information}</p>
                                            </div>
                                        ` : ''}
                                    </div>
                                `;
                                        })}
                                    </div>
                                <button @click="${() => this.reset()}" class="reset-button" aria-label="Kieswijzer opnieuw invullen">Vul Kieswijzer Opnieuw in</button>
                        </div>
                    </main>
                </div>
            `;
        }
        return html`
            <div class="container">
                <main>
                    <div class="kieswijzer-parent">
                        <div class="kieswijzer">
                            <h1 tabindex="0">Algemene vragen</h1>
                            <fieldset>
                                <legend class="kieswijzer-legend" tabindex="0">Vraag ${this.questionIndex + 1}</legend>
                                <p tabindex="0" class="kieswijzer-question">${this.questions[this.questionIndex].question}</p>
                                <div class="kieswijzer-answers">
                                    <button @click="${() => this.recordAnswer('Ja')}" aria-label="Antwoord Ja">Ja</button>
                                    <button @click="${() => this.recordAnswer('Nee')}" aria-label="Antwoord Nee">Nee</button>
                                    <button @click="${() => this.recordAnswer('Overslaan')}" aria-label="Antwoord Overslaan">Overslaan</button>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </main>
            </div>`;
    }

    static get styles() {
        return css`
            .container {
                max-width: 100%;
                margin: 50px;
            }
            
            .kieswijzer-parent {
                color: var(--kpn-white);
                padding: 20px 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
            }
             .kieswijzer-answers {
                 display: flex;
                 flex-wrap: nowrap;
                 justify-content: center;
             }
            .kieswijzer-question{
                color: var(--kpn-black);
                font-size: 2.5em;
                font-weight: bold;
            }
            .kieswijzer h1 {
                font-style: italic;
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
                legend{
                    min-width: 10vw;
                }
            }
            body {
                align-items: normal;
            }
            legend{
                min-width: 70vw;
            }

            main {
                line-height: 1.4;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                background-color: var(--kpn-light-gray);
                padding: 10px 10px 10px 10px;
                color: var(--kpn-black);
            }
            h1 {
                color: var(--kpn-green);
            }
            h2 {color:var(--kpn-black)
            }
            .result-button {
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
            .kieswijzer-legend{color: var(--kpn-black)}
            .kieswijzer-result p{color: var(--kpn-black)}

            .result-button:hover {
                background-color: var(--kpn-blue-hover);
                border: 2px solid var(--kpn-blue-hover);
                color: var(--kpn-white);
            }

            .result-button:focus {
                outline: 2px dashed var(--kpn-blue);
                outline-offset: 2px;
            }
            .kieswijzer-answers button {
                width: 100%;
                background-color: var(--kpn-yellow);
                color: var(--kpn-black);
                border: solid;
                border-color: var(--kpn-green);
                padding: 10px 20px;
                margin: 10px;
                cursor: pointer;
                border-radius: 9999px;
                font-size: 1em;
                font-weight: bold;
            }

            .kieswijzer-answers button:hover {
                background-color: var(--kpn-yellow-hover);
                border-color: var(--kpn-green-hover);
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
            .reset-button{
                color: var(--kpn-white);
                background-color: var(--kpn-blue);
                border: 2px solid var(--kpn-blue);
                padding: 10px 20px;
                height: fit-content;
                min-width: 125px;
                margin: 13px 0 0 0;
                border-radius: 9999px;
                font-weight: bold;
                cursor: pointer;
            }
            .reset-button:hover {
                background-color: var(--kpn-white);
                color: var(--kpn-blue-hover);
            }

        `;
    }
}

window.customElements.define('kpn-voting-advice', VotingAdvice);