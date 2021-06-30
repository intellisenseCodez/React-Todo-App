import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTypo3, FaBars, FaTimes } from 'react-icons/fa'

import '../components/Navbar.css'
import SearchBtn from './SearchBtn'


function Navbar() {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false)


    return (
        <>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-container">

                    <Link to="/" className="navbar-brand">
                        <h4>iH</h4><FaTypo3 />
                    </Link>
                    
                    <div className="navbar-item">
                        <ul className={click ? 'navbar-menu active' : 'navbar-menu'}>
                            <li className="navbar-links">
                                <Link to="/" className="navbar-links" onClick={closeMobileMenu}>Home</Link>
                            </li>
                            <li className="navbar-links">
                                <Link to="/about" className="navbar-links" onClick={closeMobileMenu}>About</Link>
                            </li>
                            <li className="navbar-links">
                                <Link to="/developer" className="navbar-links" onClick={closeMobileMenu}>Developer</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="navbar-search">
                        <SearchBtn />
                    </div>

                    <div className="mobile-menu" onClick={handleClick}>
                        {click ? <FaBars /> : <FaTimes />}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
