import { useEffect } from 'react'

import axios from 'axios'
const Dashboard = () => {
	const handleRequest = async () => {
		const data = await axios
			.get('https://pokeapi.co/api/v2/pokemon/ditt')
			.then((r) => r.data)
		console.log('data: ', data)
	}

	useEffect(() => {
		handleRequest()
	}, [])

	return (
		<div>
			<p>dashboard</p>
		</div>
	)
}

export default Dashboard
