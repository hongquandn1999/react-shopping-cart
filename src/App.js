import React, { Suspense } from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/index';
import NotFound from './components/NotFound';

// lazy load - Code splitting
const Photo = React.lazy(() => import('./features/Photo'))

function App() {
  return (
    
		<Suspense fallback={<div>Loading...</div>}>
			<BrowserRouter>
        	<Header/>
				<Switch>
					<Redirect exact from='/' to='/photos' />
					<Route path='/photos' component={Photo} />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		</Suspense>
	);
}

export default App;
