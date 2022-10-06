import React from 'react'
import { NavLink } from 'react-router-dom'
import './Grabados.css'


const Grabados = () => {
    return (
        <div class="grabados">
            <div>
                <NavLink to="/grabados/aguafuerteyaguatinta" className={({ isActive }) => (isActive ? "active" : "")}>
                    <div className="boxGrabados">
                        <img 
                        className='boxImg'
                        src={process.env.PUBLIC_URL+"/img/grabados/aguafuerte/Regando las calles.jpg"} 
                        alt={"Miniatura Regando las calles"}
                        />
                        <div className="boxText">Aguafuerte y Aguatinta</div>
                    </div>
                </NavLink>
            </div>
            <div>
                <NavLink to="/grabados/aguafuerteyaguatinta" className={({ isActive }) => (isActive ? "active" : "")}>
                    <div className="boxGrabados">
                        <img 
                        className='boxImg'
                        src={process.env.PUBLIC_URL+"/img/grabados/aguafuerte/Regando las calles.jpg"} 
                        alt={"Miniatura Regando las calles"}
                        />
                        <div className="boxText">Aguafuerte y Aguatinta</div>
                    </div>
                </NavLink>
            </div>
            <div>
                <NavLink to="/grabados/aguafuerteyaguatinta" className={({ isActive }) => (isActive ? "active" : "")}>
                    <div className="boxGrabados">
                        <img 
                        className='boxImg'
                        src={process.env.PUBLIC_URL+"/img/grabados/aguafuerte/Regando las calles.jpg"} 
                        alt={"Miniatura Regando las calles"}
                        />
                        <div className="boxText">Aguafuerte y Aguatinta</div>
                    </div>
                </NavLink>
            </div>
            <div>
                <NavLink to="/grabados/aguafuerteyaguatinta" className={({ isActive }) => (isActive ? "active" : "")}>
                    <div className="boxGrabados">
                        <img 
                        className='boxImg'
                        src={process.env.PUBLIC_URL+"/img/grabados/aguafuerte/Regando las calles.jpg"} 
                        alt={"Miniatura Regando las calles"}
                        />
                        <div className="boxText">Aguafuerte y Aguatinta</div>
                    </div>
                </NavLink>
            </div>
            <div>
                <NavLink to="/grabados/aguafuerteyaguatinta" className={({ isActive }) => (isActive ? "active" : "")}>
                    <div className="boxGrabados">
                        <img 
                        className='boxImg'
                        src={process.env.PUBLIC_URL+"/img/grabados/aguafuerte/Regando las calles.jpg"} 
                        alt={"Miniatura Regando las calles"}
                        />
                        <div className="boxText">Aguafuerte y Aguatinta</div>
                    </div>
                </NavLink>
            </div>
            <div>
                <NavLink to="/grabados/aguafuerteyaguatinta" className={({ isActive }) => (isActive ? "active" : "")}>
                    <div className="boxGrabados">
                        <img 
                        className='boxImg'
                        src={process.env.PUBLIC_URL+"/img/grabados/aguafuerte/Regando las calles.jpg"} 
                        alt={"Miniatura Regando las calles"}
                        />
                        <div className="boxText">Aguafuerte y Aguatinta</div>
                    </div>
                </NavLink>
            </div>
            <div>
                <NavLink to="/grabados/aguafuerteyaguatinta" className={({ isActive }) => (isActive ? "active" : "")}>
                    <div className="boxGrabados">
                        <img 
                        className='boxImg'
                        src={process.env.PUBLIC_URL+"/img/grabados/aguafuerte/Regando las calles.jpg"} 
                        alt={"Miniatura Regando las calles"}
                        />
                        <div className="boxText">Aguafuerte y Aguatinta</div>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Grabados