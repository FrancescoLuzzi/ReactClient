import React from 'react';
import LeftMenu from './LeftMenu/LeftMenu';
import RightApp from './RightApp/RightApp';
import TipologieState from '../Contexts/TipologieContext';
import ScontriniState from '../Contexts/ScontriniContext';
import AddScontrDialog from '../AddScontrDialog';
function MainApp(props) {
	return (
		<div className='mainApp'>
			<ScontriniState>
				<TipologieState>
					<LeftMenu />
					<AddScontrDialog />
					<RightApp />
				</TipologieState>
			</ScontriniState>
		</div>
	);
}

export default MainApp;
