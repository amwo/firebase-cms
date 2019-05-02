import {Component} from 'react'
import ICON_DOWN_ARROW from '../../assets/icons/icon-down-arrow.svg'
import style from './style.css'

class Select extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        switch(this.props.type) {
            case 'list':
                switch(this.props.size) {
                    case 'l':
                        return (
                            <div className={style.listL}>
                                <p className={style.value}>{this.props.value}<i><img src={ICON_DOWN_ARROW} width="11" height="auto" alt="icon" /></i></p>
                                <div className={style.list}>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                        )
                    case 'm':
                        return (
                            <div className={style.listM}>
                                <p className={style.value}>{this.props.value}<i><img src={ICON_DOWN_ARROW} width="9" height="auto" alt="icon" /></i></p>
                                <div className={style.list}>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                        )
                    case 's':
                        return (
                            <div>
                                <p>{this.props.value}</p>
                                <div>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                        )
                    default:
                        return (
                            <p>default</p>
                        )
                }
            default:
                return <p>default</p>
        }
    }
}

export default Select
