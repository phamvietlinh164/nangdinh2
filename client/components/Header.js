import React, { Component } from 'react';
import hder1 from './../Picture/hder1.jpg'
import hder2 from './../Picture/hder2.png'
import hder3 from './../Picture/hder3.png'

const hderArr = [hder1, hder2, hder3];

class Header extends Component {
    
    state = {
    	hder: hderArr[Math.floor((Math.random() * 3))]
    }

    render() {
        
        return (
            <div className="text-center header">
            	<img src={this.state.hder} width="120" height="120" alt="Logo" />
            </div>

        );
    }


}

export default Header;
