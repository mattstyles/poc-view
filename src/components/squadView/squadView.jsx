
import React from 'react'
import Rx from 'rx'
import { Dispatcher } from 'flux'

import IOSView from 'iOSView/view'
import IOSHeaderBar from 'iOSHeader/header'
import IOSScrollable from 'iOSScrollable/scrollable'

import Player from './player'


export default class SquadView extends IOSView {
    constructor( props ) {
        super( props )

        this.scrollListeners = []
    }

    registerScroll( cb ) {
        this.scrollListeners.push( cb )
    }

    onScroll( event ) {
        this.scrollListeners.forEach( function( listener ) {
            listener( event )
        })
    }

    render() {

        var items = []
        for ( var i = 0; i < 60; i++ ) {
            items.push(
                <Player
                    key={ 'squad:player:' + i }
                    id={ i }
                    registerScroll={ this.registerScroll.bind( this ) }
                />
            )
        }

        return (
            <IOSView classes="Squad">
                <IOSHeaderBar />
                <IOSScrollable onScroll={ this.onScroll.bind( this ) }>
                    <h2 className="iOS-text-header">Items</h2>
                    <ul className="Squad-players">
                        { items }
                    </ul>
                </IOSScrollable>
            </IOSView>
        )
    }
}
