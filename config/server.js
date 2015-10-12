/*
 * @package	Ada Framework
 * @module	Config/Server
 */
module.exports = {
	'name': process.env.SERVER_NAME,
	'port': process.env.SERVER_PORT,
	'base': process.env.SERVER_BASE,
	'key': process.env.SERVER_KEY,
};