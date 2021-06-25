import React from 'react'
import { FaPlus } from 'react-icons/fa'
import '../components/AddBtn.css'
function AddBtn() {
    return (
        <div className="add-btn">
            <button className="btn"><FaPlus /></button>
        </div>
    )
}

export default AddBtn
