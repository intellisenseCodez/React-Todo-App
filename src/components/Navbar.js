import React from 'react'

import '../components/Navbar.css'
import Hamburger from './Hamburger'
import SearchBtn from './SearchBtn'
function Navbar() {
    return (
        <div className="navbar">
            <Hamburger />
            <SearchBtn />
        </div>
    )
}

export default Navbar
