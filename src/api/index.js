import axios from "axios";
const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
const options = {
	params: {
		bl_latitude: '11.847676',
		tr_latitude: '12.838442',
		bl_longitude: '109.095887',
		tr_longitude: '109.149359',
	},
	headers: {
		'X-RapidAPI-Key': 'f97948d1e5msha51639adf397aaap17e962jsn22097823e223',
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}
};


export const getPlacesData = async (type, sw, ne) => {
	try {
		//request
		const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
			params: {
				bl_latitude: sw.lat,
				tr_latitude: ne.lat,
				bl_longitude: sw.lng,
				tr_longitude: ne.lng,
			},
			headers: {
				'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
				'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
			}

		})
		return data


	}
	catch (error) {
		console.log(error)

	}
}
export const getWeatherData = async () => {
	const options = {
		method: 'GET',
		url: 'https://open-weather13.p.rapidapi.com/city/landon',
		headers: {
			'X-RapidAPI-Key': 'f97948d1e5msha51639adf397aaap17e962jsn22097823e223',
			'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
		}
	};
	try {
		const response = await axios.request(options);

	}
	catch (error) {

	}
}