import createStore from 'redux-zero'

const i = {
    s: {
        login: false,
        page: {},
        err: {
            code: '',
            message: ''
        },
        visibilities: {
            nav: false,
            loading: true
        },
        current: {
            project: '',
            user: '',
        }
    },
    f: {},
    d: {}
}

const store = createStore(i)

export default store;
