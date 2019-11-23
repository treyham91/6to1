import React, { useEffect, useState } from 'react';
import image1 from '../static/images/1.jpg';
import fam from '../static/images/fam.jpg';
import fb from '../static/images/fb_icon.png';
import ContactForm from '../Components/ContactForm';
import Media from 'react-media';
import './home.css';


const Home = (props) => {
    const [behindTheName, setTheBehindTheName] = useState(
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

        else if (window.innerWidth < 500) {
            setTheBehindTheName(behindTheName.slice(0, 200).concat("..."))
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
            <div id="top-container">
                <Media query="(max-width: 1130px)">
                    {matches =>
                        matches ?
                            <div style={{ width: '100%', padding: '200px 20px 0px 20px', display: 'block' }}>
                                <img src={image1} id="top-container-image2" alt="Wood Design" />
                                <p id="top-container-content3">
                                    Whether you're looking to add a new table to your dining room,
                                    or replace the old chairs in your kitchen,
                                    everything will be made the way you want it.
                            </p>
                            </div>
                            :
                            <div style={{ width: '100%', padding: 200 }}>
                                <p id="top-container-content">
                                    <img src={image1} id="top-container-image" alt="Wood Design" />
                                    Whether you're looking to add a new table to your dining room,
                                    or replace the old chairs in your kitchen,
                                    everything will be made the way you want it.
                        </p>
                            </div>
                    }
                </Media>
            </div>
            <div id="second-container" className="container-fluid">
                <div id="second-container-header">
                    <h1 className="second-container-header-text">Your Home,</h1>
                    <h1 className="second-container-header-text">Your Way</h1>
                </div>
                <div id="second-container-content">
                    <figure id="second-container-image">
                        <img src={image1} id="second-image" alt="Wood Design" />
                        <figcaption id="second-image-caption">
                            Whether you're looking to add a new table to your dining room,
                            or replace the old chairs in your kitchen,
                        everything will be made the way you want it</figcaption>
                    </figure>
                </div>
            </div>
            <div id="third-container" className="container-fluid">
                <figure>
                    <img src={fam} id="third-container-image" alt="Wood Design" />
                    <figcaption id="third-container-header">Behind the Name</figcaption>
                    <figcaption id="third-container-content">{behindTheName}</figcaption>
                </figure>
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