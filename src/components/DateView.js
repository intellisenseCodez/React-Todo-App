import React from 'react'

import '../components/DateView.css'

class Dateview extends React.Component {

    render() {
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
}

export default Dateview
