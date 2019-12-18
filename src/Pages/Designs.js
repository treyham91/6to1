import React from 'react';
import './designs.css'
import brander from '../static/images/designs/BRANDER.jpg';


const Designs = (props) => {

    return (
        <div>
            <div id="top-design-container">
                <h1>Recent Projects</h1>
                <div style={{ borderTop: '10px solid hsla(0,100%,0%,0.1)', borderBottom: '10px solid hsla(0,100%,0%,0.1)', width: '100%', height: 700, padding: 50 }}>
                    <div id="main-grid">
                        <div style={{ gridRow: '1/3', gridColumn: '1/3' }} className="main-grid-item"></div>
                        <div style={{ gridRow: '1/4', gridColumn: '3/6' }} className="main-grid-item"></div>
                        <div style={{ gridRow: '3/6', gridColumn: '1/3' }} className="main-grid-item"></div>
                        <div style={{ gridRow: '4/6', gridColumn: '3/6' }} className="main-grid-item"></div>
                        {/* <div style={{ gridRow: '5/6', gridColumn: '1/3' }} className="main-grid-item"></div> */}
                        {/* <div style={{ gridRow: '3/5', gridColumn: '3/6' }} className="main-grid-item"></div> */}
                        {/* <div style={{ gridRow: '4/5', gridColumn: '1/3' }} className="main-grid-item"></div> */}
                        {/* <div style={{ gridRow: '1/4', gridColumn: '3/6' }} className="main-grid-item"></div> */}
                    </div>
                </div>
            </div>
            <div style={{ marginTop: 500 }}>
                <h1>Introducing</h1>
            </div>
            <div id="second-design-container">
                <div style={{ backgroundColor: 'white', padding: 30, height: '100%', width: '100%', textAlign: 'left' }}>
                    <figure style={{ width: '100%', height: '100%' }}>
                        <img src={brander} style={{ width: 300, height: '100%', float: 'left', marginRight: 50 }} alt="Wood Design" />
                        <figcaption style={{ fontSize: 50, fontWeight: 'bold' }}>Branding Iron</figcaption>
                        <figcaption style={{ textTransform: 'none', padding: '10px 200px 50px 50px', width: '100%', fontSize: 20 }}>
                            This company was created as a way for me to incorporate my two passions; woodworking and my family. I did work as a CNC machinist for 10 years and then
                            quickly realized that I was not spending enough time with my family and I was unhappy continuing a job I did not love; this sparked the idea for my company.
                            The name 6to1 Designs, LLC came from the fact that I am married and have 5 daughters; there are six women to one man in our household. This name was perfect
                        and the company took off.</figcaption>
                    </figure>
                </div>
            </div>
            <div style={{ marginTop: 200, textAlign: 'left' }}>
                <h1 style={{ padding: 10 }}>Metal Frameworks</h1>
                <div style={{ width: '100%', height: 700, padding: 50 }}>
                    <div style={{ backgroundColor: 'grey', height: '100%' }}></div>
                </div>
            </div>
            <div style={{ marginTop: 200, textAlign: 'left' }}>
                <h1 style={{ padding: 10 }}>Craftsmanship</h1>
                <div style={{ width: '100%', height: 700, padding: 50 }}>
                    <div style={{ backgroundColor: 'grey', height: '100%' }}></div>
                </div>
            </div>
            <div style={{ marginTop: 200, textAlign: 'left' }}>
                <h1 style={{ padding: 10 }}>Oak From Recycled Church Pews</h1>
                <div style={{ width: '100%', height: 700, padding: 50 }}>
                    <div style={{ backgroundColor: 'grey', height: '100%' }}></div>
                </div>
            </div>
        </div>
    )
}

export default Designs;