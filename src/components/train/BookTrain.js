import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import StationsForm from './StationsForm';
import Trains from './Trains';
import { getTrainsBetweenStations } from '../../Utilities/trains';

const BookTrain = () => {
	const { isLoggedIn } = useSelector((state) => state.auth);
	const history = useHistory();

	const [trains, setTrains] = useState();
	const [boarding, setBoarding] = useState('');
	const [destination, setDestination] = useState('');

	if (!isLoggedIn) {
		history.push('/login');
	}

	const fetchTrains = (from, to) => {
		const fetchedTrains = getTrainsBetweenStations(from, to);
		setBoarding(from);
		setDestination(to);
		setTrains(fetchedTrains);
	};

	return (
		<Fragment>
			<StationsForm onFetchTrains={fetchTrains} />
			<br />
			{trains && <Trains trains={trains} boarding={boarding} destination={destination} />}
		</Fragment>
	);
};

export default BookTrain;
