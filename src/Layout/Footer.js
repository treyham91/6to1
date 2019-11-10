import React from 'react';


const Footer = (props) => {
    return (
        <div style={{ height: 300, width: '100%', backgroundColor: 'grey', textAlign: 'left', position: 'absolute', bottom: 0 }}>
            <div>
                <ul style={{ listStyle: 'none' }}>
                    <li><a href="#" style={{ textDecoration: 'none', color: 'white' }}>FAQ</a></li>
                    <li><a href="#" style={{ textDecoration: 'none', color: 'white' }}>Connect with us</a></li>
                    <li><a href="#" style={{ textDecoration: 'none', color: 'white' }}>Contact</a></li>
                    <li><a href="#" style={{ textDecoration: 'none', color: 'white' }}>Terms of Service</a></li>
                </ul>
            </div>
            <div style={{ textAlign: 'left' }}>
                <p>Six-To-One Designs LLC</p>
            </div>
        </div>
    )
}

export default Footer;