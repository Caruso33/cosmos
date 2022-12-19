/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "alice.checkers.checkers";

export interface MsgRejectGame {
  creator: string;
  gameIndex: string;
}

export interface MsgRejectGameResponse {
}

function createBaseMsgRejectGame(): MsgRejectGame {
  return { creator: "", gameIndex: "" };
}

export const MsgRejectGame = {
  encode(message: MsgRejectGame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.gameIndex !== "") {
      writer.uint32(18).string(message.gameIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRejectGame {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRejectGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.gameIndex = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRejectGame {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      gameIndex: isSet(object.gameIndex) ? String(object.gameIndex) : "",
    };
  },

  toJSON(message: MsgRejectGame): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.gameIndex !== undefined && (obj.gameIndex = message.gameIndex);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRejectGame>, I>>(object: I): MsgRejectGame {
    const message = createBaseMsgRejectGame();
    message.creator = object.creator ?? "";
    message.gameIndex = object.gameIndex ?? "";
    return message;
  },
};

function createBaseMsgRejectGameResponse(): MsgRejectGameResponse {
  return {};
}

export const MsgRejectGameResponse = {
  encode(_: MsgRejectGameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRejectGameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRejectGameResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRejectGameResponse {
    return {};
  },

  toJSON(_: MsgRejectGameResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRejectGameResponse>, I>>(_: I): MsgRejectGameResponse {
    const message = createBaseMsgRejectGameResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  RejectGame(request: MsgRejectGame): Promise<MsgRejectGameResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RejectGame = this.RejectGame.bind(this);
  }
  RejectGame(request: MsgRejectGame): Promise<MsgRejectGameResponse> {
    const data = MsgRejectGame.encode(request).finish();
    const promise = this.rpc.request("alice.checkers.checkers.Msg", "RejectGame", data);
    return promise.then((data) => MsgRejectGameResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
