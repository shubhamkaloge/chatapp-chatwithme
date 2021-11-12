import React, {createContext, useEffect, useState, useRef } from 'react'

import { io } from "socket.io-client";


export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {

    const [account, setAccount] = useState();
    const [activeUsers, setActiveUsers] = useState([]);
    const [newMessageFlag, setNewMessageFlag] = useState(false);
    const socket = useRef();


    useEffect(() => {
        socket.current = io('ws://localhost:9000')
    }, [])
    useEffect(() => {
       console.log(activeUsers);
    }, [activeUsers])


    return (
        <>
            <AccountContext.Provider value={
                {
                    account, 
                    setAccount,
                    socket,
                    activeUsers,
                    setActiveUsers,
                    newMessageFlag,
                    setNewMessageFlag

                }}
            >

                {children}
            </AccountContext.Provider>
        </>
    )
}

export default AccountProvider
