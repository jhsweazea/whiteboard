import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <div className="navbar">
                <div className="leftNav">
                    <h1 className="appName">App Name Here</h1>
                </div>
                <div className="rightNav">
                    <Link className="link" to="/">Home</Link>
                    <Link className='link' to="/contact">Contact</Link>
                </div>
            </div>
            <div className="mainContent">
                <div className="loginbox">
                    
                </div>
            </div>
        </div>
    )
}

export default Login
