import { SET_CUR_LESSON_NUM } from "../actions";

const initialState = {
    curPage: -1
};

export function rootReducer(state = initialState, action) {
    switch(action.type) {
        case SET_CUR_LESSON_NUM:
            return {
                ...state,
                curPage: action.payload
            }
        default:
            return state;
    }
}