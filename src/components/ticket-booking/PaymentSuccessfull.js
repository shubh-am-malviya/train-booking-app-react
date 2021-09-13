import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Modal from '../UI/Modal';

const PaymentSuccessfull = () => {
	const history = useHistory();

	useEffect(() => {
		const timer = setTimeout(() => {
			history.replace('/');
		}, 2000);

		return () => {
			clearTimeout(timer);
		};
	}, [history]);

	return (
		<Modal>
			<h2 className='centered'>Payment Successfull</h2>
			<p className='centered'>Redirecting to home page</p>
		</Modal>
	);
};

export default PaymentSuccessfull;
