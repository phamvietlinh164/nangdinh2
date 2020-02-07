import React from 'react';
import Test from './Page/Test';
import Practise from './Page/Practise';

const routes = [
	{
		path: '/',
		exact: true,
		main: () => <Practise />
	},
	{
		path: '/test',
		exact: false,
		main: () => <Test />
	}
];

export default routes;