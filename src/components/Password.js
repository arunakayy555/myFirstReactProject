import React from 'react';
import context from '../core/context';

const Password = () =>
	<div>
		<label> enter password: </label>
		<input
			type="password"
			placeholder="enter password"
			onChange={ (e) => context.actions.setPassword(e.target.value) }
		/>
	</div>
	;

export default Password;
