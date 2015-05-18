
import Immutable from 'immutable'
import EventEmitter from 'eventemitter3'
import qs from 'qs'

class ConfigStore extends EventEmitter {
    constructor() {
        super()

        // Create gameOptions as immutable and merge with immutable map of
        // query parameter options
        this.gameOptions = new Immutable.Map({
            uiAnimations: false
        }).merge( new Immutable.Map( qs.parse( window.location.search.replace( /^\?/, '' ) ) )
            .map( ( key, value ) => {
                // Casts from string to boolean
                return /true|false/.test( key )
                    ? key === 'true'
                    : key
            }))
    }

}

export default new ConfigStore()
