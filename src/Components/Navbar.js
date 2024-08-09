import React from 'react'
import './navbar.css';
export default function Navbar() {
    return (
        <div className='navbar-container'>
            <div className='head-container'>
                <p className='heading'>LE MANOA</p>
            </div>
            <ul className='list-item'>
                <li className='item'>Home</li>
                <li className='item'>About</li>
                <li className='item'>Product</li>
                <li className='item'>Blog</li>
                <li className='item'>Contact</li>
            </ul>
            <button className='btn'>Shop</button>
        </div>
    )
}
