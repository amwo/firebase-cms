import {Component} from 'react'
import {connect} from 'redux-zero/react';
import fn from '../../states/fn';
import Router from 'next/router'
import style from './style.css'
import LOGO from '../../assets/logo.png'

import Default from '../../layouts/default'
import Input from '../../components/input'

const mapToProps = ({ s , d}) => ({ s, d });

class Login extends Component {
    constructor(props) {
        super(props)
        this.handleEmailInput = this.handleEmailInput.bind(this)
        this.handlePasswordInput = this.handlePasswordInput.bind(this)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleEmailInput = e => {
        if(e.keyCode === 13) {
            e.preventDefault()
            e.stopPropagation()
            this.setState({
                email: e.target.value
            })
            this.props.checkAuthEmail(e.target.value)
        } else {
            this.setState({
                email: e.target.value
            })
        }
    }

    handlePasswordInput = e => {
        if(e.keyCode === 13) {
            e.preventDefault()
            e.stopPropagation()
            this.setState({
                password: e.target.value
            })
            this.props.checkAuthEmailPassword(this.state.email, e.target.value)
            e.target.focus()
        } else {
            this.setState({
                password: e.target.value
            })
        }
    }

    render() {
        return (
            <div className={style.i}>
                <section>
                    <div className={style.loginSec}>
                        <img src={LOGO} width="120" height="" alt="" />
                        <h1><strong>Welcome</strong>,<br/>Log in to continue to<br/>Tokyo Islands.</h1>
                        <div className={this.state.signUp ? style.none : ''}>
                            <form name="login">
                                <Input type="email" placeholder="Username or E-mail" onChange={this.handleEmailInput} value={this.state.email}/>
                            </form>
                            <p style={{fontSize: 11}}>Did you forget your password? <span className={style.signup}>Reset password</span></p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}


export default connect(mapToProps, fn)(Login)
