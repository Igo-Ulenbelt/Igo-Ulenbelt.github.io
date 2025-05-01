import {LitElement, html, css} from 'lit';

export class FlexPage extends LitElement {
    render() {
        return html`
            <h1>flex page</h1>
        `;
    }

    static styles = css`
    `;
}

window.customElements.define('kpn-flex', FlexPage);
