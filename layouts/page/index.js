import {Component} from 'react'
import Header from '../../widgets/header'
import Navigations from '../../widgets/navigations'
import H1 from '../../components/h1'
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
                    <H1 title={this.props.title} />
                    </div>
                </header>
                {this.props.children}
            </section>
        )
    }
}

export default Page
