
import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
         <input onChange={(e) => (this.props.Myinput(e.target.value))} />
      </div>
    )
  }
}

