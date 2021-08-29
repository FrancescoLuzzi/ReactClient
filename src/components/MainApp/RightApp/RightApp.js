import React from 'react';
import ScontrDisplayer from './ScontrDisplayer';
import GraphDisplayer from './GraphDisplayer';

function RightApp(props) {
	return (
		<div className='rightApp'>
			<GraphDisplayer />
			<ScontrDisplayer />
		</div>
	);
}

export default RightApp;
