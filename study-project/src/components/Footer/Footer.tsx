import React from 'react';
import './Footer.scss';
import Menu from "../UI/Menu/Menu.tsx";
interface FooterProps {

}

const Footer: React.FC<FooterProps> = ({}) => {

    return (
        <footer className="footer">
            <Menu/>
        </footer>
    );
};

export default Footer;