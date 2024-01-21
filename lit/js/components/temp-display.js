var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let tempDisplay = class tempDisplay extends LitElement {
    constructor() {
        super(...arguments);
        this.temp = "--°C";
    }
    render() {
        return html `<div>
            <label>Temperature</label>
            <input id="temp" placeholder="--°C" .value="${this.temp || ''}" readonly>
        </div>`;
    }
    updated(changed) {
        if (!changed.has('temp')) {
            this._getTempfromAPI();
        }
    }
    _getTempfromAPI() {
        if (this.latitude && this.longitude && this.date) {
            fetch('https://api.open-meteo.com/v1/forecast?latitude=' + this.latitude + '&longitude=' + this.longitude + '&hourly=temperature_2m').then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                response.json().then(r => this.temp = r.hourly.temperature_2m[r.hourly.time.indexOf(this.date + 'T12:00')] + ' °C');
            })
                .catch(error => {
                console.error('Error:', error);
            });
        }
        else if (this.latitude && this.longitude) {
            fetch('https://api.open-meteo.com/v1/forecast?latitude=' + this.latitude + '&longitude=' + this.longitude + '&current=temperature_2m').then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                response.json().then(r => this.temp = r.current.temperature_2m + ' °C');
            })
                .catch(error => {
                console.error('Error:', error);
            });
        }
    }
};
tempDisplay.styles = css `label {
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
__decorate([
    property()
], tempDisplay.prototype, "longitude", void 0);
__decorate([
    property()
], tempDisplay.prototype, "latitude", void 0);
__decorate([
    property()
], tempDisplay.prototype, "date", void 0);
__decorate([
    property()
], tempDisplay.prototype, "temp", void 0);
tempDisplay = __decorate([
    customElement('temp-display')
], tempDisplay);
export { tempDisplay };
