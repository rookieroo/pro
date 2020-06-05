import React from 'react'
import logo from './logo.svg'

class Loading extends React.Component {
  render() {
    return <div>
            loading...
            <img src={logo} alt="loading"/>
          </div>
  }
 }

export default Loading;
