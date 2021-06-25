import React from 'react'
import '../components/CardItems.css'

class CardItems extends React.Component {
    render(){
        return (
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
                    {this.props.time}
                </div>
            </div>
        )
    }
}

export default CardItems
