import {LitElement, html, css} from 'lit';

export class CAOPage extends LitElement {
    render() {
        return html`
            <h1>CAO page</h1>
        `;
    }

    static styles = css`
    `;
}

window.customElements.define('kpn-cao', CAOPage);
