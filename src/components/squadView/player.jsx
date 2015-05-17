
import React from 'react'

import Avatar from './avatar'
import Icon from 'icon/icon'

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
                    morale={ this.props.morale }
                    condition={ this.props.condition }
                    position={ this.props.position }
                    url={ this.props.url }
                    visible={ this.state.visible }
                />
                <div className="Squad-playerInfo">
                    <div className="Squad-playerDetail">
                        <div className="Squad-playerInfo-title">{ [ this.props.name.first, this.props.name.second ].join( ' ' ) }</div>
                        <div className="Squad-playerInfo-sub">{ this.props.rating.toFixed( 2 ) }</div>
                    </div>
                    <Icon classes="Squad-playerInfo-icon" icon="ARROW_SLANTED" />
                    <div className="Squad-playerInfo-ability">{ this.props.ability }</div>
                </div>
            </li>
        )
    }
}
