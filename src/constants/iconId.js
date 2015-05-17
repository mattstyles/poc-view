
const ICONS = {
    _default: '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"></svg>',
    ARROW_SLANTED: '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path d="M23.528 46.444c-2 2-2 5.223 0 7.112L68.306 98.33c2.22 2.226 5.776 2.226 8 0 2.22-2.22 2.22-5.776 0-7.996l-36.78-36.777c-2-2-2-5.224 0-7.112l36.78-36.778c2.222-2.222 2.222-5.778 0-8-2.223-2.222-5.78-2.222-8 0L23.53 46.444z"/></svg>'
}

export default function( id ) {
    try {
        return ICONS[ id ]
    } catch( err ) {
        return ICONS._default
    }
}
