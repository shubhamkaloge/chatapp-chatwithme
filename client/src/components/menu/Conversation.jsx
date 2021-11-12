import React, { useContext, useEffect, useState } from 'react'

// my components
import { setConversations, getConversation } from '../../service/api'
import { AccountContext } from "../../context/AccountProvider"
import "./Conversation.css"
import { UserContext } from '../../context/UserProvider'


const Conversation = ({ user }) => {

    const { account, newMessageFlag } = useContext(AccountContext)
    const { setPerson } = useContext(UserContext)

    const [message, setMessage] = useState({});

    const setUser = async () => {
        setPerson(user)
        await setConversations({ senderId: account.googleId, receiverId: user.googleId });
    }


    useEffect(() => {
        const getConversationMessage = async () => {
            const data = await getConversation({ sender: account.googleId, receiver: user.googleId });
            setMessage({ text: data.message, timestamp: data.updatedAt });
        }
        getConversationMessage();
    }, [newMessageFlag]);

    const getTime = (time) => {
        return time < 10 ? '0' + time : time;
    }


    return (
        <>
            <div className="Conversation__outerDiv" onClick={() => setUser()}>
                <div className="Conversation__sideProfileContainer">
                    <img src={user.imageUrl} alt="profile picture" />
                </div>

                <div className="Conversation__sideNameAndRecentMsg">
                    <h5>{user.name}</h5>
                    <p className="Conversation__recentMsg">{message.text}</p>
                    <small className="Conversation__recentMsgTime">{getTime(new Date(message.timestamp).getHours())}:{getTime(new Date(message.timestamp).getMinutes())}</small>
                </div>

            </div>
        </>
    )
}

export default Conversation



{/* <div className="Conversation__msgAndTimeInSideChat">
                        
                        <p>{message.text}</p>
                    </div> */}
