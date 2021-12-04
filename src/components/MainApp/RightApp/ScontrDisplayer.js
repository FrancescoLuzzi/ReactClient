import React, { useContext } from 'react';
import { ScontriniContext } from '../../Contexts/ScontriniContext';
import Scontrino from './Scontrino';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { AxiosIstance } from '../../commons/AxiosIstance';
import ScontriniStats from './ScontriniStats';

function ScontrDisplayer(props) {
	const [scontrini, setScontrini] = useContext(ScontriniContext);

	const handleDelete = (id) => {
		const newArr = scontrini.filter((element) => {
			return element.id !== +id;
		});
		setScontrini([...newArr]);
		AxiosIstance.delete(`deleteScontrino?id=${id}`);
	};

	return (
		<div className='scontrDisplayer'>
			<ScontriniStats />
			<TransitionGroup className='scontr-list'>
				{scontrini.map((el) => {
					return (
						<CSSTransition key={el.id} timeout={300} classNames='scontrino'>
							<Scontrino scontrino={el} handleDelete={handleDelete} key={el.id}></Scontrino>
						</CSSTransition>
					);
				})}
			</TransitionGroup>
		</div>
	);
}

export default ScontrDisplayer;
