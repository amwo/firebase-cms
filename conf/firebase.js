import firebase from 'firebase/app'

const conf = {
    apiKey: "AIzaSyAyQI-VFBf2kO9cI53Z-AMt9K_p3Q5keqw",
    authDomain: "tokyoislands-2f2e6.firebaseapp.com",
    databaseURL: "https://tokyoislands-2f2e6.firebaseio.com",
    projectId: "tokyoislands-2f2e6",
    storageBucket: "tokyoislands-2f2e6.appspot.com",
    messagingSenderId: "720287797198"
}

export default !firebase.apps.length ? firebase.initializeApp(conf) : firebase.app();
