import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPrices, selectData, setOpenItem } from '../../redux/actions';
import { useStyles } from './listOfAnalyzesStyle';

export const ListOfAnalyzes = () => {
	const classes = useStyles();

	const filterData = useSelector(state => state.app.filterData);
	const openItem = useSelector(state => state.app.setOpen);
	const prices = useSelector(state => state.app.price);
	const selectDatas = useSelector(state => state.app.selectData);
	const dispatch = useDispatch()
	const [open, setOpen] = useState({});
	const [price, setPrice] = useState(0);
	const [selectFilter, setSelectFilter] = useState([]);

	useEffect(() => {
		setOpen(openItem);
		setPrice(prices);
		setSelectFilter(selectDatas);
		// eslint-disable-next-line
	}, [])

	useEffect(() => {
		dispatch(addPrices(price))
		dispatch(selectData(selectFilter))
		if (!Object.keys(open).length) return
		dispatch(setOpenItem(open));
		// eslint-disable-next-line
	}, [price, selectFilter, open]);



	const addPrice = index => {
		if (openItem[index]) {
			filterData.forEach(item => {
				if (item.id === index) {
					setPrice(price - item.price)
					setSelectFilter(selectFilter.filter(filter => item !== filter))
				}
			});
		}
		else {
			filterData.forEach(item => {
				if (item.id === index) {
					setPrice(price + item.price)
					setSelectFilter([...selectFilter, item])
				}
			});
		}
	};

	const clickOpen = index => {
		setOpen(open =>
			({...open, [index]: !open[index]}));
			addPrice(index);
	};
	
    return (
        <div className={classes.listOfAnalyzes}>
			{filterData?.map((item, i) => (
				i < 9 ? 
				<div
					key={`${item.id}${i}`}
					className={
						!openItem[item.id] ?
						classes.listOfAnalyzes__block :
						classes.listOfAnalyzes__blockActive
					}
					onClick={() => clickOpen(item.id)}
					>
					<div className={classes.listOfAnalyzes__text}>
						<p className={classes.analyzes__title}>{item.name}</p>
						<p 
							className={classes.analyzes__text}
						>{item.description}</p>
					</div>
					<div className={classes.analyzesProperties}>
						<p className={classes.analyzesProperties__price}>{item.price} ₽</p>
						<p className={classes.analyzesProperties__date}>{item.days} дней</p>
						<div 
							className={classes.analyzesProperties__open}
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