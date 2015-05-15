
import { interpolate } from './maths'


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

    orderStops() {
        this.stops.sort( ( a, b ) => {
            return a.pos > b.pos
        })

        return this
    }

    // 0 and 100% stops are necessary
    ensureEnds() {
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
        this.orderStops()
        this.ensureEnds()

        this.stops.forEach( ( stop, stopIndex ) => {
            // Bail if at last stop
            if ( stopIndex === this.stops.length - 1 ) {
                return
            }

            var next = this.stops[ stopIndex + 1 ]
            var diff = next.pos - stop.pos

            for ( let i = 0; i < diff; i++ ) {
                this.colors.push('rgb(' +
                    [
                        interpolate({
                            min: stop.r,
                            max: next.r,
                            scalar: i / diff,
                            floor: true
                        }),
                        interpolate({
                            min: stop.g,
                            max: next.g,
                            scalar: i / diff,
                            floor: true
                        }),
                        interpolate({
                            min: stop.b,
                            max: next.b,
                            scalar: i / diff,
                            floor: true
                        })
                    ].join( ',' ) +
                    ')'
                )
            }
        })

        return this.colors
    }
}

window.Col = ColorInterpolation
