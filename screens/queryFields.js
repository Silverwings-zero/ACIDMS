import { StyleSheet, Text, View, ScrollView, TextInput, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import ShadowedBox from '../components/ShadowedBox';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-datepicker';
//import TimePicker from 'react-time-picker';



export default function queryFields({route, navigation }) {
	
	const {zipcode} = route.params
	const [Distance, setDistance] = useState('');
	const [sDate, setsDate] = useState('');
	const [eDate, seteDate] = useState('');
	const [sTime, setsTime] = useState('');
	const [eTime, seteTime] = useState('');
	const [Category, setCategory] = useState('');
	const [Neighborhood, setNeighborhood] = useState('');
	//const [runners, setrunners] = useState([]);

	useEffect(() => {
		//const runners = Station.getPickYourRunnerData(stationId);
		//setrunners(runners);
	}, [])
	

	
	return (
		<ScrollView>
			<ShadowedBox width={'80%'} height={'10%'} margin={10}>
				<View style={styles.rowView}>

					<Text style={{
						fontSize: 17, 
						fontWeight:"bold",
						margin: 8,
					}}>
						Your zipcode is: 
					</Text>

					<Text style={{
						fontSize: 17, 
						fontWeight:"bold",
						margin: 8,
					}}>
						{zipcode}
					</Text>

				</View>
			</ShadowedBox>

			<ShadowedBox width={'80%'} height={'10%'} margin={10}>
				<View style={styles.rowView}>

					<Text style={{
						fontSize: 17, 
						fontWeight:"bold",
						margin: 8,
					}}>
						Distance from me
					</Text>

					<TextInput
							style={{height: 35}}
							placeholder="mile radius near you"
							onChangeText={Distance => setDistance(Distance)}
							defaultValue={Distance}
							keyboardType = "numeric"
						/>

				</View>
			</ShadowedBox>

			<ShadowedBox width={'80%'} height={'10%'} margin={10}>
				<View style={styles.rowView}>

					<Text style={{
						fontSize: 17, 
						fontWeight:"bold",
						margin: 4,
					}}>
						Date
					</Text>

					<DatePicker
      					date={sDate}
						onDateChange={setsDate}
						placeholder="select date"
						/>

					<Text style={{
						fontSize: 17, 
						fontWeight:"bold",
						margin: 4,
					}}>
						To 
					</Text>

					<DatePicker
      					date={eDate}
						onDateChange={seteDate}
						placeholder="select date"
						/>
				</View>
			</ShadowedBox>

			<ShadowedBox width={'80%'} height={'10%'} margin={10}>
				<View style={styles.rowView}>

					<Text style={{
						fontSize: 17, 
						fontWeight:"bold",
						margin: 8,
					}}>
						Neighborhood
					</Text>

					<TextInput
							style={{height: 35}}
							placeholder="which neighborhood"
							onChangeText={Neighborhood => setNeighborhood(Neighborhood)}
							defaultValue={Neighborhood}
						/>

				</View>
			</ShadowedBox>

			<ShadowedBox width={'80%'} height={'10%'} margin={10} >
				<View style={{
					width: "100%",
					flexDirection: "row",
					justifyContent: "flex-start",
					padding: 2
				}}>

					<Text style={{
						fontSize: 17, 
						fontWeight:"bold",
						margin: 8,
						marginRight: 20
					}}>
						Crime Category 
					</Text>

					<DropDownPicker
						items={[
						    {label: 'None', value: ''},
							{label: 'Larceny - From Vehicle', value: 'LARCENY-FROM VEHICLE'},
							{label: 'Larceny - Non Vehicle', value: 'LARCENY-NON VEHICLE'},
							{label: 'Auto Theft', value: 'AUTO THEFT'},
							{label: 'Aggregated Assault', value: 'AGG ASSAULT'},
							{label: 'Burglary', value: 'BURGLARY'},
							{label: 'Robbery', value: 'ROBBERY'},
						]}
						defaultIndex={0}
						containerStyle={{height: 40, width: 150}}
						onChangeItem={item => setCategory(item.value)}
					/>

				</View>
			</ShadowedBox>

			<ShadowedBox 
				width={'30%'} 
				height={'7%'} 
				margin={120} 
				touchable

				onPress={() => {
					console.log(typeof(text))
					if (Distance.length == 0 && 
						sDate.length == 0 && 
						eDate.length ==0 && 
						sTime.length == 0 && 
						eTime.length ==0 && 
						Neighborhood.length == 0 && 
						Category.length == 0){
						alert('must enter at least one field for query');
					} else {
						navigation.navigate('dataListView', {
							zipcode: zipcode, 
							distance: Distance,
							sDate: sDate,
							eDate: eDate,
//							sTime: sTime,
//							eTime: eTime,
							neighborhood: Neighborhood,
							category: Category
						})
					}
				}}>

				<View style={{
					justifyContent: 'flex-start',
					marginLeft: "10%"
				}}>

					<Text style={{
						fontSize: 17, 
						fontWeight:"bold",
						margin: 4,
					}}>
						Search
					</Text>

				</View>
			</ShadowedBox>
			

		</ScrollView>
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
        borderTopColor: "grey",
        borderTopWidth: 1,
        width: "100%"
    },
	rowView: {
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