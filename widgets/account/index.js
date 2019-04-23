import {Component} from 'react'
import style from './style.css'
import {connect} from 'redux-zero/react'
import fn from '../../states/fn'

const mapToProps = ({ s , d}) => ({ s, d })

class Account extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={style.r}>
                {this.props.s.current.user ? <img className={style.thumbnail} src={this.props.d[this.props.s.current.user].thumbnail} width="33" height="33" alt="" /> : null}
                <div className={style.list}>
                    <ul>
                        <li>Profile</li>
                        <li></li>
                        <li className={style.logout}>Logout</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect(mapToProps, fn)(Account)
