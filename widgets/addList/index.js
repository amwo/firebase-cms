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
        let List
        if(this.props.f.settings.collections) {
            List = Object.keys(this.props.f.settings.collections).map((k, i) => {
                return <li onClick={this.toggleAddList} key={i}><Link href={{pathname: '/new', query: {title: 'post'}}} as={`/new/post`}><a>{this.props.f.settings.collections[k].title}</a></Link></li>
            })
        }

        return(
            <div className={style.r} style={this.props.s.visibilities.add ? { right: 65 } : { right: '-100%' }}>
                <nav>
                    <ul>
                            { this.props.f.settings.collections ? List : <li>Loading</li>}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default connect(mapToProps, fn)(AddList)
