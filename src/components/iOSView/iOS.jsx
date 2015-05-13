
import React from 'react'

import StatusBar from './iOSStatus'


export default class IOSView extends React.Component {
    constructor( props ) {
        super( props )
    }

    render() {
        var items = []
        for ( var i = 0; i < 60; i++ ) {
            items.push( <div>{ i }</div> )
        }

        return (
            <div className="iOS">
                <div className="iOS-screen">
                    <StatusBar />
                    <div className="iOS-mainView u-stretchY">
                        <span>iOSView</span>
                        { items }
                    </div>
                </div>
            </div>
        )
    }
}
