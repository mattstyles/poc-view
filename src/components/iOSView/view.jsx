
import React from 'react'
import classNames from 'classnames'

export default class IOSView extends React.Component {
    constructor( props ) {
        super( props )
    }

    render() {
        var classes = classNames( 'iOS-View', 'u-fit', ...this.props.classes.split( /\s/ ) )

        return (
            <div className={ classes }>
                { this.props.children }
            </div>
        )
    }
}
