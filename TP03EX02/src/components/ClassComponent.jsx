import { Component } from 'react';

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

    render() {
        return (
            <div>
                <h1>Contador: {this.state.count}</h1>
                <button onClick={this.incrementCount}>++Aumentar </button>
            </div>
        );
    }
}


