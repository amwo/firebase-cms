import {Component} from 'react'
import style from './style.css'

class Switch extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <label className={style.r}>
                <input type="checkbox" />
                <span className={style.slider}></span>
            </label>
        )
    }
}

export default Switch
