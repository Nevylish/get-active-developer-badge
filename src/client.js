const {Client} = require('discord.js');
const {error, success} = require('./utils/logger');

class ActiveDeveloperBadge extends Client {
	constructor(token) {
		super({intents: 0});

		super.login(token).then(() => {
			success('Client', 'Successfully logged in to Discord !');
		}).catch(err => {
			error('Client', 'Oops, connection to Discord failed.\n', err.message);
		});
	}
}

module.exports = ActiveDeveloperBadge;
