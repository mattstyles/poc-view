
import './utils/font'

import React from 'react'

import dispatcher from './dispatchers/appDispatcher'
import IOS from 'iOS/iOS'

class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <body className="app">
                <div className="app-bg"></div>
                <IOS />
            </body>
        )
    }
}

React.render( <App />, document.body )
