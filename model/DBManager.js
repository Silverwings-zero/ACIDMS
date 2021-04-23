import * as firebase from 'firebase';
import 'firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS3EfFs_qTlQWz2nOT-rzxRZdqVM4OaVY",
  authDomain: "acid-ms.firebaseapp.com",
  projectId: "acid-ms",
  storageBucket: "acid-ms.appspot.com",
  messagingSenderId: "653698928838",
  appId: "1:653698928838:web:3338f38a2334a2740847c7",
  measurementId: "G-0T8ZW56YRT"
};

firebase.initializeApp(firebaseConfig);


// For the types in this 
class DBManager {
    constructor() {
        this.dbh = firebase.firestore();
        this.store = firebase.storage();
    }

    getCrimeData() {
        return this.dbh.collection("APD2021");
    }

    async getall() {
        const snapshot = await this.dbh.collection('APD2021').get();
        console.log("snapshot");
        //console.log(snapshot);
        return snapshot.docs.map(doc => doc.data());
    }
}
    // get<Type> return: Promise<Snapshot>
    // https://firebase.google.com/docs/reference/js/firebase.firestore.QuerySnapshot
    // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentSnapshot
    // get<Type>Handle return: DocumentReference
    // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentChange
export var dbManager = new DBManager();