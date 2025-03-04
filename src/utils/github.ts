const GH_BASE = 'https://avatars.githubusercontent.com/';
const GH_PARAMS = '?w=96&q=75';

export const generateGHSRC = (username: string) => `${GH_BASE}${username}${GH_PARAMS}`;
