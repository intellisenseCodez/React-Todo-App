import React from 'react'

import '../components/DateView.css'

class Dateview extends React.Component {
    
   
    render() {

        let todayDate = new Date()

        return (
            <>
                <div className="date-screen">
                    <div className="date-left">
                        <h1>{todayDate.getDate()}</h1>
                        <div>
                            <h3>{todayDate.getMonth()}</h3>
                            <h3>{todayDate.getFullYear()}</h3>
                        </div>
                    </div>
                    <div className="date-right">
                        <h3>Monday</h3>
                    </div>
                </div>
            </>
        )
    }
}

export default Dateview
