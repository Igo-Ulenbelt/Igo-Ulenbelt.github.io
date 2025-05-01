import {css, html, LitElement} from "lit";
import "./templates/sidebar.js";
import "./templates/login.js";

export class Loggedin extends LitElement {
    render() {
        const loggedin = localStorage.getItem('user');
        if (!loggedin) {
            return html`
                <kpn-login></kpn-login>
            `
        }
        return html`
            <div id="sidebar" class="sidebar">
                <kpn-sidebar></kpn-sidebar>
            </div>

            <div id="content" class="content">
                <router-outlet></router-outlet>
            </div>
        `;
    }
}

window.customElements.define('kpn-loggedin', Loggedin);