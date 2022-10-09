import React from 'react'
//import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import NavbarGrabados from './NavbarGrabados'


export const Navbar = () => {
    //const [showNavbarGrabados, setShowNavbarGrabados] = useState(false)

    return (
        <div className='navbar'>
            <img src={process.env.PUBLIC_URL + '/img/logojpa.png'} alt="Logo" className='logo' />
            <h1 className='pageTitle'>{`JAVIER\nPARDO\nARTE`}</h1>
            <div className='navbarList'>
                <ul className='ulList'>
                    <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "desactive")}>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/grabados" className={({ isActive }) => (isActive ? "active" : "desactive")}>
                        <li>
                            Grabados
                        </li>
                        <NavbarGrabados />
                    </NavLink>
                    <NavLink to="/acuarelas" className={({ isActive }) => (isActive ? "active" : "desactive")}>
                        <li>Acuarelas</li>
                    </NavLink>
                    <NavLink to="/esmaltes" className={({ isActive }) => (isActive ? "active" : "desactive")}>
                        <li>Esmaltes</li>
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "desactive")}>
                        <li>Sobre mí</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}
