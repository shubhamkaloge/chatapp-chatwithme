import React from 'react'
import { GoogleLogin } from "react-google-login";
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';

// COmponents
import "./Login.css"
import { clientId } from '../../Constants';
import { addUser } from '../../service/api';



const Login =  ({ classes }) => {

    const { account, setAccount } = useContext(AccountContext);

    const onLoginSuccess = async (res) => {
        console.log("Login succcess",res.profileObj);
        setAccount(res.profileObj)

        await addUser(res.profileObj)
    }

    const onLoginFailure = () => {
        console.log("Login failed");
    }
    return (
        <>
            <div
                className='login__dialogPaper'
                open={true}

            >
                <div className="login__component">
                    <div className='login__leftComponent'>
                        <h1 className='login__title' >To use mychatapp you just have to sign in with Google </h1>

                        <ol className='login__list'>

                            <li>1. First you have to allow third-party cookies from your browser setting</li>
                            <li>2. Click on sign in with Google</li>
                            <li>3. Add your email id and password of google account and click on next</li>
                            <li>4. Chat with your loved ones        </li>
                        </ol>
                    </div>
                    <div
                        className='login__rightComponent'
                    >
                        <GoogleLogin
                            className='login__googlebtn'

                            clientId={clientId}
                            isSignedIn={true}
                            // buttonText={"Sign in with me"}
                            onSuccess={onLoginSuccess}
                            onFailure={onLoginFailure}
                            cookiePolicy={"single_host_origin"}
                        >
                        </GoogleLogin>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Login
