import {Component} from 'react'
import style from './style.css'
import Button from '../../components/button'

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <header className={style.r}>
                <Button type="icon"/>
            </header>
        )
    }
}

export default Header
