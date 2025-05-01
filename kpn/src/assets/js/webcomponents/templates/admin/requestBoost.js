import {LitElement, css, html} from 'lit'
import {navigateHeader} from "./navigateHeader.js";

export class RequestBoost extends LitElement {
    constructor() {
        super();
        this.boostFilterStatus = 'pending';
    }

    connectedCallback() {
        super.connectedCallback();
        this.loadExternalScripts();
        this.requestBoostData();
    }

    loadExternalScripts() {
        let scriptJQuery = document.createElement('script');
        scriptJQuery.src = "https://code.jquery.com/jquery-3.6.0.min.js";
        scriptJQuery.onload = () => {
            let scriptDataTables = document.createElement('script');
            scriptDataTables.src = "https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js";
            scriptDataTables.onload = () => {
                this.initializeDataTable();
            };
            document.head.appendChild(scriptDataTables);
        };
        document.head.appendChild(scriptJQuery);
    }

    initializeDataTable() {
        let table = this.shadowRoot.querySelector('#boostTable');

        $(table).DataTable({
            paging: true,
            searching: true,
            ordering: true,
            responsive: true,
            language: {
                lengthMenu: "_MENU_",
                search: "_INPUT_",
                searchPlaceholder: "Zoeken...",
                info: "Pagina _PAGE_ van _PAGES_",
                infoEmpty: "",
                infoFiltered: "(gefilterd uit _MAX_ resultaten)",
                zeroRecords: "Geen resultaten gevonden",
                paginate: {
                    first: "Eerste",
                    previous: "Vorige",
                    next: "Volgende",
                    last: "Laatste"
                }
            }
        });
    }

    updateTableContent(data, boosts) {
        let table = $(this.shadowRoot.querySelector('#boostTable')).DataTable();
        table.clear();

        data.forEach((rowData, index) => {
            let boost = boosts[index];

            table.row.add(rowData);

            let rowIndex = table.rows().count() - 1;
            let row = $(table.row(rowIndex).node());

            if (this.boostFilterStatus === 'pending' || this.boostFilterStatus === 'declined') {
                row.find('.approve-boost').on('click', () => this.approveBoost(true, boost));
            }
            if (this.boostFilterStatus === 'pending' || this.boostFilterStatus === 'accepted') {
                row.find('.not-approve-boost').on('click', () => this.approveBoost(false, boost));
            }
            row.find('.trash').on('click', () => this.deleteBoost(boost));
        });

        table.draw();
    }

    approveBoost(approved, boost) {
        let action = approved ? 'goedkeuren' : 'afkeuren';
        let confirmApprove = confirm(`Weet je zeker dat je deze boost wilt ${action}?`);

        if (!confirmApprove) {
            return;
        }

        let boostData = JSON.parse(localStorage.getItem('boost'));

        boostData = boostData.map((b) => {
            if (b.userId === boost.userId && b.boostTypeId === boost.boostTypeId && b.inlay === boost.inlay && b.createdAt === boost.createdAt) {
                b.accepted = approved;
                b.acceptedAt = new Date().toLocaleString();
            }
            return b;
        });

        localStorage.setItem('boost', JSON.stringify(boostData));
        this.requestBoostData()
    }

    changeBoostFilterStatus(status) {
        this.boostFilterStatus = status;

        let boostTextElement = this.shadowRoot.querySelector('#boostText');
        switch (status) {
            case 'accepted':
                boostTextElement.textContent = 'Geaccepteerde boosts';
                break;
            case 'declined':
                boostTextElement.textContent = 'Afgewezen boosts';
                break;
            case 'pending':
                boostTextElement.textContent = 'Boosts in afwachting';
                break;
            default:
                boostTextElement.textContent = 'Alle boosts';
                break;
        }
        this.requestBoostData()
    }

    deleteBoost(boost) {
        if(confirm('Weet je zeker dat je deze boost wilt verwijderen, je kan hem niet meer terugkrijgen?')){
            let boostData = JSON.parse(localStorage.getItem('boost'));
            boostData = boostData.filter((b) => {
                return !(b.userId === boost.userId && b.boostTypeId === boost.boostTypeId && b.inlay === boost.inlay && b.createdAt === boost.createdAt);
            });
            localStorage.setItem('boost', JSON.stringify(boostData));
            this.requestBoostData()
        }
    }

    async requestBoostData() {
        try {
            let boostData = JSON.parse(localStorage.getItem('boost'));
            let boostTypeData = await fetch('../assets/json/boostType.json').then((res) => res.json());
            let userData = await fetch('../assets/json/user.json').then((res) => res.json());

            this.updateContent(boostData, boostTypeData, userData)

        } catch (e) {
            console.error(e);
        }
    }

    updateContent(boostData, boostTypeData, userData) {
        let rows = [];
        let filteredBoosts = [];

        boostData.forEach((boost) => {
            if (this.boostFilterStatus === 'pending' && boost.acceptedAt !== null) {
                return;
            } else if (this.boostFilterStatus === 'accepted' && !boost.accepted) {
                return;
            } else if (this.boostFilterStatus === 'declined' && boost.acceptedAt === null || this.boostFilterStatus === 'declined' && boost.accepted) {
                return;
            }

            let boostType = boostTypeData.find((type) => type.id === boost.boostTypeId);
            let user = userData.find((user) => user.id === boost.userId);

            let approveAction = this.boostFilterStatus === 'accepted' ?
                '<a class="not-approve-boost"><i class="fa-solid fa-times times"></i></a>' :
                this.boostFilterStatus === 'declined' ?
                    '<a class="approve-boost"><i class="fa-solid fa-check check"></i></a>' :
                    '<a class="approve-boost"><i class="fa-solid fa-check check"></i></a>' +
                    '<a class="not-approve-boost"><i class="fa-solid fa-times times"></i></a>';

            rows.push([
                `${user.firstName} ${user.lastName}`,
                `€${boost.inlay}`,
                boostType.name,
                boost.description || "Geen beschrijving",
                `<a href="">${boost.proof}</a>`,
                boost.createdAt,
                approveAction,
                '<i class="fa-solid fa-trash trash"></i>'
            ]);

            filteredBoosts.push(boost);
        });
        this.updateTableContent(rows, filteredBoosts);
    }

    render() {
        return html`
           <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
           <link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css">
           
           <div class="container">
               <kpn-navigate-header header-title="Boost aanvragen"></kpn-navigate-header>
               <main class="admin">
                   <section class="header-admin-text">
                       <h2 id="boostText">Boosts in afwachting</h2>
                       <div class="buttons">
                           <div class="card-button">
                               <a @click="${() => this.changeBoostFilterStatus('accepted')}" class="button">Geaccepteerden</a>
                           </div>
                           <div class="card-button">
                               <a @click="${() => this.changeBoostFilterStatus('declined')}"" class="button">Afgekeurden</a>
                           </div>
                           <div class="card-button">
                               <a @click="${() => this.changeBoostFilterStatus('pending')}"" class="button">In afwachting</a>
                           </div>
                       </div>
                   </section>
                   <section class="table-section">
                       <table id="boostTable" class="table display">
                           <thead class="thead">
                               <tr class="thead">
                                   <th>Aanvrager</th>
                                   <th>Bedrag</th>
                                   <th>Boost Type</th>
                                   <th>Beschrijving</th>
                                   <th>Bewijs</th>
                                   <th>Datum</th>
                                   <th>Goedkeuren</th>
                                   <th></th>
                               </tr>
                           </thead>
                           <tbody id="tbody" class="align-items-center"></tbody>
                       </table>
                   </section>
               </main>
           </div>
        `;
    }

    static styles = css`
        .container {
            max-width: 100%;
            margin: 50px;
            background-color: var(--kpn-white);
            padding: 10px 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            line-height: 1.4;
            border-radius: 10px;
            overflow: scroll;
        }

        body {
            height: auto;
        }

        h1 {
            color: var(--kpn-green);
        }

        h2 {
            color: var(--kpn-green);
        }

        h3 {
            color: var(--kpn-black);
            font-weight: normal;
        }

        p {
            color: var(--kpn-black);
        }

        .card-button {
            margin: 10px;
        }

        .card-button a {
            width: 100%;
            background-color: var(--kpn-green);
            color: var(--kpn-white);
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 9999px;
            max-width: 200px;
            text-align: center;
            text-decoration: none;
        }

        .card-button a:hover {
            background-color: var(--kpn-green-hover);
        }

        .admin {
            margin-top: 30px;
            border: 1px solid var(--kpn-border-gray);
            border-radius: 10px;
        }

        .header-admin-text{
            padding: 5px 10px;
            background-color: var(--kpn-gray-admin);
            border-bottom: 1px solid var(--kpn-border-gray);
            border-radius: 10px 10px 0 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .buttons{
            display: flex;
            flex-wrap: wrap;
        }

        .table {
            margin: 20px 0;
            border-collapse: collapse;
            width: 100%;
            background-color: #fff;
            border-top: 1px solid var(--kpn-border-gray);
        }

        th {
            color: var(--kpn-green);
            font-weight: bold;
        }

        td {
            color: var(--kpn-black);
        }

        tr:nth-child(even) {
            background-color: var(--kpn-gray-admin)!important;
        }

        tr:hover {
            background-color: var(--kpn-gray-admin-hover);
        }

        .check {
            color: var(--kpn-green);
            margin-right: 10px;
            font-size: 36px;
        }

        .times {
            color: var(--kpn-error-red);
            font-size: 36px;
        }

        .trash{
            color: var(--kpn-error-red);
            font-size: 22px;
        }

        .check:hover {
            color: var(--kpn-green-hover);
            cursor: pointer;
        }

        .times:hover {
            color: var(--kpn-error-red-hover);
            cursor: pointer;
        }

        .trash:hover {
            color: var(--kpn-error-red-hover);
            cursor: pointer;
        }
        
        //dataTables
        .dataTables_length label {
            display: none; /* Verbergt de label-tekst "Show" en "entries" */
        }

        .dataTables_length select {
            border: 1px solid var(--kpn-border-gray)!important;
            border-radius: 5px!important;
            padding: 10px!important;
            color: var(--kpn-black)!important;
            margin: 10px!important;
        }

        .dataTables_filter input {
            border: 1px solid var(--kpn-border-gray)!important;
            border-radius: 5px!important;
            padding: 10px!important;
            color: var(--kpn-black)!important;
            margin: 10px!important;
        }

        .dataTables_info {
            color: var(--kpn-black)!important;
            margin: 0 10px!important;
        }

        /* General KPN-styled buttons */
        .paginate_button {
            border: 1px solid var(--kpn-green)!important;
            border-radius: 5px!important;
            padding: 8px 15px!important;
            margin: 5px!important;
            color: var(--kpn-black)!important;
            text-decoration: none!important;
            background-color: var(--kpn-green)!important;
            transition: background-color 0.3s, color 0.3s!important;
            font-size: 14px!important;
            display: inline-block!important;
        }

        .dataTables_wrapper .dataTables_paginate .paginate_button.disabled,
        .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:hover,
        .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:active {
            color: var(--kpn-white) !important;
            border-color: var(--kpn-green) !important;
            background-color: var(--kpn-green) !important;
            cursor: not-allowed !important;
            opacity: 0.5 !important;
        }
        
        .paginate_button:hover {
            background-color: var(--kpn-green-hover)!important;
        }
    `;
}

window.customElements.define('kpn-request-boost', RequestBoost);