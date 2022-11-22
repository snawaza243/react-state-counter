import React from 'react'
import './MyCounter.css'
document.title = `Stateful Counter App`
class MyCounter extends React.Component {
  constructor () {
    super()
    this.state = { count: 0 }
  }

  render () {
    return (
      
      <>
        <div id='container'>
          <div id='container-box'>
            <div id='app-title'>
              <h1>Stateful Counter App </h1>
              <div id='result'>
                <h1>Lest's Start Counting : {this.state.count}</h1>
              </div>
              <div id='bottom'></div>
              <button
                title='Increment'
                onClick={event => {
                  const countUpdate = this.state.count + 1
                  this.setState({ count: countUpdate })
                }}
              >
                Increment
              </button>
              <button
                title='Decrement till zero'
                onClick={event => {
                  const countUpdate = this.state.count - 1
                  this.setState({ count: countUpdate })
                  // countUpdate>0 ? this.state.count - 1 : (this.state.count)-(this.state.count)
                }}
              >
                Decrement
              </button>
              <button
                title='Decrement in Negative Value'
                className='button2'
                onClick={event => {
                  const countUpdate = this.state.count - 1
                  this.setState({ count: countUpdate })
                  // countUpdate>0 ? this.state.count - 1 : (this.state.count)-(this.state.count)
                }}
              >
                -1
              </button>
              <br></br>
              <button
                title='Reset Count'
                onClick={event => {
                  const countUpdate = this.state.count - this.state.count
                  this.setState({ count: countUpdate })
                }}
              >
                Reset
              </button>
              <div />
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default MyCounter

// index.js
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import MyCounter from './counter/MyCounter'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <>
//        <MyCounter title='My Counter 3 | ClassFull 2' />
//   </>
// )
