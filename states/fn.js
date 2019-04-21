import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import firebaseConf from '../conf/firebase'

const db = firebase.firestore()

import Router from 'next/router'
const fn = store => ({
    init: store => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {

                let loginUserId = ""
                let usersData = {}
                db.collection('tokyoislands').doc('people').collection('users').where("admin", "==", true).get().then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                        if(doc.id === user.uid) {
                            loginUserId = doc.id
                        }
                        usersData[doc.id] = doc.data()
                    })
                    store.setState(states => ({
                        ...states,
                        s: {
                            ...states.s,
                            login: true,
                            current: {
                                ...states.s.current,
                                user: loginUserId
                            },
                        },
                        d: usersData
                    }))
                }).catch(function(error) {
                    console.log("Error getting documents: ", error)
                })
            } else {
                Router.push('/login')
            }
        })
    },
    increment: state => ({ count: state.count + 1 }),
    decrement: state => ({ count: state.count - 1 }),
    visibilityNav: (states, bool) => {
        store.setState(states => ({
            ...states,
            s: {
                ...states.s,
                visibilities: {
                    ...states.s.visibilities,
                    nav: bool
                }
            },
        }))
    },
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
