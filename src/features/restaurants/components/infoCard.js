import React from 'react';
import { Text } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Spacer } from '../../../components/spacer/spacer.component';
import {
	Icon,
	SectionEnd,
	Section,
	Rating,
	Info,
	CardCover,
	ResCard,
	Address,
} from './infoCard.styles';
import star from '../../../../assets/star';
import open from '../../../../assets/open';

export const RestaurantInfo = ({ restaurant = {} }) => {
	const {
		name = 'Bulla Gas',
		icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
		photos = [
			'https://cdn.vox-cdn.com/thumbor/2bH4wLHTPbxbZT0YdrH5hxxWORw=/0x0:960x640/1400x1400/filters:focal(404x244:556x396):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/55753635/13178539_952627198190586_738313161884253238_n.0.0.jpg',
		],
		address = '8525 Native Pine Way',
		isOpenNow = true,
		rating = 4,
		isClosedTemporarily = true,
	} = restaurant;

	const ratingArray = Array.from(new Array(Math.floor(rating)));

	return (
		<ResCard elevation={5}>
			<CardCover key={name} source={{ uri: photos[0] }} />
			<Info>
				<Text variant="label">{name}</Text>
				<Section>
					<Rating>
						{ratingArray.map(() => (
							<SvgXml xml={star} width={20} height={20} />
						))}
					</Rating>
					<SectionEnd>
						{isClosedTemporarily && (
							<Text variant="error">CLOSED TEMPORARILY</Text>
						)}
						<Spacer position="left" size="large">
							{isOpenNow && <SvgXml xml={open} width={20} height={20} />}
						</Spacer>
						<Spacer position="left" size="large">
							<Icon source={{ uri: icon }} />
						</Spacer>
					</SectionEnd>
				</Section>
				<Address>{address}</Address>
			</Info>
		</ResCard>
	);
};
