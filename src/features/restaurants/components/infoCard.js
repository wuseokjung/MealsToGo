import React from 'react';
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

//Kind of like CSS
const Title = styled.Text`
	padding: 16px;
	font-family: theme.body;
`;

const ResCard = styled(Card)`
	background-color: white;
`;

const CardCover = styled(Card.Cover)`
	padding: 16px;
	background-color: white;
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
	const {
		name = 'Bulla Gas',
		icon,
		photos = [
			'https://cdn.vox-cdn.com/thumbor/2bH4wLHTPbxbZT0YdrH5hxxWORw=/0x0:960x640/1400x1400/filters:focal(404x244:556x396):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/55753635/13178539_952627198190586_738313161884253238_n.0.0.jpg',
		],
		address = '8525 Native Pine Way',
		isOpenNow = true,
		rating = 4,
		isClosedTemporarily,
	} = restaurant;
	return (
		<ResCard elevation={5}>
			<CardCover key={name} source={{ uri: photos[0] }} />
			<Title>{name}</Title>
		</ResCard>
	);
};
