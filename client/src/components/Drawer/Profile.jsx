import React, { useContext } from 'react'


import { AccountContext } from "../../context/AccountProvider"
import "./Profile.css"

const Profile = () => {

    const { account } = useContext(AccountContext);


    return (
        <>
            <div className="Profile__profileMainDiv">
                <div className="Profile__profileImg">
                    <img src={account.imageUrl} alt="Profile Picture" />
                </div>
                <div className="Profile__profileDetails">
                    <h5>Name: <span>{account.name}</span></h5>
                    <h5>Email ID: <span>{account.email}</span></h5>

                </div>
            </div>
        </>
    )
}

export default Profile
