
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
        let viewport = {
            top: event.target.scrollTop,
            bottom: event.target.scrollTop + event.target.offsetHeight
        }

        // out of view, bail
        if ( this.refs.el.getDOMNode().offsetTop < viewport.top || this.refs.el.getDOMNode().offsetTop > viewport.bottom ) {
            return
        }

        if ( !this.state.visible ) {
            this.setState({
                visible: true
            })
        }
    }

    render() {
        return (
            <li ref="el" className="Squad-player">
                <Avatar
                    condition={ ( Math.random() * 50 ) + 50 }
                    url={ this.defaultUrl }
                    visible={ this.state.visible }
                />
                <span className="junk">{ 'Item ' + this.props.id }</span>
            </li>
        )
    }
}
