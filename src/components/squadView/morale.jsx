
import React from 'react'

import Icon from 'icon/icon'

export default class MoraleIndicator extends React.Component {
    static defaultProps = {
        morale: React.PropTypes.number.isRequired
    }

    constructor( props ) {
        super( props )
    }

    render() {
        return (
            <Icon
                classes="Squad-Avatar-morale"
                icon="ARROW_POINTER"
                rotation={ -360 * ( this.props.morale / 100 ) - 90 }
            />
        )
    }
}
