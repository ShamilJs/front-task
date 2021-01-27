const API = 'https://dev.lifetime.plus/api/analysis';

// Получение данных 
export const getAnalyzes = () => {
    return fetch(API, {
		method: 'GET',       
		})
		.then((response) => response.json());
};