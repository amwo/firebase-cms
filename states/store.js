import createStore from 'redux-zero'

const i = {
    s: {
        login: false,
        page: {},
        visibilities: {
            nav: false,
            loading: true
        },
        current: {
            project: '',
            user: '',
        }
    },
    d: {}
}

const store = createStore(i)

export default store;
