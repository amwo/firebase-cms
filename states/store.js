import createStore from 'redux-zero'

const i = {
    s: {
        login: false,
        current: {
            user: ''
        }
    },
    d: []
}

const store = createStore(i)

export default store;
