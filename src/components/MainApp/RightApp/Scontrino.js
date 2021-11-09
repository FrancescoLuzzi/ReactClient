import React, { useState, useEffect } from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import CancelIcon from '@material-ui/icons/Cancel';
import Button from '@material-ui/core/Button';

function formatDate(date) {
	let month = String(date.getMonth() + 1);
	let day = String(date.getDate());
	if (day < 10) {
		day = '0' + day;
	}
	if (month < 10) {
		month = '0' + month;
	}
	return `${day}/${month}/${date.getFullYear()}`;
}

function Scontrino(props) {
	const [state, setState] = useState(props.scontrino);

	const [anchorEl, setAnchorEl] = React.useState(null);

	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const id = open ? 'simple-popover' : undefined;

	const [openDialog, setOpenDialog] = useState(false);

	const handleClickOpen = () => {
		setOpenDialog(true);
	};

	const handleCloseDialog = () => {
		setOpenDialog(false);
	};

	const deleteScontrino = () => {
		handleCloseDialog();
		props.handleDelete(state.id);
	};

	const classScontrino = (+state.prezzo > 0 ? 'uscita' : 'entrata') + ' scontrino';

	return (
		<div className={classScontrino}>
			Tipologia: {state.tipo}
			<br />
			Prezzo: {Math.abs(state.prezzo)}
			<br />
			Data: {formatDate(new Date(state.data))}
			<br />
			<div className='descrizione' aria-describedby={id} variant='contained' color='primary' onClick={handleClick}>
				Descrizione
			</div>
			<CancelIcon className='deleteButton' fontSize='large' onClick={handleClickOpen} />
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
			>
				<Typography className='descrizione-popover'>{state.descrizione}</Typography>
			</Popover>
			<Dialog open={openDialog} onClose={handleCloseDialog} aria-labelledby='form-dialog-title'>
				<DialogTitle className='form-dialog-title'>Sei sicuro di voler eliminare lo scontrino</DialogTitle>
				<DialogActions>
					<Button onClick={handleCloseDialog} color='primary'>
						Cancel
					</Button>
					<Button onClick={deleteScontrino} color='primary'>
						Elimina Scontrino
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default Scontrino;
