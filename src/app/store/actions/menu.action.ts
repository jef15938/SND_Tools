import { Action } from '@ngrx/store';

export const MENU_OPEN = '[menu] MENU_OPEN';
export const MENU_CLOSE = '[menu] MENU_CLOSE';

export class openMenuAction implements Action {
    readonly type = MENU_OPEN;
    constructor() {}
}

export class closeMenuAction implements Action {
    readonly type = MENU_CLOSE;
    constructor() {}
}

export type menuActions
            = openMenuAction
            | closeMenuAction
