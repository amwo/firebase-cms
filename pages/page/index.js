import { Router, withRouter } from 'next/router'

import {Component} from 'react'
import Default from '../../layouts/default'
import H1 from '../../components/h1'
import LOGO from '../../assets/logo.png'
import PostEditor from '../../widgets/postEditor'
import {connect} from 'redux-zero/react';
import fn from '../../states/fn';
import style from './style.css'
import P from '../../layouts/page';

const mapToProps = ({s , d, f}) => ({s, d, f});

class Page extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.visibilityNav(true)
    }
    render() {
        return (
            <P title={this.props.router.query.title.charAt(0).toUpperCase() + this.props.router.query.title.slice(1)}>
                <p>page</p>
            </P>
        )
    }
}


export default withRouter(connect(mapToProps, fn)(Page))
