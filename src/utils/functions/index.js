export const combineFunctionsOnClick = (...args) => {
	args.forEach(func => func());
};

export const nullFunc = () => {};

export const preventDefault = event => event.preventDefault();

export const normalizeToEmpty = value => value.replace(/^\s+/, "");

export const normalizeUpper = value => value.replace(/^\s+/, "").toUpperCase();
