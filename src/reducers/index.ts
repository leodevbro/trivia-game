import { combineReducers } from "redux";

import statementsReducer from "./statementsReducer";

const rootReducer = combineReducers({
    statements: statementsReducer,
});

export default rootReducer;
