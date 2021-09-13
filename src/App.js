import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { authActions } from './store/auth';
import Header from './components/header/Header';
import Login from './components/login/Login';
import classes from './App.module.css';
import BookTrain from './components/train/BookTrain';
import ContactUs from './components/pages/ContactUs';
import PageNotFound from './components/pages/PageNotFound';
import Ticket from './components/ticket-booking/Ticket';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage.getItem('isLoggedIn') === 'true') {
			dispatch(authActions.login());
		}
	}, [dispatch]);

	return (
		<BrowserRouter>
			<Header />
			<main className={classes.main}>
				<Switch>
					<Route path='/' exact>
						<BookTrain />
					</Route>

					<Route path='/ticket-booking/:trainId' exact>
						<Ticket />
					</Route>

					<Route path='/login'>
						<Login />
					</Route>

					<Route path='/contactus'>
						<ContactUs />
					</Route>

					<Route path='*'>
						<PageNotFound />
					</Route>
				</Switch>
			</main>
		</BrowserRouter>
	);
}

export default App;
