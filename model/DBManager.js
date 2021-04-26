import * as firebase from 'firebase';
import * as Firestore from 'firebase/firestore';
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

    getCrimeData(user_lat, user_long, distance, sDate, eDate, neighborhood, category) {
        var query = this.dbh.collection("APD2021");

        if (distance != 0) {
            var min_lat = user_lat - distance / 69;
            var max_lat = user_lat + distance / 69;
            var min_long = user_long - distance / 55;
            var max_long = user_long + distance / 55;

            query = query.where('lat', '>=', min_lat);
            query = query.where('lat', '<=', max_lat);

            console.log("TYPE: ")
            console.log(query.length);
            var query = query.get();

            query = query.where('long', '>=', min_long);
            query = query.where('long', '<=', max_long);
        }

        if (!Number.isNaN(sDate) || !Number.isNaN(eDate)) {
            var query = query.get();
            if (sDate != null) {
                query = query.where("occur_date", ">=", sDate);
            }
            if (eDate != null) {
                query = query.where("occur_date", "<=", eDate);
            }
        }

//        if (sTime != "" || eTime != "") {
//            if (sTime == "") {
//              sTime = "00:00";
//            }
//            if (eTime == "") {
//              eTime = "23:59" ;
//            }
//            var sHour;
//            var sMin;
//            var eHour;
//            var eMin;
//            [sHour, sMin] = sTime.split(':');
//            [eHour, eMin] = eTime.split(':');
//            sHour = parseInt(sHour);  // 0
//            sMin = parseInt(sMin);    // 0
//            eHour = parseInt(eHour);  // 0
//            eMin = parseInt(eMin);    // 59
//
//            console.log("TIME INPUTS:");
//            console.log(sTime, eTime, sHour, eHour, sMin, eMin);
//            var range = [];
//
//            if (sHour < eHour) {
//            for (var i = sHour; i < eHour; i++) {
//              for (var j = sMin; j < 60; j++) {
//                // solve case where i and j < 10
//                if (i < 10) temp_i = '0'+ i;
//                else temp_i = i;
//                if (j < 10) temp_j = '0'+ j;
//                else temp_j = j;
//
//                range.push(temp_i + ':' + temp_j);
//              }
//            }
//            for (var j = 0; j <= eMin; j++) {
//              // solve case where eHour and j < 10
//              if (eHour < 10) temp_eHour = '0'+ eHour;
//              else temp_eHour = eHour;
//              if (j < 10) temp_j = '0'+ j;
//              else temp_j = j;
//
//              range.push(temp_eHour + ':' + temp_j);
//            }
//            } else if (sHour == eHour) {
//            for (var j = sMin; j <= eMin; j++) {
//              if (eHour < 10) temp_eHour = '0'+ eHour;
//              else temp_eHour = eHour;
//              if (j < 10) temp_j = '0'+ j;
//              else temp_j = j;
//
//              range.push(temp_eHour + ':' + temp_j);
//            }
//          }
//
//
//          query = query.where('occur_time', 'in', range);
//        }


        if (neighborhood != "") {
            query = query.where('neighborhood', '==', this.capitalize(neighborhood.toLowerCase()))
        }

        if (category != "") {
            query = query.where('UC2_Literal', '==', category)
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

    getRecordById(id) {
        this.dbh.collection("APD2021").doc(id)
            .get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data().occur_date);
//                return doc.data().occur_date;
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }

    capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

}
    // get<Type> return: Promise<Snapshot>
    // https://firebase.google.com/docs/reference/js/firebase.firestore.QuerySnapshot
    // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentSnapshot
    // get<Type>Handle return: DocumentReference
    // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentChange
export var dbManager = new DBManager();