
import Immutable from 'immutable'
import EventEmitter from 'eventemitter3'
import qs from 'qs'

class ConfigStore extends EventEmitter {
    constructor() {
        super()

        var queryParams = qs.parse( window.location.search.replace( /^\?/, '' ) )

        this.gameOptions = new Immutable.Map({
            uiAnimations: false
        })

        Object.keys( queryParams ).forEach( key => {
            this.gameOptions = this.gameOptions.set( key, queryParams[ key ] === 'true' )
        })
    }

}

export default new ConfigStore()
