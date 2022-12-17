import React from 'react'
import { useState } from 'react'
import './Navbar.css'

import Bar from './bar'

export const NavbarMobile = () => {
    const [showNavbar, setShowNavbar] = useState(false)


    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <div className='navbarMobile'>
            <div class="navbarMobileUp">
            <img src={process.env.PUBLIC_URL + '/img/logojpa.png'} alt="Logo" className='logo' />
            <h1 className='pageTitleMobile'>{`JAVIER\nPARDO\nARTE`}</h1>
            <div className="menu-icon" onClick={handleShowNavbar}>
            <img src={process.env.PUBLIC_URL + '/img/menu.png'} alt="Menu" className='menu' />
            </div>
            </div>
            <div class="navbarMobiledown">
            {showNavbar
                ? <Bar showNavbar={showNavbar} handleShowNavbar={handleShowNavbar}/>
                : null
            }
            </div>
        </div>
    )
}
