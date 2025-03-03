import { useState } from 'react';

import { Avatar, Level, type AvatarProps } from './avatar/avatar.tsx';

export const App = () => {
	const [level, setLevel] = useState<AvatarProps['level']>();
	const [name, setName] = useState('');

	return (
		<>
			<div>
				<Avatar level={level} username={name} />
				{' '}
				<span>{name}</span>
			</div>

			<hr />

			<label>
				GitHub Username
				{' '}
				<input
					name="name"
					onChange={({ currentTarget: { value } }) => setName(value)}
				/>
			</label>

			{' '}

			<label>
				<select
					name="level"
					onChange={({ currentTarget: { value } }) => setLevel(value as AvatarProps['level'])}
				>{Object.values(Level).map((v) =>(
					<option key={v}>{v}</option>
				))}</select>
				{' '}
				User level
			</label>
		</>
	);
};
