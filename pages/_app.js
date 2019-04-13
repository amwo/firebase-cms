import React from 'react'
import App, { Container } from 'next/app'
import './main.css'
import { Provider } from 'redux-zero/react'
import store from '../states/store'

import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConf from '../conf/firebase'

export default class Default extends App {
    constructor(props) {
        super(props)
    }

    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        return { pageProps }
    }

    render () {
        const { Component, pageProps } = this.props

        let user = firebase.auth().currentUser;
        console.log(user)

        return (
            <Provider store={store}>
                <Container>
                    <Component {...pageProps} />
                </Container>
            </Provider>
        )
    }
}
