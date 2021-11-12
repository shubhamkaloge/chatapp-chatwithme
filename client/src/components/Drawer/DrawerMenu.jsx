import React , { useContext }from 'react'
import { Drawer } from "@material-ui/core"
import CancelIcon from '@mui/icons-material/Cancel';
// Components
import "./DrawerMenu.css";
import Profile from './Profile';
import {AccountContext} from "../../context/AccountProvider" 

const DrawerMenu = ({ open, setOpen }) => {

    const { account } = useContext(AccountContext);

    const handleClose = () => {
        setOpen(false);
    }


    return (
        <>
            <Drawer
                open={open}
                onClose={handleClose}
            >
            <div className="DrawerMenu__mainDiv">
                <div className="DrawerMenu__upperProfileBar">
                    <CancelIcon onClick={handleClose}/>
                    <h5>{account.givenName}'s Profile</h5>
                </div>
                <div className="DrawerMenu__ProfileImg">
                    <img src="" alt="" />
                </div>

                <div className="DrawerMenu__profileDiv">
                    <Profile

                    />
                </div>
            </div>

                
            </Drawer>
        </>
    )
}

export default DrawerMenu

