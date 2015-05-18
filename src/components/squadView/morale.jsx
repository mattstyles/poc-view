
import React from 'react'
import AnimationFrame from 'animation-frame'

import configStore from 'stores/config'
import { moraleGradient } from 'constants/gradients'
import Icon from 'icon/icon'

// Static raf
var raf = new AnimationFrame()


export default class MoraleIndicator extends React.Component {
    static propTypes = {
        morale: React.PropTypes.number.isRequired
    }

    /**
     * Initial state
     */
    state = {
        morale: 0
    }

    /*
     * Denotes if the animation has started, animation is one-off
     * so this never becomes false again
     */
    animating = false

    /**
     * @constructs
     */
    constructor( props ) {
        super( props )

        if ( !configStore.gameOptions.get( 'uiAnimations' ) ) {
            // Dont trigger a refresh, just set it
            this.state.morale = this.props.morale
        }
    }

    /**
     * Triggers the animation
     * This animation logic and state could be negated using css transitions
     * but you'd lose the background gradient (red-green rather than move
     * through the specified gradient)
     */
    startAnimation() {
        let updateAnimation = function( perc ) {
            this.setState({
                morale: ( perc / 100 ) * this.props.morale
            })

            if ( perc < 100 ) {
                raf.request( () => {
                    updateAnimation( perc = perc + 2 )
                })
            }
        }.bind( this )

        updateAnimation( 0 )
    }

    render() {
        // If the re-render is due to visibility and we havent animated
        // before then kick into next tick
        if ( this.props.visible && !this.animating && configStore.gameOptions.get( 'uiAnimations' ) ) {
            this.animating = true
            setImmediate( () => {
                this.startAnimation()
            })
        }

        let style = {
            background: moraleGradient[ ~~this.state.morale ]
        }

        // Morale rotation goes from 0 (straight up) to 180 (down) clockwise
        return (
            <div className="Squad-Avatar-morale" style={ style }>
                <Icon
                    icon="ARROW_POINTER"
                    rotation={ -180 * ( this.state.morale / 100 ) + 90 }
                />
            </div>
        )
    }
}
