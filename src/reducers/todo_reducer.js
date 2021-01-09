import {
    TODO_PENDING,
    TODO_SUCCESS,
    TODO_ERROR,
    TODO_SELECTED
} from "../actions/todo_action";

const initialState = {
    pending: false,
    payload: null,
    selectedPayload: null,
    error: null
};

export function todo(
    state = initialState,
    action
) {
    switch (action.type) {
        case TODO_PENDING:
            return {
                ...state,
                pending: true,
            };
        case TODO_SUCCESS:
            return {
                ...state,
                pending: false,
                payload: action.payload,
            };
        case TODO_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            };
        case TODO_SELECTED: 
            return {
                ...state,
                selectedPayload: action.payload
            }
        default:
            return state;
    }
}