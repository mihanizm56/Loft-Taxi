export const combineFunctionsOnClick = (...args) => {
	args.forEach(func => func());
};

export const nullFunc = () => {};
