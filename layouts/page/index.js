import {Component} from 'react'
import Header from '../../widgets/header'
import H1 from '../../components/h1'
import Navigations from '../../widgets/navigations'

import style from './style.css'

class Page extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <section className={style.r}>
                <header>
                    <div className={style.in}>
                    <p className={style.cat}>Hevanture for</p>
                    <H1 title={this.props.title} />
                    </div>
                </header>
                {this.props.children}
            </section>
        )
    }
}

export default Page
