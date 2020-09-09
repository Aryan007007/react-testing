import { PUBLISH_MESSAGE, REMOVE_MESSAGE } from "../action/action-types";

const initialState = [];

export default (state = initialState, action)=> {

    switch (action.type) {
        case PUBLISH_MESSAGE:
            return [...state, action.payload]
        case REMOVE_MESSAGE:
            return state.filter((publish) => publish.id !== action.payload);
        default:
            return state;
    }

}