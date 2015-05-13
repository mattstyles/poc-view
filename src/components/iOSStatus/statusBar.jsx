
import React from 'react'
import moment from 'moment'

export default class IOSStatusBar extends React.Component {
    constructor( props ) {
        super( props )
    }

    render() {
        return (
            <div className="iOS-StatusBar u-stretchX">
                <span className="u-stretchX u-textCenter">{ moment().format( 'hh:mm' ) }</span>
            </div>
        )
    }
}
