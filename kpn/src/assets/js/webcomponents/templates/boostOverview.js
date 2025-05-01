import {css, html, LitElement} from "lit";

export class BoostOverview extends LitElement {
    constructor() {
        super();
    }

    async _loadData() {
        let boostType = await fetch('./src/assets/json/boostType.json').then((res) => res.json());
        let boostDataJson = await fetch('./src/assets/json/boost.json').then(res => res.text()).then(text => text ? JSON.parse(text) : []);
        let boostDataLocal = JSON.parse(localStorage.getItem('boost')) || [];
        let boostData = [...boostDataJson, ...boostDataLocal];
        let userId = parseInt(localStorage.getItem('userId'));

        this._updateOverview(boostData, boostType, userId);
    }

    _updateOverview(boostData, boostType, userId) {
        let acceptedBoosts = [];
        let pendingBoosts = [];
        let rejectedBoosts = [];

        this.shadowRoot.querySelector('#requestBoostsPending').innerHTML = "";
        this.shadowRoot.querySelector('#requestBoostsAccepted').innerHTML = "";
        this.shadowRoot.querySelector('#requestBoostsRejected').innerHTML = "";

        boostData.forEach((boost) => {
            if(boost.userId == userId) {
                if (boost.acceptedAt == null) {
                    this.handleBoostRow(boost, boostType, "hourglass", "yellow", '#requestBoostsPending');
                    pendingBoosts.push(boost);
                } else if (boost.accepted) {
                    this.handleBoostRow(boost, boostType, "check", "green", '#requestBoostsAccepted');
                    acceptedBoosts.push(boost);
                } else {
                    this.handleBoostRow(boost, boostType, "times", "red", '#requestBoostsRejected');
                    rejectedBoosts.push(boost);
                }
            }
        });

        this.updateEmptyCategory('#requestBoostsAccepted', acceptedBoosts);
        this.updateEmptyCategory('#requestBoostsPending', pendingBoosts);
        this.updateEmptyCategory('#requestBoostsRejected', rejectedBoosts);
    }

    handleBoostRow(boost, boostType, icon, color, containerId) {
        let contentDiv = this.shadowRoot.querySelector(containerId);
        if(containerId === '#requestBoostsPending') {
            this.createBoostRow(contentDiv, icon, color, boost, boostType);
        }
        else{
            this.createBoostRow(contentDiv, icon, color, boost, boostType);
        }
    }

    updateEmptyCategory(containerId, boosts) {
        if (boosts.length === 0) {
            this.shadowRoot.querySelector(containerId).innerHTML = "<p>Geen resultaten</p>";
        }
    }

    createBoostRow(contentDiv, icon, color, boost, boostType) {
        let boostTypeData = boostType.find(b => b.id === boost.boostTypeId);
        let date = boost.acceptedAt;

        if(boost.description == "") {
            boost.description = "Geen beschrijving";
        }

        if(boost.acceptedAt == null){
            date = boost.createdAt
        }

        contentDiv.innerHTML += `
            <div class="boost-request">
                <div class="boost-icon">
                    <i class="fa-solid fa-${icon} icon ${color}"></i>
                </div>
                <div class="boost-info">
                    <p class="bold">${boostTypeData.name}</p>
                    <p>${boost.description}</p>
                </div>
                <div class="boost-proof">
                    <i class="fa-solid fa-file icon-smaller"></i>
                    <a href="" target="_blank">${boost.proof}</a>
                </div>
                <div class="boost-inlay">
                    <i class="fa-solid fa-euro-sign icon-smaller"></i>
                    <p>${boost.inlay}</p>
                </div>
                <div class="boost-date">
                    <i class="fa-solid fa-calendar icon-smaller"></i>
                    <p>${this.formatToYYYYMMDD(date)}</p>
                </div>
            </div>
        `;
    }

    openOverviewModal() {
        this.requestUpdate();
        const modal = this.shadowRoot.querySelector("#overviewModal");
        modal.style.display = 'flex';
        this._loadData().then(r => this.requestUpdate());
    }

    closeOverviewModal() {
        const modal = this.shadowRoot.querySelector('#overviewModal');
        modal.style.display = 'none';
    }

    formatToYYYYMMDD(dateString) {
        let standardDateString = dateString;

        if(dateString.includes(',')) {
            let [datePart, timePart] = dateString.split(',');
            let [day, month, year] = datePart.split('/').map(Number);
            standardDateString = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T${timePart ? timePart.trim() : '12:00:00'}`;
        }

        return new Date(standardDateString).toLocaleDateString();
    }

    render() {
        return html`
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">

            <dialog id="overviewModal" class="modal" @click="${this.closeOverviewModal}">
                <div class="modal-content" @click="${e => e.stopPropagation()}">
                    <div class="modal-header">
                        <h2>Alle boost aanvragingen</h2>
                        <a @click="${(e) => this.closeOverviewModal()}" class="close">&times;</a>
                    </div>
                    <div class="modal-body">
                        <div class="">
                            <h2 class="yellow">In behandeling</h2>
                            <div id="requestBoostsPending"></div>
                        </div>
                        <div>
                            <h2 class="green">Geaccepteerden</h2>
                            <div id="requestBoostsAccepted"></div>
                        </div>
                        <div class="">
                            <h2 class="red">Afgewezen</h2>
                            <div id="requestBoostsRejected"></div>
                        </div>
                    </div>
                </div>
            </dialog>
        `;
    }

    static get styles() {
        return css`
            p{
                line-height: 1.3;
                margin: 0;
            }
            
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
                border: 1px solid #888;
                border-radius: 15px;
                width: 100%;
                max-width: 1200px;
                position: relative;
                overflow-y: auto;
            }

            .modal-header {
                background-color: var(--kpn-green);
                padding: 0 15px;
                color: white;
                font-weight: bold;
                border-radius: 15px 15px 0 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .modal-body {
                color: var(--kpn-black);
                padding: 10px 15px;
            }
            
            .close{
                font-size: 28px;
            }

            .close:hover,
            .close:focus {
                color: black;
                text-decoration: none;
                cursor: pointer;
            }
            
            .green {
                color: var(--kpn-green);
            }
            
            .yellow {
                color: var(--kpn-signal-yellow);
            }
            
            .red {
                color: var(--kpn-error-red);
            }
            
            .boost-request {
                display: flex;
                align-items: center;
                border-bottom: 1px solid var(--kpn-light-gray);
            }
            
            .icon{
                font-size: 40px;
                margin: 0 10px;
            }

            .icon-smaller{
                font-size: 30px;
                margin: 0 10px;
            }

            .boost-request {
                display: flex;
                align-items: center;
                justify-content: space-between; 
                gap: 1rem; 
                width: 100%;
            }

            .boost-icon {
                flex-shrink: 0; 
            }

            .boost-info {
                flex-grow: 1;
                max-width: 100%; 
                overflow: hidden;
            }

            .boost-proof,
            .boost-inlay,
            .boost-date {
                display: flex;
                align-items: center;
                flex-shrink: 0;
            }
            
            .boost-proof{
                width: 300px;
            }
            
            .boost-inlay{
                width: 100px;
            }

            .boost-date{
                width: 200px;
            }

            .boost-info p,
            .boost-proof a,
            .boost-inlay p,
            .boost-date p {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            
            .bold{
                font-weight: bold;
                font-size: 20px;
            }

            @media (max-width: 1250px) {
                .modal {
                    width: 95%;
                }
            }

            @media (max-width: 1100px) {
                .boost-proof { 
                    width: 200px; 
                }
                .boost-inlay { 
                    width: 100px; 
                }
                .boost-date { 
                    width: 150px; 
                }
            }

            @media (max-width: 850px) {
                .boost-proof, .boost-inlay, .boost-date {
                    width: 100px;
                }
            }

            @media (max-width: 700px) {
                .modal {
                    align-items: flex-start;
                    padding-top: 20px;
                    margin: 0;
                    margin-bottom: 50px;
                }
                
                .modal-content {
                    max-width: 500px;
                    margin-right: 15px;
                }

                .boost-request {
                    flex-wrap: wrap;
                    gap: 0;
                }

                .boost-info,
                .boost-proof,
                .boost-inlay,
                .boost-date {
                    flex-basis: 100%;
                    justify-content: flex-start;
                    margin-top: 0.5rem;
                }

                .icon {
                    display: none;
                }
            }
        `;
    }
}

window.customElements.define('boost-overview', BoostOverview);

