const trains = [
	{
		id: 102142,
		name: 'Rajdhani Superfast Express',
		fare: 1,
		stations: ['Mumbai', 'Delhi', 'Chennai', 'Kolkata'],
	},
	{
		id: 201345,
		name: 'Intercity Superfast',
		fare: 2,
		stations: ['Bangalore', 'Delhi', 'Chennai', 'Kolkata'],
	},
	{
		id: 101723,
		name: 'Tejas Superfast Express',
		fare: 3,
		stations: ['Kolkata', 'Delhi', 'Bangalore', 'Mumbai'],
	},
	{
		id: 202545,
		name: 'Vande Bharat Express',
		fare: 2,
		stations: ['Mumbai', 'Kolkata', 'Chennai', 'Bangalore'],
	},
	{
		id: 101004,
		name: 'Kanyakumari Express',
		fare: 1,
		stations: ['Mumbai', 'Bangalore', 'Delhi'],
	},
];

const distance = {
	Mumbai: { Delhi: 1415, Chennai: 1336, Bangalore: 983, Kolkata: 1940 },
	Delhi: { Mumbai: 1415, Chennai: 2208, Bangalore: 2175, Kolkata: 1535 },
	Chennai: { Delhi: 2208, Mumbai: 1336, Bangalore: 347, Kolkata: 1659 },
	Bangalore: { Delhi: 2175, Chennai: 347, Mumbai: 983, Kolkata: 1867 },
	Kolkata: { Delhi: 1535, Chennai: 1659, Bangalore: 1867, Mumbai: 1940 },
};

export const getTrainsBetweenStations = (from, to) => {
	const ansTrains = trains.filter((train) => {
		return (
			train.stations.find((station) => station === from) &&
			train.stations.find((station) => station === to)
		);
	});

	return ansTrains;
};

export const getTrainDetails = (trainID) => {
	const train = trains.find((train) => train.id.toString() === trainID);
	return train;
};

export const getDistance = (from, to) => {
	return distance[from][to];
};

export const getStations = () => {
	const stations = [];

	for (const station in distance) {
		stations.push(station);
	}

	return stations;
};
