
import React from 'react'

import { conditionGradient } from 'constants/gradients'
import Icon from 'icon/icon'

export default class MoraleIndicator extends React.Component {
    static defaultProps = {
        morale: React.PropTypes.number.isRequired
    }

    constructor( props ) {
        super( props )
    }

    render() {
        let style = {
            background: conditionGradient[ ~~this.props.morale ]
        }

        // Morale rotation goes from 0 (straight up) to 180 (down)
        return (
            <div style={ style } className="Squad-Avatar-morale">
                <Icon
                    icon="ARROW_POINTER"
                    rotation={ -180 * ( this.props.morale / 100 ) + 90 }
                />
            </div>
        )
    }
}
