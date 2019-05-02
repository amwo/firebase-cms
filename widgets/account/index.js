import style from './style.css'
import {Component} from 'react'
import {connect} from 'redux-zero/react'
import fn from '../../states/fn'

const mapToProps = ({ s , d}) => ({ s, d })

class Account extends Component {
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
            <div className={style.r}>
                {this.props.s.current.user ? <img onClick={this.on} className={style.thumbnail} src={this.props.d[this.props.s.current.user].thumbnail} width="33" height="33" alt="" /> : null}
                <div className={style.list} style={this.state.visibility ? {display: 'block'} : {display: 'none'}}>
                    <ul>
                        <li>Profile</li>
                        <li onClick={this.props.signOut} className={style.logout}>Logout</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect(mapToProps, fn)(Account)
