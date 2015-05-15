import path from 'path'
import tape from 'tape'

import { percToRad,
         interpolate,
         clamp } from '../maths'

// Compass points, regarding points on a circle
var up = 1.5 * Math.PI
var fullup = 3.5 * Math.PI
var right = 2 * Math.PI
var down = 2.5 * Math.PI
var left = 3 * Math.PI

tape( 'Percentage to Radians :: ' + path.basename( __filename ), t => {
    t.plan( 7 )

    t.equal( percToRad( -1 ), up, 'Negative value are treated as 0' )
    t.equal( percToRad( 2 ), fullup, '> 1 values are treated as 1' )

    t.equal( percToRad( 0 ), up, '0 is up' )
    t.equal( percToRad( 1 ), fullup, '1 is up' )
    t.equal( percToRad( .25 ), right, '.25 should be on the right' )
    t.equal( percToRad( .5 ), down, '.5 should be on the bottom' )
    t.equal( percToRad( .75 ), left, '.75 should be on the left' )
})


tape( 'Interpolate :: ' + path.basename( __filename ), t => {
    t.plan( 5 )

    t.equal( interpolate( { min: 0, max: 20 } ), 10, 'interpolate should have default parameters' )
    t.equal( interpolate( { min: -10, max: 10, scalar: .25 } ), -5, 'interpolate should handle negative numbers' )
    t.equal( interpolate( { min: 0, max: 1, scalar: .5 } ), .5, '0, 1, .5 should equal .5' )
    t.equal( interpolate( { min: 0, max: 10, scalar: .25 } ), 2.5, '0, 10, .25 should equal 2.5' )
    t.equal( interpolate( { scalar: 2 } ), 1, 'interpolate should clamp scalar 0...1' )
})


tape( 'Interpolate :: ' + path.basename( __filename ), t => {
    t.plan( 8 )

    t.equal( clamp({ value: .5 }), .5, 'clamp should have default parameters' )
    t.equal( clamp({ value: 2, min: 0, max: 10 }), 2, 'clamp should return a value within the range' )
    t.equal( clamp({ value: .75, min: 0, max: 1 }), .75, 'clamp should work with floats' )
    t.equal( clamp({ value: 2, min: 0, max: 1 }), 1, 'clamp should clamp to the upper bound' )
    t.equal( clamp({ value: 2, min: 10, max: 100 }), 10, 'clamp should clamp to the lower bound' )
    t.equal( clamp({ value: 20, min: -10, max: 10 }), 10, 'clamp should work with negatives' )
    t.equal( clamp({ value: -50, min: -10, max: 10 }), -10, 'clamp should clamp to a lower negative bound' )
    t.equal( clamp({ value: 0, min: -20, max: -10 }), -10, 'clamp should clamp to an upper negative bound' )
})
