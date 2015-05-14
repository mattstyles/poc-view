
import React from 'react'

import Avatar from './avatar'

export default class SquadItem extends React.Component {
    constructor( props ) {
        super( props )
    }

    render() {
        return (
            <li className="Squad-player">
                <Avatar
                    condition={ ( Math.random() * 50 ) + 50 }
                />
                <span className="junk">{ 'Item ' + this.props.id }</span>
            </li>
        )
    }
}
