
import React from 'react'

import { percToRad } from 'utils/maths'


var raf = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function( cb ) {
        window.setTimeout( cb, 1000 / 60 )
    }
})()


export default class SquadAvatar extends React.Component {
    constructor( props ) {
        super( props )

        this.ctx = null
    }

    dimensions = {
        x: 44,
        y: 44
    }

    componentDidMount() {
        try {
            this.ctx = this.refs.canvas.getDOMNode().getContext( '2d' )
        } catch( err ) {
            // @TODO
            console.error( 'unsupported canvas' )
        }

        let animIndicator = function( perc ) {
            this.renderIndicator( perc )

            if ( perc < this.props.condition ) {
                raf( () => {
                    animIndicator( ++perc )
                })
            }
        }.bind( this )

        animIndicator( 0 )
    }

    renderIndicator( perc ) {
        let start = percToRad( 0 )
        let end = percToRad( perc )

        this.ctx.clearRect( 0, 0, this.dimensions.x, this.dimensions.y )
        this.ctx.beginPath()
        this.ctx.arc( this.dimensions.x / 2, this.dimensions.y / 2, ( this.dimensions.x / 2 ) - 2, start, end )
        this.ctx.lineWidth = 2
        this.ctx.strokeStyle = 'rgb( 68, 208, 104 )'
        this.ctx.stroke()
    }

    render() {
        return (
            <div className="Squad-Avatar">
                <canvas
                    ref="canvas"
                    className="Squad-Avatar-indicator u-fill"
                    width={ this.dimensions.x + 'px' }
                    height={ this.dimensions.y + 'px' }>
                </canvas>
            </div>
        )
    }
}
