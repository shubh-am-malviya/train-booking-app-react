import React, { useRef, useState, useEffect } from 'react';

import Card from '../UI/Card';
import classes from './StationsForm.module.css';
import { getStations } from '../../Utilities/trains';

const StationsForm = (props) => {
	const [fromStations, setFromStations] = useState([]);
	const [toStations, setToStations] = useState([]);

	const fromSelectRef = useRef();
	const toSelectRef = useRef();

	const [fromStation, setFromStation] = useState();
	const [toStation, setToStation] = useState();

	useEffect(() => {
		fetchStations();
	}, []);

	useEffect(() => {
		const toStationsList = fromStations.filter((station) => station !== fromStation);
		setToStations(toStationsList);
		setToStation(toStationsList[0]);
	}, [fromStation, fromStations]);

	const fetchTrains = (event) => {
		event.preventDefault();

		const toSelectedStation = toSelectRef.current.value;
		setToStation(toSelectedStation);

		props.onFetchTrains(fromStation, toStation);
	};

	const fetchStations = () => {
		const stations = getStations();
		setFromStations(stations);
		setFromStation(stations[0]);
	};

	const fromSelectChangeHandler = () => {
		const fromSelectedStation = fromSelectRef.current.value;
		setFromStation(fromSelectedStation);
	};

	return (
		<Card>
			<h2 className='centered'>Select Stations</h2>
			<form onSubmit={fetchTrains}>
				<div className={classes.stationsSelectorForm}>
					<div className={`${classes.control} ${classes.stationsDiv}`}>
						<label htmlFor='from'>From</label>
						<select
							ref={fromSelectRef}
							className={classes.stationList}
							name='from'
							id='from'
							onChange={fromSelectChangeHandler}>
							{fromStations.map((station, index) => (
								<option key={index} value={station}>
									{station}
								</option>
							))}
						</select>
					</div>
					<div className={`${classes.control} ${classes.stationsDiv}`}>
						<label htmlFor='to'>To</label>
						<select ref={toSelectRef} className={classes.stationList} name='to' id='to'>
							{toStations.map((station, index) => (
								<option key={index} value={station}>
									{station}
								</option>
							))}
						</select>
					</div>
				</div>
				<br />
				<div className={classes.actions}>
					<button className='btn'>Fetch Trains</button>
				</div>
			</form>
		</Card>
	);
};

export default StationsForm;
