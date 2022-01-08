import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import reducers from './main/redurecers'
import Routes from './main/routes'

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers)

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>, 
    document.getElementById('app'))