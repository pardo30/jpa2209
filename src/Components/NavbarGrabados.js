import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarGrabados = () => {
    return (
        <div>
            <ul className="ulGrabados">
                <li className="ligrabados">
                    <NavLink to="/grabados/aguafuerteyaguatinta" className={({ isActive }) => (isActive ? "active" : "")}>
                        Aguafuerte y aguatinta
                    </NavLink>
                </li>
                <li className="ligrabados">
                    <NavLink to="/grabados/intrusos" className={({ isActive }) => (isActive ? "active" : "")}>
                        Seríe intrusos
                    </NavLink>
                </li>
                <li className="ligrabados">
                    <NavLink to="/grabados/carburundum" className={({ isActive }) => (isActive ? "active" : "")}>
                        Carburundum
                    </NavLink>
                </li>
                <li className="ligrabados">
                    <NavLink to="/grabados/maneranegra" className={({ isActive }) => (isActive ? "active" : "")}>
                        Manera negra
                    </NavLink>
                </li>
                <li className="ligrabados">
                    <NavLink to="/grabados/xilografias" className={({ isActive }) => (isActive ? "active" : "")}>
                        Xilografías
                    </NavLink>
                </li>
                <li className="ligrabados">
                    <NavLink to="/grabados/felicitaciones" className={({ isActive }) => (isActive ? "active" : "")}>
                        Felicitaciones navideñas
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavbarGrabados