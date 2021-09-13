import React, { Fragment, useRef } from 'react';

import Modal from '../UI/Modal';
import classes from './AddPassenger.module.css';

const AddPassenger = (props) => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();

		const name = nameInputRef.current.value;
		const age = ageInputRef.current.value;

		props.addPassenger({ name, age });
		props.onClose();
	};

	return (
		<Fragment>
			<Modal onClose={props.onClose}>
				<form onSubmit={submitHandler}>
					<div className={classes.control}>
						<label htmlFor='name'>Name of the Passenger</label>
						<input type='text' id='name' ref={nameInputRef} required />
					</div>
					<div className={classes.control}>
						<label htmlFor='age'>Age of the Passenger</label>
						<input
							type='number'
							id='age'
							ref={ageInputRef}
							min='5'
							max='150'
							required
						/>
					</div>
					<br />
					<div className='centered'>
						<button className='btn'>Add Passenger</button> &nbsp;&nbsp;&nbsp;
						<button className='btn' onClick={props.onClose}>
							Cancel
						</button>
					</div>
				</form>
			</Modal>
		</Fragment>
	);
};

export default AddPassenger;
