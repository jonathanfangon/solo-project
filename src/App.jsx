import React, { Component } from 'react';
import Demo from './components/Demo';

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {

        }
    }
 
    render() {
        return (
            <div id='main-cont'>
                <h1>Enter Your Information</h1>
                <div id='inputs'>
                  <input type="text" placeholder='Budget'/>
                <input type="text" placeholder='Drivetrain (AWD, RWD, FWD)'/>
                <input type="text" placeholder='Transmission (Auto, Manual)'/>
                <input type="text" placeholder='Car or SUV'/>  
                </div>
                <Demo/>
            </div>
        );
    }
}

export default App;