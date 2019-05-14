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
