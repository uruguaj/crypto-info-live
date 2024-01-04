import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchCoins = (id) => {
	const [coinData, setCoinData] = useState(null);

	useEffect(() => {
		const fetchCoinData = async () => {
			try {
				const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
				setCoinData(response.data);
			} catch (error) {
				console.error('Error fetching coin data:', error);
				//todo error
			}
		};

		fetchCoinData();
	}, [id]);

	return coinData;
};

export default useFetchCoins;