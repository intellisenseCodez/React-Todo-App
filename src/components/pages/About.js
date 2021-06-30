import React, { Component } from 'react'
import { FaHtml5, FaJs, FaReact, FaTypo3 } from 'react-icons/fa'

import '../../App.css'
import '../pages/About.css'

class About extends Component {
    render() {
        return (
            <>
                
                <div className="title">
                    <h2>About</h2>
                </div>
            
                <div className="container">
                    <div className="about-brand">
                        <img src="image/intellisense-logo.jpg" alt="company logo"/>
                    </div>
                    <div className="about-description">
                        <p>This web application is a Todo web app. This application helps users to keep record of their todo daily activities. </p>
                        <br/>
                        <p>The application allows users to add an activity - including Title, Description and Date just on a click of a button.</p>
                        <br/>
                        <h3>Features:</h3>
                        <ul>
                            <li>Create - User create new activity</li>
                            <li>Read - User delete existing activity</li>
                            <li>Update - User update existing activity</li>
                            <li>Delete - User delete existing activity</li>
                        </ul>
                        <br/>
                        <h3>Technologies:</h3>
                        <div>
                            <FaHtml5 />
                            <FaJs />
                            <FaReact />
            
                        </div>
                    </div>
                </div>
                
            </>
        )
    }
}

export default About
