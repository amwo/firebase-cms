import {Component} from 'react'
import style from './style.css'
import LOGO from '../../assets/logo.png'
import {connect} from 'redux-zero/react';
import fn from '../../states/fn';
import firebase from 'firebase/app'
import 'firebase/auth'
import Router from 'next/router';

const mapToProps = ({ s , d}) => ({ s, d });
class Loading extends Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate() {
        this.props.s.login ? Router.push(Router.route) : Router.push('/login')
    }

    render() {
        return(
            <div className={style.r}>
                <div>
                    <img src={LOGO} width="120" height="" alt="" />
                    <p>Loading ...</p>
                </div>
            </div>
        )
    }
}

export default connect(mapToProps, fn)(Loading)
