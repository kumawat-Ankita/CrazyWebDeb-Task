import React from 'react'
import './navbar.css';
export default function Navbar() {
    return (
        <div className='navbar-container'>

            <ul>
                <p className='logo'>Startups.com</p>
                <li>EDUCATION</li>
                <li>COMMUNITY</li>
                <li>LIBRARY</li>
                <li>PRODUCT</li>
                <li>ABOUT</li>
                <li className='sign'>Sign in</li>
                <li className='sign'>Sign up</li>
            </ul>

        </div>
    )
}
