import styles from './menu.module.scss';
import React from "react";
import Link from "next/link";
interface MenuProps {

}

const Menu: React.FC<MenuProps> = ({}) => {

    return (
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/store">Store</Link>
                <ul>
                    <li>
                        <Link href="/store/context">Context</Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link href="/forms">Forms</Link>
            </li>
            <li>
                <Link href="/blog">Blog</Link>
                <ul>
                    <li>
                        <Link href="/blog/posts">Posts</Link>
                    </li>
                </ul>
            </li>
        </ul>

    );
};

export default Menu;