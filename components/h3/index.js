import {Component} from 'react'
import style from './style.css'

class H3 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <h3 className={style.r}>{this.props.title}</h3>
    }
}

export default H3
