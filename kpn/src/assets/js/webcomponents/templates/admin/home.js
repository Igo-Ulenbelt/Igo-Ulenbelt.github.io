import {LitElement, css, html} from 'lit'
import {navigateHeader} from "./navigateHeader.js";

export class HomeAdmin extends LitElement {
    render() {
        return html`
           <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
           <link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css">
           
           <div class="container">
               <kpn-navigate-header header-title="Home"></kpn-navigate-header>
               Welkom
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
    `;
}

window.customElements.define('kpn-request-home', HomeAdmin);