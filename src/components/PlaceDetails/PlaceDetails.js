import React from 'react'
import { Box, Typography, Button, Grid, Card, CardMedia, CardActions, Chip, CardContent } from '@material-ui/core';
import LocationOnICon from '@material-ui/icons/LocationOn';
import { Phone } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import styles from "./styles"
function PlaceDetails({ place, selected, refProp }) {
	if (selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" })
	const classes = styles();
	return (
		<Card elevation={6}>
			<CardMedia style={{ height: 350 }} image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} title={place.name}>
			</CardMedia>
			<CardContent>
				<Typography gutterBottom variant="h5">{place.name}</Typography>
				<Box display="flex" justifyContent="space-between">
					<Typography variant="subtitle1" gutterBottom>Price</Typography>
					<Typography variant="subtitle1" gutterBottom>{place.price_level}</Typography>


				</Box>
				<Box display="flex" justifyContent="space-between">
					<Rating value={Number(place.rating)} readOnly />
					<Typography variant="subtitle1" gutterBottom>Out of {place.num_reviews} reviews</Typography>


				</Box>
				<Box display="flex" justifyContent="space-between">
					<Typography variant="subtitle1" gutterBottom>Ranking</Typography>
					<Typography variant="subtitle1" gutterBottom>{place.ranking}</Typography>


				</Box>
				{place?.awards?.map((award) => (
					<Box my={1} display="flex" justifyContent="space-between" alignItems="center">
						<img src={award.images.small} alt={award.display_name} />
						<Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
					</Box>

				))}
				{place?.cuisine?.map(({ name }) => (
					<Chip key={name} size="small" label={name} className={classes.chip} />
				))}
				{place?.address && (
					<Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
						<LocationOnICon /> {place.address}
					</Typography>
				)}
				{place?.phone && (
					<Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.spacing}>
						<Phone /> {place.phone}
					</Typography>
				)}
				<CardActions>
					<Button size='small' color="primary" onClick={() => window.open(place?.web_url, "_blank")}>
						Trip Advisor
					</Button>
					<Button size='small' color="primary" onClick={() => window.open(place?.website, "_blank")}>
						Website
					</Button>

				</CardActions>
			</CardContent>

		</Card>
	)
}

export default PlaceDetails