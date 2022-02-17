import React, { useContext } from 'react';
import { ScontriniContext } from '../../Contexts/ScontriniContext';
import { VisibilityContext } from '../../Contexts/Visibility-state';
import Scontrino from './Scontrino/Scontrino';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { AxiosIstance } from '../../commons/AxiosIstance';
import ScontriniStats from './ScontriniStats';

function ScontrDisplayer(props) {
	const [scontrini, setScontrini] = useContext(ScontriniContext);
	const [visibility] = useContext(VisibilityContext);

	const handleDelete = (id) => {
		const newArr = scontrini.filter((element) => {
			return element.id !== +id;
		});
		setScontrini([...newArr]);
		AxiosIstance.delete(`deleteScontrino?id=${id}`);
	};

	const currClassName= 'scontr-list ' + (!visibility ? 'hide' : '')
	console.log(currClassName)
	return (
		<div className='scontrDisplayer'>
			<ScontriniStats />
			<TransitionGroup className={currClassName}>
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
