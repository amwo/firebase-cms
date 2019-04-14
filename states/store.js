import createStore from 'redux-zero'

const i = {
    s: {
        login: false,
        page: {},
        current: {
            project: '',
            user: ''
        }
    },
    d: []
}

const store = createStore(i)

export default store;
