import { z } from 'zod';
import { W3mFrameSchema, AppConnectEmailRequest, AppConnectOtpRequest, AppSwitchNetworkRequest, FrameConnectEmailResponse, FrameGetChainIdResponse, FrameGetUserResponse, FrameIsConnectedResponse, RpcPersonalSignRequest, RpcResponse, RpcEthSendTransactionRequest, RpcEthSignTypedDataV4, RpcEthAccountsRequest, RpcEthEstimateGas, RpcEthGasPrice, RpcGetBalance, FrameSession, AppGetUserRequest, AppUpdateEmailRequest, FrameAwaitUpdateEmailResponse } from './W3mFrameSchema.js';
export declare namespace W3mFrameTypes {
    type AppEvent = z.infer<typeof W3mFrameSchema.appEvent>;
    type FrameEvent = z.infer<typeof W3mFrameSchema.frameEvent>;
    interface Requests {
        AppConnectEmailRequest: z.infer<typeof AppConnectEmailRequest>;
        AppConnectOtpRequest: z.infer<typeof AppConnectOtpRequest>;
        AppSwitchNetworkRequest: z.infer<typeof AppSwitchNetworkRequest>;
        AppGetUserRequest: z.infer<typeof AppGetUserRequest>;
        AppUpdateEmailRequest: z.infer<typeof AppUpdateEmailRequest>;
    }
    interface Responses {
        FrameConnectEmailResponse: z.infer<typeof FrameConnectEmailResponse>;
        FrameGetChainIdResponse: z.infer<typeof FrameGetChainIdResponse>;
        FrameGetUserResponse: z.infer<typeof FrameGetUserResponse>;
        FrameIsConnectedResponse: z.infer<typeof FrameIsConnectedResponse>;
        FrameAwaitUpdateEmailResponse: z.infer<typeof FrameAwaitUpdateEmailResponse>;
    }
    interface Network {
        rpcUrl: string;
        chainId: number;
    }
    type RPCRequest = z.infer<typeof RpcPersonalSignRequest> | z.infer<typeof RpcEthSendTransactionRequest> | z.infer<typeof RpcEthSignTypedDataV4> | z.infer<typeof RpcEthAccountsRequest> | z.infer<typeof RpcEthEstimateGas> | z.infer<typeof RpcEthGasPrice> | z.infer<typeof RpcGetBalance>;
    type RPCResponse = z.infer<typeof RpcResponse>;
    type FrameSessionType = z.infer<typeof FrameSession>;
}
