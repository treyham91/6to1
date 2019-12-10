import React from 'react';
import { Icon } from 'antd';
import logo from '../static/images/6to1_wood.png'
import '../Pages/home.css'


const Footer = (props) => {
    return (
        <div className="footer">
            <div style={{ display: 'flex' }}>
                <div style={{ margin: 'auto' }}>
                    <Icon target="_blank" onClick={() => window.location.href = "https://www.instagram.com/6to1designs/"} className="social-icon" type="instagram" />
                    <Icon target="_blank" onClick={() => window.location.href = "https://www.facebook.com/pg/6to1designs"} className="social-icon" type="facebook" />
                    <p style={{ color: 'white', fontSize: 8, marginTop: 100 }}>
                        Published on November 24, 2019
                            <img style={{ height: 20, width: 20, marginLeft: 10 }} src={logo} atl="Cannot be displayed" />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;