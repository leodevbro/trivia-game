export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

// const os = require("os");
// console.log(os);
// console.log(process.platform);
// console.log(navigator);

// Create Redux action creators that return an action
export const getPosts = () => ({
    type: GET_POSTS,
});

export const getPostsSuccess = (posts: any[]) => ({
    type: GET_POSTS_SUCCESS,
    payload: posts,
});

export const getPostsFailure = () => ({
    type: GET_POSTS_FAILURE,
});

// Combine them all in an asynchronous thunk
export function fetchPosts() {
    return async (dispatch: (...args: any[]) => any) => {
        dispatch(getPosts());

        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const data = (await response.json()) as any[];

            dispatch(getPostsSuccess(data));
        } catch (error) {
            dispatch(getPostsFailure());
        }
    };
}
