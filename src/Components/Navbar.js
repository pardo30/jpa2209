import React from 'react'
//import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'


export const Navbar = () => {
    //const [showNavbarGrabados, setShowNavbarGrabados] = useState(false)

    return (
        <div className='navbar'>
            <img src={process.env.PUBLIC_URL + '/img/logojpa.png'} alt="Logo" className='logo' />
            <h1 className='pageTitle'>{`JAVIER\nPARDO\nARTE`}</h1>
            <div className='navbarList'>
                <ul className='ulList'>
                    <li>
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/grabados" style={isActive => ({
    color: isActive ? "green" : "blue"
  })}>
                            Grabados               
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/acuarelas" className={({ isActive }) => (isActive ? "active" : "")}>
                            Acuarelas
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/esmaltes" className={({ isActive }) => (isActive ? "active" : "")}>
                            Esmaltes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                            Sobre mí
                        </NavLink>
                    </li>
                </ul>


            </div>
        </div>
    )
}
