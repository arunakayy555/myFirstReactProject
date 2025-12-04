/* eslint-disable no-magic-numbers */
import { React } from 'react';
import './App.scss';

const App = () => {
	const numbers = [1, 2, 3, 4, 5];

	return (
		<div style={ { textAlign: 'center' } }>
			{ numbers.map((num) =>
				<div key={ num }>{ num }</div>) }
		</div>
	);
};

export default App;
