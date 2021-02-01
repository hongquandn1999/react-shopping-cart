import React, { Suspense } from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound';

// lazy load - Code splitting
const Photo = React.lazy(() => import('./features/Photo'))

function App() {
  return (
		<Suspense fallback={<div>Loading...</div>}>
			<BrowserRouter>
				{/* Remove after testing */}
				<ul>
					<li>
						<Link to='/photos'>Go to photo page</Link>
					</li>
					<li>
						<Link to='/photos/add'>Go to add new photo page</Link>
					</li>
					<li>
						<Link to='/photos/123'>Go to edit photo page</Link>
					</li>
				</ul>
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
