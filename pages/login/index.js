import {Component} from 'react'
import {connect} from 'redux-zero/react';
import fn from '../../states/fn';
import Router from 'next/router'
import style from './style.css'
import LOGO from '../../assets/logo.png'

import Default from '../../layouts/default'
import Input from '../../components/input'

import ICON_RIGHT_ARROW from '../../assets/icons/icon-right-arrow.svg'
import ICON_CHECK from '../../assets/icons/icon-check.svg'

const mapToProps = ({ s , d}) => ({ s, d });

class Login extends Component {
    constructor(props) {
        super(props)
        this.handleEmailInputChange = this.handleEmailInputChange.bind(this)
        this.handleEmailKeyDown = this.handleEmailInputKeyDown.bind(this)
        this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this)
        this.handlePasswordInputKeyDown = this.handlePasswordInputKeyDown.bind(this)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleEmailInputChange = e => {
        this.setState({
            email: e.target.value
        })
    }

    handleEmailInputKeyDown = e => {
        if(e.keyCode === 13) {
            e.preventDefault()
            e.stopPropagation()
            this.props.isUserEmail(this.state.email, '')
        }
    }

    handlePasswordInputChange = e => {
        this.setState({
            password: e.target.value
        })
    }

    handlePasswordInputKeyDown = e => {
        if(e.keyCode === 13) {
            e.preventDefault()
            e.stopPropagation()
            this.props.auth(this.props.s.page.email, this.state.password)
        }
    }

    render() {
        //if(this.props.s.login) {
        //    Router.push({ pathname: '/'})
        //}

        return (
            <div className={style.i}>
                <section>
                    <div className={style.loginSec}>
                        <img src={LOGO} width="120" height="" alt="" />
                        <h1><strong>Welcome</strong>,<br/>Log in to continue to<br/>Tokyo Islands.</h1>
                        <div className={this.state.signUp ? style.none : ''}>
                            <Input form={this.props.s.page.email ? 'lid' : null}type="email" placeholder="Username or E-mail" onChange={this.handleEmailInputChange} onKeyDown={this.handleEmailInputKeyDown} value={this.state.email} lastIcon={this.props.s.page.email ? ICON_CHECK : ICON_RIGHT_ARROW} loading={this.props.s.page.emailLoading ? true : false} autoFocus disabled={this.props.s.page.email ? true : false} />
                            {this.props.s.page.email ? <Input type="password" placeholder="Password" onChange={this.handlePasswordInputChange} onKeyDown={this.handlePasswordInputKeyDown} value={this.state.password} form="cap" lastIcon={ICON_RIGHT_ARROW} loading={this.props.s.page.passwordLoading ? true : false} autoFocus/> : null }
                            <p style={{fontSize: 11}}>Did you forget your password? <span className={style.signup}>Reset password</span></p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}


export default connect(mapToProps, fn)(Login)
