import React from 'react'
import App, { Container } from 'next/app'
import './main.css'
import { Provider } from 'redux-zero/react'
import store from '../states/store'
import Wrapper from '../layouts/default'

import Router from 'next/router';
import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConf from '../conf/firebase'
import AddNavigation from '../widgets/addNavigation'
import Button from '../components/button'
import Loading from '../widgets/loading'

import fn from '../states/fn';

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

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                fn().login(store)
            }else{
                Router.push('/login')
            }
        })
    }

    render () {
        const { Component, pageProps } = this.props
        if(store.getState().s.login) {
            return (
                <Provider store={store}>
                    <Container>
                        <Wrapper>
                            <Component {...pageProps} />
                        </Wrapper>
                        <AddNavigation />
                        <Button type="add" />
                        <Button type="section" />
                    </Container>
                </Provider>
            )
        } else {
            return (
                <Provider store={store}>
                    <Loading {...pageProps}/>
                </Provider>
            )
        }
    }
}
