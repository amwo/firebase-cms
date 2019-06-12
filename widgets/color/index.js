import {Component} from 'react'
import style from './style.css'

class Color extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <article>
                <div className="color"></div>
            </article>
        )
    }
}

export default Color
