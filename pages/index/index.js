import {Component} from 'react'
import {connect} from 'redux-zero/react';
import fn from '../../states/fn';
import Router from 'next/router'

import Default from '../../layouts/default'
import H1 from '../../components/h1'

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
                    <H1 title="Dashboard" />
                </Default>
            )
        } else {
            return null
        }
    }
}

export default connect(mapToProps, fn)(Home)
