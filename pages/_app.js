import './main.css'
import 'firebase/auth'

import App, { Container } from 'next/app'

import AddNavigation from '../widgets/addNavigation'
import Loading from '../widgets/loading'
import ImageCropper from '../widgets/imageCropper'
import { Provider } from 'redux-zero/react'
import React from 'react'
import Router from 'next/router'
import Wrapper from '../layouts/default'
import Button from '../components/button'
import firebase from 'firebase/app'
import fn from '../states/fn'
import store from '../states/store'

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
                    </Container>
                </Provider>
            )
        }
    }
}
