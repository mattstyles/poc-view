
import React from 'react'
import AnimationFrame from 'animation-frame'

import configStore from 'stores/config'
import { percToRad, clamp } from 'utils/maths'
import { conditionGradient } from 'constants/gradients'

import Icon from 'icon/icon'
import Morale from './morale'

// Static raf
var raf = new AnimationFrame()

// Helper for grabbing colors
function getColor( perc: number ) {
    // return colorInterpolation[ ~~( perc * 100 ) ]
    perc = clamp({
        value: perc,
        min: 0,
        max: 99
    })

    return conditionGradient[ ~~( perc * 100 ) ]
}


/**
 * SquadAvatar
 * Holds the avatar and circular indicator
 * @class
 */
export default class SquadAvatar extends React.Component {
    static propTypes = {
        condition: React.PropTypes.number,
        morale: React.PropTypes.number,
        position: React.PropTypes.number,
        url: React.PropTypes.string
    }

    static defaultProps = {
        condition: 100,
        morale: 99,
        position: 0,
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

        this.checkAnimation()
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

    checkAnimation() {
        if ( !configStore.gameOptions.uiAnimations ) {
            this.renderIndicator( this.props.condition / 100 )
            return
        }
    }

    render() {
        if ( this.props.visible && configStore.gameOptions.uiAnimations ) {
            this.startAnimation()
        }

        let positionStyle = {
            background: this.props.selected ? 'rgb( 68, 208, 104 )' : '#c0c0c0'
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
                <Morale
                    morale={ this.props.morale }
                    visible={ this.props.visible }
                />
                <div className="Squad-Avatar-position" style={ positionStyle }>{ this.props.position }</div>
            </div>
        )
    }
}
