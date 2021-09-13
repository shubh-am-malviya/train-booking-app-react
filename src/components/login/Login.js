import React, { Fragment, useRef, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { authActions } from '../../store/auth';
import Card from '../UI/Card';
import classes from './Login.module.css';
import { checkLogin } from '../../Utilities/users';

const Login = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { isLoggedIn } = useSelector((state) => state.auth);
	const usernameRef = useRef();
	const passwordRef = useRef();

	useEffect(() => {
		if (isLoggedIn) {
			history.push('/');
		}
	}, [isLoggedIn, history]);

	const submitHandler = (event) => {
		event.preventDefault();

		const username = usernameRef.current.value;
		const password = passwordRef.current.value;

		if (checkLogin(username, password)) {
			dispatch(authActions.login());
			localStorage.setItem('isLoggedIn', true);
			history.push('/');
		} else {
			alert('Invalid Credentials');
		}

		usernameRef.current.value = '';
		passwordRef.current.value = '';
	};

	return (
		<Fragment>
			<Card>
				<h2 className='centered'>Login</h2>
				<form onSubmit={submitHandler}>
					<div className={classes.control}>
						<label htmlFor='username'>Username</label>
						<input type='text' id='username' ref={usernameRef} required />
					</div>
					<div className={classes.control}>
						<label htmlFor='password'>Password</label>
						<input type='password' id='password' ref={passwordRef} required />
					</div>
					<br />
					<div className={classes.actions}>
						<button className='btn'>Login</button>
					</div>
				</form>
			</Card>
		</Fragment>
	);
};

export default Login;
