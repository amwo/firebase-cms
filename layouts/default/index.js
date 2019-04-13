import {Component} from 'react'
import Header from '../../widgets/header'
import style from './style.css'

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
                        {this.props.children}
                    </div>
                </section>
            </div>
        )
    }
}

export default Default
