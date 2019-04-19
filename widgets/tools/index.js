import {Component} from 'react'
import style from './style.css'
import Button from '../../components/button'

class Tools extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={style.r}>
                <div className={style.toolbox}>
                    <button>I</button>
                    <button>B</button>
                </div>
                <div className={this.edit}>
                    <p>{this.props.children}</p>
                </div>
            </div>
        )
    }
}

export default(Tools)
