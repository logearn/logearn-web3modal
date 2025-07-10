import { LitElement } from 'lit';
export declare class W3mEmailLoginWidget extends LitElement {
    static styles: import("lit").CSSResult;
    private unsubscribe;
    private formRef;
    private connectors;
    private email;
    private loading;
    constructor();
    disconnectedCallback(): void;
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1> | null;
    private onEmailInputChange;
    private onSubmitEmail;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-email-login-widget': W3mEmailLoginWidget;
    }
}
