import React from 'react';
import './Menu.scss';
import {Link} from "react-router-dom";
interface MenuProps {

}

const Menu: React.FC<MenuProps> = ({}) => {

    return (
        <ul className="menu">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/orders'>Orders</Link></li>
            <li><Link to='/rhf'>RHF</Link></li>
            <li><Link to='/framer_motion'>Framer Motion</Link></li>
        </ul>
    );
};

export default Menu;
