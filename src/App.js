/* eslint-disable no-magic-numbers */
import { React } from 'react';
import './App.scss';
import Password from './components/Password';
import context from './core/context';
import UserName from './components/UserName';

const App = () =>
	<div style={ { textAlign: 'center' } }>
		<UserName/>
		<Password/>
		<p>Username: { context.state.username }</p>
		<p>Password: { context.state.password }</p>
	</div>
	;

export default App;
