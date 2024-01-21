import { html, css, LitElement, PropertyValues } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { tempDisplay } from './temp-display';
import { rainDisplay } from './rain-display';
import { windDisplay } from './wind-display';

@customElement('weather-app')
export class weatherApp extends LitElement {
  static styles = css`#app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }
  body {
      background: #eee;
      margin: auto
    }
  h1 {
      color: #555;
    }
  h3 {
      color: blueviolet;
    }
  .window {
        max-width: 420px;
        margin-left:auto;
        margin-right:auto;
        background: white;
        padding: 40px;
        border-radius: 20px;
    }`;

  @query('temp-display')
  _tempDisplay!: tempDisplay;
  @query('rain-display')
  _rainDisplay!: rainDisplay;
  @query('wind-display')
  _windDisplay!: windDisplay;

  render() {
    return html`<div class="window">
      <h1>Welcome to MOPJ</h1>
      <select-coordinates @changedLatitude=${this._LatitudeHandler} @changedLongitude=${this._LongitudeHandler} id="select-coordinates"></select-coordinates>
      <select-date @changedDate=${this._DateHandler} id="select-date"></select-date>
      <div class="container">
          <h2>Weather</h2>
          <temp-display id="temparature"></temp-display>
          <rain-display id="rain"></rain-display>
          <wind-display id="wind"></wind-display>
      </div>
  </div>`
  }

  _LatitudeHandler (e: CustomEvent) {
    this._tempDisplay.latitude = e.detail.message;
    this._rainDisplay.latitude = e.detail.message;
    this._windDisplay.latitude = e.detail.message;
  }

  _LongitudeHandler (e: CustomEvent) {
    this._tempDisplay.longitude = e.detail.message;
    this._rainDisplay.longitude = e.detail.message;
    this._windDisplay.longitude = e.detail.message;
  }

  _DateHandler (e: CustomEvent) {
    this._tempDisplay.date = e.detail.message;
    this._rainDisplay.date = e.detail.message;
    this._windDisplay.date = e.detail.message;
  }  
}