import { LitElement, PropertyValues } from 'lit';
export declare class rainDisplay extends LitElement {
    static styles: import("lit").CSSResult;
    longitude: string;
    latitude: string;
    date: string;
    rain: string;
    render(): import("lit-html").TemplateResult<1>;
    updated(changed: PropertyValues<this>): void;
    _getWindfromAPI(): void;
}
//# sourceMappingURL=rain-display.d.ts.map