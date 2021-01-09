import {
    TODO_PENDING,
    TODO_SUCCESS,
    TODO_ERROR,
    TODO_SELECTED,
    TODO_ADD,
    TODO_EDIT
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
        case TODO_ADD:
            return {
                ...state,
                payload: [...state.payload, { ...action.payload, id: state.payload.length + 1 }]
            }
        case TODO_EDIT:
            const index = state.payload.findIndex(({ id }) => id === action.payload.id);
            state.payload[index] = action.payload;
            return {
                ...state,
            }
        default:
            return state;
    }
}