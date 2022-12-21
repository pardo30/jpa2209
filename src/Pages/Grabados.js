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
                        src={process.env.PUBLIC_URL+"/img/grabados/aguafuerte/Croosing_min.jpg"} 
                        alt={"Miniatura Croosing"}
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
                        src={process.env.PUBLIC_URL+"/img/grabados/intrusos/Tintin y Haddock en la Cuesta Moyano_min.jpg"} 
                        alt={"Miniatura Tintin y Haddock en la Cuesta Moyano"}
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
                        src={process.env.PUBLIC_URL+"/img/grabados/carburundum/Preparados para la danza_min.jpg"} 
                        alt={"Miniatura Preparados para la danza"}
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
                        src={process.env.PUBLIC_URL+"/img/grabados/manera negra/Sueño_min.jpg"} 
                        alt={"Miniatura Sueño"}
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
                        src={process.env.PUBLIC_URL+"/img/grabados/xilografia/Maquina_min.jpg"} 
                        alt={"Miniatura Maquina"}
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
                        src={process.env.PUBLIC_URL+"/img/grabados/felicitaciones/Navidad 2012_min.jpg"} 
                        alt={"Miniatura Navidad 2012"}
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