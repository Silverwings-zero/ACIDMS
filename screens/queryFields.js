import { StyleSheet, Text, View, TextInput, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import ShadowedBox from '../components/ShadowedBox';
import DropDownPicker from 'react-native-dropdown-picker';
import Station from '../model/Station';


export default function PickYourRunner({route, navigation }) {
	
	const {zipcode} = route.params
	const [Distance, setDistance] = useState('');
	const [sDate, setsDate] = useState('');
	const [eDate, seteDate] = useState('');
	const [Category, setCategory] = useState('');
	//const [runners, setrunners] = useState([]);

	useEffect(() => {
		//const runners = Station.getPickYourRunnerData(stationId);
		//setrunners(runners);
	}, [])
	

	
	return (
		<View style={styles.container}>
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

					<TextInput
							style={{height: 35}}
							placeholder="MM/DD/YY"
							onChangeText={sDate => setsDate(sDate)}
							defaultValue={sDate}
						/>

					<Text style={{
						fontSize: 17, 
						fontWeight:"bold",
						margin: 4,
					}}>
						To 
					</Text>

					<TextInput
							style={{height: 35, marginRight: 30}}
							placeholder="MM/DD/YY"
							onChangeText={eDate => seteDate(eDate)}
							defaultValue={eDate}
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
							{label: 'larceny from vehicle', value: 'LARCENY-FROM VEHICLE'},
							{label: 'larceny-non vehicle', value: 'LARCENY-NON VEHICLE'},
							{label: 'auto theft', value: 'AUTO THEFT'},
							{label: 'aggregated assault', value: 'AGG ASSAULT'},
							{label: 'burglary', value: 'BURGLARY'},
							{label: 'robbery', value: 'ROBBERY'},
							{label: 'aggregated assault', value: 'AGG ASSAULT'},
						]}
						defaultIndex={0}
						containerStyle={{height: 40, width: 150}}
						onChangeItem={Category => setCategory(item.value)}
					/>

				</View>
			</ShadowedBox>

			<ShadowedBox 
				width={'30%'} 
				height={'7%'} 
				margin={150} 
				touchable
				onPress={() => navigation.navigate('dataListView', {zipcode: zipcode})}>
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