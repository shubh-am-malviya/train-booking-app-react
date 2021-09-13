import React, { Fragment, useState, useEffect } from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';

import { getDistance, getTrainDetails } from '../../Utilities/trains';
import TrainCard from './TrainCard';
import AddPassenger from './AddPassenger';
import PassengerList from './PassengerList';
import TicketBill from './TicketBill';

const Ticket = () => {
	const location = useLocation();
	const { trainId } = useParams();

	const [showAddPassengerModal, setShowAddPassengerModal] = useState(false);
	const [passengerList, setPassengerList] = useState([]);
	const [trainDetails, setTrainDetails] = useState();
	const [boarding, setBoarding] = useState();
	const [destination, setDestination] = useState();
	const [distance, setDistance] = useState();

	useEffect(() => {
		const train = getTrainDetails(trainId);
		setTrainDetails(train);

		const urlSearchParams = new URLSearchParams(location.search);
		const boardingValue = urlSearchParams.get('from');
		setBoarding(boardingValue);
		const destinationValue = urlSearchParams.get('to');
		setDestination(destinationValue);

		const distance = getDistance(boardingValue, destinationValue);
		setDistance(distance);
	}, [trainId, location]);

	if (!boarding || !destination) {
		return (
			<div className='centered'>
				<p>Invalid URL. Boarding and Destination not found. </p>
				<Link className='btn' to='/'>
					Go to home
				</Link>
			</div>
		);
	}

	const addPassengerToList = (passenger) => {
		setPassengerList((passengerList) => [...passengerList, passenger]);
	};

	const removePassengerFromList = (passengerIndex) => {
		const newPassengerList = passengerList.filter(
			(passenger, index) => index !== passengerIndex
		);
		setPassengerList(newPassengerList);
	};

	const addPassengerHandler = () => {
		setShowAddPassengerModal(true);
	};

	const onCloseModal = () => {
		setShowAddPassengerModal(false);
	};

	return (
		<Fragment>
			{trainDetails && (
				<TrainCard train={trainDetails} boarding={boarding} destination={destination} />
			)}
			<button className='btn centered addPassenger' onClick={addPassengerHandler}>
				Add Passenger
			</button>
			{showAddPassengerModal && (
				<AddPassenger addPassenger={addPassengerToList} onClose={onCloseModal} />
			)}
			{passengerList.length > 0 && (
				<PassengerList
					passengers={passengerList}
					removePassenger={removePassengerFromList}
				/>
			)}
			{passengerList.length > 0 && (
				<TicketBill
					fare={trainDetails.fare}
					totalPassengers={passengerList.length}
					distance={distance}
				/>
			)}
		</Fragment>
	);
};

export default Ticket;
