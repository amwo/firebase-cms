import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import firebaseConf from '../conf/firebase'
import Router from 'next/router'

const db = firebase.firestore()

const fn = store => ({
    toggleAddList: states => {
        store.setState(states => ({
            ...states,
            s: {
                ...states.s,
                visibilities: {
                    ...states.s.visibilities,
                    add: !states.s.visibilities.add
                },
            }
        }))
    },
    closePostView: states => {
        store.setState(states => ({
            ...states,
            s: {
                ...states.s,
                visibilities: {
                    ...states.s.visibilities,
                    props: false
                },
            }
        }))
    },
    initPostView: states => {
        store.setState(states => ({
            ...states,
            s: {
                ...states.s,
                visibilities: {
                    ...states.s.visibilities,
                    props: true
                },
            }
        }))
    },
    showAdd: (states, prev) => {
        store.setState(states => ({
            ...states,
            s: {
                ...states.s,
                visibilities: {
                    ...states.s.visibilities,
                    add: !prev
                },
            }
        }))
    },
    initPost: (states, post) => {
        store.setState(states => ({
            ...states,
            s: {
                ...states.s,
                post
            }
        }))
    },
    signOut: store => {
        firebase.auth().signOut().then(function() {
            store.setState(states => ({
                ...states,
                s: {
                    ...states.s,
                    login: false,
                    current: {
                        ...states.s.current,
                        user: ''
                    },
                }
            }))
        }).catch(function(err) {
            console.log(err)
        });
    },
    hideComponents: states => {
        store.setState(states => ({
            ...states,
            s: {
                ...states.s,
                visibilities: {
                    ...states.s.visibilities,
                    components: false
                },
            }
        }))
    },
    fetchMembers: store => {
        console.log('hoge')
    },
    init: store => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                let loginUserId = ""
                let usersData = {}
                // Fetch users data
                db.collection('tokyoislands').doc('people').collection('users').where("admin", "==", true).get().then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                        if(doc.id === user.uid) {
                            loginUserId = doc.id
                        }
                        usersData[doc.id] = doc.data()
                    })
                    // Set store
                    store.setState(states => ({
                        ...states,
                        s: {
                            ...states.s,
                            login: true,
                            visibilities: {
                                ...states.s.visibilities,
                                loading: false
                            },
                            current: {
                                ...states.s.current,
                                user: loginUserId
                            },
                        },
                        d: usersData
                    }))

                    // Fetch settings data
                    db.collection('tokyoislands').doc('settings').get().then(function(doc) {
                        if (doc.exists) {
                            store.setState(states => ({
                                ...states,
                                f: {
                                    settings: doc.data()
                                }
                            }))
                            Router.push(Router.route)
                        } else {
                            console.log("No such document on Settings!");
                        }
                    }).catch(function(error) {
                        console.log("Error getting documents: ", error)
                    })

                    // Fetch settings collections data
                    db.collection('tokyoislands').doc('settings').collection('collections').get().then(qs => {
                        let d = {}
                        qs.forEach(doc => {
                            d[doc.id] = doc.data()
                        })
                        store.setState(states => ({
                            ...states,
                            f: {
                                settings: {
                                    ...states.f.settings,
                                    collections: d
                                }
                            }
                        }))
                    }).catch(function(error) {
                        console.log("Error getting documents: ", error)
                    })

                }).catch(function(error) {
                    console.log("Error getting documents: ", error)
                })

            } else {
                store.setState(states => ({
                    ...states,
                    s: {
                        ...states.s,
                        visibilities: {
                            ...states.s.visibilities,
                            loading: false
                        }
                    }
                }))
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
                visibilities: {
                    ...states.s.visibilities,
                    loading: false
                },
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
                        err: {
                            code: err.code,
                            message: err.message
                        },
                        visibilities: {
                            ...states.s.visibilities,
                            loading: false
                        },
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
                        err: {
                            code: '',
                            message: '',
                        },
                        visibilities: {
                            ...states.s.visibilities,
                            loading: false
                        },
                        login: true,
                        page: {}
                    },
                }))
            }
        })
        let user = firebase.auth().currentUser;
    }
});

export default fn;
