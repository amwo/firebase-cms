import createStore from 'redux-zero'

const i = {
    s: {
        login: true,
        current: {
            user: ''
        }
    },
    d: []
}

const store = createStore(i)

export default store;
