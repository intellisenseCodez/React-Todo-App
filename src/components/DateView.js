import React from 'react'

import '../components/DateView.css'

function Dateview() {

    const todayDate = new Date();
    const[month, day, year] = [todayDate.getMonth(), todayDate.getDay(), todayDate.getFullYear()]

    console.log(month);

    return (
        <div className="date-screen">
            <div className="date-left">
                <h1>23</h1>
                <div>
                    <h3>June</h3>
                    <h3>2021</h3>
                </div>
            </div>
            <div className="date-right">
                <h3>Monday</h3>
            </div>
        </div>
    )
}

export default Dateview
