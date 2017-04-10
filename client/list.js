import React, { Component } from 'react'

class List extends Component {
    render() {
        return <div>
                    <h1>Hello, World</h1>
                     <button className="button" onClick={this.displayList}>I am a List</button>
                </div>
    }
}

export default List


