import React from 'react';
import { Categories } from './Categories/Categories';
import { Search } from './Search/Search';
import { ListOfAnalyzes } from './ListOfAnalyzes/ListOfAnalyzes';

export const PageOne = () => {
    return (
        <>
        <Search/>
        <Categories/>
        <ListOfAnalyzes/>
        </>
    )
}