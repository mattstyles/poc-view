
import React from 'react'

import StatusBar from 'iOSStatus/statusBar'
import SquadView from 'squadView/squadView'


export default class IOS extends React.Component {
    constructor( props ) {
        super( props )
    }

    render() {
        return (
            <div className="iOS">
                <div className="iOS-Screen">
                    <StatusBar />
                    <SquadView />
                </div>
            </div>
        )
    }
}
