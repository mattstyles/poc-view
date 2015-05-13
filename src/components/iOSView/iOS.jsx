
import React from 'react'

import StatusBar from './iOSStatus'


export default class IOSView extends React.Component {
    constructor( props ) {
        super( props )
    }

    render() {
        return (
            <div className="iOS">
                <div className="iOS-screen">
                    <StatusBar />
                    <span>iOSView</span>
                </div>
            </div>
        )
    }
}
