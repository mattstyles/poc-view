
// Converts percentages into radians
export function percToRad( perc ) {
    if ( perc === 0 ) {
        return 1.5 * Math.PI
    }
    return ( ( 2 * ( perc / 100 ) ) + 1.5 ) * Math.PI
}
