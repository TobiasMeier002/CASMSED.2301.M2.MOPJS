import { LitElement } from 'lit';
import { tempDisplay } from './temp-display';
import { rainDisplay } from './rain-display';
import { windDisplay } from './wind-display';
export declare class weatherApp extends LitElement {
    static styles: import("lit").CSSResult;
    _tempDisplay: tempDisplay;
    _rainDisplay: rainDisplay;
    _windDisplay: windDisplay;
    render(): import("lit-html").TemplateResult<1>;
    _LatitudeHandler(e: CustomEvent): void;
    _LongitudeHandler(e: CustomEvent): void;
    _DateHandler(e: CustomEvent): void;
}
//# sourceMappingURL=weather-app.d.ts.map