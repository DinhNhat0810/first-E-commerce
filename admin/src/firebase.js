import firebase from 'firebase/app'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBbyZ-kkU9hhXKHdWx9MTBP0Q1zZFInUko",
    authDomain: "webbanhang-b8a22.firebaseapp.com",
    projectId: "webbanhang-b8a22",
    storageBucket: "webbanhang-b8a22.appspot.com",
    messagingSenderId: "1027299584513",
    appId: "1:1027299584513:web:cd7205ab5a9dbb35b8ee00",
    measurementId: "G-CVH07MRLR5"
}

firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()
export default storage

