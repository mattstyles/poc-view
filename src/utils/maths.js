
/**
 * Converts a percentage into a radian
 * Assumes 0 is straight up (12 oclock)
 * @param perc <Float 0...1> the percentage
 */
export function percToRad( perc: float ) {
    if ( perc <= 0 ) {
        return 1.5 * Math.PI
    }
    if ( perc >= 1 ) {
        return 3.5 * Math.PI
    }

    return ( ( 2 * ( perc ) ) + 1.5 ) * Math.PI
}


/**
 * Clamps value to a range
  * @param opts <Object>
  *   @param value <Number> value to clamp
  *   @param min <Number> lower bound
  *   @param max <Number> upper bound
 */
export function clamp({ value = 0, min = 0, max = 1 }) {
    return value < min
        ? min
        : value > max
            ? max
            : value
}


/**
 * Uses a scalar to interpolate between two values
 * @param opts <Object>
 *   @param min <Number> lower bound
 *   @param max <Number> upper bound
 *   @param scalar <Float 0...1> interpolation scalar
 */
export function interpolate({ min = 0, max = 1, scalar = .5 }) {
    return min + ( ( max - min ) * clamp({ value: scalar, min: 0, max: 1 }) )
}
