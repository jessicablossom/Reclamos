import React from 'react';

// mui components
import { Card } from '@mui/material';

//styles
import './claimtable.css';
import '../../styles.css';

const ClaimTable = (props) => {
	return (
		<div className='tableContainer'>
			<h2>Reclamos ingresados</h2>
			<div className='gridTable'>
				<p>ID</p>
				<p>Comuna</p>
				<p>Titulo</p>
				<p>Descripcion</p>
				<p>Imagen</p>
			</div>
			<div className='cardContainer'>
				{props.list.map((item) => (
					<Card className='cardItem' key={item.id} variant='outlined'>
						<h6>Reclamo # {item.id}</h6>
						<h6>Comuna - {item.commune}</h6>
						<h5>{item.title}</h5>
						<p>{item.description}</p>
						<div>
							<img src={item.imageUrl} />
						</div>
					</Card>
				))}
			</div>
		</div>
	);
};

export default ClaimTable;
