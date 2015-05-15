
import React from 'react'
import AnimationFrame from 'animation-frame'

import { percToRad, interpolate } from 'utils/maths'

// Static raf
var raf = new AnimationFrame()

// Generate interpolated color values
var colorInterpolation = (function() {
    let col = [ 0, 0, 0 ]
    let start = [ 208, 68, 74 ]
    let middle = [ 220, 220, 84 ]
    let end = [ 68, 208, 104 ]
    let colors = []

    function map( iteration, startCol, endCol ) {
        return col.map( ( val, index ) => {
            return interpolate({
                min: startCol[ index ],
                max: endCol[ index ],
                scalar: iteration / 49,
                floor: true
            })
        })
    }

    // Add lower interpolation
    for ( let i = 0; i <= 49; i++ ) {
        colors.push( 'rgb(' + map( i, start, middle ).join(',') + ')')
    }

    // Add upper interpolation
    for ( let i = 0; i <= 49; i++ ) {
        colors.push( 'rgb(' + map( i, middle, end ).join(',') + ')')
    }

    return colors
})()

// Helper for grabbing colors
function getColor( perc: number ) {
    return colorInterpolation[ ~~( perc * 100 ) ]
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
