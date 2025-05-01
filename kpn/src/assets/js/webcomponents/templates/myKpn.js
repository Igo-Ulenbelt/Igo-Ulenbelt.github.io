import {LitElement, css, html} from 'lit'
import avatar from "../../../images/default_pfp.png";
import { Router as VaadinRouter } from '@vaadin/router';

export class MyKpn extends LitElement {
    static properties = {
        user: {type: Array},
    };

    constructor() {
        super();
        this.user = [];
    }

    connectedCallback() {
        super.connectedCallback();
        this._loadData().then(r => this.requestUpdate());
    }

    async _loadData() {
        const user = await fetch('./src/assets/json/user.json').then((res) => res.json());
        const boostType = await fetch('./src/assets/json/boostType.json').then((res) => res.json());
        const boostDataJson = await fetch('./src/assets/json/boost.json').then(res => res.text()).then(text => text ? JSON.parse(text) : []);
        const boostDataLocal = JSON.parse(localStorage.getItem('boost')) || [];
        const boostData = [...boostDataJson, ...boostDataLocal];
        const userId = parseInt(localStorage.getItem('userId'));

        this.user = this.findUser(user, userId);
        this.boostType = boostType;
        this.boost = boostData;

        this.updateBoostContent();
    }


    findUser(data, userId) {
        let foundUser = [];
        data.forEach((user) => {
            if (user.id === userId) {
                foundUser = user;
            }
        });
        return foundUser;
    }

    combineBoosts(allBoosts){
        let combinedBoost = {
            inlay: 0,
            userId: 0,
            accepted: false
        };

        allBoosts.forEach((boost) => {
            combinedBoost.inlay += boost.inlay;
            combinedBoost.userId = boost.userId;
            combinedBoost.accepted = boost.accepted;
        });

        return combinedBoost;
    }

    findCombinedBoostPerType(data, typeId) {
        let allBoosts = [];
        data.forEach((boost) => {
            if (boost.boostTypeId === typeId) {
                if(boost.userId === this.user.id && boost.accepted === true) {
                    allBoosts.push(boost);
                }
            }
        });
        return this.combineBoosts(allBoosts);
    }

    getInvestmentDates(data, typeId) {
        let dates = [];
        data.forEach((boost) => {
            if (boost.boostTypeId === typeId) {
                if (boost.userId === this.user.id && boost.accepted === true) {
                    let createdAt = boost.createdAt;
                    if (typeof createdAt === 'string') {
                        if (createdAt.includes('T')) {
                            createdAt = createdAt.split('T')[0];
                        } else if (createdAt.includes('/')) {
                            const [day, month, year] = createdAt.split(/[/, ]/);
                            createdAt = `${year}-${month}-${day}`;
                        }
                    }
                    const date = new Date(createdAt);
                    if (!isNaN(date)) {
                        dates.push(this.dateToString(date));
                    } else {
                        console.error(`Invalid date format: ${boost.createdAt}`);
                    }
                }
            }
        });

        return dates;
    }

    dateToString(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('nl-NL', options);
    }

    updateBoostContent() {
        this.boostType.forEach((boostType) => {
            let boost = this.findCombinedBoostPerType(this.boost, boostType.id);

            if(boost.inlay === 0) {
                return;
            }

            let boostsDiv = this.shadowRoot.querySelector('#boosts' + boostType.id);
            let allDates = this.getInvestmentDates(this.boost, boostType.id);
            let tooltip = '';

            if(allDates.length === 1) {
                tooltip = `Je hebt 1 investering gedaan op ${allDates[0]}.`;
            } else {
                tooltip = `Je hebt ${allDates.length} investeringen gedaan op de volgende datums: ${allDates.join(', ')}.`;
            }

            boostsDiv.innerHTML = `
            <div class="information-box">
               <div class="text">
                   <p class="text">
                       Je hebt €${boost.inlay} geïnvesteerd in ${boostType.name}.
                       <i class="fa-solid fa-circle-info icon"></i>
                          <span class="tooltip">${tooltip}</span>
                   </p>
                </div>
               <div class="read-more">
                   <a href="">Lees meer</a>
               </div>
            </div>
           `;
        });
    }

    render() {
        return html`
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
           <div class="container">
               <main class="mykpn">
                   <section class="profile-section">
                       <div class="profile-box">
                           <img class="image" src="${avatar}" alt="Profielfoto">
                           <div class="info">
                               <h1>${this.user.firstName} ${this.user.lastName}</h1>
                           </div>
                       </div>
                   </section>
                   <div class="content">
                       <section class="information-section">
                           <div class="information-title">
                               <h1>Mijn gegevens</h1>
                           </div>
                           <div class="information">
                               <div class="information-box">
                                   <h3>Naam</h3>
                                   <p>${this.user.firstName} ${this.user.lastName}</p>
                               </div>
                               <div class="information-box">
                                   <h3>Geboortedatum</h3>
                                   <p>${this.dateToString(new Date(this.user.birthdate))}</p>
                               </div>
                               <div class="information-box">
                                   <h3>Email</h3>
                                   <p>${this.user.email}</p>
                               </div>
                               <div class="information-box">
                                   <h3>Telefoonnummer</h3>
                                   <p>${this.user.phone}</p>
                               </div>
                               <div class="information-box">
                                   <h3>Adres</h3>
                                   <p>${this.user.address}</p>
                               </div>
                               <div class="information-box">
                                   <h3>Woonplaats</h3>
                                   <p>${this.user.city}, ${this.user.country}</p>
                               </div>
                               <div class="information-box">
                                   <h3>Salaris</h3>
                                   <p>€${this.user.salary}</p>
                               </div>
                               <div class="information-box">
                                   <h3>Taal</h3>
                                   <p>${this.user.language}</p>
                               </div>
                           </div>
                       </section>
                   </div>
                   <div class="content">
                       <section class="choice-section">
                           <div class="choice-title">
                               <h1>Jouw FLEX & BOOST keuzes</h1>
                           </div>
                           <div class="cards">
                               <article class="card margin-right">
                                   <h2 class="card-title">FLEX</h2>
                                   <div class="information-box">
                                       <div class="text">
                                           <p class="text">
                                               Deelgenomen aan KPN Plan
                                               <i class="fa-solid fa-circle-info icon"></i>
                                               <span class="tooltip">Meer informatie over KPN Plan</span>
                                           </p>
                                       </div>
                                       <div class="read-more">
                                           <a href="">Lees meer</a>
                                       </div>
                                   </div>
                                   <div class="information-box">
                                       <div class="text">
                                           <p class="text">
                                               Maandelijkse uitbetaling van vakantiegeld en dertiende maand
                                               <i class="fa-solid fa-circle-info icon"></i>
                                               <span class="tooltip">Meer informatie over vakantiegeld en dertiende maand</span>
                                           </p>
                                       </div>
                                       <div class="read-more">
                                           <a href="">Lees meer</a>
                                       </div>
                                   </div>
                                   <div class="card-button">
                                       <a @click="${(e) => {e.preventDefault(); VaadinRouter.go('/frontend-project-v2b_letsgo/flex'); }}" class="button">Ga naar flex</a>
                                   </div>
                               </article>
                               
                               <article class="card">
                                   <h2 class="card-title">BOOST</h2>
                                   <div id="boosts1"></div>
                                   <div id="boosts2"></div>
                                   <div id="boosts3"></div>    
                                   <div id="boosts4"></div>
                                   <div class="card-button">
                                       <a @click="${(e) => {e.preventDefault(); VaadinRouter.go('/frontend-project-v2b_letsgo/boost'); }}" class="button">Ga naar boost</a>
                                   </div>
                               </article>
                           </div>
                       </section>
                   </div>
               </main>
           </div>`;
    }

    static styles = css`
        .container {
            max-width: 100%;
            margin: 50px;
        }

        body {
            height: auto;
        }

        .mykpn {
            line-height: 1.4;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            background-color: var(--kpn-light-gray);
            border-radius: 10px;
            padding: 50px 20px;
        }

        .mykpn h1 {
            color: var(--kpn-green);
        }

        .mykpn h2 {
            color: var(--kpn-green);
        }

        .mykpn h3 {
            color: var(--kpn-black);
            font-weight: normal;
        }

        .mykpn p {
            color: var(--kpn-black);
        }

        .content {
            display: flex;
            justify-content: center;
        }

        .profile-section {
            display: flex;
            justify-content: center;
            width: 100%;
        }

        .profile-box {
            display: flex;
            justify-content: center;
            margin: 10px;
            border: 1px solid var(--kpn-border-gray);
            border-radius: 10px;
            padding: 20px;
        }

        .image {
            width: 100px;
            height: 100px;
            border-radius: 100%;
            margin-right: 10px;
        }

        .info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            text-align: left;
            color: var(--kpn-black) !important;
        }

        .content {
            display: flex;
            justify-content: center;
            width: 100%;
        }

        .information-section {
            margin: 30px 0;
            max-width: 900px;
            width: 100%;
        }

        .information-title {
            border-bottom: 1px solid var(--kpn-border-gray);
        }

        .information-box {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid var(--kpn-border-gray);
        }

        .choice-section {
            max-width: 900px;
            width: 100%;
        }

        .cards {
            display: flex;
            justify-content: space-between;
        }

        .card {
            display: flex;
            background-color: var(--kpn-white);
            color: var(--kpn-black);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 425px;
            flex-direction: column;
            margin-top: 20px;
        }

        .margin-right {
            margin-right: 20px;
        }

        .card-title {
            padding: 10px 0;
        }

        .card-button {
            display: flex;
            margin-top: auto;
            padding-top: 20px;
        }

        .card-button a {
            width: 100%;
            background-color: var(--kpn-green);
            color: var(--kpn-white);
            border: none;
            padding: 10px 20px;
            margin: 10px 0;
            cursor: pointer;
            border-radius: 9999px;
            max-width: 200px;
            text-align: center;
            text-decoration: none;
        }

        .card-button a:hover {
            background-color: var(--kpn-green-hover);
        }

        .card-title {
            border-bottom: 1px solid var(--kpn-green);
        }

        .information-box {
            align-items: center;
        }

        .text {
            width: 100%;
            position: relative;
        }

        .tooltip {
            visibility: hidden;
            position: absolute;
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            text-align: center;
            border-radius: 5px;
            padding: 5px;
            font-size: 14px;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            white-space: normal;
            word-wrap: break-word;
            overflow-wrap: break-word;
            z-index: 1;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
        }

        .icon:hover + .tooltip {
            visibility: visible;
            opacity: 1;
        }

        .read-more {
            width: 100px;
            margin-left: 5px;
        }

        .icon {
            position: relative;
            margin-left: 5px;
        }

        @media only screen and (max-width: 800px) {
            .container {
                margin: 30px 15px;
            }

            .cards {
                justify-content: center;
                flex-wrap: wrap;
            }

            .card {
                width: 100%;
            }

            .margin-right {
                margin-right: 0;
            }

            .choice-title {
                text-align: center;
            }

            .read-more {
                margin-left: 0;
            }
        }

        @media only screen and (max-width: 550px) {
            .information-box {
                display: block;
            }
        }
    `;
}

window.customElements.define('kpn-my-kpn', MyKpn);