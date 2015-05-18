
import EventEmitter from 'eventemitter3'

class ConfigStore extends EventEmitter {
    constructor() {
        super()
        this.gameOptions = {
            uiAnimations: false
        }
    }


}

export default new ConfigStore()
