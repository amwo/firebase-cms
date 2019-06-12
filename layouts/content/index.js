import {Component} from 'react'
import style from './style.css'

class Content extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <section className={style.r}>
                    {this.props.children}
            </section>
        )
    }
}

export default Content
