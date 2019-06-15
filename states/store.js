import createStore from 'redux-zero'

const i = {
    s: {
        login: false,
        page: {},
        post: {},
        err: {
            code: '',
            message: ''
        },
        visibilities: {
            nav: false,
            props: false,
            cropper: false,
            loading: true,
            add: false
        },
        current: {
            collection: '',
            project: '',
            user: '',
        }
    },
    f: {},
    d: {}
}

const store = createStore(i)

export default store;
