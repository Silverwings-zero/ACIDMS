import * as firebase from 'firebase';
import 'firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';


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

    getCrimeData(user_coords, distance, sDate, eDate, sTime, eTime, neighborhood, category) {
        var query = this.dbh.collection("APD2021")

        if (distance != null) {
            query = query.where()
        }

        if (sDate != null && eDate != null) {
            query = query.where("")
        } else if (sDate != null) {

        } else if (eDate != null) {

        }

        if (sTime != null && eTime != null) {
            query = query.where("")
        } else if (sTime != null) {

        } else if (eTime != null) {

        }

        if (neighborhood != null) {
            query = query.where("neighborhood", "==", neighborhood)
        }

        query.get()
             .then((querySnapshot) => {
                 querySnapshot.forEach((doc) => {
                     // doc.data() is never undefined for query doc snapshots
                     console.log(doc.id, " => ", doc.data());
                 });
             })
             .catch((error) => {
                 console.log("Error getting documents: ", error);
             });
        }
    }


    function getRecordByCategory(category) {
        return this.dbh.collection("APD2021").where("UC2_Literal", "==", category.toUpperCase())
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                });
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }

    function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2-lat1);  // deg2rad below
        var dLon = deg2rad(lon2-lon1);
        var a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c; // Distance in km
        return d;
    }

    function deg2rad(deg) {
        return deg * (Math.PI/180)
    }



    // get<Type> return: Promise<Snapshot>
    // https://firebase.google.com/docs/reference/js/firebase.firestore.QuerySnapshot
    // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentSnapshot
    // get<Type>Handle return: DocumentReference
    // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentChange
export var dbManager = new DBManager();