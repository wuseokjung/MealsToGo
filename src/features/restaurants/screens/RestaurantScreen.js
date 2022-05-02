import React, { useContext } from 'react';
import { Searchbar } from 'react-native-paper';
import { FlatList, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { RestaurantInfo } from '../components/infoCard';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area-component';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';

const SearchContainer = styled.View`
	padding: ${(props) => props.theme.space[3]};
`;

const ResList = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 16,
	},
})``;

export const RestaurantsScreen = () => {
	const { isLoading, error, restaurants } = useContext(RestaurantsContext);
	return (
		<SafeArea>
			<SearchContainer>
				<Searchbar
					style={styles.searchBar}
					inputStyle={styles.searchText}
					placeholder="search anything food"
					iconColor="green"
				/>
			</SearchContainer>
			<ResList
				data={restaurants}
				renderItem={(item) => {
					return (
						<Spacer position="bottom" size="large">
							<RestaurantInfo restaurant={item} />
						</Spacer>
					);
				}}
				keyExtractor={(item) => item.name}
			/>
		</SafeArea>
	);
};

const styles = StyleSheet.create({
	searchBar: {
		borderRadius: 20,
	},
	searchText: {
		textAlign: 'center',
		fontSize: 16,
	},
});
