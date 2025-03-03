import { match, ok } from 'node:assert/strict';
import { describe, it } from 'node:test';

import { render } from '@testing-library/react';

import { Avatar, Level } from './avatar.tsx';

describe('<Avatar>', { concurrency: true }, () => {
	it('should render with defaults', () => {
		const { container: { firstChild } } = render(<Avatar />);
		const avatar = firstChild as HTMLImageElement;

		ok(avatar.classList.contains('base'));
		match(avatar.src, /default.png$/);
	});

	it('should render with supplied user level', () => {
		const { container: { firstChild } } = render(<Avatar level={Level.Admin} />);
		const avatar = firstChild as HTMLImageElement;

		ok(avatar.classList.contains('admin'));
		match(avatar.src, /default.png$/);
	});

	it('should render with the GH avatar for the supplied username', () => {
		const { container: { firstChild } } = render(<Avatar username="jamie" />);
		const avatar = firstChild as HTMLImageElement;

		match(avatar.src, /jamie/);
	});
});
