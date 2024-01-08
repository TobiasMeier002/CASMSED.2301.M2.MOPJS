import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('select-date')
export class SelectDate extends LitElement {
    static styles = css`p {color: black}`;

    @property() date: Date = new Date();

    render () {
        return html`<p><input type="date" @change=${this._dateChanged} value="${this.date.toLocaleDateString()}"></p>`
    }

    _dateChanged(e: Event){
        const utcDate = (e.target as HTMLInputElement).valueAsDate;
        if (utcDate) {
            this.date = this._localDateFromUTC(utcDate);
        }
    }

    _localDateFromUTC(utcDate: Date) {
        return new Date(utcDate.getUTCFullYear(), utcDate.getUTCMonth(), utcDate.getUTCDate());
    }
}