import React from 'react';
import { Link } from 'react-router-dom';
import './menubar.css';


const MenuBarItem = (props) => {

    return (
        <li style={{ listStyle: 'none', padding: 10 }}>
            <div style={{ padding: 2 }}>
                <Link className="menuBarItem" to={props.to}>{props.itemValue}</Link>
            </div>
        </li>
    )
}

export default MenuBarItem;