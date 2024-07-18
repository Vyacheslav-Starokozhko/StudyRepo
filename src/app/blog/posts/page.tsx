'use client'
import styles from "./page.module.scss";
import React, {useEffect} from "react";
import {getPosts} from "@/actions";
import PostItem from "@/Components/loop/PostItem/PostItem";

export default function Posts() {

    const [items, setItems] = React.useState<IPost[]>([]);


    useEffect(() => {
        const fetchData = async (): Promise<IPost[]> => {
            return getPosts();
        };

        const getData = async () => {
            const data = await fetchData();
            setItems(data);
        };

        getData();
    }, []);


    return (
        <main>
            <h1>Posts</h1>
            {items.length <= 0 && (
                <h3>Loading...</h3>
            )}
            {items.length > 0 && (
                <ul>
                    {items.map((item:IPost) => (
                        <PostItem key={item.id} title={item.title} views={item.views} />
                    ))}
                </ul>
            )}
        </main>
    );
}