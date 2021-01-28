import { GET_DATA_FROM_SERVER,
	SEARCH_IN_LIST,
	GET_FILTER_DATA,
	ADD_PRICE, SEARCH_ACTIVE,
    CLICK_CATEGORY,
    SELECT_DATA } from "./types";

export const getDataFromServer = data => {
    return {
        type: GET_DATA_FROM_SERVER,
        payload: data,
    };
};
export const getFilterData = index => {
    return {
        type: GET_FILTER_DATA,
        payload: index,
    };
};
export const addPrices = price => {
    return {
        type: ADD_PRICE,
        payload: price,
    };
};
export const searchInAnalyzes = search => {
    return {
        type: SEARCH_IN_LIST,
        payload: search,
    };
};
export const searchActive = status => {
    return {
        type: SEARCH_ACTIVE,
        payload: status,
    };
};
export const clickCategory = status => {
    return {
        type: CLICK_CATEGORY,
        payload: status,
    };
};
export const selectData = data => {
    return {
        type: SELECT_DATA,
        payload: data,
    };
};