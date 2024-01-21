var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let rainDisplay = class rainDisplay extends LitElement {
    constructor() {
        super(...arguments);
        this.rain = "--m";
    }
    render() {
        return html `<div>
            <label>Rain</label>
            <input id="rain" placeholder="--m" .value="${this.rain || ''}" readonly>
        </div>`;
    }
    updated(changed) {
        if (!changed.has('rain')) {
            this._getWindfromAPI();
        }
    }
    _getWindfromAPI() {
        if (this.latitude && this.longitude && this.date) {
            fetch('https://api.open-meteo.com/v1/forecast?latitude=' + this.latitude + '&longitude=' + this.longitude + '&hourly=rain').then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                response.json().then(r => this.rain = r.hourly.rain[r.hourly.time.indexOf(this.date + 'T12:00')] + ' mm');
            })
                .catch(error => {
                console.error('Error:', error);
            });
        }
        else if (this.latitude && this.longitude) {
            fetch('https://api.open-meteo.com/v1/forecast?latitude=' + this.latitude + '&longitude=' + this.longitude + '&current=rain').then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                response.json().then(r => this.rain = r.current.rain + ' mm');
            })
                .catch(error => {
                console.error('Error:', error);
            });
        }
    }
};
rainDisplay.styles = css `label {
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
], rainDisplay.prototype, "longitude", void 0);
__decorate([
    property()
], rainDisplay.prototype, "latitude", void 0);
__decorate([
    property()
], rainDisplay.prototype, "date", void 0);
__decorate([
    property()
], rainDisplay.prototype, "rain", void 0);
rainDisplay = __decorate([
    customElement('rain-display')
], rainDisplay);
export { rainDisplay };
