import fs from 'fs'
import path from 'path'
import glob from 'glob'
import minimist from 'minimist'

let argv = minimist( process.argv.slice( 2 ) )
let globpath = argv.tests
let outfile = fs.createWriteStream( argv.output )

glob( globpath, ( err, files ) => {
    if ( err ) {
        throw new Error( err )
    }

    files.forEach( file => {
        outfile.write( '\nimport \'' + path.resolve( file ) + '\'' )
    })
})
