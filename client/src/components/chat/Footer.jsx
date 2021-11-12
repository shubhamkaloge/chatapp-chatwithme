import React from 'react'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';


import "./Footer.css"

const Footer = ({sendText, value, setValue}) => {
    return (
        <>
            <div className="Footer__mainDiv">
                <div className="Footer__bottomFooter">
                    <div className="Footer__icons">
                        <EmojiEmotionsIcon className="Footer__iconsEmoji" />
                        <AttachFileIcon className="Footer__iconsAttachFile" />

                    </div>
                    <div className="Footer__messageSearchContainer">
                        <input type="text" placeholder="Type a message"
                        // onChange={(e) => {
                        //     setSearchText(e.target.value);
                        // }}

                        onKeyPress={(e)=>sendText(e)}
                        onChange={(e)=> setValue(e.target.value)}
                        value={value}
                        />

                    </div>
                    <MicIcon className="Footer__iconsEmoji"/>
                </div>
            </div>
        </>
    )
}

export default Footer
 