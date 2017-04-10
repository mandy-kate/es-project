import React from 'react'
import Dropdown from'react-simple-dropdown'
import List from './list'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    //whenever 'this' is referred to we are talking about this right here - in this code. Prevents components getting confused with other
    //functions that haven't been bound. Use bind when delegating functions. Bind is always done where you want this to refer to.
    // this.filterList = this.filterList.bind(this)
  }

//   displayList() {
//     return this.props.state.cart.map(function(item){
//       return <p>{item}</p>
//     })
//   }

//   filterList (item) {
//     this.props.store.dispatch(
//       {type: 'FILTER_CART', item:item}
//     )
//   }

  render () {
    console.log("state", this.props.state)
    return (
      <div>
        <h1>Public Sector Leadership Development Options</h1>
        <List/>
      </div>
    )
  }
}
  //this is in charge of rendering things and delegating functions

