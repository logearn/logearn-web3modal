import { z } from 'zod';
export declare const AppSwitchNetworkRequest: z.ZodObject<{
    chainId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    chainId: number;
}, {
    chainId: number;
}>;
export declare const AppConnectEmailRequest: z.ZodObject<{
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
}, {
    email: string;
}>;
export declare const AppConnectOtpRequest: z.ZodObject<{
    otp: z.ZodString;
}, "strip", z.ZodTypeAny, {
    otp: string;
}, {
    otp: string;
}>;
export declare const AppGetUserRequest: z.ZodObject<{
    chainId: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    chainId?: number | undefined;
}, {
    chainId?: number | undefined;
}>;
export declare const AppUpdateEmailRequest: z.ZodObject<{
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
}, {
    email: string;
}>;
export declare const FrameConnectEmailResponse: z.ZodObject<{
    action: z.ZodEnum<["VERIFY_DEVICE", "VERIFY_OTP"]>;
}, "strip", z.ZodTypeAny, {
    action: "VERIFY_DEVICE" | "VERIFY_OTP";
}, {
    action: "VERIFY_DEVICE" | "VERIFY_OTP";
}>;
export declare const FrameGetUserResponse: z.ZodObject<{
    email: z.ZodString;
    address: z.ZodString;
    chainId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    chainId: number;
    email: string;
    address: string;
}, {
    chainId: number;
    email: string;
    address: string;
}>;
export declare const FrameIsConnectedResponse: z.ZodObject<{
    isConnected: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    isConnected: boolean;
}, {
    isConnected: boolean;
}>;
export declare const FrameGetChainIdResponse: z.ZodObject<{
    chainId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    chainId: number;
}, {
    chainId: number;
}>;
export declare const FrameAwaitUpdateEmailResponse: z.ZodObject<{
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
}, {
    email: string;
}>;
export declare const RpcResponse: z.ZodString;
export declare const RpcPersonalSignRequest: z.ZodObject<{
    method: z.ZodLiteral<"personal_sign">;
    params: z.ZodArray<z.ZodAny, "many">;
}, "strip", z.ZodTypeAny, {
    params: any[];
    method: "personal_sign";
}, {
    params: any[];
    method: "personal_sign";
}>;
export declare const RpcEthSendTransactionRequest: z.ZodObject<{
    method: z.ZodLiteral<"eth_sendTransaction">;
    params: z.ZodArray<z.ZodAny, "many">;
}, "strip", z.ZodTypeAny, {
    params: any[];
    method: "eth_sendTransaction";
}, {
    params: any[];
    method: "eth_sendTransaction";
}>;
export declare const RpcEthAccountsRequest: z.ZodObject<{
    method: z.ZodLiteral<"eth_accounts">;
}, "strip", z.ZodTypeAny, {
    method: "eth_accounts";
}, {
    method: "eth_accounts";
}>;
export declare const RpcGetBalance: z.ZodObject<{
    method: z.ZodLiteral<"eth_getBalance">;
    params: z.ZodArray<z.ZodAny, "many">;
}, "strip", z.ZodTypeAny, {
    params: any[];
    method: "eth_getBalance";
}, {
    params: any[];
    method: "eth_getBalance";
}>;
export declare const RpcEthEstimateGas: z.ZodObject<{
    method: z.ZodLiteral<"eth_estimateGas">;
    params: z.ZodArray<z.ZodAny, "many">;
}, "strip", z.ZodTypeAny, {
    params: any[];
    method: "eth_estimateGas";
}, {
    params: any[];
    method: "eth_estimateGas";
}>;
export declare const RpcEthGasPrice: z.ZodObject<{
    method: z.ZodLiteral<"eth_gasPrice">;
}, "strip", z.ZodTypeAny, {
    method: "eth_gasPrice";
}, {
    method: "eth_gasPrice";
}>;
export declare const RpcEthSignTypedDataV4: z.ZodObject<{
    method: z.ZodLiteral<"eth_signTypedData_v4">;
    params: z.ZodArray<z.ZodAny, "many">;
}, "strip", z.ZodTypeAny, {
    params: any[];
    method: "eth_signTypedData_v4";
}, {
    params: any[];
    method: "eth_signTypedData_v4";
}>;
export declare const FrameSession: z.ZodObject<{
    token: z.ZodString;
}, "strip", z.ZodTypeAny, {
    token: string;
}, {
    token: string;
}>;
export declare const W3mFrameSchema: {
    appEvent: z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"@w3m-app/SWITCH_NETWORK">;
        payload: z.ZodObject<{
            chainId: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            chainId: number;
        }, {
            chainId: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-app/SWITCH_NETWORK";
        payload: {
            chainId: number;
        };
    }, {
        type: "@w3m-app/SWITCH_NETWORK";
        payload: {
            chainId: number;
        };
    }>, z.ZodObject<{
        type: z.ZodLiteral<"@w3m-app/CONNECT_EMAIL">;
        payload: z.ZodObject<{
            email: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            email: string;
        }, {
            email: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-app/CONNECT_EMAIL";
        payload: {
            email: string;
        };
    }, {
        type: "@w3m-app/CONNECT_EMAIL";
        payload: {
            email: string;
        };
    }>]>, z.ZodObject<{
        type: z.ZodLiteral<"@w3m-app/CONNECT_DEVICE">;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-app/CONNECT_DEVICE";
    }, {
        type: "@w3m-app/CONNECT_DEVICE";
    }>]>, z.ZodObject<{
        type: z.ZodLiteral<"@w3m-app/CONNECT_OTP">;
        payload: z.ZodObject<{
            otp: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            otp: string;
        }, {
            otp: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-app/CONNECT_OTP";
        payload: {
            otp: string;
        };
    }, {
        type: "@w3m-app/CONNECT_OTP";
        payload: {
            otp: string;
        };
    }>]>, z.ZodObject<{
        type: z.ZodLiteral<"@w3m-app/GET_USER">;
        payload: z.ZodOptional<z.ZodObject<{
            chainId: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            chainId?: number | undefined;
        }, {
            chainId?: number | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-app/GET_USER";
        payload?: {
            chainId?: number | undefined;
        } | undefined;
    }, {
        type: "@w3m-app/GET_USER";
        payload?: {
            chainId?: number | undefined;
        } | undefined;
    }>]>, z.ZodObject<{
        type: z.ZodLiteral<"@w3m-app/SIGN_OUT">;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-app/SIGN_OUT";
    }, {
        type: "@w3m-app/SIGN_OUT";
    }>]>, z.ZodObject<{
        type: z.ZodLiteral<"@w3m-app/IS_CONNECTED">;
        payload: z.ZodOptional<z.ZodObject<{
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            token: string;
        }, {
            token: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-app/IS_CONNECTED";
        payload?: {
            token: string;
        } | undefined;
    }, {
        type: "@w3m-app/IS_CONNECTED";
        payload?: {
            token: string;
        } | undefined;
    }>]>, z.ZodObject<{
        type: z.ZodLiteral<"@w3m-app/GET_CHAIN_ID">;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-app/GET_CHAIN_ID";
    }, {
        type: "@w3m-app/GET_CHAIN_ID";
    }>]>, z.ZodObject<{
        type: z.ZodLiteral<"@w3m-app/RPC_REQUEST">;
        payload: z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodObject<{
            method: z.ZodLiteral<"personal_sign">;
            params: z.ZodArray<z.ZodAny, "many">;
        }, "strip", z.ZodTypeAny, {
            params: any[];
            method: "personal_sign";
        }, {
            params: any[];
            method: "personal_sign";
        }>, z.ZodObject<{
            method: z.ZodLiteral<"eth_sendTransaction">;
            params: z.ZodArray<z.ZodAny, "many">;
        }, "strip", z.ZodTypeAny, {
            params: any[];
            method: "eth_sendTransaction";
        }, {
            params: any[];
            method: "eth_sendTransaction";
        }>]>, z.ZodObject<{
            method: z.ZodLiteral<"eth_accounts">;
        }, "strip", z.ZodTypeAny, {
            method: "eth_accounts";
        }, {
            method: "eth_accounts";
        }>]>, z.ZodObject<{
            method: z.ZodLiteral<"eth_getBalance">;
            params: z.ZodArray<z.ZodAny, "many">;
        }, "strip", z.ZodTypeAny, {
            params: any[];
            method: "eth_getBalance";
        }, {
            params: any[];
            method: "eth_getBalance";
        }>]>, z.ZodObject<{
            method: z.ZodLiteral<"eth_estimateGas">;
            params: z.ZodArray<z.ZodAny, "many">;
        }, "strip", z.ZodTypeAny, {
            params: any[];
            method: "eth_estimateGas";
        }, {
            params: any[];
            method: "eth_estimateGas";
        }>]>, z.ZodObject<{
            method: z.ZodLiteral<"eth_gasPrice">;
        }, "strip", z.ZodTypeAny, {
            method: "eth_gasPrice";
        }, {
            method: "eth_gasPrice";
        }>]>, z.ZodObject<{
            method: z.ZodLiteral<"eth_signTypedData_v4">;
            params: z.ZodArray<z.ZodAny, "many">;
        }, "strip", z.ZodTypeAny, {
            params: any[];
            method: "eth_signTypedData_v4";
        }, {
            params: any[];
            method: "eth_signTypedData_v4";
        }>]>;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-app/RPC_REQUEST";
        payload: {
            params: any[];
            method: "personal_sign";
        } | {
            params: any[];
            method: "eth_sendTransaction";
        } | {
            method: "eth_accounts";
        } | {
            params: any[];
            method: "eth_getBalance";
        } | {
            params: any[];
            method: "eth_estimateGas";
        } | {
            method: "eth_gasPrice";
        } | {
            params: any[];
            method: "eth_signTypedData_v4";
        };
    }, {
        type: "@w3m-app/RPC_REQUEST";
        payload: {
            params: any[];
            method: "personal_sign";
        } | {
            params: any[];
            method: "eth_sendTransaction";
        } | {
            method: "eth_accounts";
        } | {
            params: any[];
            method: "eth_getBalance";
        } | {
            params: any[];
            method: "eth_estimateGas";
        } | {
            method: "eth_gasPrice";
        } | {
            params: any[];
            method: "eth_signTypedData_v4";
        };
    }>]>, z.ZodObject<{
        type: z.ZodLiteral<"@w3m-app/UPDATE_EMAIL">;
        payload: z.ZodObject<{
            email: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            email: string;
        }, {
            email: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-app/UPDATE_EMAIL";
        payload: {
            email: string;
        };
    }, {
        type: "@w3m-app/UPDATE_EMAIL";
        payload: {
            email: string;
        };
    }>]>, z.ZodObject<{
        type: z.ZodLiteral<"@w3m-app/AWAIT_UPDATE_EMAIL">;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-app/AWAIT_UPDATE_EMAIL";
    }, {
        type: "@w3m-app/AWAIT_UPDATE_EMAIL";
    }>]>;
    frameEvent: z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"@w3m-frame/SWITCH_NETWORK_ERROR">;
        payload: z.ZodObject<{
            message: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message: string;
        }, {
            message: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-frame/SWITCH_NETWORK_ERROR";
        payload: {
            message: string;
        };
    }, {
        type: "@w3m-frame/SWITCH_NETWORK_ERROR";
        payload: {
            message: string;
        };
    }>, z.ZodObject<{
        type: z.ZodLiteral<"@w3m-frame/SWITCH_NETWORK_SUCCESS">;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-frame/SWITCH_NETWORK_SUCCESS";
    }, {
        type: "@w3m-frame/SWITCH_NETWORK_SUCCESS";
    }>]>, z.ZodObject<{
        type: z.ZodLiteral<"@w3m-frame/CONNECT_EMAIL_ERROR">;
        payload: z.ZodObject<{
            message: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message: string;
        }, {
            message: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-frame/CONNECT_EMAIL_ERROR";
        payload: {
            message: string;
        };
    }, {
        type: "@w3m-frame/CONNECT_EMAIL_ERROR";
        payload: {
            message: string;
        };
    }>]>, z.ZodObject<{
        type: z.ZodLiteral<"@w3m-frame/CONNECT_EMAIL_SUCCESS">;
        payload: z.ZodObject<{
            action: z.ZodEnum<["VERIFY_DEVICE", "VERIFY_OTP"]>;
        }, "strip", z.ZodTypeAny, {
            action: "VERIFY_DEVICE" | "VERIFY_OTP";
        }, {
            action: "VERIFY_DEVICE" | "VERIFY_OTP";
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-frame/CONNECT_EMAIL_SUCCESS";
        payload: {
            action: "VERIFY_DEVICE" | "VERIFY_OTP";
        };
    }, {
        type: "@w3m-frame/CONNECT_EMAIL_SUCCESS";
        payload: {
            action: "VERIFY_DEVICE" | "VERIFY_OTP";
        };
    }>]>, z.ZodObject<{
        type: z.ZodLiteral<"@w3m-frame/CONNECT_OTP_ERROR">;
        payload: z.ZodObject<{
            message: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message: string;
        }, {
            message: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-frame/CONNECT_OTP_ERROR";
        payload: {
            message: string;
        };
    }, {
        type: "@w3m-frame/CONNECT_OTP_ERROR";
        payload: {
            message: string;
        };
    }>]>, z.ZodObject<{
        type: z.ZodLiteral<"@w3m-frame/CONNECT_OTP_SUCCESS">;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-frame/CONNECT_OTP_SUCCESS";
    }, {
        type: "@w3m-frame/CONNECT_OTP_SUCCESS";
    }>]>, z.ZodObject<{
        type: z.ZodLiteral<"@w3m-frame/CONNECT_DEVICE_ERROR">;
        payload: z.ZodObject<{
            message: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message: string;
        }, {
            message: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-frame/CONNECT_DEVICE_ERROR";
        payload: {
            message: string;
        };
    }, {
        type: "@w3m-frame/CONNECT_DEVICE_ERROR";
        payload: {
            message: string;
        };
    }>]>, z.ZodObject<{
        type: z.ZodLiteral<"@w3m-frame/CONNECT_DEVICE_SUCCESS">;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-frame/CONNECT_DEVICE_SUCCESS";
    }, {
        type: "@w3m-frame/CONNECT_DEVICE_SUCCESS";
    }>]>, z.ZodObject<{
        type: z.ZodLiteral<"@w3m-frame/GET_USER_ERROR">;
        payload: z.ZodObject<{
            message: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message: string;
        }, {
            message: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-frame/GET_USER_ERROR";
        payload: {
            message: string;
        };
    }, {
        type: "@w3m-frame/GET_USER_ERROR";
        payload: {
            message: string;
        };
    }>]>, z.ZodObject<{
        type: z.ZodLiteral<"@w3m-frame/GET_USER_SUCCESS">;
        payload: z.ZodObject<{
            email: z.ZodString;
            address: z.ZodString;
            chainId: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            chainId: number;
            email: string;
            address: string;
        }, {
            chainId: number;
            email: string;
            address: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-frame/GET_USER_SUCCESS";
        payload: {
            chainId: number;
            email: string;
            address: string;
        };
    }, {
        type: "@w3m-frame/GET_USER_SUCCESS";
        payload: {
            chainId: number;
            email: string;
            address: string;
        };
    }>]>, z.ZodObject<{
        type: z.ZodLiteral<"@w3m-frame/SIGN_OUT_ERROR">;
        payload: z.ZodObject<{
            message: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message: string;
        }, {
            message: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-frame/SIGN_OUT_ERROR";
        payload: {
            message: string;
        };
    }, {
        type: "@w3m-frame/SIGN_OUT_ERROR";
        payload: {
            message: string;
        };
    }>]>, z.ZodObject<{
        type: z.ZodLiteral<"@w3m-frame/SIGN_OUT_SUCCESS">;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-frame/SIGN_OUT_SUCCESS";
    }, {
        type: "@w3m-frame/SIGN_OUT_SUCCESS";
    }>]>, z.ZodObject<{
        type: z.ZodLiteral<"@w3m-frame/IS_CONNECTED_ERROR">;
        payload: z.ZodObject<{
            message: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message: string;
        }, {
            message: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-frame/IS_CONNECTED_ERROR";
        payload: {
            message: string;
        };
    }, {
        type: "@w3m-frame/IS_CONNECTED_ERROR";
        payload: {
            message: string;
        };
    }>]>, z.ZodObject<{
        type: z.ZodLiteral<"@w3m-frame/IS_CONNECTED_SUCCESS">;
        payload: z.ZodObject<{
            isConnected: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            isConnected: boolean;
        }, {
            isConnected: boolean;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-frame/IS_CONNECTED_SUCCESS";
        payload: {
            isConnected: boolean;
        };
    }, {
        type: "@w3m-frame/IS_CONNECTED_SUCCESS";
        payload: {
            isConnected: boolean;
        };
    }>]>, z.ZodObject<{
        type: z.ZodLiteral<"@w3m-frame/GET_CHAIN_ID_ERROR">;
        payload: z.ZodObject<{
            message: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message: string;
        }, {
            message: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-frame/GET_CHAIN_ID_ERROR";
        payload: {
            message: string;
        };
    }, {
        type: "@w3m-frame/GET_CHAIN_ID_ERROR";
        payload: {
            message: string;
        };
    }>]>, z.ZodObject<{
        type: z.ZodLiteral<"@w3m-frame/GET_CHAIN_ID_SUCCESS">;
        payload: z.ZodObject<{
            chainId: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            chainId: number;
        }, {
            chainId: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-frame/GET_CHAIN_ID_SUCCESS";
        payload: {
            chainId: number;
        };
    }, {
        type: "@w3m-frame/GET_CHAIN_ID_SUCCESS";
        payload: {
            chainId: number;
        };
    }>]>, z.ZodObject<{
        type: z.ZodLiteral<"@w3m-frame/RPC_REQUEST_ERROR">;
        payload: z.ZodObject<{
            message: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message: string;
        }, {
            message: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-frame/RPC_REQUEST_ERROR";
        payload: {
            message: string;
        };
    }, {
        type: "@w3m-frame/RPC_REQUEST_ERROR";
        payload: {
            message: string;
        };
    }>]>, z.ZodObject<{
        type: z.ZodLiteral<"@w3m-frame/RPC_REQUEST_SUCCESS">;
        payload: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-frame/RPC_REQUEST_SUCCESS";
        payload: string;
    }, {
        type: "@w3m-frame/RPC_REQUEST_SUCCESS";
        payload: string;
    }>]>, z.ZodObject<{
        type: z.ZodLiteral<"@w3m-frame/SESSION_UPDATE">;
        payload: z.ZodObject<{
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            token: string;
        }, {
            token: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-frame/SESSION_UPDATE";
        payload: {
            token: string;
        };
    }, {
        type: "@w3m-frame/SESSION_UPDATE";
        payload: {
            token: string;
        };
    }>]>, z.ZodObject<{
        type: z.ZodLiteral<"@w3m-frame/UPDATE_EMAIL_ERROR">;
        payload: z.ZodObject<{
            message: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message: string;
        }, {
            message: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-frame/UPDATE_EMAIL_ERROR";
        payload: {
            message: string;
        };
    }, {
        type: "@w3m-frame/UPDATE_EMAIL_ERROR";
        payload: {
            message: string;
        };
    }>]>, z.ZodObject<{
        type: z.ZodLiteral<"@w3m-frame/UPDATE_EMAIL_SUCCESS">;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-frame/UPDATE_EMAIL_SUCCESS";
    }, {
        type: "@w3m-frame/UPDATE_EMAIL_SUCCESS";
    }>]>, z.ZodObject<{
        type: z.ZodLiteral<"@w3m-frame/AWAIT_UPDATE_EMAIL_ERROR">;
        payload: z.ZodObject<{
            message: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message: string;
        }, {
            message: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-frame/AWAIT_UPDATE_EMAIL_ERROR";
        payload: {
            message: string;
        };
    }, {
        type: "@w3m-frame/AWAIT_UPDATE_EMAIL_ERROR";
        payload: {
            message: string;
        };
    }>]>, z.ZodObject<{
        type: z.ZodLiteral<"@w3m-frame/AWAIT_UPDATE_EMAIL_SUCCESS">;
        payload: z.ZodObject<{
            email: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            email: string;
        }, {
            email: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "@w3m-frame/AWAIT_UPDATE_EMAIL_SUCCESS";
        payload: {
            email: string;
        };
    }, {
        type: "@w3m-frame/AWAIT_UPDATE_EMAIL_SUCCESS";
        payload: {
            email: string;
        };
    }>]>;
};
