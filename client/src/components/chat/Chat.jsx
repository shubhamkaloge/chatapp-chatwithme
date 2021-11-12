import { useContext, useState, useEffect } from 'react';


// My components
import "./Chat.css";
import ChatHeader from "./ChatHeader"
import Messages from "./Messages"
import { UserContext } from '../../context/UserProvider';
import {AccountContext} from "../../context/AccountProvider"
import { getConversation } from '../../service/api';

const Chat = () => {

    const { person } = useContext(UserContext);
    const { account } = useContext(AccountContext);

    const [conversation, setConversation] = useState({});

    useEffect(() => {
        const getConversationDetails = async () => {
            let data = await getConversation({ sender: account.googleId, receiver: person.googleId });
            setConversation(data);
        }
        getConversationDetails();
    }, [person.googleId]);

    return (
        <>
            <div className="Chat__mainDiv">
                <ChatHeader />
                <Messages conversation={conversation} person={person}/>
            </div>
        </>
    )
}

export default Chat



