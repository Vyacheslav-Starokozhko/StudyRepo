import React from 'react';

const PostForm = () => {
    return (
        <form>
            <input type="text"/>
            <input type="range" min="1" max="5" />
            <button>send</button>
        </form>
    );
};

export default PostForm;