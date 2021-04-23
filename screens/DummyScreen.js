import { StyleSheet, Text, View, A } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default function DummyScreen({ navigation }) {

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => navigation.navigate('zipcodeEntry')}>
				<Text>Open up App.js to start working on your app!</Text>
			</TouchableOpacity>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});