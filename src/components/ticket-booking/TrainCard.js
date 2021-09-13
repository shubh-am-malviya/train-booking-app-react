import React from 'react';

import classes from './TrainCard.module.css';

const TrainCard = (props) => {
	const { train, boarding, destination } = props;

	return (
		<figure className={classes.quote}>
			<p>
				<strong>
					{train.id} | {train.name}
				</strong>
			</p>
			<p className={classes.stations}>
				Boarding: {boarding} | Destination: {destination}
			</p>
			<figcaption>Fare: {train.fare}/km</figcaption>
		</figure>
	);
};

export default TrainCard;
