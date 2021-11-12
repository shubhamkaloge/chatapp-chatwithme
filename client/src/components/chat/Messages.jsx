import React, { useContext, useEffect, useState, useRef } from 'react'

// my components
import "./Messages.css"
import Footer from "./Footer"
import { AccountContext } from '../../context/AccountProvider'
import { UserContext } from '../../context/UserProvider';
import { getMessages, newMessage } from '../../service/api'
import Message from './Message';


const Messages = ({ person, conversation }) => {

    const { account, socket, newMessageFlag, setNewMessageFlag } = useContext(AccountContext);
    // const { person } = useContext(UserContext);

    const [value, setValue] = useState("")
    const [messages, setMessages] = useState([]);
    const [incomingMessage, setIncomingMessage] = useState(null);

    const scrollRef = useRef();

    useEffect(() => {
        socket.current.on('getMessage', data => {
            setIncomingMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            })
        })
    }, [])

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ transition: "smooth" })
    }, [messages]);


    useEffect(() => {
        const getMessageDetails = async () => {
            let response = await getMessages(conversation._id);
            setMessages(response.data);
        }
        getMessageDetails();
    }, [conversation?._id, person._id, newMessageFlag] );


    useEffect(() => {
        incomingMessage && conversation?.members?.includes(incomingMessage.sender) &&
            setMessages(prev => [...prev, incomingMessage]);

    }, [incomingMessage, conversation]);


    const receiverId = conversation?.members?.find(member => member !== account.googleId);

    const sendText = async (e) => {
        let code = e.keyCode || e.which;
        if (!value) return;

        if (code === 13) {
            let message = {
                sender: account.googleId,
                conversationId: conversation._id,
                text: value
            };

            socket.current.emit('sendMessage', {
                senderId: account.googleId,
                receiverId,
                text: value
            })

            await newMessage(message);

            setValue('');
            setNewMessageFlag(prev => !prev);
        }
    }

    return (
        <>
            <div className="Messages__mainDiv">
                <div className="Messages__messages">
                    {
                        messages && messages.map(message => (
                            <div ref={scrollRef}>
                                <Message message={message} />
                            </div>
                        ))
                    }
                </div>
                <Footer sendText={sendText} value={value} setValue={setValue} />
            </div>
        </>
    )
}

export default Messages
