import React, { useContext } from 'react'
import { Search, MoreVert } from "@material-ui/icons"

import { UserContext } from '../../context/UserProvider';
import "./ChatHeader.css"
import { AccountContext } from '../../context/AccountProvider';
    


const ChatHeader = () => {

    const { person } = useContext(UserContext);
    const { activeUsers } = useContext(AccountContext);

    const url = person.imageUrl || 'https://p.kindpng.com/picc/s/429-4296037_empty-profile-picture-jpg-hd-png-download.png';

    // const liveStatus = ""
    return (
        <>

            <div className="ChatHeader__mainDiv">
                <div className="ChatHeader__HorizontalBar">
                    <img src={url} alt="profile picture" />

                    <div className="ChatHeader__nameAndStatus">
                        <h5>{person.name}</h5>
                        <h6 >                        
                        {activeUsers?.find(user => user.userId === person.googleId) ? 'Online' : 'Offline'}
                        </h6>
                    </div>
                    <div className="ChatHeader__icons" >
                        <Search  className="ChatHeader__searchIcon"/>
                        <MoreVert  className="ChatHeader__moreVertIcon"/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ChatHeader
