
import React from 'react'

import Avatar from './avatar'

export default class SquadItem extends React.Component {
    static propTypes = {
        id: React.PropTypes.number,
        registerScroll: React.PropTypes.func.isRequired
    }

    constructor( props ) {
        super( props )
        this.props.registerScroll( this.onParentScroll.bind( this ) )
    }

    state = {
        visible: false
    }

    /**
     * Handles visibility of the Component
     * Checks parent scroll position and size and calcs if visible
     * Visibility is a one-off, once visible it is currently always
     * considered visible
     */
    onParentScroll( event ) {
        // Early return if already revealed
        if ( this.state.visible ) {
            return
        }

        let viewport = {
            top: event.target.scrollTop,
            bottom: event.target.scrollTop + event.target.offsetHeight
        }

        let el = this.refs.el.getDOMNode()

        // out of view, bail
        if ( el.offsetTop < viewport.top || el.offsetTop > viewport.bottom ) {
            return
        }

        this.setState({
            visible: true
        })
    }

    render() {
        return (
            <li ref="el" className="Squad-player">
                <Avatar
                    condition={ ( Math.random() * 30 ) + 70 }
                    url={ this.props.url }
                    visible={ this.state.visible }
                />
                <div className="Squad-playerInfo">
                    <div className="Squad-playerDetail">
                        <div className="Squad-playerInfo-title">{ [ this.props.name.first, this.props.name.second ].join( ' ' ) }</div>
                        <div className="Squad-playerInfo-sub">{ this.props.rating.toFixed( 2 ) }</div>
                    </div>
                    <div className="Squad-playerInfo-icon"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path d="M23.528 46.444c-2 2-2 5.223 0 7.112L68.306 98.33c2.22 2.226 5.776 2.226 8 0 2.22-2.22 2.22-5.776 0-7.996l-36.78-36.777c-2-2-2-5.224 0-7.112l36.78-36.778c2.222-2.222 2.222-5.778 0-8-2.223-2.222-5.78-2.222-8 0L23.53 46.444z"/></svg></div>
                    <div className="Squad-playerInfo-ability">{ this.props.ability }</div>
                </div>
            </li>
        )
    }
}
