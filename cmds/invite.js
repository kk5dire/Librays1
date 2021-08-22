 const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'invite',
    aliases: [ 'addbot', 'getbot'],
    description: 'Add GenMod to your server',
    usage: '',
    async execute(message, args) {
        try {
            const embed = new Discord.MessageEmbed()
            .setColor(0x7289DA)
            .setTitle(' Link')
            .setDescription("[Click me](https://discord.com/api/oauth2/authorize?client_id=843782098396381194&permissions=0&redirect_uri=https%3A%2F%2Fkk5dire.github.io%2FLibrays1%2F&scope=bot)")
            tools.sendEmbed(message.channel, embed);
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
