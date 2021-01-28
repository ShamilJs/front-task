import React from 'react';
import { Categories } from './Categories/Categories';
import { Search } from './Search/Search';
import { ListOfAnalyzes } from './ListOfAnalyzes/ListOfAnalyzes';

export const PageOne = () => {
    return (
        <div className="page">
        <Search/>
        <Categories/>
        <ListOfAnalyzes/>
        </div>
    )
}