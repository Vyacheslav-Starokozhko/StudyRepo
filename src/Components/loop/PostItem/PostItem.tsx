
import styles from './postitem.module.scss';
import React from "react";
import Link from "next/link";
interface PostItemProps {
    post: IPost
}

const PostItem: React.FC<PostItemProps> = ({post}) => {

    return (
        <li>
            <strong>{post.title}</strong>
            <p>{post.views}</p>
            <p>
                <Link href={`/blog/posts/${post.id}`}>Link</Link>
            </p>
        </li>

    );
};

export default PostItem;