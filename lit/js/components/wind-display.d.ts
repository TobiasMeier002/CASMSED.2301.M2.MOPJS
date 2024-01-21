import { LitElement, PropertyValues } from 'lit';
export declare class windDisplay extends LitElement {
    static styles: import("lit").CSSResult;
    longitude: string;
    latitude: string;
    date: string;
    wind: string;
    render(): import("lit-html").TemplateResult<1>;
    updated(changed: PropertyValues<this>): void;
    _getWindfromAPI(): void;
}
//# sourceMappingURL=wind-display.d.ts.map