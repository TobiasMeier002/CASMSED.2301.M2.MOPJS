import {html, css, LitElement, PropertyValues} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('temp-display')
export class tempDisplay extends LitElement {
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

    @property()
    longitude: string;
    @property()
    latitude: string;
    @property()
    date: string;
    @property()
    temp: string = "--°C";

    render () {
        return html`<div>
            <label>Temperature</label>
            <input id="temp" placeholder="--°C" .value="${this.temp || ''}" readonly>
        </div>`
    }

    updated(changed: PropertyValues<this>) {
        if (!changed.has('temp')) {
            this._getTempfromAPI()
        }
    }

    _getTempfromAPI()
    {
        if (this.latitude && this.longitude && this.date) {
            fetch('https://api.open-meteo.com/v1/forecast?latitude=' + this.latitude + '&longitude=' + this.longitude +'&hourly=temperature_2m').then(response => {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                response.json().then( r => this.temp = r.hourly.temperature_2m[r.hourly.time.indexOf(this.date + 'T12:00')] + ' °C')
              })
              .catch(error => {
                console.error('Error:', error);
              });
        } else if (this.latitude && this.longitude) {
            fetch('https://api.open-meteo.com/v1/forecast?latitude=' + this.latitude + '&longitude=' + this.longitude +'&current=temperature_2m').then(response => {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                response.json().then( r => this.temp = r.current.temperature_2m + ' °C')
              })
              .catch(error => {
                console.error('Error:', error);
              });
        }
    }
}