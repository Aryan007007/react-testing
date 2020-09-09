import {PUBLISH_MESSAGE, REMOVE_MESSAGE} from "./action-types"

export const addMessage = publish => ({

    type: PUBLISH_MESSAGE, 
    payload: publish,
});

export const removeMessage = id => ({
    type: REMOVE_MESSAGE,
    payload: id,
});