import React, { Component } from 'react';

class App extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>Enter Your Information</h1>,
            <div id='inputs'>
                <input type="text" placeholder='Budget'/>
            </div>
        );
    }
}

export default App;