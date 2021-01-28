// import {  } from './types';

import { GET_DATA_FROM_SERVER,
	GET_FILTER_DATA, ADD_PRICE,
	SEARCH_IN_LIST,
	SEARCH_ACTIVE,
	CLICK_CATEGORY,
	SELECT_DATA } from "./types";

const initiaState = {
	data: [],
	filterData: [],
	price: 0,
	searchActive: false,
	clickCategory: true,
	selectData: []
};

export const appReducer = (state = initiaState, action) => {
    switch (action.type) {
		case ADD_PRICE: 
			return {...state, price: action.payload};
		case GET_DATA_FROM_SERVER: 
			return {...state, data: action.payload, filterData: action.payload.filter((item, i) => i === 0)[0].analysisProducts};
		case GET_FILTER_DATA: 
			return {...state, filterData: state.data.filter((item, i) => i === action.payload)[0]?.analysisProducts};
		case SEARCH_IN_LIST: 
			return {...state, filterData: action.payload};
		case SEARCH_ACTIVE: 
			return {...state, searchActive: action.payload};
		case CLICK_CATEGORY: 
			return {...state, clickCategory: action.payload};
		case SELECT_DATA: 
            return {...state, selectData: action.payload};
        default: return state;
    }
};