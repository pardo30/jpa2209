import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavbarGrabados.css'

const NavbarGrabados = () => {
    return (
        <div>
            <ul className="ulGrabados">
                    <NavLink to="/grabados/aguafuerteyaguatinta" className={({ isActive }) => (isActive ? "activeGrab" : "")}>
                <div className="ligrabados">
                        <div>Aguafuerte y aguatinta</div>
                </div>
                    </NavLink>
                    <NavLink to="/grabados/intrusos" className={({ isActive }) => (isActive ? "activeGrab" : "")}>
                <div className="ligrabados">
                        <div>Seríe intrusos</div>
                </div>
                    </NavLink>
                    <NavLink to="/grabados/carburundum" className={({ isActive }) => (isActive ? "activeGrab" : "")}>
                <div className="ligrabados">
                        <div>Carburundum</div>
                </div>
                    </NavLink>
                    <NavLink to="/grabados/maneranegra" className={({ isActive }) => (isActive ? "activeGrab" : "")}>
                <div className="ligrabados">
                        <div>Manera negra</div>
                </div>
                    </NavLink>
                    <NavLink to="/grabados/xilografias" className={({ isActive }) => (isActive ? "activeGrab" : "")}>
                <div className="ligrabados">
                        <div>Xilografías</div>
                </div>
                    </NavLink>
                    <NavLink to="/grabados/felicitaciones" className={({ isActive }) => (isActive ? "activeGrab" : "")}>
                <div className="ligrabados">
                        <div>Felicitaciones navideñas</div>
                </div>
                    </NavLink>
            </ul>
        </div>
    )
}

export default NavbarGrabados