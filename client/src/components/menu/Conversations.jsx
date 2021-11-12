import React, { useContext, useEffect, useState } from 'react'

// my components
import { getUsers } from "../../service/api"
import "./Conversations.css"
import "./Conversation.jsx"
import Conversation from './Conversation.jsx'
import { AccountContext } from "../../context/AccountProvider"



const Conversations = ({ searchText }) => {

    const [users, setUsers] = useState([])
    const { account, socket , setActiveUsers} = useContext(AccountContext)
    


    useEffect(() => {
        const SideChatUsersData = async () => {
            const data = await getUsers();
            const searchData = data.filter((user) => (user.name.toLowerCase().includes(searchText.toLowerCase())))
            setUsers(searchData);
        }
        SideChatUsersData();
    }, [searchText])


    useEffect(() => {
        //to send 
        socket.current.emit('addUser', account.googleId);

        // to establish
        socket.current.on("getUsers", users => {
            setActiveUsers(users);
        })
    }, [account])

    return (
        <div className="Conversations__mainDiv">

            {users.map((user) => (
                user.googleId !== account.googleId && <Conversation user={user} />
            ))}

        </div>
    )
}

export default Conversations





// 33.46