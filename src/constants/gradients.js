/**
 * Cache of interpolated gradient colors
 * Array is 0...100
 */

import ColorInterpolation from 'utils/gradient'

export default {
    // Red, yellow, green - bottom heavy
    conditionGradient: new ColorInterpolation()
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
        .make(),

    // Red, yellow, green - distributed
    moraleGradient: new ColorInterpolation()
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
            pos: 30
        })
        .addStop({
            r: 220,
            g: 220,
            b: 84,
            pos: 60
        })
        .addStop({
            r: 68,
            g: 208,
            b: 104,
            pos: 100
        })
        .make()
}
