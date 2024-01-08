import { LitElement } from 'lit';
export declare class SelectDate extends LitElement {
    static styles: import("lit").CSSResult;
    date: Date;
    render(): import("lit-html").TemplateResult<1>;
    _dateChanged(e: Event): void;
    _localDateFromUTC(utcDate: Date): Date;
}
//# sourceMappingURL=select-date.d.ts.map