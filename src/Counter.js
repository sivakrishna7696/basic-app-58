import React, { Component } from 'react'

export class Counter extends Component {
    constructor(){
        super()
        this.state = {
            count : 0,
        }
    }

    increment(){
        this.setState({
          count:  this.state.count+1
        })
    }

  render() {
    return (
      <div>
          <h2>Counter</h2>
          <h3>Count - {this.state.count}</h3>
          <button onClick={()=> this.increment()}>INCREMENT</button>
          <button>DECREMENT</button>
      </div>
    )
  }
}

export default Counter