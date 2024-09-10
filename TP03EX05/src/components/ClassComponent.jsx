import { Component } from 'react';
import DisplayCount from './DisplayCount.jsx';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    incrementCount = () => {
        this.setState((prevState) => ({
            count: ++prevState.count 
        }));
    };
    resetCount = () => {
        this.setState({ count: 0 });
    };

    render() {
        return (
            <div>
                
                <DisplayCount count={this.state.count} />
                
                <button onClick={this.incrementCount}>Incrementar</button>
                <button onClick={this.resetCount}>Reset</button>
            </div>
        );
    }
}


