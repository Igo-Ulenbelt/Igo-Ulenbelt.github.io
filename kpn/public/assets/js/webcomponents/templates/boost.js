import {LitElement, html, css} from 'lit';

export class BoostPage extends LitElement {
    render() {
        return html`
            <h1>boost page</h1>
        `;
    }

    static styles = css`
    `;
}

window.customElements.define('kpn-boost', BoostPage);
