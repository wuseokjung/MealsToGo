import React from 'react';
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfo } from '../components/infoCard';

export const RestaurantsScreen = () => (
	<SafeAreaView style={styles.container}>
		<View style={styles.search}>
			<Searchbar
				style={styles.searchBar}
				inputStyle={styles.searchText}
				placeholder="what's good"
				iconColor="green"
			/>
		</View>
		<View style={styles.list}>
			<RestaurantInfo />
		</View>
	</SafeAreaView>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight,
	},
	search: {
		padding: 15,
	},
	list: {
		flex: 1,
		padding: 15,
	},
	searchBar: {
		borderRadius: 20,
	},
	searchText: {
		textAlign: 'center',
		fontSize: 16,
	},
});
