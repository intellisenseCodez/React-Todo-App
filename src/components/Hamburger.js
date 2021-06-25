import React from 'react'
import {FaBars} from 'react-icons/fa'

import '../components/Hamburger.css'

class Hamburger extends React.Component {
    render(){
        return (
            <div className="hamburger">
                <FaBars />
            </div>
        )
    }
}

export default Hamburger
