import React from 'react'
import { FaSistrix } from "react-icons/fa";

import '../components/SearchBtn.css'

class SearchBtn extends React.Component {
    render(){
        return (
            <div className="search-box">
                <input type="text" className="input-search" placeholder="search"/>
                <button className="btn-search"><FaSistrix /></button>
                
            </div>
        )
    }
}

export default SearchBtn
