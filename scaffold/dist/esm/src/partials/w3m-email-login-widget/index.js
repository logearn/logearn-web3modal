var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ConnectorController } from '@web3modal/core';
import { customElement } from '@web3modal/ui';
import { LitElement, html } from 'lit';
import { state } from 'lit/decorators.js';
import { ref, createRef } from 'lit/directives/ref.js';
import styles from './styles.js';
import { SnackController, RouterController } from '@web3modal/core';
let W3mEmailLoginWidget = class W3mEmailLoginWidget extends LitElement {
    constructor() {
        super();
        this.unsubscribe = [];
        this.formRef = createRef();
        this.connectors = ConnectorController.state.connectors;
        this.email = '';
        this.loading = false;
        this.unsubscribe.push(ConnectorController.subscribeKey('connectors', val => (this.connectors = val)));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    firstUpdated() {
        this.formRef.value?.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                this.onSubmitEmail(event);
            }
        });
    }
    render() {
        const multipleConnectors = this.connectors.length > 1;
        const connector = this.connectors.find(c => c.type === 'EMAIL');
        const showSubmit = !this.loading && this.email.length > 3;
        if (!connector) {
            return null;
        }
        return html `
      <form ${ref(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
        >
        </wui-email-input>

        ${showSubmit && multipleConnectors
            ? html `
              <wui-icon-link
                size="sm"
                icon="chevronRight"
                iconcolor="accent-100"
                @click=${this.onSubmitEmail.bind(this)}
              >
              </wui-icon-link>
            `
            : null}
        ${this.loading && multipleConnectors
            ? html `<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`
            : null}

        <input type="submit" hidden />
      </form>

      ${multipleConnectors
            ? html `<wui-separator text="or"></wui-separator>`
            : html `<wui-button
            size="md"
            variant="fill"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!showSubmit}
            .loading=${this.loading}
          >
            Continue
          </wui-button>`}
    `;
    }
    onEmailInputChange(event) {
        this.email = event.detail;
    }
    async onSubmitEmail(event) {
        try {
            if (this.loading) {
                return;
            }
            this.loading = true;
            event.preventDefault();
            const emailConnector = ConnectorController.getEmailConnector();
            if (!emailConnector) {
                throw new Error('w3m-email-login-widget: Email connector not found');
            }
            const { action } = await emailConnector.provider.connectEmail({ email: this.email });
            if (action === 'VERIFY_OTP') {
                RouterController.push('EmailVerifyOtp', { email: this.email });
            }
            else if (action === 'VERIFY_DEVICE') {
                RouterController.push('EmailVerifyDevice', { email: this.email });
            }
        }
        catch (error) {
            SnackController.showError(error);
        }
        finally {
            this.loading = false;
        }
    }
};
W3mEmailLoginWidget.styles = styles;
__decorate([
    state()
], W3mEmailLoginWidget.prototype, "connectors", void 0);
__decorate([
    state()
], W3mEmailLoginWidget.prototype, "email", void 0);
__decorate([
    state()
], W3mEmailLoginWidget.prototype, "loading", void 0);
W3mEmailLoginWidget = __decorate([
    customElement('w3m-email-login-widget')
], W3mEmailLoginWidget);
export { W3mEmailLoginWidget };
//# sourceMappingURL=index.js.map