import { combineReducers } from "redux";
import commentsReducer from "./commentsReducer";
import postReducer from "./postReducer";

import postsReducer from "./postsReducer";

const rootReducer = combineReducers({
    posts: postsReducer,
    post: postReducer,
    comments: commentsReducer,
});

export default rootReducer;
