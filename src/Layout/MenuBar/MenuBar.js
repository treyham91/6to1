import React, { useState, useEffect } from 'react';
import MenuBarItem from './MenuBarItem';
import logo from '../../static/images/6to1_wood.png';
import './menubar.css';


const MenuBar = (props) => {
    const [menubar, setMenubar] = useState("navbar-fixed");
    const [subMenu, setSubMenu] = useState(false);

    useEffect(() => {
        if (window.scrollY > 1) setMenubar("navbar");
    })

    useEffect(() => {
        document.addEventListener('scroll', function () {
            if (window.scrollY > 5) {
                setMenubar("navbar")
            }

            if (window.innerWidth < 770) {
                setMenubar("navbar")
            }

            if (window.scrollY < 3) {
                setMenubar("navbar-fixed")
            }
        })
    })

    const handleMenuClick = () => {
        if (subMenu) {
            setSubMenu(false)
        }

        else {
            setSubMenu(true)
        }
    }

    const menuBarItems = [
        { 'key': 1, 'to': '/', 'itemValue': 'Home' },
        { 'key': 2, 'to': '/designs', 'itemValue': 'Designs' },
        { 'key': 3, 'to': '/about', 'itemValue': 'About' },
        { 'key': 4, 'to': '/contact', 'itemValue': 'Contact' },
    ]

    return (
        <div id={menubar} className="navbar fixed-top">
            <div className="hamburgerMenu">
                <a
                    className="btn btn-secondary dropdown-toggle"
                    style={{ color: 'white' }}
                    onClick={handleMenuClick}
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    Menu
                </a>
                {subMenu ? <div className="dropdown-menu" style={{ display: 'block' }} aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div> : null}
            </div>
            <div style={{ display: 'flex', width: '100%' }}>
                <div>
                    <img className={menubar === "navbar" ? "logoScroll" : "logo"} src={logo} alt="Cannot be displayed" />
                </div>
                <div className="menuItemContainerScroll">
                    {menuBarItems.map(item => {
                        return (
                            <MenuBarItem
                                key={item.key}
                                to={item.to}
                                itemValue={item.itemValue}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MenuBar;