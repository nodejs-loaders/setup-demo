import assert from "node:assert/strict";
import { describe, it } from 'node:test';

import { generateGHSRC } from "./github.ts";

describe('generateGHSRC', () => {
    it('should generate a GitHub avatar URL', () => {
        const username = 'jamie';
        const expected = `https://avatars.githubusercontent.com/${username}?w=96&q=75`;

        assert.strictEqual(generateGHSRC(username), expected);
    });
});
