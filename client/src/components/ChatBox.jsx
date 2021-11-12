import React, { useContext } from 'react'


// Components
import Menu from './menu/Menu';
import "./ChatBox.css";
import Chat from './chat/Chat';
import { UserContext } from '../context/UserProvider';
import EmptyChat from './chat/EmptyChat';

const ChatBox = () => {

    const { person } = useContext(UserContext);

    return (

        <div className='chatBox__outsideDialogPaper' >
            <div className='chatBox__dialogPaper'>

                <div className='chatBox__component'>
                    <div className='chatBox__leftComponent'>
                        <Menu />
                    </div>
                    <div className='chatBox__rightComponent'>
                        {
                            Object.keys(person).length ? <Chat /> : <EmptyChat />

                        }

                    </div>

                </div>

            </div>
        </div>

    )
}

export default ChatBox;
