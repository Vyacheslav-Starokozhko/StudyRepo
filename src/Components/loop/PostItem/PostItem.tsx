
import styles from './postitem.module.scss';
import React from "react";
// import { useRouter } from "next/router";
interface PostItemProps {
    title:string,
    views:number
}

const PostItem: React.FC<PostItemProps> = ({title,views}) => {

    // const router = useRouter()

    return (
        <li>
            <strong>{title}</strong>
            <p>{views}</p>
            {/*{router.query.slug && <p>Post: {router.query.slug}</p>}*/}
        </li>

    );
};

export default PostItem;