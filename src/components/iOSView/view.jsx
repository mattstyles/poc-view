
import React from 'react'

import HeaderBar from 'iOSHeader/header'


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
            <div className="iOS-View u-fit">
                <HeaderBar />
                <div className="iOS-Scroll u-stretchX">
                    <span>iOSView</span>
                    { items }
                </div>
            </div>
        )
    }
}
