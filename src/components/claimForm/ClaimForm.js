import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import storage from '../../firebase/firebaseConfig';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';

import {
	FormControl,
	Button,
	TextField,
	InputLabel,
	MenuItem,
	Select,
	TextareaAutosize,
	Stack,
} from '@mui/material';
import UploadFiles from './UploadFiles';
import '../../styles.css';
import './claimform.css';

const ClaimForm = (props) => {
	const [comunas, setComunas] = useState([]);
	const [formValue, setformValue] = React.useState({
		title: '',
		description: '',
		imageUrl: '',
		commune: '',
	});

	const uploadImages = async (file) => {
		const storageRef = ref(storage, `files/${file.name}`);
		const uploadTask = uploadBytesResumable(storageRef, file);

		const promise = new Promise((resolve, reject) => {
			uploadTask.on(
				'state_changed',
				(snapshot) => {},
				(error) => {
					console.log(error);
				},
				() => {
					return getDownloadURL(uploadTask.snapshot.ref).then((returnUrl) => {
						resolve(returnUrl);
					});
				}
			);
		});

		return promise;
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const file = event.target['input-upload'].files[0];
		uploadImages(file).then((imageUrl) => {
			const data = { ...formValue, imageUrl };
			Axios.post('https://633a23d9e02b9b64c60c9d72.mockapi.io/claim', data, {
				headers: { 'Content-Type': 'application/json' },
			})
				.then(function (response) {
					props.callback();
				})
				.catch(function (error) {
					console.log(error);
				});
		});
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
		<form className='formContainer' id='claimform' onSubmit={handleSubmit}>
			<FormControl required fullWidth>
				<InputLabel className='inputForm' id='commune-select-label'>
					Comuna
				</InputLabel>
				<Select
					labelId='commune-select-label'
					id='commune-select'
					label='Comuna'
					name='commune'
					value={formValue.commune}
					onChange={handleChange}
					color='primary'
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
				className='inputForm'
				name='title'
				value={formValue.title}
				onChange={handleChange}
				color='primary'
			/>
			<Stack
				direction='column'
				justifyContent='center'
				alignItems='stretch'
				spacing={2}
				style={{ width: '100%' }}
			>
				<TextareaAutosize
					required
					placeholder='Descripcion'
					className='textArea'
					maxRows={5}
					name='description'
					value={formValue.description}
					onChange={handleChange}
					color='primary'
				/>
			</Stack>
			<UploadFiles />
			<Button type='submit' variant='contained' className='primary'>
				Enviar
			</Button>
		</form>
	);
};

export default ClaimForm;
