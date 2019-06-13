import {Component} from 'react'
//import style from './style.css'

class Div extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        switch(this.props.type) {
            case 'm':
                return (
                    <div className="m">
                            {this.props.children}
                        <style jsx>
                            {`
                                .m {
                                    margin: 40px 22px 0;
                                }
                            `}
                        </style>
                    </div>
                )
            case 's':
                return (
                    <div className="s">
                            {this.props.children}
                        <style jsx>
                            {`
                                .s {
                                    margin: 20px 0 0;
                                }
                            `}
                        </style>
                    </div>
                )
            default:
                return (
                    <div className="d">
                            {this.props.children}
                        <style jsx>
                            {`
                                .d {
                                    margin: 0
                                }
                            `}
                        </style>
                    </div>
                )
        }
    }
}

export default Div
