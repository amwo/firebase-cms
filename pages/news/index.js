import {Component} from 'react'
import {connect} from 'redux-zero/react';
import fn from '../../states/fn';
import Router from 'next/router'
import style from './style.css'
import LOGO from '../../assets/logo.png'

import Default from '../../layouts/default'
import H1 from '../../components/h1'
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
        return (
            <Default>
                <H1 title="News" />
            </Default>
        )
    }
}


export default connect(mapToProps, fn)(Login)
