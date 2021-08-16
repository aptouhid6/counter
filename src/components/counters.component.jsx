import React, { Component } from 'react';
// import Counters from './counters.component';
import Counter from './counter.components';
class Counters extends Component {
    state = { 
        // counters: []
        counters: [
            { id: 0, value: 0 },
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
     }

    render() {
        return (
           this.state.counters.map(counter => {
               return <Counter key={counter.id} />
           })
        );
    }
}
 
export default Counters;
