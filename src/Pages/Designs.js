import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
}));


const Designs = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardHeader
                title="Custom Designs"
            />
            <CardMedia
                className={classes.media}
                image="../static/images/main.jpg"
                title="Kitchen Table"
            />
        </Card>
    )
}

export default Designs;