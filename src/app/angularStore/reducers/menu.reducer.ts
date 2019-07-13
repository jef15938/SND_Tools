import * as actions from '../actions/menu.action';

export interface MenuState {
    menuState: boolean
}

const initialState: MenuState = {
    menuState: true
}
export function reducer(state = initialState, action: actions.menuActions): MenuState {
    switch(action.type) {
        case actions.MENU_OPEN:
            return {...state, menuState: true};
        case actions.MENU_CLOSE:
            return {...state, menuState: false};
        default:
            return state;
    }

}
