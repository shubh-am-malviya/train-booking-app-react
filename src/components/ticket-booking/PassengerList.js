import React from 'react';

import classes from './PassengerList.module.css';
import Card from '../UI/Card';
import Passenger from './Passenger';

const PassengerList = (props) => {
	const { passengers, removePassenger } = props;

	return (
		<Card>
			<h2 className='centered passengerlist'>Passengers List</h2>
			<ul className={classes.list}>
				{passengers.map((passenger, index) => (
					<Passenger
						key={index}
						id={index}
						name={passenger.name}
						age={passenger.age}
						removePassenger={removePassenger}
					/>
				))}
			</ul>
		</Card>
	);
};

export default PassengerList;
