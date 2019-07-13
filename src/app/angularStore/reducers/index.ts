import * as menu from './menu.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface State {
    menu: menu.MenuState;
}
export const reducers: ActionReducerMap<State> = {
    menu: menu.reducer,
}