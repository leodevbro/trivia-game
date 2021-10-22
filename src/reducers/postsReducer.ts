export const initialState = {
    posts: [],
    loading: false,
    hasErrors: false,
};

const postsReducer = (state = initialState, action: { [key: string]: any }) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default postsReducer;
