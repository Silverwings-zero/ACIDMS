import { StyleSheet, Text, View, AppRegistry, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, { useState, Component} from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import ShadowedBox from '../components/ShadowedBox';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Marker from 'react-native-maps';

export default function heatMapView({ route, navigation }) {
//	const [stationModalVisible, setStationModalVisible] = useState(0);
	const {coordinatesList} = route.params;
	console.log(typeof(coordinatesList[0][0]))
	return (
		<View style={styles.container}>
			
			<MapView
			    provider={PROVIDER_GOOGLE}
				style = {styles.map}
				initialRegion={{
					latitude: 33.7490,
					longitude: -84.3880,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
				>
                <MapView.Heatmap points={coordinatesList}
                                 opacity={1}
                                 radius={20}
                                 maxIntensity={100}
                                 gradientSmoothing={10}
                                 heatmapMode={"POINTS_DENSITY"}/>

			</MapView>
			
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
	map: {
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		position: 'absolute'
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