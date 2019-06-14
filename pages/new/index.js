import { Router, withRouter } from 'next/router'

import {Component} from 'react'
import Default from '../../layouts/default'
import H1 from '../../components/h1'
import LOGO from '../../assets/logo.png'
import PostEditor from '../../widgets/postEditor'
import {connect} from 'redux-zero/react';
import fn from '../../states/fn';
import style from './style.css'

const mapToProps = ({ s , d}) => ({ s, d });

class New extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        //     this.props.visibilityNav(true)
    }

    render() {
        //console.log(this.props.router.query)
        return <PostEditor />
    }
}


export default withRouter(connect(mapToProps, fn)(New))
