import { LitElement, html, styleMap } from 'lit-element';

export class StyleMap extends LitElement {


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
        const styles = { backgroundColor: this.enabled ? 'blue' : 'gray', color: 'white' };

        return html `
        <p style=${styleMap(styles)}>Hellow Style!</p>
        `;
    }
}
customElements.define('style-map', StyleMap);