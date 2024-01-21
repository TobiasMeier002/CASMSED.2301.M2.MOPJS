import {html, css, LitElement, PropertyValues} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('rain-display')
export class rainDisplay extends LitElement {
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
    rain: string = "--m";

    render () {
        return html`<div>
            <label>Rain</label>
            <input id="rain" placeholder="--m" .value="${this.rain || ''}" readonly>
        </div>`
    }

    updated(changed: PropertyValues<this>) {
        if (!changed.has('rain')) {
            this._getWindfromAPI()
        }
    }

    _getWindfromAPI()
    {
        if (this.latitude && this.longitude && this.date) {
            fetch('https://api.open-meteo.com/v1/forecast?latitude=' + this.latitude + '&longitude=' + this.longitude +'&hourly=rain').then(response => {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                response.json().then( r => this.rain = r.hourly.rain[r.hourly.time.indexOf(this.date + 'T12:00')] + ' mm')
              })
              .catch(error => {
                console.error('Error:', error);
              });
        } else if (this.latitude && this.longitude) {
            fetch('https://api.open-meteo.com/v1/forecast?latitude=' + this.latitude + '&longitude=' + this.longitude +'&current=rain').then(response => {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                response.json().then( r => this.rain = r.current.rain + ' mm')
              })
              .catch(error => {
                console.error('Error:', error);
              });
        }
    }
}