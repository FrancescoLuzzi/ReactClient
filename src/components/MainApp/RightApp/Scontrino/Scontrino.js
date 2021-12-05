import React, { useState } from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import CancelIcon from '@material-ui/icons/Cancel';
import Button from '@material-ui/core/Button';
import './Scontrino.css';

const formatDate = (date) => {
	let day = String(date.getDate());
	if (day < 10) day = '0' + day;

	let month = String(date.getMonth() + 1);
	if (month < 10) month = '0' + month;

	return `${day}/${month}/${date.getFullYear()}`;
};

function Scontrino({ scontrino, handleDelete }) {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const id_popover = open ? 'simple-popover' : undefined;
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const [openDialog, setOpenDialog] = useState(false);
	const handleClickOpen = () => {
		setOpenDialog(true);
	};
	const handleCloseDialog = () => {
		setOpenDialog(false);
	};

	const deleteScontrino = () => {
		handleCloseDialog();
		handleDelete(scontrino.id);
	};

	const classScontrino = (+scontrino.prezzo > 0 ? 'uscita' : 'entrata') + ' scontrino ';

	return (
		<div className={classScontrino}>
			<span className={scontrino.tipo} />
			Tipologia: {scontrino.tipo}
			<br />
			Prezzo: {Math.abs(scontrino.prezzo)}
			<br />
			Data: {formatDate(new Date(scontrino.data))}
			<br />
			<div className='descrizione' aria-describedby={id_popover} variant='contained' color='primary' onClick={handleClick}>
				Descrizione
			</div>
			<CancelIcon className='deleteButton' fontSize='large' onClick={handleClickOpen} />
			<Popover
				id={id_popover}
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
				<Typography className='descrizione-popover'>{scontrino.descrizione}</Typography>
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
