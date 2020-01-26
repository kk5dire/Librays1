const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
	name: 'reload',
    aliases: ['r'],
	description: "Reloads a command after it's been edited.",
    usage: '<command>',
    args: true,
    guildOnly: false,
    ownerOnly: true,
	async execute(message, args) {
        try {
            const commandName = args[0].toLowerCase();
            const command = message.client.commands.get(commandName)
                || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
            if (!command) {
                throw 'command not found';
            }
            delete require.cache[require.resolve(`./${commandName}.js`)];
            const newCommand = require(`./${commandName}.js`);
            message.client.commands.set(newCommand.name, newCommand);
            const embed = tools.makeEmbed('<:mdCheck:568466407616938004> Success',
            `Reloaded command ${newCommand.name}`);
            message.channel.send(embed);
        } catch (err) {
            return tools.errorMessage(message, err);
        }
        
	},
};
