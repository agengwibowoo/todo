import axios from "axios";

export const TODO_PENDING = "TODO_PENDING";
export const TODO_SUCCESS = "TODO_SUCCESS";
export const TODO_ERROR = "TODO_ERROR";
export const TODO_SELECTED = "TODO_SELECTED";

export const todo = () => {
    return dispatch => {
        dispatch({ type: TODO_PENDING });
        try {
            axios.get('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list', )
            .then( res => {
                dispatch({ type: TODO_SUCCESS, payload: res.data});
            })
        } catch (error) {
            dispatch({ type: TODO_ERROR, error});
        }
    }
}

export const selectedTodo = (payload) => {
    return {
        type: TODO_SELECTED,
        payload: payload,
    }
}