import React, { useState, useEffect } from 'react';
import MenuBarItem from './MenuBarItem';
import logo from '../../static/images/6to1_wood.png';
import './menubar.css';


const MenuBar = (props) => {
    const [menubar, setMenubar] = useState("navbar-fixed");

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

    const menuBarItems = [
        { 'key': 1, 'to': '/', 'itemValue': 'Home' },
        { 'key': 2, 'to': '/designs', 'itemValue': 'Designs' },
        { 'key': 3, 'to': '/about', 'itemValue': 'About' },
        { 'key': 4, 'to': '/contact', 'itemValue': 'Contact' },
    ]

    return (
        <div id={menubar} className="navbar fixed-top">
            <div className="hamburgerMenu">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{ color: 'black' }}></span>
                </button>
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