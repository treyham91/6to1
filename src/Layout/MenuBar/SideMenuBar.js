import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        float: 'left',
        backgroundColor: 'transparent',
        padding: 10
    },
});


const MenuBar = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div
                style={{
                    zIndex: 2,
                    padding: 10,
                    border: '1px solid #E5E7E9',
                    boxShadow: '0px 5px 10px -4px rgba(0,0,0,0.73)',
                    visibility: props.menuBarState ? 'visible' : 'hidden',
                    transition: '0.6s',
                    opacity: 1,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: props.menuBarState ? 250 : 0
                }}>
                <ul
                    style={{
                        transition: props.menuBarState ? '1s' : '0.2s',
                        opacity: props.menuBarState ? 1 : 0,
                        display: 'block',
                        width: '100%',
                        height: '50%',
                        padding: 5,
                        listStyle: 'none'
                    }}>
                    <li>
                        <Button onClick={props.closeSideMenuBar}>
                            <ArrowBackIcon />
                        </Button>
                    </li>
                    {props.children}
                </ul>
            </div>
        </div>
    )
}

export default MenuBar;