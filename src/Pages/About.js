import React, { useState, useEffect } from 'react';
import fam from '../static/images/fam.jpg';
import './home.css';


const About = (props) => {

    const [behindTheName, setTheBehindTheName] = useState([
        "This company was created as a way for me to incorporate my two passions; woodworking and my family. I did work as a CNC machinist for 10 years and then" +
        "quickly realized that I was not spending enough time with my family and I was unhappy continuing a job I did not love; this sparked the idea for my company.",

        "The name 6to1 Designs, LLC came from the fact that I am married and have 5 daughters; there are six women to one man in our household. This name was perfect" +
        "and the company took off.",

        "At 6to1 Designs, LLC, we make anything from pallet signs for walls to large farmhouse kitchen tables, and everything in between. We provide quality customer " +
        "service and ensure that our customers are involved in every step of the process when creating furniture for your home. Contact us to learn more about a new piece for " +
        " your home!"
    ])

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
        <div>
            <div id="third-container" className="container-fluid">
                <figure style={{ maxWidth: 750, margin: 'auto' }}>
                    <img src={fam} id="third-container-image" alt="Wood Design" />
                    <figcaption id="third-container-header">Behind the Name</figcaption>
                    <figcaption className="third-container-content">{behindTheName[0]}</figcaption><br />
                    <figcaption className="third-container-content">{behindTheName[1]}</figcaption><br />
                    <figcaption id="bottom-text" style={{ backgroundColor: 'hsl(0, 0%, 90%)', borderRadius: 4, padding: 10 }} className="third-container-content">{behindTheName[2]}</figcaption>
                </figure>
            </div>
        </div>
    )
}

export default About;