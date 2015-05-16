
import React from 'react'

import Avatar from './avatar'

export default class SquadItem extends React.Component {
    constructor( props ) {
        super( props )

        this.defaultUrl = 'https://graph.facebook.com/' + 100 + ~~( Math.random() * 20000 ) + '/picture?width=60&height=60'

        this.props.registerScroll( this.onParentScroll.bind( this ) )
    }

    state = {
        visible: false
    }

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
        console.log( this.props )
        return (
            <li ref="el" className="Squad-player">
                <Avatar
                    condition={ ( Math.random() * 30 ) + 70 }
                    url={ this.props.url }
                    visible={ this.state.visible }
                />
                <span className="junk">{ [ this.props.name.first, this.props.name.second ].join( ' ' ) }</span>
            </li>
        )
    }
}
