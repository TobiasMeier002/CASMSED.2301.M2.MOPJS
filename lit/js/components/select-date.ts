import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('select-date')
export class SelectDate extends LitElement {
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
    render () {
        return html`<div>
            <label>Date</label>
            <input type="date" id="Date" @input="${this._dateChanged}">
        </div>`
    }

    _dateChanged(e: Event){
        const value =  (e.target as HTMLInputElement).value;
        const detail = {message: value};
        const event = new CustomEvent('changedDate', {detail, bubbles: true, composed: true, cancelable: true});
        this.dispatchEvent(event)
    }

    _localDateFromUTC(utcDate: Date) {
        return new Date(utcDate.getUTCFullYear(), utcDate.getUTCMonth(), utcDate.getUTCDate());
    }
}