import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './MenuBar.module.scss';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';

import { Link } from 'react-router-dom';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})(props => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles(theme => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        textTransform: 'none',
    },
}));


const MenuBarItem = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <React.Fragment>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                className={classes.button}
                onClick={handleClick}><a className={styles.menuBarItem}>{props.itemValue}
                    <KeyboardArrowDown style={{ color: 'white', verticalAlign: 'middle' }} />
                </a>
            </Button>

            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                style={{ zIndex: 10000}}
                open={Boolean(anchorEl)}
                onClose={handleClose}>

                {props.dropdownContent.map(item => {
                    return (
                        <StyledMenuItem key={item.key}>
                            <Link key={item.key} to={item.link} className={styles.menuBarDropdownItem}>{item.name}</Link>
                        </StyledMenuItem>
                    )
                })}

            </StyledMenu>
        </React.Fragment>
    )
}

export default MenuBarItem;