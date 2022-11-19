const log = (message, ...things) => {
	const msg = `[${new Date().toLocaleString()}] • \x1b[35m${message}\x1b[0m:`;
	console.log(`${msg}`, ...things);
};

const error = (message, ...things) => {
	const msg = `\x1b[31m[${new Date().toLocaleString()}]\x1b[0m • \x1b[35m${message}\x1b[0m:`;
	console.error(msg, ...things);
};

const warn = (message, ...things) => {
	const msg = `\x1b[33m[${new Date().toLocaleString()}]\x1b[0m • \x1b[35m${message}\x1b[0m:`;
	console.warn(msg, ...things);
};

const success = (message, ...things) => {
	const msg = `\x1b[32m[${new Date().toLocaleString()}]\x1b[0m • \x1b[35m${message}\x1b[0m:`;
	console.log(msg, ...things);
};

const debug = (message, ...things) => {
	const msg = `\x1b[36m[${new Date().toLocaleString()}]\x1b[0m • \x1b[35m${message}\x1b[0m:`;
	console.debug(msg, ...things);
};

module.exports = {log, success, error, warn, debug};
