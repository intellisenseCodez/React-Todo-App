import React from 'react'
import { FaSistrix } from "react-icons/fa";

import '../components/SearchBtn.css'

class SearchBtn extends React.Component {
    render(){
        return (
            <div className="search-box">
                <button className="btn-search"><FaSistrix /></button>
                <input type="text" className="input-search" placeholder="Type to Search..."/>
            </div>
        )
    }
}

export default SearchBtn
