var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
let SelectCoordinates = class SelectCoordinates extends LitElement {
    render() {
        return html `<div>
            <label>Latitude</label>
            <input id="Latitude" placeholder="Latitude" @input="${this._coordinatesChanged}">
            <label>Longitude</label>
            <input id="Longitude" placeholder="Insert Longitude" @input="${this._coordinatesChanged}">
        </div>`;
    }
    _coordinatesChanged(e) {
        const value = e.target.value;
        const id = e.target.id;
        const detail = { message: value };
        if (value) {
            if (id === "Latitude") {
                const event = new CustomEvent('changedLatitude', { detail, bubbles: true, composed: true, cancelable: true });
                this.dispatchEvent(event);
            }
            else if (id === "Longitude") {
                const event = new CustomEvent('changedLongitude', { detail, bubbles: true, composed: true, cancelable: true });
                this.dispatchEvent(event);
            }
        }
    }
};
SelectCoordinates.styles = css `label {
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
SelectCoordinates = __decorate([
    customElement('select-coordinates')
], SelectCoordinates);
export { SelectCoordinates };
