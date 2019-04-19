import {Component} from 'react'
import style from './style.css'
import Button from '../../components/button'
import ICON_ADD from '../../assets/icons/icon-add.svg'


class Tags extends Component {
    constructor(props) {
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.state = {
            input: ''
        }
    }

    handleInputChange = e => {
        this.setState({
            input: e.target.value
        })
    }

    render() {
        return(
            <section className={style.r}>
                <div className={style.input}>
                    <input type="text" value={this.state.value} onChange={this.handleInputChange} placeholder="Add tags" />
                </div>
                <div className={style.result}>
                    <ul>
                        <li>Funny<span><img src={ICON_ADD} width="10" height="" alt="" /></span></li>
                        <li>Thinking<span><img src={ICON_ADD} width="10" height="" alt="" /></span></li>
                        <li>Goods<span><img src={ICON_ADD} width="10" height="" alt="" /></span></li>
                        <li>Interesting<span><img src={ICON_ADD} width="10" height="" alt="" /></span></li>
                        <li>Javascript<span><img src={ICON_ADD} width="10" height="" alt="" /></span></li>
                        <li>Rust<span><img src={ICON_ADD} width="10" height="" alt="" /></span></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Tags
