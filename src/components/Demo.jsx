import React, { Component } from 'react';

class Demo extends Component{
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
            <div>
                <button onClick={this.handleClick}>
                  {this.state.stateWorking ? 'ON' : 'OFF'}
                </button>
                {this.state.stateWorking && (
                    <div>
                        <h2 className='state-working'>State Working!</h2>
                    </div>
                )}
            </div>
        );
    }
}

export default Demo;