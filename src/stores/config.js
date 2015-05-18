
import EventEmitter from 'eventemitter3'
import qs from 'qs'

class ConfigStore extends EventEmitter {
    constructor() {
        super()

        var queryParams = qs.parse( window.location.search.replace( /^\?/, '' ) )

        this.gameOptions = Object.assign({
            uiAnimations: false
        }, {
            uiAnimations: queryParams.uiAnimations.toLowerCase() === 'true'
        })
    }


}

export default new ConfigStore()
