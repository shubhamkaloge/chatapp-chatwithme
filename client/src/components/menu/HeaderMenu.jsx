import React from 'react'
import { useState, useContext } from 'react';
import { MoreVert } from '@material-ui/icons'
import { Menu, MenuItem, makeStyles } from '@material-ui/core';
import { GoogleLogout } from "react-google-login";
import { Route, Switch } from "react-router-dom";

// Components
import { AccountContext } from '../../context/AccountProvider';
import { clientId } from '../../Constants';
import Drawer from "../Drawer/DrawerMenu"

const useStyles = makeStyles({
    menuItem: {
        fontSize: "14px",
        color: "grey",
        padding: "15px 70px 3px 19px"

    },
    logout: {
        border: "none !important",
        boxShadow: "none !important",
        padding: "5px 70px 3px 19px",
        "& > *": {
            padding: "0px !important"
        }

    }
})

const HeaderMenu = () => {


    const [open, setOpen] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }

    const onLogoutSuccess = () => {
        alert("Logged out successfully")
        console.clear();
        setAccount("");
    }

    const toggleDrawer = () => {
        setOpenDrawer(true);
    }

    const { setAccount } = useContext(AccountContext)

    const classes = useStyles();

  
    return (
        <>
            <MoreVert onClick={handleClick} />
            <Menu
                id="basic-menu"
                anchorEl={open}
                keepMounted
                open={Boolean(open)}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem
                    onClick={()=>{
                        handleClose();
                        toggleDrawer();}}
                    className={classes.menuItem}

                >
                    Profile</MenuItem>


                <MenuItem onClick={handleClose} className={classes.menuItem}>
                    <GoogleLogout
                        clientId={clientId}
                        onLogoutSuccess={onLogoutSuccess}
                        buttonText="Logout"
                        className={classes.logout}
                    >
                    </GoogleLogout>
                </MenuItem>
            </Menu>
            <Drawer
                open={openDrawer} setOpen={setOpenDrawer}
            />




        </>
    )
}

export default HeaderMenu
