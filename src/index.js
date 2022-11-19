const ActiveDeveloperBadge = require('./client');
const {log, success, error} = require('./utils/logger');
const {EmbedBuilder, Colors} = require('discord.js');
const os = require('os');

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question(`Hey ${os.userInfo().username}, enter your bot's token: `, token => {
	log('Client', 'Connecting to discord...');

	const client = new ActiveDeveloperBadge(token);

	client.on('ready', () => {
		client.application.commands.set([{
			name: 'get-badge',
			description: 'Use this command one time to be eligible for Active Developer badge'
		}]).then(() => {
			success('Client', 'Command registered, use /get-badge');
			log('Help', 'You can go to your Discord Client and use /get-badge command, after which, you will be eligible to Active Developer badge in the next 24 hours.');
		}).catch(err => {
			error('Client', 'Error while registering the command\n', err.message);
		});
	});

	client.on('interactionCreate', interaction => {
		if (!interaction.isCommand()) return;

		const embed = new EmbedBuilder({
			color: Colors.Green,
			description: ':confetti_ball: You\'re now eligible to Active Developer badge.\n\n[**Claim your badge now on Discord Developer Portal**](https://discord.com/developers/active-developer) (*It can take up to 24 hours before you are eligible, thanks Discord*)',
			url: 'https://discord.com/developers/active-developer',
			author: {
				name: `GG ${interaction.user.username}`,
				iconURL: interaction.user.displayAvatarURL({size: 128})
			},
			footer: {
				text: 'If you are careful, go directly to the Discord site instead of clicking on my link, although I reassure you, it is safe. Be careful where you click.'
			}
		});

		interaction.reply({embeds: [embed]});
	});
});
