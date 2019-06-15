import {Component} from 'react'
import Link from 'next/link'
import style from './style.css'

class Article extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <article className={style.s}>
                <Link href={`/post?id=${this.props.id}`} as={`/news/${this.props.id}`}>
                    <a>
                        <div className={style.wrap}>
                            <div className={style.thumb}>
                            </div>
                            <div className={style.cnt}>
                                <h2>Kozushima Island’s Perfect Guide: Must-see spots, Activities, Accommodation and Access</h2>
                                <p className={style.date}>April 13, 2019</p>
                            </div>
                        </div>
                    </a>
                </Link>
            </article>
        )
    }
}

export default Article
