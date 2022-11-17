import React, { Component } from 'react';

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            stateWorking : true,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState => ({
            stateWorking : !prevState.stateWorking
        }));
    }
 
    render() {
        return (
            <div id='inputs'>
                <h1>Enter Your Information</h1>
                <input type="text" placeholder='Budget'/>
                <button onClick={this.handleClick}>
                  {this.state.stateWorking ? 'ON' : 'OFF'}
                </button>
                {/* {this.stateWorking === 'ON' && (
                    <div>
                        <h2>State Working</h2>
                    </div>
                )} */}
                {this.stateWorking ? <p>State Working!</p> : null}
            </div>
        );
    }
}

export default App;