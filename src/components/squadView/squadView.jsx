
import React from 'react'
import IOSView from 'iOSView/view'
import IOSHeaderBar from 'iOSHeader/header'
import IOSScrollable from 'iOSScrollable/scrollable'

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
            <IOSView classes="Squad">
                <IOSHeaderBar />
                <IOSScrollable>
                    <h2 className="iOS-text-header">Items</h2>
                    <ul className="Squad-players">
                        { items }
                    </ul>
                </IOSScrollable>
            </IOSView>
        )
    }
}
