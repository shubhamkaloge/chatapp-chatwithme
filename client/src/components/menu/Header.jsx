import React, { useContext, useState } from 'react'
import { IconButton } from "@material-ui/core"
import { Chat } from "@material-ui/icons"
import { AccountContext } from "../../context/AccountProvider";

// Component
import "./Header.css"
import HeaderMenu from './HeaderMenu';
import Drawer from "../Drawer/DrawerMenu"

const Header = () => {
    const [open, setOpen] = useState(false)

    const toggleDrawer = () => {
        setOpen(true);
    }

    const { account } = useContext(AccountContext);
    return (
        <>
            <div className='Header__header'>
                <img src={account.imageUrl} alt="Display picture" className='Header__avatar' onClick={toggleDrawer} />
                <div className='Header__icons'>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <HeaderMenu />
                    </IconButton>

                </div>
            </div>
            <Drawer
                open={open} setOpen={setOpen}
            />
        </>
    )
}

export default Header
