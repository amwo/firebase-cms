import {Component} from 'react'
import {connect} from 'redux-zero/react'
import Link from 'next/link'
import style from './style.css'
import fn from '../../states/fn'

const mapToProps = ({s , d, f}) => ({s, d, f})

class AddList extends Component {
    constructor(props) {
        super(props)
        this.on = this.on.bind(this)
        this.state = {
            visibility: false
        }
    }

    on = () => {
        this.setState({
            visibility: !this.state.visibility
        })
    }

    render() {
        return(
            <div class={style.r} style={this.props.s.visibilities.add ? { right: 65 } : { right: '-100%' }}>
                <nav>
                    <ul>
                        <li><Link href={`/new?title=post}`} as={`/new/post`}><a>Blog</a></Link></li>
                        <li>News</li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default connect(mapToProps, fn)(AddList)
