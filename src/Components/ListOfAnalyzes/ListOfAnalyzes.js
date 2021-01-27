import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPrices } from '../../redux/actions';
import './listOfAnalyzesStyle.css';

export const ListOfAnalyzes = () => {
	const filterData = useSelector(state => state.app.filterData);
	const dispatch = useDispatch()
	const [open, setOpen] = useState({});
	const [price, setPrice] = useState(0);


	useEffect(() => {
		dispatch(addPrices(price))
		// eslint-disable-next-line
	}, [price]);

	const addPrice = index => {
		if (open[index]) {
			filterData.forEach(item => {
				if (item.id === index) setPrice(price - item.price)
			});
		}
		else {
			filterData.forEach(item => {
				if (item.id === index) setPrice(price + item.price)
			});
		}
	}

	const clickOpen = index => {
		setOpen(open =>
			({...open, [index]: !open[index]}));
			addPrice(index)
	};
	
    return (
        <div className="listOfAnalyzes">
			{filterData?.map((item, i) => (
				i < 9 ? 
				<div
					key={`${item.id}${i}`}
					className={
						!open[item.id] ?
						"listOfAnalyzes__block" :
						"listOfAnalyzes__block listOfAnalyzes__block-active"
					}
					onClick={() => clickOpen(item.id)}
					>
					<div className="listOfAnalyzes__text analyzes">
						<p className="analyzes__title">{item.name}</p>
						<p 
							className="analyzes__text"
						>{item.description}</p>
					</div>
					<div className="listOfAnalyzes__properties analyzes-properties">
						<p className="analyzes-properties__price">{item.price} ₽</p>
						<p className="analyzes-properties__date">{item.days} дней</p>
						<div 
							className="analyzes-properties__open"
							
						>
							{!open[item.id] && <span>+</span>}
							{open[item.id] && <span>-</span>}
						</div>
					</div>
				</div> : null
			))}
		</div>
    )
}