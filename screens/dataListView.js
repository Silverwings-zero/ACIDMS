import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, { useState, useEffect} from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import ShadowedBox from '../components/ShadowedBox';
import { dbManager } from '../model/DBManager';

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
	const {zipcode, Distance, sDate, eDate, sTime, eTime, Neighborhood, Category} = route.params
	//console.log(zipcode, Distance, sDate.length, eDate, sTime, eTime, Neighborhood, Category)
	const [longitude, setlongitude] = useState([]);
	const [latitude, setlatitude] = useState([]);
	const [city, setcity] = useState([]);
	const [state, setstate] = useState([]);
	

	//const alldata  = dbManager.getall()

	// var crimeref = dbManager.getCrimeData();
	// var allCities = crimeref.get()
	// 	.then(snapshot => {
	// 		snapshot.forEach(doc => {
	// 			console.log(doc.id, '=>', doc.data());
	// 		});
	// 		console.log("end")
	// 	})
	// 	.catch(err => {
	// 		console.log('Error getting documents', err);
	// 	});
		
	useEffect(() => {

		fetch("https://www.zipcodeapi.com/rest/DemoOnly00H8pb5zIgB5Vn3N8kn2ZHQBrq5rNvLc41Kz40f0NROEND8os7rSwEXi/info.json/"+zipcode+"/degrees", {
			method: 'GET',
		})
		.then((response) => response.json())
		.then((json) => {
			console.log(json)
			setlatitude(json["lat"])
			setlongitude(json["lng"])
			setcity(json["acceptable_city_names"][0]["city"])
			setstate(json["acceptable_city_names"][0]["state"])
		})

	}, []);

	console.log(longitude)
	console.log(latitude)



	//const res = getArticlesFromApi("https://www.zipcodeapi.com/rest/" + "DemoOnly00H8pb5zIgB5Vn3N8kn2ZHQBrq5rNvLc41Kz40f0NROEND8os7rSwEXi" + "/info.json/"+ zipcode +"/degrees")
	//console.log(res)
	//console.log(crimeref)

	console.log("#####################################")
	// //const stationId = navigation.state
	// const stationId = route.params['stationId'];
	// //const stationID = JSON.stringify(stationId)
	// console.log(Station.getStationDrinksDataByID(stationId))
	
	// const stationData = Station.getStationInventoryDataByID(stationId)
	
	// const drinksData = Station.getStationDrinksDataByID(stationId)
	// // console.log(drinksData)

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

	const coordinatesList = locList.map(item => {
		return [item["lat"], item["long"]]
	});

	//console.log(coordinatesList)


	const locListitem = locList.map(item => {
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
							Date {item.occur_date} Time {item.occur_time}
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