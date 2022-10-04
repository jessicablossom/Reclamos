import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function UploadButtons() {
	return (
		<Stack direction='row' alignItems='center' spacing={2}>
			<Button className='primary' variant='contained' component='label'>
				Adjuntar
				<input id='input-upload' hidden accept='image/*' type='file' />
			</Button>
		</Stack>
	);
}
