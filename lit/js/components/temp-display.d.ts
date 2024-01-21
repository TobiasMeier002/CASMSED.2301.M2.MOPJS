import { LitElement, PropertyValues } from 'lit';
export declare class tempDisplay extends LitElement {
    static styles: import("lit").CSSResult;
    longitude: string;
    latitude: string;
    date: string;
    temp: string;
    render(): import("lit-html").TemplateResult<1>;
    updated(changed: PropertyValues<this>): void;
    _getTempfromAPI(): void;
}
//# sourceMappingURL=temp-display.d.ts.map