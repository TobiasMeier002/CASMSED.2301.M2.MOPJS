var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let SelectDate = class SelectDate extends LitElement {
    constructor() {
        super(...arguments);
        this.date = new Date();
    }
    render() {
        return html `<p><input type="date" @change=${this._dateChanged} value="${this.date.toLocaleDateString()}"></p>`;
    }
    _dateChanged(e) {
        const utcDate = e.target.valueAsDate;
        if (utcDate) {
            this.date = this._localDateFromUTC(utcDate);
        }
    }
    _localDateFromUTC(utcDate) {
        return new Date(utcDate.getUTCFullYear(), utcDate.getUTCMonth(), utcDate.getUTCDate());
    }
};
SelectDate.styles = css `p {color: black}`;
__decorate([
    property()
], SelectDate.prototype, "date", void 0);
SelectDate = __decorate([
    customElement('select-date')
], SelectDate);
export { SelectDate };
