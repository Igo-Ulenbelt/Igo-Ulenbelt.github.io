import {LitElement, html, css} from 'lit';
import '../templates/boostModal/view/boostModalView.js';
import '../templates/boostOverview.js';

export class BoostPage extends LitElement {
    constructor() {
        super();
        this.totalAmount = 0;
        this.amountSpent = 0;
        this.remainingAmount = 0;
    }

    connectedCallback() {
        super.connectedCallback();
        this.boostPageData().then(() => this.requestUpdate());
    }

    totalAmountCalculation(boostType) {
        return boostType.reduce((total, b) =>
            total + b.maximalInlay, 0
        );
    }

    amountSpentCalculation(boost, userId) {
        return boost.reduce((total, b) =>
            b.userId === userId && b.accepted === true ? total + b.inlay : total, 0
        );
    }

    amountPerTypeCalculationAccepted(boost, typeId, userId, cycleYear) {
        let currentDate = new Date();
        return boost.reduce((total, b) => {
            if (b.boostTypeId === typeId && b.accepted === true && b.userId === userId && b.acceptedAt) {
                let dateParts = b.acceptedAt.split(', ');
                let date = dateParts[0].split('/');
                let time = dateParts[1];
                let formattedDate = `${date[2]}-${date[1]}-${date[0]}T${time}`;

                let acceptedDate = new Date(formattedDate);
                let cycleEndDate = new Date(acceptedDate);
                cycleEndDate.setFullYear(acceptedDate.getFullYear() + cycleYear);

                console.log(currentDate.getFullYear() + " " + cycleEndDate.getFullYear() + " " + acceptedDate.getFullYear());

                if (currentDate.getFullYear() <= cycleEndDate.getFullYear()) {
                    return total + b.inlay;
                }
            }
            return total;
        }, 0);
    }

    amountPerTypeCalculationInPending(boost, typeId, userId) {
        return boost.reduce((total, b) =>
            b.boostTypeId === typeId && b.accepted === false && b.acceptedAt === null && b.userId === userId ? total + b.inlay : total, 0
        );
    }

    async boostPageData() {
        try {
            let boostDataJson = await fetch('./src/assets/json/boost.json').then(res => res.text()).then(text => text ? JSON.parse(text) : []);
            let boostDataLocal = JSON.parse(localStorage.getItem('boost')) || [];
            let boostData = [...boostDataJson, ...boostDataLocal];

            let userId = parseInt(localStorage.getItem('userId'));
            let boostTypeData = await fetch('./src/assets/json/boostType.json').then(res => res.json());

            this.totalAmount = this.totalAmountCalculation(boostTypeData);
            this.amountSpent = this.amountSpentCalculation(boostData, userId);
            this.remainingAmount = this.totalAmount - this.amountSpent;

            this.updateContent(boostData, boostTypeData, userId);

        } catch (error) {
            this.shadowRoot.querySelector('#boosts').innerText = 'Er is een fout opgetreden bij het laden van data.';
        }
    }

    updateContent(boostData, boostTypeData, userId) {
        let nameMapping = {
            'Fysieke en mentale welzijn': 'wellness',
            'Verduurzaming': 'homeSustainability',
            'Studieschuld': 'studentDebtRepayment',
            'Vakbondscontributie': 'unionContribution',
        };

        let boosts = this.shadowRoot.querySelector('#boosts');

        boostTypeData.forEach((boostType) => {
            let englishName = nameMapping[boostType.name] || boostType.name;
            let boostElement = document.createElement('div');
            let amountAccepted = this.amountPerTypeCalculationAccepted(boostData, boostType.id, userId, boostType.cycleYear);
            let amountInPending = this.amountPerTypeCalculationInPending(boostData, boostType.id, userId);
            let percentageAccepted = amountAccepted / boostType.maximalInlay * 100;
            let percentageInPending = amountInPending / boostType.maximalInlay * 100;

            if(boostType.maximalInlay == null){
                boostType.maximalInlay = "Geen limiet";
                if(amountAccepted == 0){
                    percentageAccepted = 0;
                } else {
                    percentageAccepted = 100;
                    this.remainingAmount = this.remainingAmount + amountAccepted;
                }
                if(amountInPending == 0){
                    percentageInPending = 0;
                } else {
                    percentageInPending = 100;
                }
            }

            boostElement.classList.add('boost');
            boostElement.innerHTML = `
              <div class="progress" id="bar1">
                  <div class="progress-heading">${boostType.name}</div>
                  <div class="progress-bar">
                      <div 
                        class="progress-bar-fill primary" 
                        style="width: ${percentageAccepted}%">
                      </div>
                      <div 
                        class="progress-bar-fill secondary" 
                        style="width: ${percentageInPending}%">
                      </div>
                  </div>
                  <div class="controls">
                      <div class="info">
                           <span>${amountAccepted} / ${boostType.maximalInlay}</span><br>
                           <span>Per ${boostType.cycleYear} jaar</span> 
                       </div>
                      <button class="button" id="myBtn">Aanvragen</button>
                  </div>
              </div>
          `;
            boosts.appendChild(boostElement);

            let button = boostElement.querySelector('#myBtn');
            button.addEventListener('click', () => {
                if(amountAccepted > 0 && boostType.maximalInlay == "Geen limiet"){
                    alert('Je kan geen meerdere aanvragen doen voor Vakbondscontributie');
                    return;
                }
                if (amountAccepted >= boostType.maximalInlay) {
                    alert('Je hebt het maximale bedrag al bereikt');
                } else {
                    this.openModal(englishName, boostType.maximalInlay - amountAccepted);
                }
            });
        });

        this.shadowRoot.querySelector('#remainingAmount').innerText = `Resterende bedrag: €${this.remainingAmount}`;
        this.shadowRoot.querySelector('#amountSpent').innerText = `Uitgegeven bedrag: €${this.amountSpent}`;
    }

    openModal(type, remainingAmount) {
        let modal = this.shadowRoot.querySelector('#boostModal');
        if (modal && typeof modal.openModal === 'function') {
            modal.openModal(type, remainingAmount);
        } else {
            console.error('Modal openModal method is not found');
        }
    }

    openOverview() {
        let modal = this.shadowRoot.querySelector('#boostOverview');
        if (modal && typeof modal.openOverviewModal === 'function') {
            modal.openOverviewModal();
        } else {
            console.error('Modal openModal method is not found');
        }
    }

    render() {
        return html`
            <boost-modal id="boostModal"></boost-modal>
            <boost-overview id="boostOverview"></boost-overview>
            <div class="container">
                <h1>BOOST</h1>
                <div class="subtitle">
                    Hier kun je investeringen doorgeven, en kun je de status zien van al jouw eerdere investeringen.
                </div>

                <div class="status-money">
                    <div id="remainingAmount" class="remainning-amount"></div>
                    <div id="amountSpent" class="spent-amount"></div>
                </div>

                <div id="boosts"></div>
                <div class="overviewButton">
                    <button class="button max-width" @click="${() => this.openOverview()}">Overzicht boost aanvragingen</button>
                </div
            </div>
        `;
    }

    static styles = css`
        :host {
            display: block;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            height: 100%;
            overflow-y: auto;
            background-color: var(--kpn-green);
            color: var(--kpn-black);
            box-sizing: border-box;
        }

        .container {
            background-color: var(--kpn-light-gray);
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin: 50px;
            overflow-y: auto;
            box-sizing: border-box;
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        h1{
            color: var(--kpn-green);
        }

        .title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .subtitle {
            font-size: 14px;
            margin-bottom: 20px;
        }

        .status-money {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        .remainning-amount {
            color: var(--kpn-blue);
            font-size: 16px;
            margin-right: 10px;
        }

        .spent-amount {
            color: var(--kpn-green);
            font-size: 16px;
            margin-left: 10px;
        }

        .progress {
            margin-bottom: 20px;
        }

        .progress-heading {
            font-size: 16px;
            margin-bottom: 5px;
        }

        .progress-bar {
            width: 100%;
            background-color: black;
            border-radius: 5px;
            overflow: hidden;
            position: relative;
            height: 20px;
            display: flex;
        }

        .progress-bar-fill {
            height: 100%;
        }

        .progress-bar-fill.primary {
            background-color: var(--kpn-green);
            z-index: 1;
        }

        .progress-bar-fill.secondary {
            background-color: var(--kpn-signal-yellow);
            z-index: 0;
        }

        .controls {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 5px;
        }

        .controls span {
            font-size: 14px;
        }
        
        .info{
            text-align: left;
        }

        .button {
            background-color: var(--kpn-green);
            color: var(--kpn-white);
            border: none;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
        }

        .button:hover {
            background-color: #009900;
        }
        
        .overviewButton {
            display: flex;
            justify-content: center;
        }
        
        .max-width{
            max-width: 500px;
            width: 100%;
            padding: 10px;
        }
    `;
}

window.customElements.define('kpn-boost', BoostPage);