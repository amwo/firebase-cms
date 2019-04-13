import React from 'react'
import App, { Container } from 'next/app'
import './main.css'
import { Provider } from 'redux-zero/react';

import store from '../states/store';

export default class Default extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render () {
        const { Component, pageProps } = this.props

        return (
            <Provider store={store}>
                <Container>
                    <Component {...pageProps} />
                </Container>
            </Provider>
        )
    }
}
