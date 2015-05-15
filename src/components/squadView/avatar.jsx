
import React from 'react'
import AnimationFrame from 'animation-frame'

import { percToRad } from 'utils/maths'


var raf = new AnimationFrame()


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
        this.ctx.arc( this.dimensions.x / 2, this.dimensions.y / 2, ( this.dimensions.x / 2 ) - 2, start, end )
        this.ctx.lineWidth = 4
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
                <img
                    className="Squad-Avatar-image"
                    src={ this.props.url }
                    width={ this.dimensions.x }
                    height={ this.dimensions.y }
                    style={{ padding: 4 }}
                />
            </div>
        )
    }
}
