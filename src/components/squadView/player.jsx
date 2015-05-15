
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
                    url={ 'https://graph.facebook.com/' + 100 + ~~( Math.random() * 20000 ) + '/picture?width=60&height=60' }
                />
                <span className="junk">{ 'Item ' + this.props.id }</span>
            </li>
        )
    }
}
