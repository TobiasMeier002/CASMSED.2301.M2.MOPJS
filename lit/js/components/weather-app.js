var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
let weatherApp = class weatherApp extends LitElement {
    render() {
        return html `<div class="window">
      <h1>Welcome to MOPJ</h1>
      <select-coordinates @changedLatitude=${this._LatitudeHandler} @changedLongitude=${this._LongitudeHandler} id="select-coordinates"></select-coordinates>
      <select-date @changedDate=${this._DateHandler} id="select-date"></select-date>
      <div class="container">
          <h2>Weather</h2>
          <temp-display id="temparature"></temp-display>
          <rain-display id="rain"></rain-display>
          <wind-display id="wind"></wind-display>
      </div>
  </div>`;
    }
    _LatitudeHandler(e) {
        this._tempDisplay.latitude = e.detail.message;
        this._rainDisplay.latitude = e.detail.message;
        this._windDisplay.latitude = e.detail.message;
    }
    _LongitudeHandler(e) {
        this._tempDisplay.longitude = e.detail.message;
        this._rainDisplay.longitude = e.detail.message;
        this._windDisplay.longitude = e.detail.message;
    }
    _DateHandler(e) {
        this._tempDisplay.date = e.detail.message;
        this._rainDisplay.date = e.detail.message;
        this._windDisplay.date = e.detail.message;
    }
};
weatherApp.styles = css `#app {
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
__decorate([
    query('temp-display')
], weatherApp.prototype, "_tempDisplay", void 0);
__decorate([
    query('rain-display')
], weatherApp.prototype, "_rainDisplay", void 0);
__decorate([
    query('wind-display')
], weatherApp.prototype, "_windDisplay", void 0);
weatherApp = __decorate([
    customElement('weather-app')
], weatherApp);
export { weatherApp };
