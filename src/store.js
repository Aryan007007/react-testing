import {createStore, combineReducers} from "redux"

import publishes from "./reducer/publish";

const rootReducer = combineReducers({
    publishes
})

const store = createStore(
    rootReducer
)

export default store;

