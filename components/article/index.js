import {Component} from 'react'
import style from './style.css'

class Article extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <article className={style.s}>
                <div className={style.wrap}>
                    <div className={style.thumb}>
                    </div>
                    <div className={style.cnt}>
                        <h2>Kozushima Island’s Perfect Guide: Must-see spots, Activities, Accommodation and Access</h2>
                        <p className={style.date}>April 13, 2019</p>
                    </div>
                </div>
            </article>
        )
    }
}

export default Article
