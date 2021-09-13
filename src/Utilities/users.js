const users = [
	{ username: 'shubham', password: 'shubham@123' },
	{ username: 'rizna', password: 'rizna@123' },
	{ username: 'deveraj', password: 'deveraj@123' },
	{ username: 'varun', password: 'varun@123' },
	{ username: 'rashmi', password: 'rashmi@123' },
];

export const checkLogin = (username, password) => {
	const loginUser = users.find(
		(user) => user.username === username && user.password === password
	);

	if (loginUser) {
		return true;
	}
	return false;
};
