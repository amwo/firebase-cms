import Button from '../../components/button'
import {Component} from 'react'
import ICON_ADD from '../../assets/icons/icon-add.svg'
import style from './style.css'

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
        if(this.props.s.post) {
            const Items = this.props.s.post.tags.map((s,i)=>{
                return <li>{s}<span><img src={ICON_ADD} width="10" height="" alt="" /></span></li>
            })
        } else {
            const Items = null
        }

        return(
            <section className={style.r}>
                <div className={style.input}>
                    <input type="text" value={this.state.value} onChange={this.handleInputChange} placeholder="Add tags" />
                </div>
                <div className={style.result}>
                    <ul>
                            {Items}
                    </ul>
                </div>
            </section>
        )
    }
}

export default Tags
