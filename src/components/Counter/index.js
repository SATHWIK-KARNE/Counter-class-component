// counter component is written here

import {Component} from 'react'
import './index.css'

// state is an object which "stores component's data which changes over time"
// state also inherited along with Component
// whenever state object is updated => render() is called again
// ALWAYS USE this.setState() to UPDATE STATE
class Counter extends Component {
  state = {count: 0}
  onIncrement = () => {
    // console.log('Incremented')
    this.setState(prevState => {
      console.log(`previous value is: ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  onDecrement = () => {
    // console.log('Decremented')
    this.setState(prevState => {
      console.log(`previous value is: ${prevState.count}`)
      return {count: prevState.count - 1}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.onIncrement}>
            Increase
          </button>
          <button className="button" onClick={this.onDecrement}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}
export default Counter
