import React from 'react'
import CardItems from './CardItems'
import '../components/Cards.css'

function Cards() {
    return (
        <div className="todo-cards">
            <CardItems />
            <CardItems />
        </div>
    )
}

export default Cards
