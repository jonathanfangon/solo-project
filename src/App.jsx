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
                <h1>Enter Your Information:</h1>
                {/* <div id='inputs'>
                  <input type="text" placeholder='Budget'/>
                    <input type="text" placeholder='Drivetrain (AWD, RWD, FWD)'/>
                    <input type="text" placeholder='Transmission (Auto, Manual)'/>
                    <input type="text" placeholder='Style (Coupe, Sedan, Truck, SUV)'/>  
                </div> */}
                <form id='input-form'>
                    <div>
                        <label>Budget</label>
                        <input type="text" placeholder='Budget'/>
                    </div>
                    <div>
                        <label>Drivetrain</label>
                        <input type="text" placeholder='AWD, RWD, or FWD'/>
                    </div>
                    <div>
                        <label>Transmission</label>
                        <input type="text" placeholder='Automatic or Manual'/>
                    </div>
                    <div>
                        <label>Style</label>
                        <input type="text" placeholder='Coupe, Sedan, Truck, SUV'/>
                    </div>
                </form>
                <Demo/>
                <img src="https://i.ytimg.com/vi/5Cm9HRnheEo/maxresdefault.jpg" alt="Porsche GT3 RS" />
            </div>
        );
    }
}

export default App;