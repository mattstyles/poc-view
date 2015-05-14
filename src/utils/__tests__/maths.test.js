import path from 'path'
import tape from 'tape'

import { percToRad } from '../maths'

// Compass points, regarding points on a circle
var up = 1.5 * Math.PI
var right = 0 * Math.PI
var down = .5 * Math.PI
var left = 1 * Math.PI

tape( 'Percentage to Radians :: ' + path.basename( __filename ), t => {
    t.plan( 7 )

    t.equal( percToRad( -1 ), up, 'Negative value are treated as 0' )
    t.equal( percToRad( 2 ), up, '> 1 values are treated as 1' )

    t.equal( percToRad( 0 ), up, '0 is up' )
    t.equal( percToRad( 1 ), up, '1 is up' )
    t.equal( percToRad( .25 ), right, '.25 should be on the right' )
    t.equal( percToRad( .5 ), down, '.5 should be on the bottom' )
    t.equal( percToRad( .75 ), left, '.75 should be on the left' )
})
