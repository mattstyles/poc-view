
import React from 'react'
import IOSView from 'iOSView/view'
import IOSHeaderBar from 'iOSHeader/header'

import Player from './player'

export default class SquadView extends IOSView {
    constructor( props ) {
        super( props )
    }

    render() {

        var items = []
        for ( var i = 0; i < 60; i++ ) {
            items.push( <Player key={ 'item' + i } id={ i } /> )
        }

        return (
            <div className="iOS-View u-fit Squad">
                <IOSHeaderBar />
                <div className="iOS-Scroll u-stretchX">
                    <h2 className="iOS-text-header">Items</h2>
                    <ul className="Squad-players">
                        { items }
                    </ul>
                </div>
            </div>
        )
    }
}
