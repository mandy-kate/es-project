import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { createStore } from 'redux'
// import reducer from './reducer'

// const store = createStore(reducer)

const render = () => {
    console.log("In the Index.js")
    ReactDOM.render(<App/>,
        document.getElementById('app'))
}

// store.subscribe(render)
render();

// state={store.getState()}
//         store={store}