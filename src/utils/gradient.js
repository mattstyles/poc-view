
import { interpolate } from './maths'

/**
 * Interpolates between color stops and caches an array of values
 * @class
 *
 * @description
 * Given a number of stops, make() creates an 100 value array of interpolated
 * values.
 */
export default class ColorInterpolation {
    constructor() {
        this.stops = []
        this.colors = []

        return this
    }

    addStop( stop ) {
        this.stops.push( stop )

        return this
    }

    _orderStops() {
        this.stops.sort( ( a, b ) => {
            return a.pos > b.pos
        })

        return this
    }

    // 0 and 100% stops are necessary
    _ensureEnds() {
        if ( this.stops[ 0 ].pos !== 0 ) {
            let start = Object.make( Object, this.stops[ 0 ] )
            start.pos = 0
            this.stops.unshift( start )
        }

        if ( this.stops[ this.stops.length - 1 ].pos !== 100 ) {
            let end = Object.make( Object, this.stops[ this.stops.length - 1 ] )
            end.pos = 100
            this.stops.push( end )
        }

        return this
    }

    make() {
        // Set up stops
        this._orderStops()
        this._ensureEnds()

        let rgb = [ 'r', 'g', 'b' ]

        // Create color cache
        this.stops.forEach( ( stop, stopIndex ) => {
            // Bail if at last stop
            if ( stopIndex === this.stops.length - 1 ) {
                return
            }

            let next = this.stops[ stopIndex + 1 ]
            let diff = next.pos - stop.pos

            // Thunkify calculating the color interpolation
            // Returns the fn to pass to Array.map which calcs interpolation
            function mapColorValue( scalar ) {
                return function( col ) {
                    return interpolate({
                        min: stop[ col ],
                        max: next[ col ],
                        scalar: scalar,
                        floor: true
                    })
                }
            }

            for ( let i = 0; i < diff; i++ ) {
                this.colors.push('rgb(' + rgb.map( mapColorValue( i / diff ) ).join( ',' ) + ')' )
            }
        })

        return this.colors
    }
}

window.Col = ColorInterpolation
