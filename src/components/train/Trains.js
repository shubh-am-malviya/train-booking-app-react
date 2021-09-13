import React from 'react';

import classes from './Trains.module.css';
import Train from './Train';

const Trains = (props) => {
	const { trains, boarding, destination } = props;

	return (
		<ul className={classes.list}>
			{trains.map((train) => (
				<Train
					key={train.id}
					id={train.id}
					name={train.name}
					fare={train.fare}
					boarding={boarding}
					destination={destination}
				/>
			))}
		</ul>
	);
};

export default Trains;
