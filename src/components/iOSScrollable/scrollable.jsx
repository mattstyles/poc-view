
import React from 'react'

export default class IOSScrollable extends React.Component {
    constructor( props ) {
        super( props )
    }

    render() {
        return (
            <div className="iOS-Scroll u-stretchX">
                { this.props.children }
            </div>
        )
    }
}
