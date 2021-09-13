import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Train.module.css';

const Train = (props) => {
	const { id, name, boarding, destination } = props;

	const ticketBookingUrl = `/ticket-booking/${props.id}?from=${boarding}&to=${destination}`;

	return (
		<li className={classes.item}>
			<figure>
				<blockquote>
					<p>{`${id} | ${name}`}</p>
				</blockquote>
				{/* <figcaption>Fare: {fare}/km</figcaption> */}
			</figure>
			<Link className='btn' to={ticketBookingUrl}>
				Book Train Ticket
			</Link>
		</li>
	);
};

export default Train;
