import { SET_CUR_PAGE } from "../actions";

const initialState = {
    curPage: -1
};

export function rootReducer(state = initialState, action) {
    state = Object.assign({}, state);
    switch(action.type) {
        case SET_CUR_PAGE:
            state.curPage = action.payload;
            break;
        default:
            break;
    }
    return state;
}