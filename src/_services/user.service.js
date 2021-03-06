import { authHeader } from '../_helpers/auth-header';

const config = {
	apiUrl: "https://parking.onthewifi.com:8072"
};

export const userService = {
	login,
	logout,
	register,
	getAll,
	update,
	delete: _delete,
	mailCheck
};

function login(email, password, recaptchaToken) {
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password, recaptchaToken })
	};

	return fetch(`${config.apiUrl}/oauth/user/login`, requestOptions)
		.then(handleResponse)
		.then(user => {
			user = JSON.parse(user);
			// login successful if there's a access token in the response
			if (user.accessToken) {
				// store user details and access token in local storage to keep user logged in between page refreshes
				localStorage.setItem('user', JSON.stringify(user));
			}

			return user;
		});
}

export function logout() {
	// remove user from local storage to log user out
	localStorage.removeItem('user');
}

function register(user, recaptchaToken) {
	user.recaptchaToken = recaptchaToken;

	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(user)
	};

	return fetch(`${config.apiUrl}/oauth/user/register`, requestOptions).then(handleResponse);
}

export function mailCheck(email) {
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ 'email': email })
	};

	return fetch(`${config.apiUrl}/oauth/user/mailcheck`, requestOptions).then(handleResponse);
}

function getAll() {
	const requestOptions = {
		method: 'GET',
		headers: authHeader()
	};

	return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function update(user) {
	const requestOptions = {
		method: 'PUT',
		headers: { ...authHeader(), 'Content-Type': 'application/json' },
		body: JSON.stringify(user)
	};

	return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
	const requestOptions = {
		method: 'DELETE',
		headers: authHeader()
	};

	return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
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

		return text;
	});
}