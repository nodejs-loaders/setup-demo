import clsx from 'clsx';

import styles from './avatar.module.css';
import defaultAvatar from './default.png';

export const Avatar = ({
	level = 'base',
	username,
}: AvatarProps = {}) => (
	<img
		className={clsx(styles.Avatar, styles[level])}
		onError={(e) => e.currentTarget.src = defaultAvatar}
		src={username ? generateGHSRC(username) : defaultAvatar}
	/>
);

const generateGHSRC = (username: string) => `${GH_BASE}${username}${GH_PARAMS}`;

const GH_BASE = 'https://avatars.githubusercontent.com/';
const GH_PARAMS = '?w=96&q=75';

export const Level = {
	Base: 'base',
	Power: 'power',
	Admin: 'admin',
} as const;

export type AvatarProps = Partial<{
	level: typeof Level[keyof typeof Level],
	username: string,
}>;
