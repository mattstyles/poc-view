
import React from 'react'

import StatusBar from 'iOSStatus/statusBar'
import View from 'iOSView/view'


export default class IOS extends React.Component {
    constructor( props ) {
        super( props )
    }

    render() {
        return (
            <div className="iOS">
                <div className="iOS-Screen">
                    <StatusBar />
                    <View />
                </div>
            </div>
        )
    }
}
