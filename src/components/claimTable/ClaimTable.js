import React from 'react';

// mui components
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

//styles
import './claimtable.css';
import '../../styles.css';

const ClaimTable = (props) => {
	return (
		<div className='table-container'>
			<TableContainer className='table'>
				<Table aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell> ID </TableCell>
							<TableCell align='left'>Titulo</TableCell>
							<TableCell align='left'>Descripcion</TableCell>
							<TableCell align='left'>Imagenes</TableCell>
							<TableCell align='left'>Comuna</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{props.list.map((item) => (
							<TableRow
								key={item.id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component='th' scope='row'>
									{item.id}
								</TableCell>
								<TableCell align='left'>{item.title}</TableCell>
								<TableCell align='left'>{item.description}</TableCell>
								<TableCell align='left'>
									<a href='item.image'>{item.image}</a>
								</TableCell>
								<TableCell align='left'>Comuna - {item.commune}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default ClaimTable;
