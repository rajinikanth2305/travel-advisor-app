import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import { CssBaseline, Grid } from '@material-ui/core'
import List from './components/List/List'
import Map from './components/Map/Map'
import PlaceDetails from './components/PlaceDetails/PlaceDetails'
import { getPlacesData } from './api'
function App() {

	const [places, setPlaces] = useState([]);
	const [filteredPlaces, setFilteredPlaces] = useState([])
	const [coordinates, setCoordinates] = useState({})
	const [bounds, setBounds] = useState(null);
	const [childClicked, setChildClicked] = useState(null);
	const [isLoading, setIsloading] = useState(false);
	const [type, setType] = useState('restaurants')
	const [rating, setRating] = useState('')

	useEffect(() => {
		if (bounds?.sw && bounds?.ne) {
			setIsloading(true)
			console.log(bounds, "checking bounds here")
			getPlacesData(type, bounds?.sw, bounds?.ne).then((data) => {
				setPlaces(data?.filter((place) => place.name && place.num_reviews > 0))
				setIsloading(false)
				setFilteredPlaces([])
			})
		}
	}, [type, bounds])
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
			setCoordinates({
				lat: latitude,
				lng: longitude
			})

		})

	}, []);
	useEffect(() => {
		const filteredPlaces = places?.filter((place, index) => place.rating > rating)
		setFilteredPlaces(filteredPlaces)

	}, [rating])
	return (
		<>
			<CssBaseline>
				<Header setCoordinates={setCoordinates} />
				<Grid container spacing={3} style={{ width: "100%" }}>
					<Grid item xs={12} md={4}>
						<List places={filteredPlaces.length > 0 ? filteredPlaces : places} childClicked={childClicked} isLoading={isLoading} type={type} rating={rating} setRating={setRating} setType={setType} />
					</Grid>
					<Grid item xs={12} md={8}>
						<Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} places={filteredPlaces.length > 0 ? filteredPlaces : places} setChildClicked={setChildClicked} />
					</Grid>

				</Grid>

			</CssBaseline>
		</>
	)
}

export default App