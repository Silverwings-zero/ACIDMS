import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import ShadowedBox from '../components/ShadowedBox';
import Station from '../model/Station';
import Event from '../model/Event';


export default function PickYourRole({ navigation }) {
	

	const [text, setText] = useState('');

	
	return (
		<View style={styles.container}>
			<ShadowedBox width={'80%'} height={'15%'} margin={10}>
				<View style={styles.rowView}>

					<Text style={{
						fontSize: 17, 
						fontWeight:"bold",
						margin: 8,
					}}>
						Enter Your Current Location:
					</Text>

				</View>
			</ShadowedBox>
			<View style={{
				flexWrap: 'wrap',
				flexDirection: 'center',
				width: '100%',
				height: '100%',
				paddingLeft: '14%',
				marginLeft: '14%'
			}}>
				<ShadowedBox 
					width={'60%'} 
					height={'20%'}
					//square 
					margin={5}>
					<View style={{
						width: '100%',
						aspectRatio: 1,
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center'
					}}>
						<TextInput
							style={{height: 40}}
							placeholder="Give a zipcode"
							onChangeText={text => setText(text)}
							defaultValue={text}
						/>
					</View>
				</ShadowedBox>
				<ShadowedBox 
					width={'40%'} 
					height={'10%'} 
					margin={40} 
					touchable
					onPress={() => {
						console.log(typeof(text))
						if (text.trim() && !isNaN(text) && text.length == 5){
							navigation.navigate('queryFields',{zipcode: text})
						} else {
							alert('Zipcode invalid');
						}
					}}>
					<View style={{
						justifyContent: 'center',
						marginLeft: "10%"
					}}>

						<Text style={{
							fontSize: 17, 
							fontWeight:"bold",
							margin: 8,
						}}>
							confirm
						</Text>

					</View>
				</ShadowedBox>
				
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
		alignItems: 'center',
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