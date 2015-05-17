
import EventEmitter from 'eventemitter3'

var names = {
    first: [
        'Dave',
        'Matt',
        'Steve',
        'Reggie',
        'Leon',
        'Gavin',
        'Elliott',
        'Peter',
        'Simon',
        'Ben',
        'Richard',
        'Paul',
        'Saul',
        'James',
        'Jamal',
        'Iain',
        'Alan'
    ],

    second: [
        'Walker',
        'Albertson',
        'Clancy',
        'Lewis',
        'Jones',
        'Taylor',
        'Shelley',
        'Selby',
        'Hopper',
        'Cooper',
        'Ellis',
        'Mathies',
        'Drake',
        'Gold',
        'Wilkins',
        'Gilbert',
        'Petrie',
        'Locke',
        'Dark',
        'Felis',
        'Mannerson',
        'Kellock',
        'Arran',
        'McTavernish',
        'MacDonald',
        'Turner',
        'Regis',
        'Christie',
        'Lawe',
        'Moore',
        'Colbert'
    ]
}

class Player {
    constructor() {
        this.name = {
            first: names.first[ ~~(Math.random() * names.first.length )],
            second: names.second[ ~~(Math.random() * names.second.length )]
        }
        this.url = 'https://graph.facebook.com/' + 100 + ~~( Math.random() * 20000 ) + '/picture?width=60&height=60'
        this.form = [ 0, 0, 0, 0, 0 ].map( () => {
            return Math.random() * 10
        })
        this.rating = ( Math.random() * 9 ) + 1
        this.ability = ~~(( Math.random() * 89 ) + 10 )
        this.morale = ( Math.random() * 100 )
        this.condition = ( Math.random() * 89 ) + 10
        this.position = ~~(( Math.random() * 14 ) + 1 )
        this.selected = Math.random > .5 ? true : false
    }
}


class PlayerStore extends EventEmitter {
    constructor() {
        super()

        this.players = []

        for ( let i = 0; i < 60; i++ ) {
            this.players.push( new Player() )
        }
    }



}

export default new PlayerStore()
