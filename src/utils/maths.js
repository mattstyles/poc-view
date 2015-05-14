
/**
 * Converts a percentage into a radian
 * Assumes 0 is straight up (12 oclock)
 * @param perc <Float 0...1> the percentage
 */
export function percToRad( perc: float ) {
    if ( perc <= 0 || perc >= 1 ) {
        return 1.5 * Math.PI
    }
    return ( ( 2 * ( perc ) ) + 1.5 ) * Math.PI
}
