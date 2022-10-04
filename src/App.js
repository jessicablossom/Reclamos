import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

import ClaimForm from './components/claimForm/ClaimForm';
import ClaimTable from './components/claimTable/ClaimTable';
import './styles.css';

function App() {
	const [list, setList] = useState([]);

	const getClaims = () => {
		Axios({
			url: 'https://633a23d9e02b9b64c60c9d72.mockapi.io/claim',
		})
			.then((response) => {
				setList(response.data || []);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		getClaims();
	}, [setList]);

	return (
		<div>
			<header></header>
			<div className='containerGrid'>
				<div className='textContainer'>
					<h1>Inicia tu reclamo</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
						consectetur lectus in ante varius venenatis. Sed ligula tellus,
						molestie at semper imperdiet, commodo sed ligula. Praesent egestas
						interdum porta.
					</p>
				</div>
				<ClaimForm callback={getClaims} />
				{list.length >= 1 && <ClaimTable list={list} />}
			</div>
		</div>
	);
}

export default App;
