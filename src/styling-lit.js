import { LitElement, html } from 'lit-element';


export class StylingLit extends LitElement {


    static get properties() {
        return {
            enabled: { type: Boolean },
        };
    }
    constructor() {
        super();
        this.enabled = false;
    }

    render() {
        const classes = { enabled: this.enabled, hidden: false };
        return html `
        <div class=${classMap(classes)}>Classy text </div>
        `;
    }
}
customElements.define('styling-lit', StylingLit);