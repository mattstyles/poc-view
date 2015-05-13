
import React from 'react'


export default class IOS extends React.Component {
    constructor( props ) {
        super( props )
    }

    render() {

        var items = []
        for ( var i = 0; i < 60; i++ ) {
            items.push( <div>{ i }</div> )
        }

        return (
            <div className="iOS-View u-stretchX">
                <span>iOSView</span>
                { items }
            </div>
        )
    }
}
