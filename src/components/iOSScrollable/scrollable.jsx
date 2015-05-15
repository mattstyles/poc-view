
import React from 'react'
import Rx from 'rx'

export default class IOSScrollable extends React.Component {
    static propTypes = {
        onScroll: React.PropTypes.func
    }

    constructor( props ) {
        super( props )

        // @TODO if no scroll event is passed then probably no need for the observable
        this.subject = new Rx.Subject()
        this.observable = this.subject.throttleLatest( 500 )

        this.observable.subscribe(
            this.props.onScroll || this.onScrollDefault,
            this.onScrollError
        )
    }

    componentWillUnmount() {
        // @TODO should possibly fire an onComplete here too
        this.subject.dispose()
    }

    componentDidMount() {
        this.subject.onNext({
            target: this.refs.scrollable.getDOMNode()
        })
    }

    onScroll( event ) {
        this.subject.onNext({
            target: this.refs.scrollable.getDOMNode()
        })
    }

    onScrollError( error ) {
        console.error( 'IOSScrollable::scroll event error' )
        console.error( error )
    }

    onScrollDefault( event ) {
        // noop
    }

    render() {
        return (
            <div
                ref="scrollable"
                className="iOS-Scroll u-stretchX"
                onScroll={ this.onScroll.bind( this ) }>
                { this.props.children }
            </div>
        )
    }
}
