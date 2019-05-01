import {Component} from 'react'
import {connect} from 'redux-zero/react';
import fn from '../../states/fn';
import Router from 'next/router'
import style from './style.css'
import LOGO from '../../assets/logo.png'

import H1 from '../../components/h1'
import Default from '../../layouts/default'

const mapToProps = ({ s , d}) => ({ s, d });

class Settings extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.visibilityNav(false)
    }

    render() {
        return <H1 title="Settings" />
    }
}


export default connect(mapToProps, fn)(Settings)
