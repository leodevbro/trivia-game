import React, { useEffect } from "react";
import { connect } from "react-redux";
import { IGloState } from "../reducers/postsReducer";

// Bring in the asynchronous fetchPosts action
import { fetchPosts } from "../actions/postsActions";
import { Post } from "../components/Post";

type tyPostsState = IGloState["posts"];

interface IPostsProps extends tyPostsState {
    dispatch: (...args: any[]) => any;
}

// Redux state is now in the props of the component

const PostsPage: React.FC<IPostsProps> = ({
    dispatch,
    loading,
    posts,
    hasErrors,
}) => {
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const renderPosts = () => {
        if (loading) return <p>Loading posts...</p>;
        if (hasErrors) return <p>Unable to display posts.</p>;

        return posts.map((post) => <Post key={post.id} post={post} excerpt />);
    };

    return (
        <section>
            <h1>Posts</h1>
            {renderPosts()}
        </section>
    );
};

const mapStateToProps = (state: IGloState) => ({
    loading: state.posts.loading,
    posts: state.posts.posts,
    hasErrors: state.posts.hasErrors,
});

export default connect(mapStateToProps)(PostsPage);
