import {Component} from 'react'
import {connect} from 'redux-zero/react';
import fn from '../../states/fn';
import Router from 'next/router'

import Default from '../../layouts/default'

const mapToProps = ({ s , d}) => ({ s, d });

class Home extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if(!this.props.s.login) {
            Router.push('/login')
        }
    }

    render() {
        if(this.props.s.login) {
            return (
                <Default>
                    <h1>Home</h1>
                </Default>
            )
        } else {
            return null
        }
    }
}

export default connect(mapToProps, fn)(Home)
