import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter } from 'react-router-dom'

import {
    createStore,
} from 'redux'
import {
    Provider
} from 'react-redux'
import AllReducers from './reducer'

// variable for createStore
const GlobalState = createStore(AllReducers)

// subscribe variable GlobalState for console.log redux each time we call the react
GlobalState.subscribe(() => console.log('global state:', GlobalState.getState()))

ReactDOM.render(
    <Provider store={GlobalState}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)