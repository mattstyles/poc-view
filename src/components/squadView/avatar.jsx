
import React from 'react'


export default class SquadAvatar extends React.Component {
    constructor( props ) {
        super( props )
    }

    render() {
        return (
            <div className="Squad-Avatar">
                <canvas className="Squad-Avatar-indicator u-fill"></canvas>
            </div>
        )
    }
}
