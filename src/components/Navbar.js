import React from 'react'

import '../components/Navbar.css'
import Hamburger from './Hamburger'
import SearchBtn from './SearchBtn'

class Navbar extends React.Component {
    render(){
        return (
            <div className="navbar">
                <Hamburger />
                <SearchBtn />
            </div>
        )
    }
}

export default Navbar
