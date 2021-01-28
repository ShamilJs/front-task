import React from 'react';
import { Categories } from './Categories/Categories';
import { Search } from './Search/Search';
import { ListOfAnalyzes } from './ListOfAnalyzes/ListOfAnalyzes';
import { useStyles } from './appStyle';

export const PageOne = () => {
	const classes = useStyles();
	
    return (
        <div className={classes.page}>
			<Search/>
			<Categories/>
			<ListOfAnalyzes/>
        </div>
    )
}