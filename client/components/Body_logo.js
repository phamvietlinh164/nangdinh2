import React, { Component } from 'react'
import logo from './../Picture/logo.png'




class Body_logo extends Component {
    render() {
        return (
            <div className="body_logo text-center">
                <img src={logo} width="120" height="120" alt="Logo" />
            </div>

        );
    }


}

export default Body_logo;
