import {Component} from 'react'
import style from './style.css'

class Div extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        switch(this.props.type) {
            case 'm':
            return <div className={style.m}>{this.props.children}</div>
                default:
            return <div className={style.d}>{this.props.children}</div>
        }
    }
}

export default Div
