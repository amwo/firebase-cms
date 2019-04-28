import React from 'react'
import App, { Container } from 'next/app'
import './main.css'
import { Provider } from 'redux-zero/react'
import store from '../states/store'
import Wrapper from '../layouts/default'

import Router from 'next/router'
import firebase from 'firebase/app'
import 'firebase/auth'
import fn from '../states/fn'
import AddNavigation from '../widgets/addNavigation'
import Button from '../components/button'
import Loading from '../widgets/loading'

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
        fn().init(store)
    }

    render () {
        const { Component, pageProps } = this.props

        if(store.getState().s.visibilities.loading) {
            return <Loading />
        } else if(!store.getState().s.login) {
            return (
                <Provider store={store}>
                    <Container>
                        <Component {...pageProps} />
                    </Container>
                </Provider>
            )
        } else {
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
        }
    }
}
