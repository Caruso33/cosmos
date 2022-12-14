import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateGame } from "./types/checkers/tx";
import { MsgPlayMove } from "./types/checkers/tx";
import { MsgRejectGame } from "./types/checkers/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/alice.checkers.checkers.MsgCreateGame", MsgCreateGame],
    ["/alice.checkers.checkers.MsgPlayMove", MsgPlayMove],
    ["/alice.checkers.checkers.MsgRejectGame", MsgRejectGame],
    
];

export { msgTypes }