import {Component} from 'react'
import style from './style.css'

import ICON_ADD from '../../assets/icons/icon-add.svg'

class Button extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        switch(this.props.type) {
            case 'icon':
                return <button className={style.icon}>{this.props.src ? <img src={this.props.src} width="" height="" alt="" /> : 'T'}</button>
            case 'add':
                return <button className={style.add}><img src={ICON_ADD} width="" height="" alt="" /></button>
            default:
                return <button className={style.r}>{this.props.title}</button>
        }
    }
}

export default Button
