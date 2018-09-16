import { Action } from "@ngrx/store";

export const ERROR = "[Common] Error";
export const ERROR_HANDLED = "[Common] Error Handled";

export class ActionError implements Action {
    readonly type = ERROR;
    constructor(public payload: any) { }
}

export class ActionErrorHandled implements Action {
    readonly type = ERROR_HANDLED;
}

export type Actions = ActionError | ActionErrorHandled;
