import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => {

    return (
        <nav>
            <div className="nav-wrapper">
                <span className="brand-logo right"><NavLink to="/">Songify</NavLink></span>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><NavLink to="/create">Создать</NavLink></li>
                    <li><NavLink to="/songs">Мои песни</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
