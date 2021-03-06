import style from './style.css'
import Button from '../../components/button'
import Account from '../../widgets/account'
import {Component} from 'react'

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <header className={style.r}>
                <div>
                <Button type="icon"/>
                <div className={style.account}>
                <Account />
                </div>
            </div>
            </header>
        )
    }
}

export default Header
