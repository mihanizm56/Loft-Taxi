export const sleep = data => {
	return new Promise(res =>
		setTimeout(() => {
			console.log("sleep done");
			res(data);
		}, 2000)
	);
};

export const fetchLoginRequest = (email, password) => {
	return fetch(` https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`).then(data => data.json());
};

export const fetchAddressesRequest = () => {
	return fetch("https://loft-taxi.glitch.me/addressList").then(data => data.json());
};

export const fetchRouteRequest = (routeFrom, routeTo) => {
	return fetch(
		`https://loft-taxi.glitch.me/route?address1=${encodeURIComponent(routeFrom)}&address2=${encodeURIComponent(
			routeTo
		)}`
	).then(data => data.json());
};
