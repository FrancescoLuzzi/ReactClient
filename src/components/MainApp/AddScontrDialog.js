import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { AxiosIstance } from '../commons/AxiosIstance';
import { TipologieContext } from '../Contexts/TipologieContext';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { VisibilityContext } from '../Contexts/Visibility-state';

export default function FormDialog() {
	const [open, setOpen] = useState(false);
	const [tipologie] = useContext(TipologieContext);
	const [,setVisibility] = useContext(VisibilityContext);

	const [tipo, setTipo] = useState('');
	const [prezzo, setPrezzo] = useState(0);
	const [data, setData] = useState(new Date().toISOString().split("T")[0]);
	const [descrizione, setDescrizione] = useState('');

	const handleClickOpen = () => {
		setOpen(true);
		setVisibility(false)
	};

	const handleClose = () => {
		setOpen(false);
		setVisibility(true)
	};

	const checkScontrino = () => {
		//checks if scontrino is good to post
		if (tipo === '') return false;
		if (prezzo === 0) return false;
		if (data === '') return false;
		return true;
	};

	const addScontrino = () => {
		if (!checkScontrino()) {
			alert('scontrino errato');
			return;
		}
		AxiosIstance.post('/addScontrino', {
			tipo: tipo,
			prezzo: prezzo,
			data: data,
			descrizione: descrizione,
		});
		alert('aggiunto Scontrino');
		setDescrizione('');
		setPrezzo(0);
	};

	return (
		<div>
			<PostAddIcon className='addButton' fontSize='large' onClick={handleClickOpen} />

			<Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
				<DialogTitle className='form-dialog-title'>Aggiungi il tuo scontrino</DialogTitle>
				<DialogContent className='addDialog'>
					<TextField
						autoFocus
						margin='dense'
						name='descrizione'
						label='descrizione'
						type='text'
						onChange={(event) => setDescrizione(event.target.value)}
						value={descrizione}
						fullWidth
						multiline
					/>
					<br />
					<TextField
						margin='dense'
						name='prezzo'
						label='prezzo'
						type='number'
						onChange={(event) => setPrezzo(event.target.value)}
						value={prezzo}
					/>
					<br />
					<TextField
						name='data'
						label='Giorno Spesa'
						type='date'
						id='date-picker-dialog'
						onChange={(e) => setData(e.target.value)}
						value={data}
						InputLabelProps={{ shrink: true, required: true }}
					/>
					<br />
					<Select className=' selectTipologia' value={tipo} onChange={(event) => setTipo(event.target.value)} displayEmpty>
						<MenuItem value={''} key='vuoto'>
							Seleziona Tipo
						</MenuItem>
						{tipologie.map((el) => {
							return (
								<MenuItem value={el.tipo} key={el.tipo}>
									{el.tipo}
								</MenuItem>
							);
						})}
					</Select>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color='primary'>
						Cancel
					</Button>
					<Button onClick={addScontrino} color='primary'>
						Aggiungi Scontrino
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
