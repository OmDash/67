import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCBqeNQeZClxUunoPxMIiun3qE8_BE3a58",
    authDomain: "c-67-c7ec8.firebaseapp.com",
    projectId: "c-67-c7ec8",
    storageBucket: "c-67-c7ec8.appspot.com",
    messagingSenderId: "315981467578",
    appId: "1:315981467578:web:0f35cc47a691ca01bed783"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();