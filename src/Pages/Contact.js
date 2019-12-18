import React, { useState } from 'react';
import MessageCounter from '../Components/MessageCounter';
import './home.css';


const Contact = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const submitForm = () => {
        // Send message to Jason's email
    }

    return (
        <div>
            <div id="form-background">
                <div>
                    <form onSubmit={submitForm} id="contact-form">
                        <legend style={{ textAlign: 'center', display: 'table' }}>Contact<br />
                            <span style={{ fontSize: 12 }}>Have a design in mind? Send us a quick message.</span></legend>
                        <div className="table-row">
                            <div className="contact-form-table-cell">
                                <label>First Name</label><br />
                                <input className="form-input" type="text" name="first" value={firstName} onChange={event => setFirstName(event.target.value)}></input>
                            </div>
                            <div className="contact-form-table-cell">
                                <label>Last Name</label><br />
                                <input className="form-input" type="text" name="last" value={lastName} onChange={event => setLastName(event.target.value)}></input>
                            </div>
                        </div>
                        <div className="table-row">
                            <div className="contact-form-table-cell">
                                <label>Phone Number</label><br />
                                <input className="form-input" type="text" name="number" value={number} onChange={event => setNumber(event.target.value)}></input>
                            </div>
                            <div className="contact-form-table-cell">
                                <label>Email</label><br />
                                <input className="form-input" type="text" name="email" value={email} onChange={event => setEmail(event.target.value)}></input><br />
                            </div>
                        </div>
                        <div className="table-row">
                            <div className="contact-form-table-cell">
                                <label>Message</label><br />
                                <MessageCounter message={message} />
                                <textarea
                                    id="message-text-area"
                                    maxLength="200"
                                    className="form-input"
                                    name="message"
                                    value={message}
                                    onChange={event => setMessage(event.target.value)}></textarea>
                            </div>
                            <div className="contact-form-table-cell">
                                <label></label><br />
                                <input id="contact-form-button" type="button" value="Send Message"></input>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;