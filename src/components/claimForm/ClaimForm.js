import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import {
	FormControl,
	Button,
	TextField,
	InputLabel,
	MenuItem,
	Select,
	TextareaAutosize,
} from '@mui/material';
import UploadFiles from '../UploadFiles';
import '../../styles.css';
import './claimform.css';

const ClaimForm = (props) => {
	const [comunas, setComunas] = useState([]);
	const [formValue, setformValue] = React.useState({
		title: '',
		description: '',
		image: '',
		commune: '',
	});
	const [selectedFile, setSelectedFile] = React.useState(null);

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await Axios({
				method: 'POST',
				url: 'https://633a23d9e02b9b64c60c9d72.mockapi.io/claim',
				data: formValue,
				headers: { 'Content-Type': 'application/json' },
			});
			props.callback();
		} catch (error) {
			console.log(error);
		}
	};

	const handleChange = (event) => {
		setformValue({
			...formValue,
			[event.target.name]: event.target.value,
		});
	};

	useEffect(() => {
		Axios({
			url: 'https://633a23d9e02b9b64c60c9d72.mockapi.io/Comunas',
		})
			.then((response) => {
				setComunas(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [setComunas]);

	return (
		<form className='form-wrapper' onSubmit={handleSubmit}>
			<FormControl required fullWidth>
				<InputLabel className='input-form' id='commune-select-label'>
					Comuna
				</InputLabel>
				<Select
					labelId='commune-select-label'
					id='commune-select'
					label='Comuna'
					name='commune'
					value={formValue.commune}
					onChange={handleChange}
				>
					{comunas.map((item) => (
						<MenuItem key={'C' + item.id} value={item.id}>
							{item.nombre} - {item.barrios}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<TextField
				required
				fullWidth
				id='outlined-basic'
				label='Titulo'
				variant='outlined'
				className='input-form'
				name='title'
				value={formValue.title}
				onChange={handleChange}
			/>
			<TextareaAutosize
				required
				placeholder='Descripcion'
				className='text-area'
				maxRows={5}
				name='description'
				value={formValue.description}
				onChange={handleChange}
			/>
			<UploadFiles />
			<Button type='submit' variant='contained' className='primary'>
				Enviar
			</Button>
		</form>
	);
};

export default ClaimForm;
