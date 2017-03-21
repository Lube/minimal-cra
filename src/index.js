import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App.js'
import configureStore from './store'

import 'react-mdl/extra/material.css'
import 'react-mdl/extra/material.js'
import './index.css'

const MOUNT_NODE = document.getElementById('root')
const INITIAL_STATE = {}

const store = configureStore(INITIAL_STATE)

let render = Component => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <Component />
      </Provider>
    </BrowserRouter>,
    MOUNT_NODE
  )
}

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./App.js', () => {
        const NextApp = require('./App.js').default;
        render(NextApp);
    });
}

// ========================================================
// Go!
// ========================================================
render(App)
