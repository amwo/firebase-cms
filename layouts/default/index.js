import {Component} from 'react'
import Header from '../../widgets/header'
import style from './style.css'
import Navigations from '../../widgets/navigations'

class Default extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <Header />
                <section className={style.container}>
                    <div className={style.in}>
                        <aside>
                            <Navigations />
                        </aside>
                        <main className={style.r}>
                            {this.props.children}
                        </main>
                    </div>
                </section>
            </div>
        )
    }
}

export default Default
