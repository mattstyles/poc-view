
import React from 'react'
import getIcon from 'constants/iconId'

export default class Icon extends React.Component {
    static propTypes = {
        icon: React.PropTypes.string.isRequired,
        classes: React.PropTypes.string
    }

    static defaultProps = {
        classes: ''
    }

    constructor( props ) {
        super( props )
    }

    render() {
        var icon = {
            __html: getIcon( this.props.icon )
        }
        return (
            <i className={ this.props.classes } dangerouslySetInnerHTML={ icon }></i>
        )
    }
}
