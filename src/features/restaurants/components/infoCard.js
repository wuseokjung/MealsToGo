import React from 'react';
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';

//Kind of like CSS
const Title = styled.Text`
	font-size: ${(props) => props.theme.fontSizes.body};
	color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled.Text`
	font-size: ${(props) => props.theme.fontSizes.caption};
`;

const ResCard = styled(Card)`
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

const CardCover = styled(Card.Cover)`
	padding: ${(props) => props.theme.space[3]};
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled.View`
	padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
	flex-direction: row;
	padding-top: ${(props) => props.theme.space[2]};
	padding-bottom: ${(props) => props.theme.space[2]};
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

	const ratingArray = Array.from(new Array(Math.floor(rating)));

	return (
		<ResCard elevation={5}>
			<CardCover key={name} source={{ uri: photos[0] }} />
			<Info>
				<Title>{name}</Title>
				<Rating>
					{ratingArray.map(() => (
						<SvgXml xml={star} width={20} height={20} />
					))}
				</Rating>
				<Address>{address}</Address>
			</Info>
		</ResCard>
	);
};
