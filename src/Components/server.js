const API = 'https://dev.lifetime.plus/api/analysis';

// Получение данных 
export const getAnalyzes = () => {
    return fetch(API, {
		method: 'GET', 
		// headers: {'Content-Type': 'application/json'},
		// mode: 'no-cors',     
		})
		.then((response) => response.json());
};