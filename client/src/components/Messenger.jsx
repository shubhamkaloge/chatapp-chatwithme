import React, { useContext } from 'react'
import { AccountContext } from '../context/AccountProvider'

// components
import "./Messenger.css"
import Login from './accounts/Login'
import ChatBox from "./ChatBox"


const Messenger = () => {
    const { account } = useContext(AccountContext);
    return (
        <>
            <div className={account ? "messenger__header" : "messenger__loginHeader"}>
                <div className="messenger__mainDiv">
                    <div className="messenger__chatAppName"><h5 >MyChatApp</h5></div>
                    <div className="messenger__chatAppName2"><h6>Connect to the world</h6></div>
                </div>
            </div>

            {account ? <ChatBox /> : <Login />}
        </>
    )
}

export default Messenger
