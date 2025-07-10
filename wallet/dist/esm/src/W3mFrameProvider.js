import { W3mFrame } from './W3mFrame.js';
import { W3mFrameConstants } from './W3mFrameConstants.js';
import { W3mFrameStorage } from './W3mFrameStorage.js';
import { W3mFrameHelpers } from './W3mFrameHelpers.js';
export class W3mFrameProvider {
    constructor(projectId) {
        this.connectEmailResolver = undefined;
        this.connectDeviceResolver = undefined;
        this.connectOtpResolver = undefined;
        this.connectResolver = undefined;
        this.disconnectResolver = undefined;
        this.isConnectedResolver = undefined;
        this.getChainIdResolver = undefined;
        this.switchChainResolver = undefined;
        this.rpcRequestResolver = undefined;
        this.updateEmailResolver = undefined;
        this.awaitUpdateEmailResolver = undefined;
        this.w3mFrame = new W3mFrame(projectId, true);
        this.w3mFrame.events.onFrameEvent(event => {
            console.log('💻 received', event);
            switch (event.type) {
                case W3mFrameConstants.FRAME_CONNECT_EMAIL_SUCCESS:
                    return this.onConnectEmailSuccess(event);
                case W3mFrameConstants.FRAME_CONNECT_EMAIL_ERROR:
                    return this.onConnectEmailError(event);
                case W3mFrameConstants.FRAME_CONNECT_DEVICE_SUCCESS:
                    return this.onConnectDeviceSuccess();
                case W3mFrameConstants.FRAME_CONNECT_DEVICE_ERROR:
                    return this.onConnectDeviceError(event);
                case W3mFrameConstants.FRAME_CONNECT_OTP_SUCCESS:
                    return this.onConnectOtpSuccess();
                case W3mFrameConstants.FRAME_CONNECT_OTP_ERROR:
                    return this.onConnectOtpError(event);
                case W3mFrameConstants.FRAME_GET_USER_SUCCESS:
                    return this.onConnectSuccess(event);
                case W3mFrameConstants.FRAME_GET_USER_ERROR:
                    return this.onConnectError(event);
                case W3mFrameConstants.FRAME_IS_CONNECTED_SUCCESS:
                    return this.onIsConnectedSuccess(event);
                case W3mFrameConstants.FRAME_IS_CONNECTED_ERROR:
                    return this.onIsConnectedError(event);
                case W3mFrameConstants.FRAME_GET_CHAIN_ID_SUCCESS:
                    return this.onGetChainIdSuccess(event);
                case W3mFrameConstants.FRAME_GET_CHAIN_ID_ERROR:
                    return this.onGetChainIdError(event);
                case W3mFrameConstants.FRAME_SIGN_OUT_SUCCESS:
                    return this.onSignOutSuccess();
                case W3mFrameConstants.FRAME_SIGN_OUT_ERROR:
                    return this.onSignOutError(event);
                case W3mFrameConstants.FRAME_SWITCH_NETWORK_SUCCESS:
                    return this.onSwitchChainSuccess();
                case W3mFrameConstants.FRAME_SWITCH_NETWORK_ERROR:
                    return this.onSwitchChainError(event);
                case W3mFrameConstants.FRAME_RPC_REQUEST_SUCCESS:
                    return this.onRpcRequestSuccess(event);
                case W3mFrameConstants.FRAME_RPC_REQUEST_ERROR:
                    return this.onRpcRequestError(event);
                case W3mFrameConstants.FRAME_SESSION_UPDATE:
                    return this.onSessionUpdate(event);
                case W3mFrameConstants.FRAME_UPDATE_EMAIL_SUCCESS:
                    return this.onUpdateEmailSuccess();
                case W3mFrameConstants.FRAME_UPDATE_EMAIL_ERROR:
                    return this.onUpdateEmailError(event);
                case W3mFrameConstants.FRAME_AWAIT_UPDATE_EMAIL_SUCCESS:
                    return this.onAwaitUpdateEmailSuccess(event);
                case W3mFrameConstants.FRAME_AWAIT_UPDATE_EMAIL_ERROR:
                    return this.onAwaitUpdateEmailError(event);
                default:
                    return null;
            }
        });
    }
    getLoginEmailUsed() {
        return Boolean(W3mFrameStorage.get(W3mFrameConstants.EMAIL_LOGIN_USED_KEY));
    }
    getEmail() {
        return W3mFrameStorage.get(W3mFrameConstants.EMAIL);
    }
    async connectEmail(payload) {
        await this.w3mFrame.frameLoadPromise;
        W3mFrameHelpers.checkIfAllowedToTriggerEmail();
        this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_CONNECT_EMAIL, payload });
        return new Promise((resolve, reject) => {
            this.connectEmailResolver = { resolve, reject };
        });
    }
    async connectDevice() {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_CONNECT_DEVICE });
        return new Promise((resolve, reject) => {
            this.connectDeviceResolver = { resolve, reject };
        });
    }
    async connectOtp(payload) {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_CONNECT_OTP, payload });
        return new Promise((resolve, reject) => {
            this.connectOtpResolver = { resolve, reject };
        });
    }
    async isConnected() {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({
            type: W3mFrameConstants.APP_IS_CONNECTED,
            payload: undefined
        });
        return new Promise((resolve, reject) => {
            this.isConnectedResolver = { resolve, reject };
        });
    }
    async getChainId() {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_GET_CHAIN_ID });
        return new Promise((resolve, reject) => {
            this.getChainIdResolver = { resolve, reject };
        });
    }
    async updateEmail(payload) {
        await this.w3mFrame.frameLoadPromise;
        W3mFrameHelpers.checkIfAllowedToTriggerEmail();
        this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_UPDATE_EMAIL, payload });
        return new Promise((resolve, reject) => {
            this.updateEmailResolver = { resolve, reject };
        });
    }
    async awaitUpdateEmail() {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_AWAIT_UPDATE_EMAIL });
        return new Promise((resolve, reject) => {
            this.awaitUpdateEmailResolver = { resolve, reject };
        });
    }
    async connect(payload) {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_GET_USER, payload });
        return new Promise((resolve, reject) => {
            this.connectResolver = { resolve, reject };
        });
    }
    async switchNetwork(chainId) {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({
            type: W3mFrameConstants.APP_SWITCH_NETWORK,
            payload: { chainId }
        });
        return new Promise((resolve, reject) => {
            this.switchChainResolver = { resolve, reject };
        });
    }
    async disconnect() {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_SIGN_OUT });
        return new Promise((resolve, reject) => {
            this.disconnectResolver = { resolve, reject };
        });
    }
    async request(req) {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({
            type: W3mFrameConstants.APP_RPC_REQUEST,
            payload: req
        });
        return new Promise((resolve, reject) => {
            this.rpcRequestResolver = { resolve, reject };
        });
    }
    onRpcRequest(callback) {
        this.w3mFrame.events.onAppEvent(event => {
            if (event.type.includes(W3mFrameConstants.RPC_METHOD_KEY)) {
                callback(event);
            }
        });
    }
    onRpcResponse(callback) {
        this.w3mFrame.events.onFrameEvent(event => {
            if (event.type.includes(W3mFrameConstants.RPC_METHOD_KEY)) {
                callback(event);
            }
        });
    }
    onIsConnected(callback) {
        this.w3mFrame.events.onFrameEvent(event => {
            if (event.type === W3mFrameConstants.FRAME_IS_CONNECTED_SUCCESS) {
                callback();
            }
        });
    }
    onConnectEmailSuccess(event) {
        this.connectEmailResolver?.resolve(event.payload);
        this.setNewLastEmailLoginTime();
    }
    onConnectEmailError(event) {
        this.connectEmailResolver?.reject(event.payload.message);
    }
    onConnectDeviceSuccess() {
        this.connectDeviceResolver?.resolve(undefined);
    }
    onConnectDeviceError(event) {
        this.connectDeviceResolver?.reject(event.payload.message);
    }
    onConnectOtpSuccess() {
        this.connectOtpResolver?.resolve(undefined);
    }
    onConnectOtpError(event) {
        this.connectOtpResolver?.reject(event.payload.message);
    }
    onConnectSuccess(event) {
        this.setEmailLoginSuccess(event.payload.email);
        this.connectResolver?.resolve(event.payload);
    }
    onConnectError(event) {
        this.connectResolver?.reject(event.payload.message);
    }
    onIsConnectedSuccess(event) {
        this.isConnectedResolver?.resolve(event.payload);
    }
    onIsConnectedError(event) {
        this.isConnectedResolver?.reject(event.payload.message);
    }
    onGetChainIdSuccess(event) {
        this.getChainIdResolver?.resolve(event.payload);
    }
    onGetChainIdError(event) {
        this.getChainIdResolver?.reject(event.payload.message);
    }
    onSignOutSuccess() {
        this.disconnectResolver?.resolve(undefined);
        W3mFrameStorage.delete(W3mFrameConstants.EMAIL_LOGIN_USED_KEY);
        W3mFrameStorage.delete(W3mFrameConstants.EMAIL);
    }
    onSignOutError(event) {
        this.disconnectResolver?.reject(event.payload.message);
    }
    onSwitchChainSuccess() {
        this.switchChainResolver?.resolve(undefined);
    }
    onSwitchChainError(event) {
        this.switchChainResolver?.reject(event.payload.message);
    }
    onRpcRequestSuccess(event) {
        this.rpcRequestResolver?.resolve(event.payload);
    }
    onRpcRequestError(event) {
        this.rpcRequestResolver?.reject(event.payload.message);
    }
    onSessionUpdate(event) {
        const { payload } = event;
        if (payload) {
        }
    }
    onUpdateEmailSuccess() {
        this.updateEmailResolver?.resolve(undefined);
        this.setNewLastEmailLoginTime();
    }
    onUpdateEmailError(event) {
        this.updateEmailResolver?.reject(event.payload.message);
    }
    onAwaitUpdateEmailSuccess(event) {
        this.setEmailLoginSuccess(event.payload.email);
        this.awaitUpdateEmailResolver?.resolve(event.payload);
    }
    onAwaitUpdateEmailError(event) {
        this.awaitUpdateEmailResolver?.reject(event.payload.message);
    }
    setNewLastEmailLoginTime() {
        W3mFrameStorage.set(W3mFrameConstants.LAST_EMAIL_LOGIN_TIME, Date.now().toString());
    }
    setEmailLoginSuccess(email) {
        W3mFrameStorage.set(W3mFrameConstants.EMAIL, email);
        W3mFrameStorage.set(W3mFrameConstants.EMAIL_LOGIN_USED_KEY, 'true');
        W3mFrameStorage.delete(W3mFrameConstants.LAST_EMAIL_LOGIN_TIME);
    }
}
//# sourceMappingURL=W3mFrameProvider.js.map