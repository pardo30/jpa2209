import React from 'react'
import { NavLink } from 'react-router-dom'
import './Grabados.css'


const Grabados = () => {
    return (
        <div className="grabados">
            <div className="grabdosContainer">
            <div>
                <NavLink to="/grabados/aguafuerteyaguatinta" className={({ isActive }) => (isActive ? "active" : "")}>
                    <div className="boxGrabados">
                        <img 
                        className='boxImg'
                        src={process.env.PUBLIC_URL+"/img/grabados/aguafuerte/Regando las calles_min.jpg"} 
                        alt={"Miniatura Regando las calles"}
                        />
                        <div className="boxText">Aguafuerte y Aguatinta</div>
                    </div>
                </NavLink>
            </div>
            <div>
                <NavLink to="/grabados/intrusos" className={({ isActive }) => (isActive ? "active" : "")}>
                    <div className="boxGrabados">
                        <img 
                        className='boxImg'
                        src={process.env.PUBLIC_URL+"/img/grabados/aguafuerte/Regando las calles_min.jpg"} 
                        alt={"Miniatura Regando las calles"}
                        />
                        <div className="boxText">Serie Intrusos</div>
                    </div>
                </NavLink>
            </div>
            <div>
                <NavLink to="/grabados/carburundum" className={({ isActive }) => (isActive ? "active" : "")}>
                    <div className="boxGrabados">
                        <img 
                        className='boxImg'
                        src={process.env.PUBLIC_URL+"/img/grabados/aguafuerte/Regando las calles_min.jpg"} 
                        alt={"Miniatura Regando las calles"}
                        />
                        <div className="boxText">Carburundum</div>
                    </div>
                </NavLink>
            </div>
            <div>
                <NavLink to="/grabados/maneranegra" className={({ isActive }) => (isActive ? "active" : "")}>
                    <div className="boxGrabados">
                        <img 
                        className='boxImg'
                        src={process.env.PUBLIC_URL+"/img/grabados/aguafuerte/Regando las calles_min.jpg"} 
                        alt={"Miniatura Regando las calles"}
                        />
                        <div className="boxText">Manera negra</div>
                    </div>
                </NavLink>
            </div>
            <div>
                <NavLink to="/grabados/xilografias" className={({ isActive }) => (isActive ? "active" : "")}>
                    <div className="boxGrabados">
                        <img 
                        className='boxImg'
                        src={process.env.PUBLIC_URL+"/img/grabados/aguafuerte/Regando las calles_min.jpg"} 
                        alt={"Miniatura Regando las calles"}
                        />
                        <div className="boxText">Xilografías</div>
                    </div>
                </NavLink>
            </div>
            <div>
                <NavLink to="/grabados/felicitaciones" className={({ isActive }) => (isActive ? "active" : "")}>
                    <div className="boxGrabados">
                        <img 
                        className='boxImg'
                        src={process.env.PUBLIC_URL+"/img/grabados/aguafuerte/Regando las calles_min.jpg"} 
                        alt={"Miniatura Regando las calles"}
                        />
                        <div className="boxText">Felicitaciones navideñas</div>
                    </div>
                </NavLink>
            </div>
            </div>
        </div>
    )
}

export default Grabados