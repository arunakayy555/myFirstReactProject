import React from 'react';

const UserName = (context) => {
	const {
		actions: { setUsername },
		state: { userName },
	}
      = context;

	return <div>
		<label> enter username: </label>
		<input
			type="text"
			placeholder="enter username"
			value={ userName }
			onChange={ (e) => setUsername(e.target.value) }
		/>
	</div>;
};

export default UserName;
