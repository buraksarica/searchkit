import { ValueState } from "../state/State";
import { Accessor } from "./Accessor";
export declare class SearchAccessor extends Accessor<ValueState> {
    state: ValueState;
    buildSharedQuery(query: any): any;
    buildOwnQuery(query: any): any;
}