import React from 'react'
import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa'
import '../components/CardItems.css'


class CardItems extends React.Component {
    render(){
        return (
            <>
            <div className="todo-cards-item">
                <div className="todo-info">
                    <div className="todo-title"> 
                        {this.props.title}
                    </div>
                    <div className="todo-description">
                        {this.props.description}
                    </div>
                </div>
                
                <div className="todo-extra">
                    <div>
                     {this.props.time}
                    </div>
                    <div className="option-icons">
                        <FaRegTrashAlt className="icon delete-icon"/>
                        <FaRegEdit className="icon edit-icon"/>
                    </div>
                    
                </div>
            </div>
            </>
            
        )
    }
}

export default CardItems
