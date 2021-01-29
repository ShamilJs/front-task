import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { useStyles } from './Components/appStyle';
import { ControlePages } from './Components/ControlePages/ControlePages';
import { PageOne } from './Components/PageOne';
import { PageTwo } from './Components/PageTwo';
// eslint-disable-next-line
import { getAnalyzes } from './Components/server';
import { Tabs } from './Components/Tabs/Tabs';
import { getDataFromServer } from './redux/actions';
import DB from './DB.json';


const App = () => {
	const dispatch = useDispatch();
	const [btn, setBtn] = useState(0);
	const [required, setRequired] = useState(false);
	const classes = useStyles()

	useEffect(() => {
		// Данные берем из локального файла
		dispatch(getDataFromServer(DB.categories))

		// Обращение к серверу данных (не настроены корсы)
		// getAnalyzes()
		// .then(res => dispatch(getDataFromServer(res.categories)))
		// .catch(err => console.log(err))
		// eslint-disable-next-line
	}, []);

	const plusBtn = () => {
		setBtn(btn + 1)
		if (btn > 2) setBtn(2);
	};

	const minusBtn = () => {
		setBtn(btn - 1)
		if (btn < 0) setBtn(0);
	};

	return (
		<div className={classes.app}>
			<Tabs btn={btn}/>
			{btn === 0 ?
				<PageOne/> :
				<PageTwo
					required={required}
					setRequired={setRequired}
					btn={btn}
				/>
			}
			<ControlePages
				btn={btn}
				plusBtn={plusBtn}
				minusBtn={minusBtn}
				required={required}
				setRequired={setRequired}
			/>
		</div>
	);
};

export default App;
