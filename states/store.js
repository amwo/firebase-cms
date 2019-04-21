import createStore from 'redux-zero'

const i = {
    s: {
        login: false,
        page: {},
        visibilities: {
            nav: false
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
