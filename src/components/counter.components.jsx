import React, { Component } from 'react';

class Counter extends Component {
    state = {
        items: [0, 2],
    }
    
    formatCount = () => {
        if(this.state.items[0] === 0) return 'Zero';
        return this.state.items[0];
    }

    handleIncrement = () => {
        const arra = [...this.state.items];
        arra[0]++;
        
        this.setState({ items: arra });
    }

    handleDecrement = () => {
        const arra = [...this.state.items];
        arra[0]--;
        
        this.setState({ items: arra });
    }

    render() { 
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            Navbar <span className="badge bg-secondary">4</span>
                        </a>
                    </div>
                </nav>

                <button type="button" className="btn btn-primary m-4">Reset</button>

                <ul>
                    <li className="list-unstyled">
                        <div>
                            <span className="badge bg-primary">{this.formatCount()}</span>
                            <button onClick={this.handleIncrement} type="button" className="btn btn-secondary m-2">+</button>
                            <button onClick={this.handleDecrement} type="button" className="btn btn-secondary m-2">-</button>
                            <button type="button" className="btn btn-danger m-2">Delete</button>
                        </div>
                    </li>
                </ul>
            </>
        );
    }
}
 
export default Counter;