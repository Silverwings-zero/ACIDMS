import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, { useState, useEffect} from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import ShadowedBox from '../components/ShadowedBox';
//import { dbManager } from '../model/DBManager';
import firebase from 'firebase/app';
import 'firebase/firestore';


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
  var db = firebase.firestore();


export default function dataListView({ route, navigation }) {
	const locList = [
		{
			"rpt_date": "4/14/2021",
			"occur_date": "7/8/2020",
			"occur_time": "10:00",
			"poss_date": "7/8/2020",
			"poss_time": "15:00",
			"beat": 103,
			"location": "1888 HOLLYWOOD RD NW",
			"ibr_code": 240,
			"UC2_Literal": "AUTO THEFT",
			"neighborhood": "Riverside",
			"npu": "D",
			"lat": 33.80714,
			"long": -84.471539
		  },
		  {
			"rpt_date": "1/27/2021",
			"occur_date": "12/2/2020",
			"occur_time": "18:00",
			"poss_date": "12/2/2020",
			"poss_time": "18:33",
			"beat": 509,
			"location": "610 SPRING ST NW",
			"ibr_code": 240,
			"UC2_Literal": "AUTO THEFT",
			"neighborhood": "Downtown",
			"npu": "M",
			"lat": 33.770904,
			"long": -84.389521
		  }
	]
	const {zipcode, distance, sDate, eDate, neighborhood, category} = route.params
	//console.log(zipcode, Distance, sDate.length, eDate, sTime, eTime, Neighborhood, Category)
	const [longitude, setlongitude] = useState([]);
	const [latitude, setlatitude] = useState([]);
	const [city, setcity] = useState([]);
	const [state, setstate] = useState([]);
	const [crimeData, setcrimeData] = useState([]);

    let radius = Number(distance);
    let startDate = Date.parse(sDate);
    let endDate = Date.parse(eDate);


//	const d = dbManager.getRecordById("021320347");


//	var ref = dbManager.dbh.collection("APD2021");

//        ref.get().then((querySnapshot) => {
//                  querySnapshot.forEach((doc) => {
//                      // doc.data() is never undefined for query doc snapshots
//                        doc.ref.update({occur_date: Date.parse(doc.data().occur_date)});
//                        console.log(doc.id, " => ", (doc.data().occur_date));
//
//                  });
//              })
//              .catch((error) => {
//                  console.log("Error getting documents: ", error);
//              });

	useEffect(() => {

		fetch("https://www.zipcodeapi.com/rest/DemoOnly00CY0Jepn60Lzvqi6UiGdoemypWceFBBdkG4ru3Y8JLcrVRsN3xm5YDZ/info.json/"+zipcode+"/degrees", {
			method: 'GET',
		})
		.then((response) => response.json())
		.then((json) => {
			console.log(json)
			setlatitude(json["lat"])
			setlongitude(json["lng"])
			setcity(json["city"])
			setstate(json["state"])
		})

		const crimeDatas = [];
		var query = db.collection('APD2021');

		if (!Number.isNaN(startDate) || !Number.isNaN(endDate)) {
            if (startDate != null) {
                query = query.where("occur_date", ">=", startDate);
            }
            if (endDate != null) {
                query = query.where("occur_date", "<=", endDate);
            }
        }

		if (neighborhood != ""){
			query = query.where('neighborhood', '==', capitalize(neighborhood.toLowerCase()))
		}

		if (category != "") {
            query = query.where('UC2_Literal', '==', category)
		}
		
		
		query.get()
            .then(snapshot => {
                for (var i in snapshot.docs) {
                    const ins = snapshot.docs[i]
                    crimeDatas.push(ins.data())

                    if (crimeDatas.length >= 200) {
                        break;
                    }
                }
			setcrimeData(crimeDatas)
        })
    }, []);

    let crimeDataCopy = crimeData;
//        filter radius

    if (!Number.isNaN(latitude) && !Number.isNaN(longitude) && crimeData.length > 0 && radius != 0) {
        var min_lat = latitude - radius / 69;
        var max_lat = latitude + radius / 69;
        var min_long = longitude - radius / 55;
        var max_long = longitude + radius / 55;
        console.log("square: ");
        console.log(min_lat, max_lat, min_long, max_long);

        crimeDataCopy = [];
        for (var i in crimeData) {
            if (crimeData[i]["lat"] > min_lat && crimeData[i]["lat"] < max_lat && crimeData[i]["long"] > min_long && crimeData[i]["long"] < max_long) {
                crimeDataCopy.push(crimeData[i]);
            }
        }
    }


    console.log("#####################################")
    console.log(crimeDataCopy)


    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function unixToDate(num) {
        return new Date(num).toLocaleDateString("en-US");
    }

	const textColor = (text) => {
		let rate = Number(text);
        if (rate < 26) {
			return '#F71E0C';
		} else if (rate < 70) {
			return '#E8BD38';
		}
        return '#1CD338';
	}

	const percent = (a, b) => {
		if (Number(b) == 0) {
			return 0
		}
		return  Math.round(a * 100 / b);
	}

	const coordinatesList = crimeDataCopy.map(item => {
		return [item["lat"], item["long"]]
	});

	//console.log(coordinatesList)


	const locListitem = crimeDataCopy.map(item => {
		return (
			<ShadowedBox 
				width={'90%'}  
				height={100}
				margin={5}>

				<View style={{
					flexDirection: 'row',
					margin: 3,
					height: '80%',
					alignItems: 'center',
					// borderWidth: 1,
				}}>


					<View style={{
						width: '100%',
						height: '60%',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
						<Text style={{
							fontSize: 17, 
							margin: 8,
						}}>
							Date {unixToDate(item.occur_date)}
						</Text>

						<Text style={{
							fontSize: 17, 
							margin: 8,
						}}>
							{item.location}
						</Text>

						<Text style={{
							fontSize: 17, 
							margin: 8,
						}}>
							{item.UC2_Literal}
						</Text>

					</View>
					
				</View>


			</ShadowedBox>
		);
	});

	return (
		<View style={styles.container}>
			<View style = {{
				flexDirection: 'column',
				alignContent: "space-between",
				justifyContent: "flex-start",
				width: '90%',
				marginTop: 5 
			}}>
				<ShadowedBox width={'100%'} height={'15%'} margin={10}>
					<View style = {{
						flexDirection: "column",
						alignContent: 'flex-start',
						justifyContent: 'center',
						marginLeft: 50 
					}}> 
						
						<View style={styles.rowView}>

							<Text style={{
								fontSize: 17, 
								fontWeight:"bold",
								margin: 8,
							}}>
								Coordinates:
							</Text>

							<Text style={{
								fontSize: 17, 
								fontWeight:"bold",
								margin: 8,
							}}>
								Lng {Number(longitude).toFixed(2)} Lat {Number(latitude).toFixed(2)}
							</Text>

						</View>
						

						<View style={styles.rowView}>

							<Text style={{
								fontSize: 17, 
								fontWeight:"bold",
								margin: 8,
							}}>
								Current Location: 
							</Text>

							<Text style={{
								fontSize: 17, 
								fontWeight:"bold",
								margin: 8,
							}}>
								{state} {city}
							</Text>

						</View>

					</View>
					
			</ShadowedBox>

			<View style={{
				justifyContent:'flex-start', 
				marginTop: 3,
				height: '60%'
			}}>
				<ScrollView style={{width:'100%',maxHeight:'100%',marginLeft:20}}>
					<View style={{
						flexWrap: 'wrap',
						flexDirection: 'row',
						width: '100%',
						//height: '60%',
						paddingLeft: '0%',
					}}>
						{locListitem}

					</View>
				</ScrollView>
			</View>
			<View style={{
				flexDirection: 'row',
				justifyContent: 'center',
			}}>
				<ShadowedBox 
					width={'30%'} 
					height={'40%'} 
					margin={0} 
					touchable
					onPress={() => navigation.navigate('dataMapView', {zipcode: zipcode, coordinatesList: coordinatesList})}>
					<View style={{
						justifyContent: 'flex-start',
						marginLeft: "10%"
					}}>

						<Text style={{
							fontSize: 17, 
							fontWeight:"bold",
							margin: 4,
						}}>
							Mapview
						</Text>

					</View>
				</ShadowedBox>
			</View>
			</View>
			
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f2f2f2',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	normalText: {
		fontSize: 17,
		fontFamily: 'Arial'
	},
    sectionTitle: {
        color: "lightgrey",
        fontFamily: "Arial-BoldMT",
        fontSize: 20,
        fontWeight: "bold",
		textAlign: "left",
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        width: "100%"
    },
	rowView: {
		marginLeft: 5,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 2
	},
	percentageSmallboxTextSize: {
		fontSize: 16, 
    },

	maxCapacityText: {
        color: 'dodgerblue'
    },
    sixtyText: {
        color: 'limegreen'
    },
    thirtyText: {
        color: 'darkkhaki'
	},
	criticalText: {
        color: 'red'
	},
	percentageHeaderBoxTextSize: {
		fontSize: 24,  
		fontWeight: 'bold', 
		fontFamily: 'Arial'
	},
	HeaderBoxTextSize: {
		fontSize: 13,  
	}
});