import React, { Component } from 'react';
import Navbar from './navbar.component';
import Reset from './reset.component';
// import Counter from './counter.component';
import Counters from './counters.component';

class App extends Component {
    state = { 
        counters: [
            { id: 0, value: 5 },
            { id: 1, value: 7 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
     }

     handleReset = () => {
        const all_counters = this.state.counters.map((counter, idx) => {
           const obj = { id: idx, value: 0 };
           return obj;
        });
        this.setState({ counters: all_counters });
    }

   handleIncrement = (id) => {
       const counters = this.state.counters.map((counter, idx) => { 
           if(counter.id === id) return { id: idx, value: counter.value+1 };
           return counter;
       });
       this.setState({ counters: counters });
   }

   handleDecrement = (id) => {
       const counters = this.state.counters.map((counter, idx) => { 
           if(counter.id === id) return { id: idx, value: counter.value-1 };
           return counter;
       });
       this.setState({ counters: counters });
   }

   getNonZeroItems = () => {
       let cnt = 0;   

       this.state.counters.forEach(counter => {
           if(counter.value > 0) cnt++;
       });

       return cnt;
   }

    render() { 
        return ( 
            <>
                <Navbar nonZeroItems={this.getNonZeroItems()} />
                <Reset 
                    onReset={this.handleReset}
                />
                <Counters 
                    counters={this.state.counters}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                />
            </>
         );
    }
}
 
export default App;