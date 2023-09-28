import React from 'react';
import PostsContainer from "../components/Posts/PostsContainer";
import PostForm from "../components/Forms/PostForm/Form.tsx";

const Blog = () => {
    return (
        <div>
          <h1>Blog</h1>
            {/*<PostForm/>*/}
            <PostsContainer/>
            {/*<UsersContainer/>*/}

        </div>
    );
};

export default Blog;