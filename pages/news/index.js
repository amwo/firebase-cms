import {Component} from 'react'
import {connect} from 'redux-zero/react';
import fn from '../../states/fn';
import { Router, withRouter } from 'next/router'
import style from './style.css'
import LOGO from '../../assets/logo.png'
import PostEditor from '../../widgets/postEditor'

import Default from '../../layouts/default'
import H1 from '../../components/h1'

const mapToProps = ({ s , d}) => ({ s, d });

class News extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.visibilityNav(true)
    }

    render() {
        //console.log(this.props.router.query)
        return <PostEditor />
    }
}


export default withRouter(connect(mapToProps, fn)(News))
