import { logout } from './user.service'

const config = {
	apiUrl: "https://parking.onthewifi.com:8070"
};

export const markerService = {
	getAll,
};

function getAll() {
	const requestOptions = {
		method: 'GET',
		headers: { accept: 'application/json' },
	};

	return fetch(`${config.apiUrl}/api/availability/all`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
	return response.text().then(text => {
		if (!response.ok) {
			if (response.status === 401) {
				// auto logout if 401 response returned from api
				logout();
				location.reload(true);
			}

			const error = text || text.message || response.statusText;
			return Promise.reject(error);
		}
		return JSON.parse(text);
	});
}