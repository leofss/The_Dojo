import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBrQqb75KbJjC4b5nzO7kjdafF2HU_CFIc",
    authDomain: "dojosite-d1001.firebaseapp.com",
    projectId: "dojosite-d1001",
    storageBucket: "dojosite-d1001.appspot.com",
    messagingSenderId: "905619389591",
    appId: "1:905619389591:web:8a987c37fabe73e6b93dd2"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore();

const projectAuth = firebase.auth()

const timestamp = firebase.firestore.Timestamp

const projectStorage = firebase.storage()

export {projectFirestore, projectAuth, timestamp, projectStorage}
