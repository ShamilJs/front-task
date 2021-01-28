import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clickCategory, getFilterData, searchActive } from '../../redux/actions';
import { useStyles } from './categoriesStyle';

export const Categories = () => {
	const classes = useStyles();
	const data = useSelector(state => state.app.data);
	const search = useSelector(state => state.app.searchActive);
	const dispatch = useDispatch();
	const [categories, setCategories] = useState(0);
	const [categoriesTemp, setCategoriesTemp] = useState(0);

	useEffect(() => {
		dispatch(getFilterData(categories))
		// eslint-disable-next-line
	}, [categories])

	useEffect(() => {
		if (search) {
			setCategoriesTemp(categories)
			setCategories(null)
		} else setCategories(categoriesTemp)
		// eslint-disable-next-line
	}, [search])

	const handlCategory = i => {
		setCategories(i)
		setCategoriesTemp(i)
		dispatch(clickCategory(true))
		dispatch(searchActive(false))
	}
 
    return (
        <div className={classes.categories}>
			{data.map((item, i) => (
				<div
					key={i}
					className={
						(categories !== i) ?
						classes.categories__block :
						classes.categories__blockActive
					}
					onClick={() => handlCategory(i)}
				>
					<div className={classes.categories__img}>
						<img src={item.iconUrl} alt="img"/>
					</div>
					<div className={classes.categories__text}>{item.name}</div>
				</div>
			))}
		</div>
    )
}