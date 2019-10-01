import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import rootReducer from "../reducers/reducerIndex";
import userReducer from "../reducers/userReducer";
import { forbiddenWordsMiddleware } from "../middleware/forbiddenWords";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const combRed = combineReducers({rootReducer,userReducer});
const store = createStore(
    userReducer,
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk))
);

export default store;