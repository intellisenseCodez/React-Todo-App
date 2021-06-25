import React from 'react'
import '../components/CardItems.css'

function CardItems(props) {
    return (
        <div className="todo-cards-item">
            <div className="todo-info">
                <div className="todo-title"> 
                    {props.title}
                </div>
                <div className="todo-description">
                    {props.description}
                </div>
            </div>
            
            <div className="todo-extra">
                {props.time}
            </div>
        </div>
    )
}

export default CardItems
