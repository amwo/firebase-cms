import {Component} from 'react'
import style from './style.css'

class H1 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <h1 className={style.r}>{this.props.title}</h1>
    }
}

export default H1
