import {Component} from 'react'
import style from './style.css'
import Button from '../../components/button'

class AddNavigation extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <section className={style.r}>
                <nav>
                    <ul>
                        <li></li>
                        <li>li</li>
                        <li></li>
                    </ul>
                </nav>
            </section>
        )
    }
}

export default AddNavigation
