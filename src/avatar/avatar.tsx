import clsx from 'clsx';

import styles from './avatar.module.css';
import defaultAvatar from './default.png';
import { generateGHSRC } from '../utils/github.ts';

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

export const Level = {
	Base: 'base',
	Power: 'power',
	Admin: 'admin',
} as const;

export type AvatarProps = Partial<{
	level: typeof Level[keyof typeof Level],
	username: string,
}>;
