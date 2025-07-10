import { LitElement } from 'lit';
export declare class W3mEmailVerifyOtpView extends LitElement {
    static styles: import("lit").CSSResult;
    protected readonly email: string | undefined;
    protected readonly emailConnector: import("@web3modal/core").EmailConnector | undefined;
    private loading;
    render(): import("lit-html").TemplateResult<1>;
    private onOtpInputChange;
    private onResendCode;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-email-verify-otp-view': W3mEmailVerifyOtpView;
    }
}
