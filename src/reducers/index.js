import { SET_CUR_LESSON_NUM } from "../actions";

const initialState = {
    curLesson: -1
};

export function rootReducer(state = initialState, action) {
    switch(action.type) {
        case SET_CUR_LESSON_NUM:
            return {
                ...state,
                curLesson: action.payload
            }
        default:
            return state;
    }
}