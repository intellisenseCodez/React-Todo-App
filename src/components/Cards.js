import React from 'react'
import CardItems from './CardItems'
import '../components/Cards.css'
import { TodoData } from '../API/TodoData'
import AddBtn from './AddBtn'



class Cards extends React.Component {
    render(){

        const todoData = TodoData.map( (todoObj) => <CardItems 
        key={todoObj.id} 
        title={todoObj.title} 
        description={todoObj.description}
        time={todoObj.time} /> )

        console.log(todoData);

        return (
            <div className="todo-cards">
                {todoData}
                <AddBtn />
            </div>
        )
    }  
}

export default Cards
