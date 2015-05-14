
import React from 'react'
import IOSView from 'iOSView/view'
import IOSHeaderBar from 'iOSHeader/header'


class SquadItem extends React.Component {
    constructor( props ) {
        super( props )
    }

    render() {
        return (
            <li className="Squad-player">
                <span>{ 'Item ' + this.props.id }</span>
            </li>
        )
    }
}



export default class SquadView extends IOSView {
    constructor( props ) {
        super( props )
    }

    render() {

        var items = []
        for ( var i = 0; i < 60; i++ ) {
            items.push( <SquadItem key={ 'item' + i } id={ i } /> )
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
