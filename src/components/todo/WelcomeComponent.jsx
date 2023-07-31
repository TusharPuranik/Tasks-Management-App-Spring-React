import {useParams, Link} from 'react-router-dom'
import { useState } from 'react'
import { retrieveHelloWorldPathVariable } from './api/HelloWorldApiService'
import { useAuth } from './security/AuthContext'


export default function WelcomeComponent(){
    const {username}=useParams()

    const [message, setMessage] = useState(null)
    const authContext = useAuth()


    function callHelloWorldRestApi(){
        console.log('called')

        retrieveHelloWorldPathVariable('Tushar', authContext.token)
        .then( (response) => successfulResponse(response)  )
        .catch( (error) => errorResponse(error)  )
        .finally( () => console.log('cleanup') )
    }

    function successfulResponse(response){
        console.log(response)
        setMessage(response.data.message)
    }

    function errorResponse(error){
        console.log(error)
    }


    return(
        <div className="Welcome">
            <h1> Welcome {username}</h1>
            <div>
                This is the Welcome Page.
                <div>
                    Your Todos. <Link to="/todos">Select</Link>
                </div>
                <div>
                    <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}> 
                        Call Hello World</button>
                </div>
                <div className="text-info"> {message} </div>
            </div>
        </div>
    )
}