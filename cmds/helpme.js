const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'help',
    aliases: ['?'],
    description: 'Help',
    usage: '-help',
    nsfw: false,
    image: false,
    args: false,
    guildOnly: false,
    ownerOnly: false,
    async execute(message, args) {
        try {
        const helpbubble = new Discord.MessageEmbed()
        .setAuthor('Librarys 1 Help Documentation')
        .setTitle("[Documentation](https://kk5dire.github.io/Librays1/)")
        message.channel.send(helpbubble)
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
