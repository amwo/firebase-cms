import {Component} from 'react'
import LOGO from '../../assets/logo.png'
import style from './style.css'

class Loading extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={style.r}>
                <div>
                    <img src={LOGO} width="120" height="" alt="" />
                    <p>Loading ...</p>
                </div>
            </div>
        )
    }
}

export default Loading
