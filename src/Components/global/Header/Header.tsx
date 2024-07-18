import styles from './header.module.scss';
import React from "react";
import Menu from "@/Components/Menu/Menu";
interface HeaderProps {

}

const Header: React.FC<HeaderProps> = ({}) => {

    return (
        <header>
            <Menu/>
        </header>

    );
};

export default Header;