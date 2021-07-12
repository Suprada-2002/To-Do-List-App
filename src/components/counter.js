import React, {Component} from 'react';

class Counter extends React.Component {

//state object includes any data that that component needs.
    state = {
    count: 1,
    };

    // for binding events use arrow functions:
    handleInc = () => {
        this.setState( {count: this.state.count+1} )
    }

    render() { 

     return(
         <>
         <h1>Learning React</h1>
         <button onClick={this.handleInc}> {this.state.count } </button>
          </>
     );
    }

}
 
export default Counter;