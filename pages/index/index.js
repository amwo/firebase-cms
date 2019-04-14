import {Component} from 'react'
import {connect} from 'redux-zero/react';
import fn from '../../states/fn';
import Router from 'next/router'

import Default from '../../layouts/default'
import Loading from '../../widgets/loading'
import H1 from '../../components/h1'

const mapToProps = ({ s , d}) => ({ s, d });

import firebase from 'firebase/app'
import 'firebase/auth'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.login()
            }else{
                Router.push('/login')
            }
        })
    }

    render() {
        if(this.props.s.login) {
            return (
                <Default>
                    <H1 title="Dashboard" />
                </Default>
            )
        } else {
            return <Loading />
        }
    }
}

export default connect(mapToProps, fn)(Home)
