import styles from './footer.module.scss';
import React from "react";
import Menu from "@/Components/Menu/Menu";
interface FooterProps {

}

const Footer: React.FC<FooterProps> = ({}) => {

    return (
        <footer>
            <Menu/>
        </footer>

    );
};

export default Footer;