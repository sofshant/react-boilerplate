import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/error/NotFound';

import Badge from './components/Badge';

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<NotFound />} />
			</Routes>

			<Badge />
		</>
	);
};

export default App;
