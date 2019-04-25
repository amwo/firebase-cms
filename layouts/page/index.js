import {Component} from 'react'
import Header from '../../widgets/header'
import style from './style.css'
import Navigations from '../../widgets/navigations'
import H1 from '../../components/h1'

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
