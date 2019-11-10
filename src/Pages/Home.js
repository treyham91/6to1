import React, { useEffect, useState } from 'react';
import image1 from '../static/images/1.jpg';
import fam from '../static/images/fam.jpg';
import fb from '../static/images/fb_icon.png';
import ContactForm from '../Components/ContactForm';
import './home.css';


const Home = (props) => {
    const [behindTheName, setTheBehindTheName] = useState(
        "Whether you're looking to add a new table to your dining room, or replace the old chairs in your kitchen, everything will be made the way you want it." +
        "Whether you're looking to add a new table to your dining room, or replace the old chairs in your kitchen, everything will be made the way you want it." +
        "Whether you're looking to add a new table to your dining room, or replace the old chairs in your kitchen, everything will be made the way you want it." +
        "Whether you're looking to add a new table to your dining room, or replace the old chairs in your kitchen, everything will be made the way you want it." +
        "Whether you're looking to add a new table to your dining room, or replace the old chairs in your kitchen, everything will be made the way you want it." +
        "Whether you're looking to add a new table to your dining room, or replace the old chairs in your kitchen, everything will be made the way you want it." +
        "Whether you're looking to add a new table to your dining room, or replace the old chairs in your kitchen, everything will be made the way you want it."
    )

    const adjustContent = () => {
        if (window.innerWidth < 1045 && window.innerWidth > 910) {
            setTheBehindTheName(behindTheName.slice(0, 100).concat("..."))
        }

        else {
            setTheBehindTheName(behindTheName)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', adjustContent)
    }, [])

    return (
        <div style={{ width: '100%' }}>
            <div id="top-container" className="container-fluid">
                <div id="top-content-container">
                    <img src={image1} id="top-container-image" alt="Wood Design" />
                    <div style={{ marginLeft: 10 }}>
                        <p id="top-cotainer-header">Custom Designs</p>
                        <p id="top-container-content">Whether you're looking to add a new table to your dining room, or replace the old chairs in your kitchen, everything will be made the way you want it.</p>
                    </div>
                </div>
            </div>
            <div id="second-container" className="container-fluid">
                <div id="second-container-header">
                    <h1 className="second-container-header-text">Your Home,</h1>
                    <h1 className="second-container-header-text">Your Way</h1>
                </div>
                <div id="second-container-content">
                    <img src={image1} id="second-container-image" alt="Wood Design" />
                    <p id="second-container-content-body">Whether you're looking to add a new table to your dining room, or replace the old chairs in your kitchen, everything will be made the way you want it.</p>
                </div>
            </div>
            <div id="third-container" className="container-fluid">
                <img src={fam} id="third-container-image" alt="Wood Design" />
                <p id="third-container-header">Behind the Name</p>
                <p id="third-container-content">
                    {behindTheName}
                </p>
            </div>
            <div id="contact-container" className="container-fluid">
                <h1 id="contact-container-header">Start You Project Today</h1>
                <ContactForm />
            </div>
            <div className="footer">
                <div style={{ display: 'flex' }}>
                    <div style={{ margin: 'auto' }}>
                        <p style={{ marginTop: 30, fontSize: 20, color: 'black' }}>Check us out on
                        <a href="https://www.facebook.com">
                                <img id="footer-icon" src={fb} atl="Cannot be displayed" />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;