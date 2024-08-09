import React from 'react'
import './Home.css'
import CardContainer from './CardContainer'
export default function Home() {
    return (
        <div>
            <h1>POPULAR MENU HEALTH FOODS</h1>
            <div>
                <ul className='home-item'>
                    <li className='home-list-item'>All MENU</li>
                    <li className='home-list-item'>CHOCLATE</li>
                    <li className='home-list-item'>COOKIES</li>
                    <li className='home-list-item'>DINNER</li>
                </ul>
                <div></div>
                <CardContainer />
            </div>
        </div>
    )
}
