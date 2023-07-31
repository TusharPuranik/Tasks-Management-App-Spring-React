
import { Link} from 'react-router-dom'
import { useAuth } from './security/AuthContext'

export default function HeaderComponent(){

    const authContext=useAuth()
    const isAuthenticated = authContext.isAuthenticated

    function logout(){
        authContext.logout()
    }

    return(
        <header className="border-bottom border border-4 mb-5 p-2">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand ms-1 fs-3 fw-bold text-black">Task Management Application</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">
                                {isAuthenticated && <Link className="nav-link" to="/welcome/Tushar">Home</Link>}
                                
                            </li>
                            <li className="nav-item fs-5">
                                {isAuthenticated &&  <Link className="nav-link" to="/todos">Todos</Link>}
                            </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5">
                            {!isAuthenticated && <Link className="nav-link" to="/login">Login</Link>}
                        </li>
                        <li className="nav-item fs-5">
                            {isAuthenticated &&<Link className="nav-link" to="/logout" onClick={logout}>Logout</Link> }
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    )
}