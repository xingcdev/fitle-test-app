import React, { useState, useEffect } from 'react';

const TableHeader = function () {
	return (
		<thead>
			<tr>
				<th>Age</th>
				<th>class of worker</th>
				<th>industry code</th>
				<th>occupation code</th>
				<th>education</th>
			</tr>
		</thead>
	);
};

const TableBody = function (props) {
	const { populationData } = props;

	const rows = populationData.map((person, index) => {
		return (
			<tr key={index}>
				<td>{person.age}</td>
				<td>{person['class of worker']}</td>
				<td>{person['industry code']}</td>
				<td>{person['occupation code']}</td>
				<td>{person.education}</td>
			</tr>
		);
	});

	return <tbody>{rows}</tbody>;
};

const Table = function () {
	const [population, setPopulation] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		fetch('http://localhost:4000/api/population/all', { method: 'GET' })
			.then((res) => res.json())
			.then(
				(result) => {
					setPopulation(result.population);
					setIsLoaded(true);
				},
				(error) => console.log(error)
			);
	}, []);

	if (!isLoaded) return <p>Loading...</p>;
	else {
		return (
			<table>
				<TableHeader />
				<TableBody populationData={population} />
			</table>
		);
	}
};

export default Table;
