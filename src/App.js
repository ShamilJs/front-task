import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { ControlePages } from './Components/ControlePages/ControlePages';
import { PageOne } from './Components/PageOne';
import { getAnalyzes } from './Components/server';
import { Tabs } from './Components/Tabs/Tabs';
import { getDataFromServer } from './redux/actions';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		getAnalyzes()
		.then(res => dispatch(getDataFromServer(res.categories)))
		.catch(err => console.log(err))
		// eslint-disable-next-line
	}, []);

	return (
		<div className="App">
			<Tabs />
			<PageOne/>
			<ControlePages/>
		</div>
  );
}

export default App;
