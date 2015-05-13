
import React from 'react'


export default class IOSHeader extends React.Component {
    constructor( props ) {
        super( props )
    }

    render() {

        var items = []
        for ( var i = 0; i < 60; i++ ) {
            items.push( <div>{ i }</div> )
        }

        return (
            <div className="iOS-Header u-stretchX">
                <span className="iOS-Header-navigation u-pullLeft">Label</span>
                <span className="iOS-Header-title u-stretchX u-textCenter">Squad</span>
                <span className="iOS-Header-option u-pullRight"><svg className="iOS-Header-icon" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="5.0 -10.0 100.0 135.0"><path d="M14.283 36.868c-7.036 0-12.738 5.703-12.738 12.738s5.702 12.738 12.738 12.738S27.02 56.64 27.02 49.606s-5.702-12.738-12.737-12.738zm0 20.38c-4.222 0-7.643-3.422-7.643-7.642s3.42-7.643 7.643-7.643c4.22 0 7.642 3.422 7.642 7.643s-3.42 7.643-7.642 7.643zM49.95 36.87c-7.038 0-12.74 5.703-12.74 12.738s5.703 12.738 12.74 12.738c7.035 0 12.736-5.703 12.736-12.738S56.984 36.868 49.95 36.868zm0 20.38c-4.224 0-7.645-3.422-7.645-7.642s3.42-7.643 7.644-7.643c4.22 0 7.64 3.422 7.64 7.643s-3.42 7.643-7.64 7.643zM85.61 36.87c-7.034 0-12.737 5.703-12.737 12.738s5.703 12.738 12.737 12.738S98.35 56.64 98.35 49.606s-5.704-12.738-12.738-12.738zm0 20.38c-4.222 0-7.643-3.422-7.643-7.642s3.42-7.643 7.642-7.643 7.643 3.422 7.643 7.643-3.42 7.643-7.643 7.643z"/></svg></span>
            </div>
        )
    }
}
