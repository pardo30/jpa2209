import React from 'react'
import { NavLink } from 'react-router-dom'
import NavbarGrabados from './NavbarGrabados'

const bar = (showNavbar, handleShowNavbar) => {
  return (
    <div className={`nav-elements  ${showNavbar && 'active'}`} onClick={handleShowNavbar}>
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
  )
}

export default bar