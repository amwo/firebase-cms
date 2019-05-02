import Button from '../../components/button'
import {Component} from 'react'
import SAMPLE from '../../assets/avatar-sample.jpg'
import style from './style.css'

class PostAvatar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <section className={style.r}>
                <div className={style.thumb}>
                    <img src={SAMPLE} width="38" height="" alt="" />
                </div>
                <div className={style.info}>
                    <p className={style.nickname}>Atsushi Mori</p>
                    <p className={style.title}>Writer</p>
                </div>
            </section>
        )
    }
}

export default PostAvatar
