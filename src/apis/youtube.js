import axios from 'axios';

const KEY = 'AIzaSyD2n1PVjZ8CpPLxu4ehZSUl8Bb1silZZvI';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY,
	},
});
