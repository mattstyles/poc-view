
import './utils/font'

import React from 'react'

import dispatcher from './dispatchers/appDispatcher'
import IOSView from 'iOSView/iOS'

class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <body className="app">
                <IOSView />
            </body>
        )
    }
}

React.render( <App />, document.body )
