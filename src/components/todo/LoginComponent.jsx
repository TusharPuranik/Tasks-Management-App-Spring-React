import { useState } from 'react'

import {useNavigate} from 'react-router-dom'
import { useAuth } from './security/AuthContext'

export default function LoginComponent(){
    const [username,setUsername]=useState('Tushar')
    const [password,setPassword]=useState('')
    const [showErrorMessage,setShowErrorMessage]=useState(false)

    const navigate=useNavigate();

    const authContext= useAuth()


    function handleUsernameChange(event){
        setUsername(event.target.value)
    }
    function handlePasswordChange(event){
        setPassword(event.target.value)
    }
    async function handleSubmit(){
        if (await authContext.login(username,password))
        {
            navigate(`/welcome/${username}`)
        }
        else{
            setShowErrorMessage(true)
        }
    }

    return(
        <div className="Login"> 
        <h1> Login Page </h1>
        {showErrorMessage && <div className="errorMessage">Authenticated Failed. Plese re-try</div> }
            <div className="LoginForm>">
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                </div>
            </div>
            <div>
                <button type="button" name="Login" onClick={handleSubmit}> Login</button>
            </div>
        </div>
    )
}