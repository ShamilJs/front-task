import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clickCategory, searchActive, searchInAnalyzes } from '../../redux/actions';
import { useStyles } from './searchStyle';

export const Search = () => {
	const classes = useStyles();

	const data = useSelector(state => state.app.data);
	const clickCat = useSelector(state => state.app.clickCategory);
	const dispatch = useDispatch()
	const [search, setSearch] = useState('');
	const [click, setClick] = useState(false);

	useEffect(() => {
		let array = [];
		data.forEach(element => {
			element.analysisProducts.forEach(item => {
				if (item.name.toLowerCase().includes(search.toLowerCase())) {
					array.push(item)
					return
				}
			})
		})
		if (search === '') return
		dispatch(searchInAnalyzes(array))
		// eslint-disable-next-line
	}, [search])

	useEffect(() => {
		if (clickCat) setSearch('')
	}, [clickCat])

	const searchInList = e => {
		if (e.target.value !== '') {
			dispatch(searchActive(true))
			dispatch(clickCategory(false))
		} else {
			dispatch(searchActive(false))
			dispatch(clickCategory(true))
		}
		setSearch(e.target.value)
	};

	const handleClick = () => setClick(!click);

	const keyDownBtn = e => {
		if (e.keyCode === 13) e.preventDefault()
  	}
	
    return (
        <div className={classes.search}>
            <input
                type="text"
				className={classes.search__input}
				placeholder={click ? '' : "Поиск"}
				value={search}
				onChange={searchInList}
				onKeyDown={keyDownBtn}
				onFocus={handleClick}
				onBlur={handleClick}
			/>
        </div>
    )
}