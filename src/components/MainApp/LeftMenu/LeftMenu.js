import React, { useContext, useEffect, useState } from 'react';
import { TipologieContext } from '../../Contexts/TipologieContext';
import { ScontriniContext } from '../../Contexts/ScontriniContext';
import { AxiosIstance } from '../../commons/AxiosIstance';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

function LeftMenu(props) {
	const [tipologie, setTipologie] = useContext(TipologieContext);

	const [scontrini, setScontrini] = useContext(ScontriniContext);

	const [tipo, setTipo] = useState('');

	const [data, setData] = useState(new Date().toISOString().substr(0, 10));

	/*const [yearSet,SetYearSet]=useState([]);

    useEffect(()=>{
      const years=[]
      const now=+data.split("-")[0]
      for(const i=2018; i<now;i++){
        years[now-i]=i;
      }
      SetYearSet(years);
    });*/

	const getTipologie = () => {
		AxiosIstance.get('getTipologie').then((result) => {
			setTipologie([...result.data]);
		});
	};

	const checkResearch = (useTipo) => {
		if (data === '') return false;
		if (useTipo && tipo === '') return false;
		return true;
	};

	const getScontrini = () => {
		if (!checkResearch(false)) return;
		const url = `getScontrini?year=${data.split('-')[0]}`;
		console.log(url);
		AxiosIstance.get(url)
			.then((result) => {
				setScontrini([...result.data]);
			})
			.catch((err) => {
				alert(err.value);
			});
	};

	const getScontriniByType = () => {
		if (!checkResearch(true)) return;
		const parti = data.split('-');
		const url = `getScontriniByType?year=${parti[0]}&tipo=${tipo}`;
		console.log(url);
		AxiosIstance.get(url)
			.then((result) => {
				setScontrini([...result.data]);
			})
			.catch((err) => {
				alert(err.value);
			});
	};

	const getScontriniByMonth = () => {
		if (!checkResearch(false)) return;
		const parti = data.split('-');
		const url = `getScontriniByMonth?year=${parti[0]}&month=${parti[1]}`;
		console.log(url);
		AxiosIstance.get(url)
			.then((result) => {
				setScontrini([...result.data]);
			})
			.catch((err) => {
				alert(err.value);
			});
	};
	const getScontriniByMonthAndType = () => {
		if (!checkResearch(true)) return;
		const parti = data.split('-');
		const url = `getScontriniByMonthAndType?year=${parti[0]}&month=${parti[1]}&tipo=${tipo}`;
		console.log(url);
		AxiosIstance.get(url)
			.then((result) => {
				setScontrini([...result.data]);
			})
			.catch((err) => {
				alert(err.value);
			});
	};
	const getScontriniByDate = () => {
		if (!checkResearch(false)) return;
		const url = `getScontriniByDate?date=${data}`;
		console.log(url);
		AxiosIstance.get(url)
			.then((result) => {
				setScontrini([...result.data]);
			})
			.catch((err) => {
				alert(err.value);
			});
	};
	const getScontriniByWeek = () => {
		if (!checkResearch(false)) return;
		const url = `getScontriniByWeek?date=${data}`;
		console.log(url);
		AxiosIstance.get(url)
			.then((result) => {
				console.log(result.data);
				setScontrini([...result.data]);
			})
			.catch((err) => {
				alert(err.value);
			});
	};

	useEffect(() => {
		getTipologie();
	});

	return (
		<div className='leftMenu'>
			<h3 className='leftMenuContent'>Sezione di Ricerca</h3>

			<Select
				className='leftMenuContent selectTipologia'
				value={tipo}
				onChange={(event) => setTipo(event.target.value)}
				defaultValue='Cibo'
				displayEmpty
			>
				<MenuItem value={''}>Seleziona Tipo</MenuItem>
				{tipologie.map((el) => {
					return <MenuItem value={el.tipo}>{el.tipo}</MenuItem>;
				})}
			</Select>
			<br />
			<TextField
				name='data'
				label='Giorno Spesa'
				type='date'
				onChange={(e) => setData(e.target.value)}
				value={data}
				className='datePicker leftMenuContent'
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<br />
			<button className='leftMenuContent' onClick={getScontrini}>
				Anno
			</button>
			<br />
			<button className='leftMenuContent' onClick={getScontriniByType}>
				Anno e Tipo
			</button>
			<br />
			<button className='leftMenuContent' onClick={getScontriniByMonth}>
				Anno e Mese
			</button>
			<br />
			<button
				className='leftMenuContent'
				onClick={getScontriniByMonthAndType}
			>
				Anno,Mese,Tipo
			</button>
			<br />
			<button className='leftMenuContent' onClick={getScontriniByDate}>
				Data
			</button>
			<br />
			<button className='leftMenuContent' onClick={getScontriniByWeek}>
				Settimana
			</button>
		</div>
	);
}

export default LeftMenu;
