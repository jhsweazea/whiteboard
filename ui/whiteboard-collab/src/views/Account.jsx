import React from 'react'
import {Link} from 'react-router-dom'

const Account = () => {
    return (
        <div>
            <div className="navbar">
                <div className="leftNav">
                    <h1 className="appName">App Name Here</h1>
                </div>
                <div className="rightNav">
                    <Link className="link" to="/login">Sign In</Link>
                    <Link className="link" to="/account">My Account</Link>
                    <Link className="link" to="/canvas">Canvas</Link>
                    <Link className='link' to="/contact">Contact</Link>
                </div>
            </div>
            <h2>So yeah this is your account page, I'm building it still</h2>
        </div>
    )
}

export default Account
