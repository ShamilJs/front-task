import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clickCategory, searchActive, searchInAnalyzes } from '../../redux/actions';
import './searchStyle.css';

export const Search = () => {
	const data = useSelector(state => state.app.data);
	const clickCat = useSelector(state => state.app.clickCategory);
	const dispatch = useDispatch()
	const [search, setSearch] = useState('');

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

	const keyDownBtn = e => {
		if (e.keyCode === 13) e.preventDefault()
  	}
	
    return (
        <div className="search">
            <input
                type="text"
				className="search__input"
				placeholder="Поиск"
				value={search}
				onChange={searchInList}
				onKeyDown={keyDownBtn}
			/>
        </div>
    )
}