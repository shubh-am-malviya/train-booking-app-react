import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { authActions } from '../../store/auth';
import classes from './Header.module.css';

const Header = () => {
	const { isLoggedIn } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const history = useHistory();

	const logoutHandler = () => {
		dispatch(authActions.logout());
		localStorage.setItem('isLoggedIn', false);
		history.push('/login');
	};

	return (
		<header className={classes.header}>
			<div className={classes.logo}>Train Booking App</div>
			<nav className={classes.nav}>
				<ul>
					{isLoggedIn && (
						<li>
							<NavLink to='/' activeClassName={classes.active}>
								Book Ticket
							</NavLink>
						</li>
					)}
					<li>
						<NavLink to='/contactus' activeClassName={classes.active}>
							Contact Us
						</NavLink>
					</li>
					<li>
						{isLoggedIn ? (
							<a href='/login' onClick={logoutHandler}>
								Logout
							</a>
						) : (
							<NavLink to='/login'>Login</NavLink>
						)}
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
