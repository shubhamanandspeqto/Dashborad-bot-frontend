import React ,{useState} from "react";
import "../css/Login.css"



// interface DiscordLoginProps {
//     clientId: "796378239802671154",
//     redirectUri: "http://2b0e3a08a54a.ngrok.io/?path=/story/discord-login-callback--callback",
//     scope?: string,
//     render?: any,
// }

export default function Login() {
    const [popup, setPopup] = useState("")

    const handleMessage = (event) => {
        console.log(event)
    }

    function onClick() {
        const dPopup = window.open(`https://discord.com/api/oauth2/authorize?response_type=token&client_id="796378239802671154"}&scope="identify"&redirect_uri="http://2b0e3a08a54a.ngrok.io/?path=/story/discord-login-callback--callback"`, 'discordLogin', 'height=700,width=500')
        window.addEventListener('message', handleMessage, false)
    }

    const submit = async e => {
        debugger
        e.preventDefault();
    }

    // 
    return (
        <>
            <h1 className='font-weight-bold' style={{ color: "#91cb29" }}>Discord.Land Bot</h1>

            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        <div className="row d-flex justify-content-center mt-5 discord-login-body">
                            <p>Welcome Back</p>
                        </div>
                    </div>
                    <div className="col-12 text-align-center discord-login-button">
                        <button className="btn" onClick={onClick}> <i className='fab fa-discord' style={{ fontSize: '36px' }} />Login With Discord</button>

                    </div>
                </div>
            </div>
        </>
    )
}