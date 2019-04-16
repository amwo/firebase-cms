import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const fn = store => ({
    increment: state => ({ count: state.count + 1 }),
    decrement: state => ({ count: state.count - 1 }),
    isUserEmail: (states, email) => {
        let db = firebase.firestore()
        store.setState(states => ({
            ...states,
            s: {
                ...states.s,
                page: {
                    emailLoading: true,
                    PasswordLoading: false,
                    email: '',
                    password: ''
                }
            },
        }))
        db.collection('tokyoislands').doc('people').collection('users').where('email', '==', email).get().then(query => {
            store.setState(states => ({
                ...states,
                s: {
                    ...states.s,
                    page: {
                        ...states.s.page,
                        emailLoading: false,
                        email: query.docs[0].data().email,
                        password: ''
                    }
                },
            }))
        }).catch(err => {
            store.setState(states => ({
                ...states,
                s: {
                    ...states.s,
                    page: {}
                },
            }))
            console.log(err)
        })
    },
    login: store => {
        store.setState(states => ({
            ...states,
            s: {
                ...states.s,
                login: true
            },
        }))
    },
    auth: (states, email, password) => {
        store.setState(states => ({
            ...states,
            s: {
                ...states.s,
                page: {
                    ...states.s.page,
                    passwordLoading: true
                }
            },
        }))

        firebase.auth().signInWithEmailAndPassword(email, password).catch(err => {
            if(err.code) {
                store.setState(states => ({
                    ...states,
                    s: {
                        ...states.s,
                        page: {
                            ...states.s.page,
                            PasswordLoading: false
                        }
                    },
                }))
                return
            } else {
                store.setState(states => ({
                    ...states,
                    s: {
                        ...states.s,
                        login: true,
                        page: {}
                    },
                }))
            }
        })

        let user = firebase.auth().currentUser;
        console.log(user.uid)
    }
});

export default fn;
