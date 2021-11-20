import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import "./style.css"

const Dashboard = () => {
    // const history = useHistory();

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
        </div>
    )
}

export default Dashboard
