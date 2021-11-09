import React, { useContext, useState } from 'react';
import { ScontriniContext } from '../../Contexts/ScontriniContext';

const sum = function (array) {};

function ScontriniStats(props) {
	const [scontrini] = useContext(ScontriniContext);

	var totale = 0;
	if (scontrini != undefined) {
		scontrini.forEach((element) => {
			totale += parseFloat(element.prezzo);
		});
	}
	return (
		<div>
			Totale di questa ricerca: {totale.toFixed(2)}&euro;
			<br />
			Costo diviso per 12: {(totale / 12).toFixed(2)}&euro;
		</div>
	);
}

export default ScontriniStats;
