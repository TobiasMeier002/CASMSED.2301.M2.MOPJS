import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('select-coordinates')
export class SelectCoordinates extends LitElement {
    static styles = css`label {
        color: #555;
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 0.8em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
    input {
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border-bottom: 10x solid #ddd;
        color: #444444;
        border-radius: 20px;    
    }`;

    render () {
        return html`<div>
            <label>Latitude</label>
            <input id="Latitude" placeholder="Latitude" @input="${this._coordinatesChanged}">
            <label>Longitude</label>
            <input id="Longitude" placeholder="Insert Longitude" @input="${this._coordinatesChanged}">
        </div>`
    }

    _coordinatesChanged(e: Event){
        const value = (e.target as HTMLInputElement).value;
        const id = (e.target as HTMLInputElement).id;
        const detail = {message: value};
        if (value) {
            if (id === "Latitude") {
                const event = new CustomEvent('changedLatitude', {detail, bubbles: true, composed: true, cancelable: true});
                this.dispatchEvent(event);
            } else if(id === "Longitude"){
                const event = new CustomEvent('changedLongitude', {detail, bubbles: true, composed: true, cancelable: true});
                this.dispatchEvent(event);
            }
        }
    }

}