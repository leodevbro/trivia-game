import * as actions from "../actions/postsActions";

export interface IGloState {
    posts: {
        posts: any[];
        loading: boolean;
        hasErrors: boolean;
    };
}

export const initialStateOfPosts: IGloState["posts"] = {
    posts: [],
    loading: false,
    hasErrors: false,
};

const postsReducer = (
    state: IGloState["posts"] = initialStateOfPosts,
    action: { type: string; payload?: any[] }
) => {
    switch (action.type) {
        case actions.GET_POSTS:
            return { ...state, loading: true };
        case actions.GET_POSTS_SUCCESS:
            return { posts: action.payload, loading: false, hasErrors: false };
        case actions.GET_POSTS_FAILURE:
            return { ...state, loading: false, hasErrors: true };
        default:
            return state;
    }
};

export default postsReducer;
