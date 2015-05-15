
import React from 'react'
import AnimationFrame from 'animation-frame'

import { percToRad } from 'utils/maths'
import ColorInterpolation from 'utils/gradient'

// Create red, yellow, green color values
var colors = new ColorInterpolation()
    .addStop({
        r: 131,
        g: 17,
        b: 22,
        pos: 0
    })
    .addStop({
        r: 208,
        g: 68,
        b: 74,
        pos: 60
    })
    .addStop({
        r: 220,
        g: 220,
        b: 84,
        pos: 80
    })
    .addStop({
        r: 68,
        g: 208,
        b: 104,
        pos: 100
    })
    .make()



// Static raf
var raf = new AnimationFrame()

// Helper for grabbing colors
function getColor( perc: number ) {
    // return colorInterpolation[ ~~( perc * 100 ) ]
    return colors[ ~~( perc * 100 ) ]
}


/**
 * SquadAvatar
 * Holds the avatar and circular indicator
 * @class
 */
export default class SquadAvatar extends React.Component {
    static propTypes = {
        condition: React.PropTypes.number,
        url: React.PropTypes.string
    }

    static defaultProps = {
        condition: 100,
        url: ''
    }

    constructor( props ) {
        super( props )

        this.ctx = null

        try {
            this.dimensions = {
                x: this.dimensions.x * window.devicePixelRatio,
                y: this.dimensions.y * window.devicePixelRatio
            }
            this.indicatorStrokeWidth = this.indicatorStrokeWidth * window.devicePixelRatio
        } catch( err ) {
            console.warn( 'window.devicePixelRatio unsupported' )
        }
    }

    dimensions = {
        x: 56,
        y: 56
    }

    indicatorStrokeWidth = 4

    componentDidMount() {
        var canvas = this.refs.canvas.getDOMNode()

        try {
            this.ctx = canvas.getContext( '2d' )
        } catch( err ) {
            // @TODO
            console.error( 'unsupported canvas' )
        }
    }

    startAnimation() {
        let animIndicator = function( perc ) {
            this.renderIndicator( perc / 100 )

            if ( perc < this.props.condition ) {
                raf.request( () => {
                    animIndicator( perc = perc + 2 )
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
        this.ctx.arc( this.dimensions.x / 2, this.dimensions.y / 2, ( this.dimensions.x / 2 ) - ( this.indicatorStrokeWidth / 2 ), start, end )
        this.ctx.lineWidth = this.indicatorStrokeWidth
        this.ctx.strokeStyle = getColor( perc )
        this.ctx.stroke()
    }

    render() {
        if ( this.props.visible ) {
            this.startAnimation()
        }

        return (
            <div className="Squad-Avatar">
                <canvas
                    ref="canvas"
                    className="Squad-Avatar-indicator u-fill"
                    width={ this.dimensions.x + 'px' }
                    height={ this.dimensions.y + 'px' }>
                </canvas>
                <img
                    className="Squad-Avatar-image u-fill"
                    src={ this.props.url }
                    width={ this.dimensions.x }
                    height={ this.dimensions.y }
                    style={{ padding: 4 }}
                />
            </div>
        )
    }
}
