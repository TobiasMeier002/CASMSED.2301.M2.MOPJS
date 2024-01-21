var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let windDisplay = class windDisplay extends LitElement {
    constructor() {
        super(...arguments);
        this.wind = "--km/h";
    }
    render() {
        return html `<div>
            <label>Wind</label>
            <input id="rain" placeholder="--km/h" .value="${this.wind || ''}" readonly>
        </div>`;
    }
    updated(changed) {
        if (!changed.has('wind')) {
            this._getWindfromAPI();
        }
    }
    _getWindfromAPI() {
        if (this.latitude && this.longitude && this.date) {
            fetch('https://api.open-meteo.com/v1/forecast?latitude=' + this.latitude + '&longitude=' + this.longitude + '&hourly=wind_speed_10m').then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                response.json().then(r => this.wind = r.hourly.wind_speed_10m[r.hourly.time.indexOf(this.date + 'T12:00')] + ' km/h');
            })
                .catch(error => {
                console.error('Error:', error);
            });
        }
        else if (this.latitude && this.longitude) {
            fetch('https://api.open-meteo.com/v1/forecast?latitude=' + this.latitude + '&longitude=' + this.longitude + '&current=wind_speed_10m').then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                response.json().then(r => this.wind = r.current.wind_speed_10m + ' km/h');
            })
                .catch(error => {
                console.error('Error:', error);
            });
        }
    }
};
windDisplay.styles = css `label {
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
], windDisplay.prototype, "longitude", void 0);
__decorate([
    property()
], windDisplay.prototype, "latitude", void 0);
__decorate([
    property()
], windDisplay.prototype, "date", void 0);
__decorate([
    property()
], windDisplay.prototype, "wind", void 0);
windDisplay = __decorate([
    customElement('wind-display')
], windDisplay);
export { windDisplay };
