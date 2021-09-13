import React, { Fragment, useState } from 'react';
import PaymentSuccessfull from './PaymentSuccessfull';

import classes from './TicketBill.module.css';

const TicketBill = (props) => {
	const [paymentSuccessfull, setPaymentSuccessfull] = useState(false);

	const { fare, totalPassengers, distance } = props;

	const totalBill = totalPassengers * fare * distance;

	const paymentHandler = () => {
		setPaymentSuccessfull(true);
	};

	return (
		<Fragment>
			{paymentSuccessfull && <PaymentSuccessfull />}
			<div className={classes.item}>
				<figure>
					<br />
					<figcaption>Total Passengers : {totalPassengers}</figcaption>
					<br />
					<blockquote>
						<p>
							Total Bill Amount: <strong> ₹{totalBill}</strong>
						</p>
					</blockquote>
				</figure>
				<button className={`btn ${classes.pay}`} onClick={paymentHandler}>
					Pay & Book
				</button>
			</div>
		</Fragment>
	);
};

export default TicketBill;
