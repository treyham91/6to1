import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    formContainer: {
        display: 'block'
    }
}))


const Contact = (props) => {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);

    const validateForm = (name, email, message) => {
        let error = false;
        if (name || email || message === '') {
            error = true;
        }
        return error;
    }


    return (
        <div className={classes.formContainer}>
            <form onSubmit={validateForm}>
                <Input placeholder="Name" value={name} onChange={event => setName(event.target.value)} />
                <Input placeholder="Email" type="email" value={email} onChange={event => setEmail(event.target.value)} />
                <TextField placeholder="Message..." value={message} onChange={event => setMessage(event.target.value)} />
                <Button type="submit">Send Message</Button>
            </form>
        </div>
    )
}

export default Contact;