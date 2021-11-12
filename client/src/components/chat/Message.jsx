import React, { useContext } from 'react'



import "./Message.css";
import { AccountContext } from '../../context/AccountProvider';



const Message = ({ message }) => {

  const { account } = useContext(AccountContext);

  const formatDate = (date) => {
    return date < 10 ? '0' + date : date;
  }


  return (
    <>
      <div className={account.googleId === message.sender ? "mySendMsg": "Message__mainDiv"}>

        {/* <small>{message.createdAt}</small> */}
        <small> {formatDate(new Date(message.createdAt).getHours())}:{formatDate(new Date(message.createdAt).getMinutes())}</small>
        <p>{message.text}</p>

      </div>
    </>
  )
}

export default Message
