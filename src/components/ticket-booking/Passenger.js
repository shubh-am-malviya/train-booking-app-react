import React from 'react';

import classes from './Passenger.module.css';

const Passenger = (props) => {
	const { id, name, age, removePassenger } = props;

	const removeHandler = () => {
		removePassenger(id);
	};

	return (
		<li className={classes.item}>
			<figure>
				<blockquote>
					<p>Name: {name}</p>
				</blockquote>
				<figcaption>Age : {age}</figcaption>
			</figure>
			<button className={`btn ${classes.remove}`} onClick={removeHandler}>
				Remove
			</button>
		</li>
	);
};

export default Passenger;
