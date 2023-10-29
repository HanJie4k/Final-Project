import React from 'react'
import {Link} from 'react-router-dom'
import "../elements/Chat.css"
export default function NavBar(){
    return(
        <div>
            <div>
                <ol className='nav'>
                    <li className='header'><h4>My site</h4></li>
                    <li className='li'><Link to={'/'}>Main</Link></li>
                    <li className='li'><Link to={'/One'}>Other</Link></li>
                    <li className='li'><Link to={'/Two'}>Chat</Link></li>
                </ol>
            </div>
        </div>
    )
}