import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAozb-EBAVceALdpA_ObMv8TZbKsxpKTNo",
    authDomain: "app-music-3f596.firebaseapp.com",
    databaseURL: "https://app-music-3f596.firebaseio.com",
    projectId: "app-music-3f596",
    storageBucket: "app-music-3f596.appspot.com",
    messagingSenderId: "820054032342",
    appId: "1:820054032342:web:d4f20437c58b9681"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase; 